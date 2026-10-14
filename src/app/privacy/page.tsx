import type { Metadata } from "next";
import Link from "next/link";

const SITE =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://nodix-portfolio.vercel.app";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How NODIX Systems collects, uses, stores and deletes your project request data.",
  alternates: { canonical: `${SITE}/privacy` },
};

export default function Privacy() {
  return (
    <div className="bg-nodix-bg text-nodix-navy">
      <main className="mx-auto max-w-3xl px-4 py-16">
        <p className="text-xs font-bold tracking-[0.25em] text-nodix-cyan-dark">
          NODIX SYSTEMS — PRIVACY
        </p>
        <h1 className="mt-2 text-3xl font-extrabold">Privacy Policy</h1>
        <p className="mt-2 text-sm text-nodix-muted">
          Last updated: October 2026. Short version: your request is only used
          to contact you about your project — nothing is sold, nothing is
          shared with advertisers.
        </p>

        <div className="mt-8 space-y-4 text-sm leading-7">
          <section className="rounded-2xl border border-nodix-line bg-white p-5">
            <h2 className="font-bold">1. What we collect</h2>
            <p className="mt-1 text-nodix-muted">
              Only what you type in the project form: name, business name and
              type, needed services, problem description, preferred channel and
              contact (phone / email / Instagram handle).
            </p>
          </section>
          <section className="rounded-2xl border border-nodix-line bg-white p-5">
            <h2 className="font-bold">2. How we use it</h2>
            <p className="mt-1 text-nodix-muted">
              To read your request and reply about your project — nothing else.
              No marketing lists, no resale.
            </p>
          </section>
          <section className="rounded-2xl border border-nodix-line bg-white p-5">
            <h2 className="font-bold">3. Where it is stored</h2>
            <p className="mt-1 text-nodix-muted">
              Requests are forwarded to the owner (Telegram / email / private
              table) and hosting logs (Vercel). No public database, no third
              party analytics beyond privacy-friendly page statistics.
            </p>
          </section>
          <section className="rounded-2xl border border-nodix-line bg-white p-5">
            <h2 className="font-bold">4. Never share secrets in the form</h2>
            <p className="mt-1 text-nodix-muted">
              Never send account passwords, API keys or verification codes
              through the form. If a project needs access credentials, we
              exchange them later through a secure channel.
            </p>
          </section>
          <section className="rounded-2xl border border-nodix-line bg-white p-5">
            <h2 className="font-bold">5. Deletion</h2>
            <p className="mt-1 text-nodix-muted">
              Ask anytime via WhatsApp, Telegram or email and your request data
              is deleted — just tell us the name/contact you used.
            </p>
          </section>

          <section
            dir="rtl"
            className="rounded-2xl border border-nodix-line bg-white p-5"
          >
            <h2 className="font-bold">سياسة الخصوصية — باختصار</h2>
            <p className="mt-1 text-nodix-muted">
              نجمع فقط ما تكتبه في استمارة المشروع (الاسم، العمل، المشكلة، جهة
              الاتصال) لنتواصل معك بخصوص مشروعك فقط. لا بيع ولا مشاركة مع
              معلنين. لا ترسل أبداً كلمات المرور أو مفاتيح API أو رموز التحقق
              عبر الاستمارة. يمكنك طلب حذف بياناتك في أي وقت عبر واتساب أو
              تيليجرام أو الإيميل.
            </p>
          </section>
        </div>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-nodix-dark px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5"
        >
          ← Back to home · العودة للرئيسية
        </Link>
      </main>
    </div>
  );
}
