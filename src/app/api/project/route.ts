import { NextResponse } from "next/server";

type Payload = {
  name?: string;
  business?: string;
  businessType?: string;
  needs?: string[];
  problem?: string;
  channel?: string;
  contact?: string;
  // anti-spam fields (honeypot + time trap)
  website?: string;
  startedAt?: number;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+\d][\d\s\-().]{6,20}$/;
const HANDLE_RE = /^@?[A-Za-z0-9._]{2,40}$/;

// ---- simple in-memory rate limit: 5 requests / 10 min / IP ----
const hits = new Map<string, { count: number; reset: number }>();
const LIMIT = 5;
const WINDOW_MS = 10 * 60 * 1000;

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const cur = hits.get(ip);
  if (!cur || now > cur.reset) {
    hits.set(ip, { count: 1, reset: now + WINDOW_MS });
    return false;
  }
  cur.count += 1;
  return cur.count > LIMIT;
}

function digitsOnly(s: string) {
  return s.replace(/\D/g, "");
}

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "unknown";
    if (rateLimited(ip)) {
      return NextResponse.json(
        { ok: false, field: "global", error: "too_many" },
        { status: 429 }
      );
    }

    const body = (await req.json()) as Payload;

    // Honeypot: real users never fill it, bots do -> fake success
    if (body.website && String(body.website).trim() !== "") {
      return NextResponse.json({ ok: true });
    }
    // Time trap: submitted faster than 2.5s after render = bot
    if (
      typeof body.startedAt === "number" &&
      Date.now() - body.startedAt < 2500
    ) {
      return NextResponse.json(
        { ok: false, field: "global", error: "too_fast" },
        { status: 400 }
      );
    }

    const name = String(body.name ?? "").trim();
    const business = String(body.business ?? "").trim();
    const businessType = String(body.businessType ?? "").trim();
    const problem = String(body.problem ?? "").trim();
    const channel = String(body.channel ?? "WhatsApp").trim();
    const contact = String(body.contact ?? "").trim();
    const needs = Array.isArray(body.needs)
      ? body.needs.map(String).map((s) => s.trim()).filter(Boolean)
      : [];

    // ---- 4) strong validation ----
    if (name.length < 2 || name.length > 80) {
      return NextResponse.json(
        { ok: false, field: "name", error: "invalid_name" },
        { status: 400 }
      );
    }
    if (business.length > 120) {
      return NextResponse.json(
        { ok: false, field: "business", error: "too_long" },
        { status: 400 }
      );
    }
    if (needs.length === 0 || needs.length > 7) {
      return NextResponse.json(
        { ok: false, field: "needs", error: "invalid_needs" },
        { status: 400 }
      );
    }
    if (problem.length < 10 || problem.length > 2000) {
      return NextResponse.json(
        { ok: false, field: "problem", error: "invalid_problem" },
        { status: 400 }
      );
    }
    if (!["WhatsApp", "Email", "Instagram"].includes(channel)) {
      return NextResponse.json(
        { ok: false, field: "channel", error: "invalid_channel" },
        { status: 400 }
      );
    }
    if (channel === "Email") {
      if (!EMAIL_RE.test(contact) || contact.length > 120) {
        return NextResponse.json(
          { ok: false, field: "contact", error: "invalid_email" },
          { status: 400 }
        );
      }
    } else if (channel === "WhatsApp") {
      const d = digitsOnly(contact);
      if (!PHONE_RE.test(contact) || d.length < 7 || d.length > 15) {
        return NextResponse.json(
          { ok: false, field: "contact", error: "invalid_phone" },
          { status: 400 }
        );
      }
    } else {
      // Instagram: accept @handle, email or phone
      const okHandle = HANDLE_RE.test(contact.replace(/\s/g, ""));
      const okMail = EMAIL_RE.test(contact);
      const okPhone =
        PHONE_RE.test(contact) &&
        digitsOnly(contact).length >= 7 &&
        digitsOnly(contact).length <= 15;
      if (contact.length < 2 || contact.length > 120 || !(okHandle || okMail || okPhone)) {
        return NextResponse.json(
          { ok: false, field: "contact", error: "invalid_handle" },
          { status: 400 }
        );
      }
    }

    const enriched = {
      name,
      business,
      businessType,
      needs,
      problem,
      channel,
      contact,
      source: "nodix-portfolio",
      receivedAt: new Date().toISOString(),
      userAgent: req.headers.get("user-agent") ?? "",
    };

    const text =
      `🆕 New project — NODIX\n` +
      `👤 ${name}\n` +
      `🏢 ${business || "-"} (${businessType || "-"})\n` +
      `📌 ${needs.join(", ")}\n` +
      `💬 ${problem}\n` +
      `📞 [${channel}] ${contact}`;

    let telegramSent = false;

    // 1) Direct Telegram delivery (no n8n needed)
    const botToken = process.env.TELEGRAM_BOT_TOKEN || "";
    const chatId = process.env.TELEGRAM_CHAT_ID || "";
    if (botToken && chatId) {
      try {
        const tg = await fetch(
          `https://api.telegram.org/bot${botToken}/sendMessage`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id: chatId, text }),
          }
        );
        telegramSent = tg.ok;
        if (!tg.ok) console.error("telegram send failed:", tg.status);
      } catch (err) {
        console.error("telegram send error:", err);
      }
    }

    // 2) Forward to n8n / any webhook if configured (secret stays on server)
    const webhook =
      process.env.N8N_WEBHOOK_URL ||
      process.env.NEXT_PUBLIC_FORM_ENDPOINT ||
      "";

    let webhookSent = false;
    if (webhook) {
      try {
        const res = await fetch(webhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(enriched),
        });
        webhookSent = res.ok;
        if (!res.ok) console.error("webhook forward failed:", res.status);
      } catch (err) {
        console.error("webhook forward error:", err);
      }
    }

    if (!botToken || !chatId) {
      console.log("project request:", enriched);
    }

    return NextResponse.json({ ok: true, telegramSent, webhookSent });
  } catch (err) {
    console.error("api/project error:", err);
    return NextResponse.json(
      { ok: false, field: "global", error: "server" },
      { status: 500 }
    );
  }
}
