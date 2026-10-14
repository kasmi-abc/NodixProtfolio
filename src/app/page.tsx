"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Bot,
  Headset,
  TrendingUp,
  Workflow,
  Plug,
  ShoppingBag,
  MessageCircle,
  Send,
  Cpu,
  Lock,
  Search,
  PenTool,
  Hammer,
  FlaskConical,
  Rocket,
  Sparkles,
  Database,
  Mic,
  Brain,
  Zap,
  Briefcase,
  MessagesSquare,
  User,
  Building2,
  Store,
  CircleAlert,
  Phone,
  Mail,
  Camera,
  ArrowRight,
  CheckCircle2,
  Menu,
  X,
  MemoryStick,
  ImageIcon,
  ShoppingCart,
  Users,
  ArrowLeftRight,
  FileText,
  Languages,
  ArrowUp,
  ArrowUpRight,
  MapPin,
} from "lucide-react";

/* ================= i18n ================= */

type Lang = "en" | "ar";

const dict = {
  en: {
    dir: "ltr" as const,
    navAbout: "About",
    navServices: "What I Build",
    navSystems: "Systems",
    navProcess: "How I Work",
    navContact: "Contact",
    navCta: "Start a Project",
    heroBadge: "BUILDING UNDER NODIX",
    heroTitleA: "I BUILD AI SYSTEMS",
    heroTitleB: "THAT AUTOMATE BUSINESSES.",
    heroTags: ["AI Agents", "Customer Support", "Sales Automation", "Business Workflows"],
    heroBtnSystems: "View My Systems",
    heroBtnProject: "Start a Project",
    heroStats: [
      ["AI + Automation", "Systems"],
      ["WhatsApp / Telegram", "Platforms"],
      ["Stores + Companies", "Clients"],
    ],
    graphHint: "Tap a node to explore — auto-plays the system flow",
    graphNodes: [
      { title: "WhatsApp / Telegram", desc: "Customer message in" },
      { title: "AI Agent", desc: "Understands + reasons + remembers" },
      { title: "Products / Customers / Orders", desc: "Your business data" },
      { title: "Automation", desc: "Decision then action" },
      { title: "Response / Human Handoff", desc: "Answer or escalate" },
    ],
    aboutKicker: "02 — ABOUT",
    aboutName: "Mister Wael",
    aboutRole: "AI Automation and Systems Builder",
    aboutP:
      "I build practical AI systems for businesses — not simple chatbots. I design AI Agents with memory and tools, connected to real business data for customer support and sales.",
    aboutLink: "Have a business problem? Let us automate it",
    aboutBullets: [
      "I build AI Agents with Memory + Tools + Business Data",
      "I design Automation Systems for real operations",
      "I connect AI with products, orders and customers",
      "I build Customer Support and Sales systems",
      "Focus on working systems for stores and companies",
    ],
    servicesKicker: "03 — WHAT I BUILD",
    servicesTitle: "Automation services for companies, stores and business owners",
    services: [
      { t: "AI Customer Support", d: "Systems that handle customer messages and answer using your company data." },
      { t: "AI Sales Systems", d: "Systems that help with products, orders, customers and leads." },
      { t: "AI Agents", d: "Agents with Memory, Tools and Business Data — not just chatbots." },
      { t: "Business Automation", d: "Automate repeated operations inside companies and stores." },
      { t: "API Integrations", d: "Connect WhatsApp, Telegram, Airtable, Gmail, stores and more." },
      { t: "E-commerce Systems", d: "From customer message to order: search, decision, action, response." },
    ],
    systemsKicker: "04 — MY SYSTEMS",
    systemsTitle: "I build systems. Gallery of real systems.",
    live: "Working system",
    soon: "Coming Soon",
    platform: "Platform",
    typeLabel: "Type",
    projects: [
      {
        no: "Project 01",
        title: "WhatsApp AI Customer Support System",
        platform: "WhatsApp",
        type: "AI Customer Support + Sales",
        caps: ["Text understanding", "Voice input", "Image understanding", "Product search", "Order creation", "Customer management", "Human handoff", "Memory"],
        live: true,
      },
      {
        no: "Project 02",
        title: "Telegram AI Customer Support Bot",
        platform: "Telegram",
        type: "AI Support + Sales",
        caps: ["Product search", "Customer handling", "Orders", "Memory", "Human escalation"],
        live: true,
      },
      {
        no: "Project 03",
        title: "AI E-commerce Automation",
        platform: "E-commerce",
        type: "Message to Order Flow",
        caps: ["Customer Message", "AI Understanding", "Business Data", "Decision + Action", "Customer Response"],
        live: true,
      },
      {
        no: "Project 04",
        title: "NODIX Core",
        platform: "NODIX",
        type: "Coming Soon",
        caps: ["Instagram AI Support", "Messenger AI", "Extended roadmap"],
        live: false,
      },
    ],
    caseTitle: "SYSTEM CASE STUDY — WhatsApp AI",
    caseFlow: ["Problem: manual messages", "AI Agent", "Products / Customers / Orders", "Automation", "Response / Human Handoff"],
    caseCaps: ["Product Search", "Order Creation", "Customer Storage", "Voice Input", "Image Analysis", "Human Handoff", "Memory"],
    processKicker: "05 — HOW I BUILD",
    processTitle: "From business problem to deployed system",
    steps: [
      { t: "Understand", d: "Business Problem — I understand your business and the real problem." },
      { t: "Design", d: "System Design — I design the system architecture." },
      { t: "Build", d: "AI + Automation — I build AI, automation and integrations." },
      { t: "Integrate", d: "Integrations — WhatsApp, Telegram, store, data and APIs." },
      { t: "Test", d: "Testing — I test real cases and failure scenarios." },
      { t: "Deploy", d: "Deployment — I prepare the system for real use." },
    ],
    stackKicker: "TECH STACK",
    stackTitle: "Tools behind the systems",
    stackRows: [
      ["AI", "Google Gemini / GPT-4o / Claude / DeepSeek / Grok / +more"],
      ["Automation", "n8n / Make / Zapier / +more"],
      ["Communication", "WhatsApp / Telegram / Instagram / Messenger / Email / +more"],
      ["Database", "Airtable / PostgreSQL / Supabase / Google Sheets / Notion / +more"],
      ["Integration", "APIs / Webhooks / Shopify / WooCommerce / +more"],
      ["Voice", "VoiceRSS / ElevenLabs / Whisper / +more"],
    ],
    stackNote: "We sell the system and the result — not the tool.",
    capKicker: "CAPABILITIES",
    capTitle: "What the systems can do",
    capGroups: [
      { t: "AI", items: ["Understanding", "Reasoning", "Memory"] },
      { t: "Automation", items: ["Workflows", "Triggers", "Actions"] },
      { t: "Business", items: ["Products", "Orders", "Customers", "Support"] },
      { t: "Channels", items: ["WhatsApp", "Telegram", "Instagram", "Messenger"] },
    ],
    nodixKicker: "ABOUT NODIX",
    nodixTitle: "Building under NODIX — We build AI systems for businesses.",
    testiKicker: "TESTIMONIALS",
    testiTitle: "What clients say",
    testiNote: "Replace these examples with your real clients as soon as you have them.",
    testimonials: [
      { n: "Phone Store Owner", r: "WhatsApp automation", x: "He automated our WhatsApp replies. We answer faster and miss fewer orders." },
      { n: "Clothing Store Owner", r: "Instagram + WhatsApp", x: "Clear process: understand, build, test, deploy. The bot handles FAQs and forwards serious buyers." },
      { n: "Medical Clinic", r: "Appointment automation", x: "Practical system, not just a chatbot — appointment reminders and patient follow-up on autopilot." },
    ],
    faqKicker: "FAQ",
    faqTitle: "Questions before you start",
    faqs: [
      { q: "How long does a system take?", a: "Simple automation: 3–7 days. Full AI support + sales system: 2–4 weeks depending on your data." },
      { q: "What do you need from me?", a: "Your products list, FAQs, and access to WhatsApp/Instagram + where orders are stored. I handle the rest." },
      { q: "Do you work with small stores?", a: "Yes — e-commerce, clothing, phones, services. If you get repeated messages daily, automation pays for itself." },
      { q: "What if the AI doesn't know the answer?", a: "It hands off to a human with full conversation context. No lost customer." },
      { q: "Support after delivery?", a: "Testing + deployment included, then optional maintenance when you add products or channels." },
    ],
    videoKicker: "LIVE DEMO",
    videoTitle: "Watch the system work",
    videoSub: "Real screen recording — a store chatbot replying to customers, no slides.",
    videoPoints: [
      "Instant replies to customer messages — day and night.",
      "Understands text, voice and product photos.",
      "Searches your products and creates the order.",
      "Hands off to a human when it matters.",
    ],
    videoCta: "Want this for your store?",
    formKicker: "07 — START A PROJECT",
    formTitle: "Client Project Form",
    formSub: "Tell me about your business and what you want to automate.",
    f1: "Your Name",
    f2: "Business Name",
    f3: "Business Type",
    f4: "What do you need?",
    f5: "Tell me about your problem",
    f6: "How can I contact you?",
    f7: "Contact",
    phName: "Enter your name",
    phBiz: "Your business",
    phProblem: "What are you currently struggling with?",
    phContact: "WhatsApp / Email / Instagram",
    formTypes: ["E-commerce", "Clothing", "Shoes", "Phones", "Computers", "Supplements", "Services", "Other"],
    formNeeds: ["AI Customer Support", "AI Sales Agent", "WhatsApp Automation", "Instagram Automation", "Telegram Automation", "Business Workflow Automation", "Custom AI System"],
    submit: "Build My System",
    errFields: "Please check the highlighted fields.",
    errNeeds: "Please select at least one service you need.",
    errName: "Name must be 2–80 characters.",
    errEmail: "Enter a valid email address (name@mail.com).",
    errPhone: "Enter a valid WhatsApp number with country code (e.g. +213...).",
    errHandle: "Enter a valid Instagram @handle, email or phone.",
    errProblem: "Describe your problem in at least 10 characters.",
    errMany: "Too many tries. Please wait 10 minutes and retry.",
    sentTitle: "Request received",
    sentAnother: "Send another request",
    locationKicker: "BASE",
    locationTitle: "Based in Algeria",
    locationSub: "Open to remote collaboration worldwide.",
    locationBase: "Algeria",
    locationMeta: "GMT+1 • Remote-friendly",
    locationOpen: "Open in Google Maps",
    contactKicker: "06 — CONTACT",
    contactTitle: "Have a project in mind?",
    contactSub: "Have a business problem that could be automated? Let us build your system.",
    contactCards: [
      ["WhatsApp", "Fast reply"],
      ["Telegram", "@nodix_core"],
      ["Email", "Detailed projects"],
      ["Instagram", "Follow the work"],
    ],
    footerRole: "AI AUTOMATION and SYSTEMS",
    footerBuilt: "Built under NODIX",
    footerRights: "© 2026 Mister Wael × NODIX",
    footerProjects: "Projects",
    footerTagline: "AI systems that automate businesses — support, sales and workflows for stores and companies.",
    footerExplore: "Explore",
    footerServicesT: "Services",
    footerContactT: "Get in touch",
    footerCta: "Have a project in mind?",
    footerCtaSub: "Tell me what you want to automate.",
    footerAvailable: "Available for new projects",
    footerTop: "Back to top",
    privacyNote: "Your details are only used to contact you about your project.",
    sending: "Sending...",
    errSend: "Could not send right now. Please try again or send via WhatsApp below.",
    sendWa: "Send via WhatsApp",
    sendEmail: "Send via Email",
    sentHint: "For instant delivery, also forward your request:",
  },
  ar: {
    dir: "rtl" as const,
    navAbout: "من أنا",
    navServices: "ماذا أبني",
    navSystems: "الأنظمة",
    navProcess: "منهجية العمل",
    navContact: "تواصل",
    navCta: "ابدأ مشروعك",
    heroBadge: "نبني تحت NODIX",
    heroTitleA: "أبني أنظمة ذكاء اصطناعي",
    heroTitleB: "تُؤتمت الشركات والمتاجر.",
    heroTags: ["وكلاء ذكاء اصطناعي", "دعم العملاء", "أتمتة المبيعات", "سير العمل"],
    heroBtnSystems: "شاهد أنظمتي",
    heroBtnProject: "ابدأ مشروعك",
    heroStats: [
      ["ذكاء اصطناعي + أتمتة", "أنظمة"],
      ["واتساب / تيليجرام", "منصات"],
      ["المتاجر والشركات", "العملاء"],
    ],
    graphHint: "اضغط على أي عقدة لاستكشاف النظام — يعمل تلقائياً",
    graphNodes: [
      { title: "واتساب / تيليجرام", desc: "رسالة العميل تصل" },
      { title: "وكيل الذكاء الاصطناعي", desc: "يفهم ويستدل ويتذكر" },
      { title: "المنتجات / العملاء / الطلبات", desc: "بيانات عملك" },
      { title: "الأتمتة", desc: "قرار ثم تنفيذ" },
      { title: "الرد / التحويل لموظف", desc: "إجابة أو تصعيد" },
    ],
    aboutKicker: "02 — من أنا",
    aboutName: "مستر وائل",
    aboutRole: "باني الأتمتة وأنظمة الذكاء الاصطناعي",
    aboutP:
      "أبني أنظمة ذكاء اصطناعي عملية للشركات — وليست مجرد روبوتات دردشة. أصمم وكلاء بذاكرة وأدوات، مرتبطين ببيانات العمل الحقيقية لخدمة العملاء والمبيعات.",
    aboutLink: "هل لديك مشكلة في عملك؟ لنؤتمتها",
    aboutBullets: [
      "أبني وكلاء ذكاء اصطناعي بذاكرة وأدوات وبيانات العمل",
      "أصمم أنظمة أتمتة للعمليات الحقيقية",
      "أربط الذكاء الاصطناعي بالمنتجات والطلبات والعملاء",
      "أبني أنظمة دعم العملاء والمبيعات",
      "تركيز على أنظمة عملية للمتاجر والشركات",
    ],
    servicesKicker: "03 — ماذا أبني",
    servicesTitle: "خدمات الأتمتة للشركات والمتاجر وأصحاب الأعمال",
    services: [
      { t: "دعم عملاء بالذكاء الاصطناعي", d: "أنظمة ترد على رسائل العملاء باستخدام بيانات شركتك." },
      { t: "أنظمة مبيعات ذكية", d: "أنظمة تساعد في المنتجات والطلبات والعملاء والفرص." },
      { t: "وكلاء ذكاء اصطناعي", d: "وكلاء بذاكرة وأدوات وبيانات حقيقية — وليس مجرد دردشة." },
      { t: "أتمتة الأعمال", d: "أتمتة العمليات المتكررة داخل الشركات والمتاجر." },
      { t: "ربط الأنظمة", d: "ربط واتساب وتيليجرام وAirtable والمتاجر وغيرها." },
      { t: "أنظمة المتاجر", d: "من رسالة العميل إلى الطلب: بحث وقرار وتنفيذ ورد." },
    ],
    systemsKicker: "04 — أنظمتي",
    systemsTitle: "أبني أنظمة. معرض الأنظمة الحقيقية.",
    live: "نظام يعمل",
    soon: "قريباً",
    platform: "المنصة",
    typeLabel: "النوع",
    projects: [
      {
        no: "مشروع 01",
        title: "نظام دعم عملاء واتساب بالذكاء الاصطناعي",
        platform: "واتساب",
        type: "دعم عملاء + مبيعات",
        caps: ["فهم النصوص", "إدخال صوتي", "فهم الصور", "البحث في المنتجات", "إنشاء الطلبات", "إدارة العملاء", "التحويل لموظف", "الذاكرة"],
        live: true,
      },
      {
        no: "مشروع 02",
        title: "بوت دعم عملاء تيليجرام بالذكاء الاصطناعي",
        platform: "تيليجرام",
        type: "دعم + مبيعات",
        caps: ["البحث في المنتجات", "التعامل مع العملاء", "الطلبات", "الذاكرة", "التصعيد لموظف"],
        live: true,
      },
      {
        no: "مشروع 03",
        title: "أتمتة المتاجر الإلكترونية",
        platform: "متجر إلكتروني",
        type: "من الرسالة إلى الطلب",
        caps: ["رسالة العميل", "فهم الذكاء الاصطناعي", "بيانات الشركة", "القرار والتنفيذ", "الرد على العميل"],
        live: true,
      },
      {
        no: "مشروع 04",
        title: "NODIX Core",
        platform: "NODIX",
        type: "قريباً",
        caps: ["دعم إنستغرام", "ماسنجر", "خارطة الطريق"],
        live: false,
      },
    ],
    caseTitle: "دراسة حالة — واتساب",
    caseFlow: ["المشكلة: رسائل يدوية", "وكيل الذكاء الاصطناعي", "المنتجات / العملاء / الطلبات", "الأتمتة", "الرد أو التحويل لموظف"],
    caseCaps: ["البحث في المنتجات", "إنشاء الطلبات", "تخزين العملاء", "الإدخال الصوتي", "تحليل الصور", "التحويل لموظف", "الذاكرة"],
    processKicker: "05 — كيف أبني",
    processTitle: "من مشكلة العمل إلى نظام جاهز",
    steps: [
      { t: "أفهم", d: "مشكلة العمل — أفهم عملك والمشكلة الحقيقية." },
      { t: "أصمم", d: "تصميم النظام — أصمم معمارية النظام." },
      { t: "أبني", d: "الذكاء الاصطناعي + الأتمتة — أبني الذكاء والربط والأتمتة." },
      { t: "أربط", d: "التكاملات — واتساب وتيليجرام والمتجر والبيانات." },
      { t: "أختبر", d: "الاختبار — أختبر الحالات الحقيقية والأخطاء." },
      { t: "أُطلق", d: "الإطلاق — أجهز النظام للاستخدام الفعلي." },
    ],
    stackKicker: "التقنيات",
    stackTitle: "الأدوات خلف الأنظمة",
    stackRows: [
      ["الذكاء الاصطناعي", "Google Gemini / GPT-4o / Claude / DeepSeek / Grok / +more"],
      ["الأتمتة", "n8n / Make / Zapier / +more"],
      ["التواصل", "واتساب / تيليجرام / إنستغرام / ماسنجر / إيميل / +more"],
      ["قواعد البيانات", "Airtable / PostgreSQL / Supabase / Google Sheets / Notion / +more"],
      ["الربط", "APIs / Webhooks / Shopify / WooCommerce / +more"],
      ["الصوت", "VoiceRSS / ElevenLabs / Whisper / +more"],
    ],
    stackNote: "نبيع النظام والنتيجة — وليس الأداة.",
    capKicker: "القدرات",
    capTitle: "ماذا تستطيع الأنظمة",
    capGroups: [
      { t: "الذكاء", items: ["الفهم", "الاستدلال", "الذاكرة"] },
      { t: "الأتمتة", items: ["سير العمل", "المحفزات", "الإجراءات"] },
      { t: "الأعمال", items: ["المنتجات", "الطلبات", "العملاء", "الدعم"] },
      { t: "القنوات", items: ["واتساب", "تيليجرام", "إنستغرام", "ماسنجر"] },
    ],
    nodixKicker: "عن NODIX",
    nodixTitle: "نبني تحت NODIX — نبني أنظمة ذكاء اصطناعي للشركات.",
    testiKicker: "آراء العملاء",
    testiTitle: "ماذا يقول العملاء",
    testiNote: "استبدل هذه الأمثلة بعملائك الحقيقيين فور توفرهم.",
    testimonials: [
      { n: "صاحب محل هواتف", r: "أتمتة واتساب", x: "أتمت لنا الرد على واتساب. نرد أسرع ونضيع طلبات أقل." },
      { n: "صاحب محل ملابس", r: "إنستغرام + واتساب", x: "منهجية واضحة: فهم وبناء واختبار وإطلاق. البوت يرد على الأسئلة ويحول الجادين للشراء." },
      { n: "عيادة طبية", r: "أتمتة المواعيد", x: "نظام عملي وليس مجرد دردشة — تذكير بالمواعيد ومتابعة المرضى تلقائياً." },
    ],
    faqKicker: "أسئلة شائعة",
    faqTitle: "أسئلة قبل أن تبدأ",
    faqs: [
      { q: "كم تستغرق بناء النظام؟", a: "أتمتة بسيطة: 3–7 أيام. نظام دعم + مبيعات كامل: 2–4 أسابيع حسب بياناتك." },
      { q: "ماذا تحتاج مني؟", a: "قائمة منتجاتك وأسئلتك المتكررة ووصول لواتساب/إنستغرام ومكان تخزين الطلبات. الباقي عليّ." },
      { q: "هل تعمل مع المتاجر الصغيرة؟", a: "نعم — تجارة إلكترونية، ملابس، هواتف، خدمات. إذا تصلك رسائل متكررة يومياً، الأتمتة تربحك." },
      { q: "ماذا لو لم يعرف الذكاء الإجابة؟", a: "يحول لموظف بشري مع كامل سياق المحادثة. لا يضيع أي زبون." },
      { q: "هل يوجد دعم بعد التسليم؟", a: "الاختبار والإطلاق مشمولان، ثم صيانة اختيارية عند إضافة منتجات أو قنوات." },
    ],
    videoKicker: "عرض حي",
    videoTitle: "شاهد النظام يعمل",
    videoSub: "تسجيل شاشة حقيقي — شاتبوت متجر يرد على الزبائن، بدون شرائح.",
    videoPoints: [
      "رد فوري على رسائل الزبائن — ليلاً ونهاراً.",
      "يفهم النصوص والرسائل الصوتية وصور المنتجات.",
      "يبحث في منتجاتك وينشئ الطلب.",
      "يحول لموظف بشري عند الحاجة.",
    ],
    videoCta: "تحب هذا لمتجرك؟",
    formKicker: "07 — ابدأ مشروعك",
    formTitle: "استمارة مشروع العميل",
    formSub: "أخبرني عن عملك وما تريد أتمتته.",
    f1: "اسمك",
    f2: "اسم العمل",
    f3: "نوع العمل",
    f4: "ماذا تحتاج؟",
    f5: "أخبرني عن مشكلتك",
    f6: "كيف أتواصل معك؟",
    f7: "جهة الاتصال",
    phName: "أدخل اسمك",
    phBiz: "اسم عملك",
    phProblem: "ما الذي تعاني منه حالياً؟",
    phContact: "واتساب / إيميل / إنستغرام",
    formTypes: ["تجارة إلكترونية", "ملابس", "أحذية", "هواتف", "حواسيب", "مكملات", "خدمات", "أخرى"],
    formNeeds: ["دعم عملاء بالذكاء الاصطناعي", "وكيل مبيعات", "أتمتة واتساب", "أتمتة إنستغرام", "أتمتة تيليجرام", "أتمتة سير العمل", "نظام مخصص"],
    submit: "ابنِ نظامي",
    errFields: "يرجى مراجعة الحقول المحددة بالأحمر.",
    errNeeds: "يرجى اختيار خدمة واحدة على الأقل.",
    errName: "الاسم لازم يكون من حرفين إلى 80 حرف.",
    errEmail: "أدخل إيميل صحيح (name@mail.com).",
    errPhone: "أدخل رقم واتساب صحيح مع رمز الدولة (مثال +213...).",
    errHandle: "أدخل @إنستغرام صحيح أو إيميل أو هاتف.",
    errProblem: "اشرح مشكلتك في 10 أحرف على الأقل.",
    errMany: "محاولات كثيرة. انتظر 10 دقائق وحاول مجدداً.",
    sentTitle: "تم استلام الطلب",
    sentAnother: "إرسال طلب آخر",
    locationKicker: "الموقع",
    locationTitle: "مقيم في الجزائر",
    locationSub: "منفتح على العمل عن بعد مع الجميع.",
    locationBase: "الجزائر",
    locationMeta: "GMT+1 • عمل عن بعد",
    locationOpen: "فتح في خرائط جوجل",
    contactKicker: "06 — تواصل",
    contactTitle: "هل لديك مشروع؟",
    contactSub: "هل لديك مشكلة في عملك يمكن أتمتتها؟ لنبنِ نظامك.",
    contactCards: [
      ["واتساب", "رد سريع"],
      ["تيليجرام", "@nodix_core"],
      ["إيميل", "للمشاريع التفصيلية"],
      ["إنستغرام", "تابع الأعمال"],
    ],
    footerRole: "الأتمتة وأنظمة الذكاء الاصطناعي",
    footerBuilt: "صُنع تحت NODIX",
    footerRights: "© 2026 مستر وائل × NODIX",
    footerProjects: "المشاريع",
    footerTagline: "أنظمة ذكاء اصطناعي تُؤتمت الشركات — دعم ومبيعات وسير عمل للمتاجر والشركات.",
    footerExplore: "استكشف",
    footerServicesT: "الخدمات",
    footerContactT: "تواصل",
    footerCta: "هل لديك مشروع؟",
    footerCtaSub: "أخبرني بما تريد أتمتته.",
    footerAvailable: "متاح لمشاريع جديدة",
    footerTop: "العودة للأعلى",
    privacyNote: "بياناتك تُستخدم فقط للتواصل معك بخصوص مشروعك.",
    sending: "جارٍ الإرسال...",
    errSend: "تعذر الإرسال الآن. حاول مجدداً أو أرسل عبر واتساب بالأسفل.",
    sendWa: "إرسال عبر واتساب",
    sendEmail: "إرسال عبر إيميل",
    sentHint: "لضمان الوصول الفوري، أعد توجيه طلبك أيضاً:",
  },
};

type Dict = Omit<typeof dict.en, "dir"> & { dir: "ltr" | "rtl" };

const serviceIcons = [Headset, TrendingUp, Bot, Workflow, Plug, ShoppingBag];
const stepIcons = [Search, PenTool, Hammer, Plug, FlaskConical, Rocket];
const stackIcons = [Sparkles, Workflow, MessageCircle, Database, Plug, Mic];
const capIcons = [Brain, Zap, Briefcase, MessagesSquare];
const caseIcons = [Search, ShoppingCart, Users, Mic, ImageIcon, ArrowLeftRight, MemoryStick];
const aboutIcons = [Bot, Workflow, Database, Headset, Briefcase];
const contactIcons = [Phone, Send, Mail, Camera];
const nodeIcons = [MessageCircle, Bot, Database, Workflow, Send];

// Official Instagram profile (single external social link)
const INSTAGRAM_URL = "https://www.instagram.com/nodix.core/";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "213655886880";
const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "kasmihaithem3@gmail.com";
const TELEGRAM_URL = process.env.NEXT_PUBLIC_TELEGRAM_URL || "https://t.me/nodix_core";
// فيديو العرض: ملف محلي + يمكن تجاوزه عبر NEXT_PUBLIC_DEMO_VIDEO_URL
const DEMO_VIDEO_URL = process.env.NEXT_PUBLIC_DEMO_VIDEO_URL || "/nodix-demo.mp4";

function youtubeEmbed(url: string): string | null {
  const m = url.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([\w-]{6,})/);
  return m ? `https://www.youtube.com/embed/${m[1]}` : null;
}

function buildLeadMessage(form: { name: string; business: string; businessType: string; needs: string[]; problem: string; channel: string; contact: string }) {
  return `New project request — NODIX\nName: ${form.name}\nBusiness: ${form.business}\nType: ${form.businessType}\nNeeds: ${form.needs.join(", ")}\nProblem: ${form.problem}\nPreferred channel: ${form.channel}\nContact: ${form.contact}`;
}

// Brand glyph (lucide no longer ships brand icons)
function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

/* ================= scroll reveal ================= */

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ob = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVis(true);
          ob.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    ob.observe(el);
    return () => ob.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${vis ? "reveal-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

/* ================= interactive node graph ================= */

const NODE_POS = [
  { left: "50%", top: "4%", x: 200, y: 16 },
  { left: "7%", top: "35%", x: 28, y: 140 },
  { left: "93%", top: "35%", x: 372, y: 140 },
  { left: "21%", top: "88%", x: 84, y: 352 },
  { left: "79%", top: "88%", x: 316, y: 352 },
];

function NodeGraph({ t }: { t: Dict }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % 5), 2600);
    return () => clearInterval(id);
  }, [paused]);

  const Active = nodeIcons[active];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="w-full rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur"
    >
      <div className="relative mx-auto aspect-square w-full max-w-[430px]">
        {/* connections */}
        <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
          {NODE_POS.map((n, i) => (
            <g key={i}>
              <line
                x1={200}
                y1={200}
                x2={n.x}
                y2={n.y}
                stroke={active === i ? "#5bd5e0" : "rgba(91,213,224,0.35)"}
                strokeWidth={active === i ? 2.5 : 1.5}
                className={active === i ? "graph-line-active" : "graph-line"}
              />
              <circle r={5} fill="#5bd5e0" opacity={0.9}>
                <animateMotion
                  dur="2.4s"
                  begin={`-${(i * 0.5).toFixed(1)}s`}
                  repeatCount="indefinite"
                  path={`M200,200 L${n.x},${n.y}`}
                />
              </circle>
              {active === i && (
                <circle cx={n.x} cy={n.y} r={10} fill="none" stroke="#5bd5e0" strokeWidth={1.5} className="node-ping" />
              )}
            </g>
          ))}
          <circle cx={200} cy={200} r={46} fill="rgba(91,213,224,0.08)" />
          <circle cx={200} cy={200} r={46} fill="none" stroke="rgba(91,213,224,0.4)" strokeWidth={1} strokeDasharray="4 5" className="graph-line" />
        </svg>

        {/* core */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="core-glow float-slow flex h-24 w-24 items-center justify-center rounded-full bg-white p-1.5">
            <Image
              src="/nodixlogo.jpg"
              alt="NODIX core"
              width={88}
              height={88}
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <p className="mt-1 text-center text-[10px] font-extrabold tracking-[0.25em] text-nodix-cyan">NODIX CORE</p>
        </div>

        {/* satellite nodes */}
        {NODE_POS.map((n, i) => {
          const Icon = nodeIcons[i];
          const isActive = active === i;
          return (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{ left: n.left, top: n.top }}
              className={`absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1 rounded-2xl border px-2.5 py-2 backdrop-blur transition-all duration-300 ${
                isActive
                  ? "scale-110 border-nodix-cyan bg-nodix-cyan/20 shadow-[0_0_25px_rgba(91,213,224,0.45)]"
                  : "border-white/15 bg-nodix-dark/90 hover:border-nodix-cyan/60 hover:scale-105"
              }`}
              aria-label={t.graphNodes[i].title}
            >
              <span className="relative">
                <Icon className={`h-4 w-4 ${isActive ? "text-nodix-cyan" : "text-white/80"}`} />
                <span className="absolute -right-2 -top-2 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-nodix-cyan text-[8px] font-extrabold text-nodix-dark">
                  {i + 1}
                </span>
              </span>
              <span className="max-w-[92px] text-center text-[9px] font-bold leading-tight text-white">
                {t.graphNodes[i].title}
              </span>
            </button>
          );
        })}
      </div>

      {/* detail */}
      <div key={active} className="detail-in mt-4 flex items-center gap-3 rounded-2xl border border-nodix-cyan/30 bg-nodix-dark/70 p-3.5">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-nodix-cyan/15 text-nodix-cyan">
          <Active className="h-5 w-5" />
        </span>
        <span>
          <span className="block text-sm font-bold text-white">
            {active + 1}. {t.graphNodes[active].title}
          </span>
          <span className="block text-xs text-white/60">{t.graphNodes[active].desc}</span>
        </span>
      </div>
      <p className="mt-3 text-center text-[11px] text-white/40">{t.graphHint}</p>
    </div>
  );
}

/* ================= page ================= */

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const t: Dict = dict[lang];

  // 8) persist language choice
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("nodix-lang");
      if (saved === "ar" || saved === "en") setLang(saved);
    } catch { /* ignore */ }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir;
    try {
      window.localStorage.setItem("nodix-lang", lang);
    } catch { /* ignore */ }
  }, [lang, t.dir]);

  const [menuOpen, setMenuOpen] = useState(false);
  // FAQ accordion: only one answer open at a time
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [form, setForm] = useState({
    name: "",
    business: "",
    businessType: "",
    needs: [] as string[],
    problem: "",
    channel: "WhatsApp",
    contact: "",
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [fieldErr, setFieldErr] = useState<{ name?: string; contact?: string; problem?: string; needs?: string }>({});
  const [sending, setSending] = useState(false);
  // 3) honeypot + time trap refs (bots fill hidden field / submit instantly)
  const [honeypot, setHoneypot] = useState("");
  const startedAt = useRef(Date.now());

  const toggleNeed = (v: string) =>
    setForm((f) => ({
      ...f,
      needs: f.needs.includes(v) ? f.needs.filter((x) => x !== v) : [...f.needs, v],
    }));

  // 4) same strong rules as server: name 2-80, problem 10+, contact depends on channel
  const validateLocal = () => {
    const errs: typeof fieldErr = {};
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (form.name.trim().length < 2 || form.name.trim().length > 80) errs.name = t.errName;
    if (form.problem.trim().length < 10) errs.problem = t.errProblem;
    if (form.needs.length === 0) errs.needs = t.errNeeds;
    const c = form.contact.trim();
    if (form.channel === "Email") {
      if (!emailRe.test(c)) errs.contact = t.errEmail;
    } else if (form.channel === "WhatsApp") {
      const d = c.replace(/\D/g, "");
      if (!/^[+\d][\d\s\-().]{6,20}$/.test(c) || d.length < 7 || d.length > 15) errs.contact = t.errPhone;
    } else if (c.length < 2 || c.length > 120) {
      errs.contact = t.errHandle;
    }
    return errs;
  };

  // Validate locally, POST to /api/project (which forwards to n8n webhook server-side), then confirm.
  // Even if webhook is not configured, we confirm + offer WhatsApp/Email fallback so no lead is lost.
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validateLocal();
    setFieldErr(errs);
    if (Object.keys(errs).length > 0) {
      setError(t.errFields);
      return;
    }
    setError("");
    setSending(true);
    try {
      const res = await fetch("/api/project", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, website: honeypot, startedAt: startedAt.current }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string; field?: string };
      if (!res.ok) {
        if (res.status === 429) setError(t.errMany);
        else if (data.field === "contact") {
          if (data.error === "invalid_email") setFieldErr({ contact: t.errEmail });
          else if (data.error === "invalid_phone") setFieldErr({ contact: t.errPhone });
          else setFieldErr({ contact: t.errHandle });
          setError(t.errFields);
        } else if (data.field === "problem") {
          setFieldErr({ problem: t.errProblem });
          setError(t.errFields);
        } else if (data.field === "name") {
          setFieldErr({ name: t.errName });
          setError(t.errFields);
        } else {
          setError(t.errSend);
        }
        setSending(false);
        return;
      }
      if (typeof window !== "undefined") {
        // 6) conversion event for GA/Plausible if configured
        (window as unknown as { dataLayer?: unknown[] }).dataLayer?.push?.({ event: "lead_submit" });
        window.dispatchEvent(new CustomEvent("nodix:lead"));
      }
    } catch {
      setSending(false);
      setError(t.errSend);
      return;
    }
    setSending(false);
    setSent(true);
  };

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildLeadMessage(form))}`;
  const mailLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`New project — ${form.name} / ${form.business}`)}&body=${encodeURIComponent(buildLeadMessage(form))}`;

  const toggleLang = () => {
    setLang((l) => (l === "en" ? "ar" : "en"));
    setSent(false);
  };

  const contactChannels = [
    { id: "WhatsApp", icon: Phone },
    { id: "Email", icon: Mail },
    { id: "Instagram", icon: Camera },
  ];

  return (
    <div dir={t.dir} className="bg-nodix-bg text-nodix-navy">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-nodix-line bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <a href="#home" className="flex items-center gap-3">
            <Image
              src="/nodixlogo.jpg"
              alt="NODIX Systems logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="leading-tight">
              <span className="block text-sm font-extrabold tracking-widest">
                {lang === "en" ? "MISTER WAEL" : "مستر وائل"}
              </span>
              <span className="block text-[11px] font-medium tracking-[0.2em] text-nodix-muted">
                NODIX SYSTEMS
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <a href="#about" className="transition hover:text-nodix-cyan-dark">{t.navAbout}</a>
            <a href="#services" className="transition hover:text-nodix-cyan-dark">{t.navServices}</a>
            <a href="#systems" className="transition hover:text-nodix-cyan-dark">{t.navSystems}</a>
            <a href="#process" className="transition hover:text-nodix-cyan-dark">{t.navProcess}</a>
            <a href="#contact" className="transition hover:text-nodix-cyan-dark">{t.navContact}</a>
          </nav>
          <div className="hidden items-center gap-2 md:flex">
            <button
              onClick={toggleLang}
              className="inline-flex items-center gap-1.5 rounded-full border border-nodix-line px-4 py-2 text-xs font-bold transition hover:border-nodix-cyan hover:text-nodix-cyan-dark"
            >
              <Languages className="h-3.5 w-3.5" /> {lang === "en" ? "عربي" : "EN"}
            </button>
            <a
              href="#start-project"
              className="btn-dark-lift inline-flex items-center gap-2 rounded-full bg-nodix-dark px-5 py-2.5 text-sm font-semibold text-white"
            >
              {t.navCta} <ArrowRight className={`h-4 w-4 text-nodix-cyan ${t.dir === "rtl" ? "rotate-180" : ""}`} />
            </a>
          </div>
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleLang}
              className="inline-flex items-center gap-1 rounded-full border border-nodix-line px-3 py-1.5 text-xs font-bold"
            >
              <Languages className="h-3.5 w-3.5" /> {lang === "en" ? "عربي" : "EN"}
            </button>
            <button className="rounded-lg p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="flex flex-col gap-1 border-t border-nodix-line bg-white px-4 py-3 text-sm font-medium md:hidden">
            {[
              [t.navAbout, "#about"],
              [t.navServices, "#services"],
              [t.navSystems, "#systems"],
              [t.navProcess, "#process"],
              [t.navCta, "#start-project"],
              [t.navContact, "#contact"],
            ].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2 transition hover:bg-nodix-bg">
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="overflow-hidden bg-nodix-dark text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="hero-anim inline-flex items-center gap-2 rounded-full border border-nodix-cyan/40 bg-nodix-cyan/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-nodix-cyan" style={{ animationDelay: "0ms" }}>
              <Sparkles className="h-3.5 w-3.5" /> {t.heroBadge}
            </p>
            <h1 className="hero-anim mt-5 text-4xl font-extrabold leading-tight md:text-6xl" style={{ animationDelay: "120ms" }}>
              {t.heroTitleA}
              <br />
              <span className="text-glow-cyan">{t.heroTitleB}</span>
            </h1>
            <p className="hero-anim mt-4 flex flex-wrap gap-2 text-sm text-white/70" style={{ animationDelay: "240ms" }}>
              {t.heroTags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 transition hover:border-nodix-cyan/50 hover:text-nodix-cyan">
                  {tag}
                </span>
              ))}
            </p>
            <div className="hero-anim mt-8 flex flex-wrap gap-3" style={{ animationDelay: "360ms" }}>
              <a href="#systems" className="btn-glow inline-flex items-center gap-2 rounded-full bg-nodix-cyan px-6 py-3 text-sm font-bold text-nodix-dark">
                {t.heroBtnSystems} <ArrowRight className={`h-4 w-4 ${t.dir === "rtl" ? "rotate-180" : ""}`} />
              </a>
              <a href="#start-project" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-bold transition hover:-translate-y-0.5 hover:border-nodix-cyan hover:text-nodix-cyan">
                {t.heroBtnProject}
              </a>
            </div>
            <div className="hero-anim mt-8 grid max-w-md grid-cols-3 gap-4 text-center" style={{ animationDelay: "480ms" }}>
              {t.heroStats.map(([a, b]) => (
                <div key={b} className="card-lift rounded-2xl border border-white/10 bg-white/5 p-3 hover:border-nodix-cyan/40">
                  <p className="text-sm font-bold text-nodix-cyan">{a}</p>
                  <p className="text-xs text-white/60">{b}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-anim" style={{ animationDelay: "300ms" }}>
            <NodeGraph t={t} />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2">
          <Reveal>
            <p className="text-xs font-bold tracking-[0.25em] text-nodix-cyan-dark">{t.aboutKicker}</p>
            <h2 className="mt-2 text-3xl font-extrabold">{t.aboutName}</h2>
            <p className="font-medium text-nodix-muted">{t.aboutRole}</p>
            <p className="mt-4 text-sm leading-7 text-nodix-navy/80">{t.aboutP}</p>
            <a href="#start-project" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-nodix-cyan-dark transition hover:gap-3">
              {t.aboutLink} <ArrowRight className={`h-4 w-4 ${t.dir === "rtl" ? "rotate-180" : ""}`} />
            </a>
          </Reveal>
          <div className="space-y-3">
            {t.aboutBullets.map((b, i) => {
              const Icon = aboutIcons[i];
              return (
                <Reveal key={b} delay={i * 90}>
                  <li className="card-lift flex list-none items-center gap-3 rounded-2xl border border-nodix-line bg-nodix-bg p-4 text-sm font-medium hover:border-nodix-cyan">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-nodix-dark text-nodix-cyan">
                      <Icon className="h-5 w-5" />
                    </span>
                    {b}
                  </li>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT I BUILD */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-16">
        <Reveal>
          <p className="text-xs font-bold tracking-[0.25em] text-nodix-cyan-dark">{t.servicesKicker}</p>
          <h2 className="mt-2 text-3xl font-extrabold">{t.servicesTitle}</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.map((s, i) => {
            const Icon = serviceIcons[i];
            return (
              <Reveal key={s.t} delay={(i % 3) * 100}>
                <div className="card-lift h-full rounded-3xl border border-nodix-line bg-white p-6 hover:border-nodix-cyan hover:shadow-[0_18px_40px_rgba(47,179,190,0.15)]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-nodix-dark text-nodix-cyan">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-bold">{s.t}</h3>
                  <p className="mt-2 text-sm leading-6 text-nodix-muted">{s.d}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* SYSTEMS */}
      <section id="systems" className="bg-nodix-dark py-16 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <p className="text-xs font-bold tracking-[0.25em] text-nodix-cyan">{t.systemsKicker}</p>
            <h2 className="mt-2 text-3xl font-extrabold">{t.systemsTitle}</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {t.projects.map((p, i) => {
              const icons = [MessageCircle, Send, ShoppingBag, Cpu];
              const Icon = icons[i];
              return (
                <Reveal key={p.no} delay={(i % 2) * 120}>
                  <div className="card-lift h-full rounded-3xl border border-white/10 bg-white/5 p-6 hover:border-nodix-cyan/50">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold tracking-widest text-nodix-cyan">{p.no}</span>
                      <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${p.live ? "bg-nodix-cyan/15 text-nodix-cyan" : "bg-white/10 text-white/60"}`}>
                        {p.live ? <CheckCircle2 className="h-3.5 w-3.5" /> : <Lock className="h-3.5 w-3.5" />}
                        {p.live ? t.live : t.soon}
                      </span>
                    </div>
                    <div className="mt-4 flex items-center gap-3">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-nodix-cyan text-nodix-dark">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="font-bold leading-snug">{p.title}</h3>
                    </div>
                    <p className="mt-3 text-xs text-white/60">{t.platform}: {p.platform} — {t.typeLabel}: {p.type}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.caps.map((c) => (
                        <span key={c} className="rounded-full border border-white/10 bg-nodix-dark px-3 py-1 text-xs text-white/75 transition hover:border-nodix-cyan/50 hover:text-nodix-cyan">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Reveal>
            <div className="mt-6 rounded-3xl border border-nodix-cyan/30 bg-nodix-cyan/5 p-6">
              <p className="text-sm font-bold text-nodix-cyan">{t.caseTitle}</p>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                {t.caseFlow.map((f, i, a) => (
                  <span key={f} className="flex items-center gap-2">
                    <span className="rounded-full bg-white/10 px-3 py-1.5 transition hover:bg-nodix-cyan/20">{f}</span>
                    {i < a.length - 1 && <ArrowRight className={`h-3.5 w-3.5 text-nodix-cyan ${t.dir === "rtl" ? "rotate-180" : ""}`} />}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/70">
                {t.caseCaps.map((c, i) => {
                  const Icon = caseIcons[i];
                  return (
                    <span key={c} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 transition hover:border-nodix-cyan/50">
                      <Icon className="h-3.5 w-3.5 text-nodix-cyan" /> {c}
                    </span>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="mx-auto max-w-6xl px-4 py-16">
        <Reveal>
          <p className="text-xs font-bold tracking-[0.25em] text-nodix-cyan-dark">{t.processKicker}</p>
          <h2 className="mt-2 text-3xl font-extrabold">{t.processTitle}</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.steps.map((s, i) => {
            const Icon = stepIcons[i];
            return (
              <Reveal key={s.t} delay={(i % 3) * 100}>
                <div className="card-lift h-full rounded-3xl border border-nodix-line bg-white p-6 hover:border-nodix-cyan hover:shadow-[0_18px_40px_rgba(47,179,190,0.15)]">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-nodix-dark text-nodix-cyan">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-2xl font-extrabold text-nodix-line">0{i + 1}</span>
                  </div>
                  <h3 className="mt-4 font-bold">{s.t}</h3>
                  <p className="mt-1 text-sm text-nodix-muted">{s.d}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* STACK + CAPABILITIES */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2">
          <Reveal>
            <p className="text-xs font-bold tracking-[0.25em] text-nodix-cyan-dark">{t.stackKicker}</p>
            <h2 className="mt-2 text-2xl font-extrabold">{t.stackTitle}</h2>
            <div className="mt-5 space-y-3 text-sm">
              {t.stackRows.map(([a, b], i) => {
                const Icon = stackIcons[i];
                const chips = String(b).split(" / ").map((s) => s.trim()).filter(Boolean);
                return (
                  <div key={a} className="card-lift flex items-start gap-3 rounded-2xl border border-nodix-line bg-nodix-bg p-3 hover:border-nodix-cyan">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-nodix-dark text-nodix-cyan">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-[92px] pt-1.5 font-bold">{a}</span>
                    <span className="flex flex-wrap gap-1.5 pt-1">
                      {chips.map((c) =>
                        c === "+more" ? (
                          <span key={c + a} className="rounded-full bg-nodix-dark px-2.5 py-0.5 text-[11px] font-extrabold text-nodix-cyan">
                            +more
                          </span>
                        ) : (
                          <span key={c + a} className="rounded-full border border-nodix-line bg-white px-2.5 py-0.5 text-[11px] font-medium text-nodix-muted">
                            {c}
                          </span>
                        )
                      )}
                    </span>
                  </div>
                );
              })}
            </div>
            <p className="mt-3 text-xs text-nodix-muted">{t.stackNote}</p>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-xs font-bold tracking-[0.25em] text-nodix-cyan-dark">{t.capKicker}</p>
            <h2 className="mt-2 text-2xl font-extrabold">{t.capTitle}</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {t.capGroups.map((g, i) => {
                const Icon = capIcons[i];
                return (
                  <div key={g.t} className="card-lift rounded-2xl bg-nodix-dark p-5 text-white hover:shadow-[0_18px_40px_rgba(10,15,20,0.35)]">
                    <Icon className="h-5 w-5 text-nodix-cyan" />
                    <p className="mt-2 font-bold">{g.t}</p>
                    <ul className="mt-2 space-y-1 text-xs text-white/70">
                      {g.items.map((x) => (
                        <li key={x}>— {x}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* NODIX */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <Reveal>
          <div className="flex flex-col items-center gap-4 rounded-3xl bg-nodix-dark p-10 text-center text-white">
            <Image src="/nodixlogo.jpg" alt="NODIX" width={64} height={64} className="core-glow h-16 w-16 rounded-full object-cover" />
            <p className="text-xs font-bold tracking-[0.25em] text-nodix-cyan">{t.nodixKicker}</p>
            <p className="max-w-2xl text-2xl font-extrabold">{t.nodixTitle}</p>
          </div>
        </Reveal>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-12">
        <Reveal>
          <p className="text-xs font-bold tracking-[0.25em] text-nodix-cyan-dark">{t.testiKicker}</p>
          <h2 className="mt-2 text-3xl font-extrabold">{t.testiTitle}</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {t.testimonials.map((c, i) => (
            <Reveal key={c.n} delay={i * 100}>
              <figure className="card-lift h-full rounded-3xl border border-nodix-line bg-white p-6 hover:border-nodix-cyan">
                <div className="flex gap-1 text-amber-400" aria-label="5/5">
                  {"★★★★★".split("").map((s, j) => (
                    <span key={j} aria-hidden="true">{s}</span>
                  ))}
                </div>
                <blockquote className="mt-3 text-sm leading-7 text-nodix-navy/85">“{c.x}”</blockquote>
                <figcaption className="mt-4 border-t border-nodix-line pt-3 text-xs">
                  <span className="block font-extrabold">{c.n}</span>
                  <span className="text-nodix-muted">{c.r}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <p className="mt-3 text-xs text-nodix-muted">{t.testiNote}</p>
      </section>

      {/* DEMO VIDEO — continuous silent loop beside descriptive text */}
      {DEMO_VIDEO_URL ? (
        <section id="demo" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-12">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <Reveal className="order-1">
              <div className="mx-auto w-fit overflow-hidden rounded-3xl border border-nodix-line bg-nodix-dark shadow-xl">
                {youtubeEmbed(DEMO_VIDEO_URL) ? (
                  <iframe
                    src={youtubeEmbed(DEMO_VIDEO_URL) as string}
                    title={t.videoTitle}
                    className="aspect-video w-full min-w-[300px] md:min-w-[420px]"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <video
                    src={DEMO_VIDEO_URL}
                    autoPlay
                    muted
                    loop
                    playsInline
                    disablePictureInPicture
                    preload="auto"
                    aria-label={t.videoTitle}
                    className="h-auto max-h-[560px] w-auto max-w-full object-contain"
                  />
                )}
              </div>
            </Reveal>
            <Reveal delay={120} className="order-2">
              <p className="text-xs font-bold tracking-[0.25em] text-nodix-cyan-dark">{t.videoKicker}</p>
              <h2 className="mt-2 text-3xl font-extrabold">{t.videoTitle}</h2>
              <p className="mt-2 text-sm leading-7 text-nodix-muted">{t.videoSub}</p>
              <ul className="mt-4 space-y-2.5">
                {t.videoPoints.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm font-medium">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-nodix-cyan/15 text-nodix-cyan-dark">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <a href="#start-project" className="btn-dark-lift mt-6 inline-flex items-center gap-2 rounded-full bg-nodix-dark px-6 py-3 text-sm font-bold text-white">
                {t.videoCta} <ArrowRight className={`h-4 w-4 text-nodix-cyan ${t.dir === "rtl" ? "rotate-180" : ""}`} />
              </a>
            </Reveal>
          </div>
        </section>
      ) : null}

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-4xl scroll-mt-20 px-4 py-12">
        <Reveal className="text-center">
          <p className="text-xs font-bold tracking-[0.25em] text-nodix-cyan-dark">{t.faqKicker}</p>
          <h2 className="mt-2 text-3xl font-extrabold">{t.faqTitle}</h2>
        </Reveal>
        <div className="mt-6 space-y-3">
          {t.faqs.map((f, i) => {
            const open = openFaq === i;
            return (
              <Reveal key={f.q}>
                <div className={`rounded-2xl border bg-white px-5 py-4 transition hover:border-nodix-cyan ${open ? "border-nodix-cyan" : "border-nodix-line"}`}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    aria-expanded={open}
                    aria-controls={`faq-a-${i}`}
                    className="flex w-full cursor-pointer items-center justify-between gap-3 text-start text-sm font-bold"
                  >
                    {f.q}
                    <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-nodix-bg text-lg font-extrabold text-nodix-cyan-dark transition-transform duration-300 ${open ? "rotate-45" : ""}`} aria-hidden="true">+</span>
                  </button>
                  <div
                    id={`faq-a-${i}`}
                    className={`grid transition-all duration-300 ease-in-out ${open ? "mt-2 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <p className="overflow-hidden text-sm leading-7 text-nodix-muted">{f.a}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <Reveal>
            <p className="text-xs font-bold tracking-[0.25em] text-nodix-cyan-dark">{t.contactKicker}</p>
            <h2 className="mt-2 text-3xl font-extrabold">{t.contactTitle}</h2>
            <p className="mt-2 text-sm text-nodix-muted">{t.contactSub}</p>
          </Reveal>
          <div className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.contactCards.map(([a, b], i) => {
              const Icon = contactIcons[i];
              const href =
                i === 0
                  ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lang === "en" ? "Hi Mister Wael, I have a project." : "سلام مستر وائل، عندي مشروع.")}`
                  : i === 1
                    ? TELEGRAM_URL
                    : i === 2
                      ? `mailto:${CONTACT_EMAIL}`
                      : INSTAGRAM_URL;
              const card = (
                <div className="card-lift h-full rounded-3xl border border-nodix-line bg-nodix-bg p-6 hover:border-nodix-cyan">
                  {i === 3 ? (
                    <InstagramIcon className="mx-auto h-6 w-6 text-nodix-cyan-dark" />
                  ) : (
                    <Icon className="mx-auto h-6 w-6 text-nodix-cyan-dark" />
                  )}
                  <p className="mt-2 flex items-center justify-center gap-1 font-bold">
                    {a}
                    <ArrowUpRight className="h-3.5 w-3.5 text-nodix-cyan-dark" />
                  </p>
                  <p className="text-xs text-nodix-muted">{b}</p>
                </div>
              );
              return (
                <Reveal key={a} delay={i * 100}>
                  <a href={href} target={i === 2 ? undefined : "_blank"} rel="noopener noreferrer" className="block h-full">
                    {card}
                  </a>
                </Reveal>
              );
            })}
          </div>

          {/* Based in Algeria — country only, no wilaya */}
          <div className="mx-auto mt-14 max-w-5xl text-center">
            <Reveal>
              <p className="text-xs font-bold tracking-[0.25em] text-nodix-cyan-dark">{t.locationKicker}</p>
              <h3 className="mt-2 text-3xl font-extrabold md:text-4xl">{t.locationTitle}</h3>
              <p className="mt-2 text-sm text-nodix-muted">{t.locationSub}</p>
            </Reveal>
            <Reveal>
              <div className="relative mt-6 overflow-hidden rounded-3xl border border-nodix-line shadow-lg">
                <iframe
                  title={t.locationTitle}
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-8.7%2C18.9%2C12.2%2C37.2&layer=mapnik&marker=28.03%2C1.66"
                  className="h-[380px] w-full border-0"
                  loading="lazy"
                />
                <div className="absolute bottom-4 start-4 rounded-2xl border border-nodix-line bg-white/95 p-4 text-start shadow-xl backdrop-blur">
                  <p className="flex items-center gap-2 text-[11px] font-extrabold tracking-[0.2em] text-nodix-cyan-dark">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-nodix-dark text-nodix-cyan">
                      <MapPin className="h-4 w-4" />
                    </span>
                    ALGERIA BASE
                  </p>
                  <p className="mt-2 font-extrabold">{t.locationBase}</p>
                  <p className="text-xs text-nodix-muted">{t.locationMeta}</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Algeria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-nodix-cyan-dark hover:underline"
                  >
                    {t.locationOpen} <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* START A PROJECT FORM — last section before footer */}
      <section id="start-project" className="mx-auto max-w-4xl scroll-mt-20 px-4 py-16">
        <Reveal className="text-center">
          <p className="text-xs font-bold tracking-[0.25em] text-nodix-cyan-dark">{t.formKicker}</p>
          <h2 className="mt-2 text-3xl font-extrabold">{t.formTitle}</h2>
          <p className="mt-2 text-sm text-nodix-muted">{t.formSub}</p>
        </Reveal>

        {sent ? (
          <div className="detail-in mt-8 rounded-3xl border border-nodix-cyan bg-white p-10 text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-nodix-cyan-dark" />
            <h3 className="mt-4 text-xl font-extrabold">{t.sentTitle}</h3>
            <p className="mt-2 text-sm text-nodix-muted">
              {lang === "en"
                ? `Thanks ${form.name}. Your project request for ${form.business || "your business"} was prepared. I will contact you via ${form.channel}: ${form.contact}.`
                : `شكراً ${form.name}. تم تجهيز طلب مشروعك لـ ${form.business || "عملك"}. سأتواصل معك عبر ${form.channel}: ${form.contact}.`}
            </p>
            <p className="mt-6 text-xs font-bold text-nodix-muted">{t.sentHint}</p>
            <div className="mt-3 flex flex-wrap justify-center gap-3">
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-dark-lift inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white">
                <Phone className="h-4 w-4" /> {t.sendWa}
              </a>
              <a href={mailLink} className="inline-flex items-center gap-2 rounded-full border border-nodix-line px-6 py-3 text-sm font-bold transition hover:border-nodix-cyan">
                <Mail className="h-4 w-4" /> {t.sendEmail}
              </a>
            </div>
            <button onClick={() => setSent(false)} className="mt-6 rounded-full border border-nodix-line px-6 py-2.5 text-sm font-bold transition hover:border-nodix-cyan">
              {t.sentAnother}
            </button>
          </div>
        ) : (
          <Reveal>
            <form onSubmit={submit} noValidate={false} className="mt-8 rounded-3xl border border-nodix-line bg-white p-6 md:p-8">
              {/* honeypot: invisible to humans, bots fill it */}
              <input
                type="text"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="f-name" className="flex items-center gap-2 text-sm font-bold"><User className="h-4 w-4 text-nodix-cyan-dark" /> 1. {t.f1} *</label>
                  <input id="f-name" required autoComplete="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder={t.phName} aria-invalid={!!fieldErr.name} aria-describedby={fieldErr.name ? "f-name-err" : undefined} className={`mt-2 w-full rounded-2xl border bg-nodix-bg px-4 py-3 text-sm outline-none transition focus:border-nodix-cyan focus:ring-2 focus:ring-nodix-cyan/30 ${fieldErr.name ? "border-red-500" : "border-nodix-line"}`} />
                  {fieldErr.name && <p id="f-name-err" className="mt-1 text-xs font-semibold text-red-600">{fieldErr.name}</p>}
                </div>
                <div>
                  <label htmlFor="f-biz" className="flex items-center gap-2 text-sm font-bold"><Building2 className="h-4 w-4 text-nodix-cyan-dark" /> 2. {t.f2}</label>
                  <input id="f-biz" autoComplete="organization" value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })} placeholder={t.phBiz} className="mt-2 w-full rounded-2xl border border-nodix-line bg-nodix-bg px-4 py-3 text-sm outline-none transition focus:border-nodix-cyan focus:ring-2 focus:ring-nodix-cyan/30" />
                </div>
              </div>

              <fieldset className="mt-5">
                <legend className="flex items-center gap-2 text-sm font-bold"><Store className="h-4 w-4 text-nodix-cyan-dark" /> 3. {t.f3}</legend>
                <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label={t.f3}>
                  {t.formTypes.map((type) => (
                    <button type="button" key={type} aria-pressed={form.businessType === type} onClick={() => setForm({ ...form, businessType: type })} className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all hover:-translate-y-0.5 ${form.businessType === type ? "border-nodix-dark bg-nodix-dark text-white shadow-lg" : "border-nodix-line bg-nodix-bg hover:border-nodix-cyan"}`}>
                      {type}
                    </button>
                  ))}
                </div>
              </fieldset>

              <fieldset className="mt-5">
                <legend className="flex items-center gap-2 text-sm font-bold"><Workflow className="h-4 w-4 text-nodix-cyan-dark" /> 4. {t.f4} *</legend>
                <div className="mt-2 grid gap-2 sm:grid-cols-2" role="group" aria-label={t.f4}>
                  {t.formNeeds.map((n) => (
                    <button type="button" key={n} aria-pressed={form.needs.includes(n)} onClick={() => toggleNeed(n)} className={`flex items-center gap-2 rounded-2xl border px-4 py-2.5 text-start text-xs font-semibold transition-all ${form.needs.includes(n) ? "border-nodix-cyan-dark bg-nodix-cyan/15 shadow-sm" : "border-nodix-line bg-nodix-bg hover:border-nodix-cyan"}`}>
                      <span aria-hidden="true" className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border transition ${form.needs.includes(n) ? "border-nodix-cyan-dark bg-nodix-cyan-dark text-white" : "border-nodix-muted"}`}>
                        {form.needs.includes(n) && <CheckCircle2 className="h-3 w-3" />}
                      </span>
                      {n}
                    </button>
                  ))}
                </div>
                {fieldErr.needs && <p className="mt-1 text-xs font-semibold text-red-600">{fieldErr.needs}</p>}
              </fieldset>

              <div className="mt-5">
                <label htmlFor="f-problem" className="flex items-center gap-2 text-sm font-bold"><FileText className="h-4 w-4 text-nodix-cyan-dark" /> 5. {t.f5} *</label>
                <textarea id="f-problem" required value={form.problem} onChange={(e) => setForm({ ...form, problem: e.target.value })} placeholder={t.phProblem} rows={4} aria-invalid={!!fieldErr.problem} aria-describedby={fieldErr.problem ? "f-problem-err" : undefined} className={`mt-2 w-full rounded-2xl border bg-nodix-bg px-4 py-3 text-sm outline-none transition focus:border-nodix-cyan focus:ring-2 focus:ring-nodix-cyan/30 ${fieldErr.problem ? "border-red-500" : "border-nodix-line"}`} />
                {fieldErr.problem && <p id="f-problem-err" className="mt-1 text-xs font-semibold text-red-600">{fieldErr.problem}</p>}
              </div>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <fieldset>
                  <legend className="text-sm font-bold">6. {t.f6}</legend>
                  <div className="mt-2 grid grid-cols-3 gap-2" role="group" aria-label={t.f6}>
                    {contactChannels.map((c) => (
                      <button type="button" key={c.id} aria-pressed={form.channel === c.id} onClick={() => setForm({ ...form, channel: c.id, contact: "" })} className={`flex items-center justify-center gap-1.5 rounded-2xl border px-3 py-2.5 text-xs font-bold transition-all ${form.channel === c.id ? "border-nodix-dark bg-nodix-dark text-white shadow-lg" : "border-nodix-line bg-nodix-bg hover:border-nodix-cyan"}`}>
                        <c.icon className="h-4 w-4" /> {lang === "en" ? c.id : c.id === "WhatsApp" ? "واتساب" : c.id === "Email" ? "إيميل" : "إنستغرام"}
                      </button>
                    ))}
                  </div>
                </fieldset>
                <div>
                  <label htmlFor="f-contact" className="text-sm font-bold">7. {t.f7} *</label>
                  <input
                    id="f-contact"
                    required
                    value={form.contact}
                    onChange={(e) => setForm({ ...form, contact: e.target.value })}
                    placeholder={form.channel === "WhatsApp" ? "+213 ..." : form.channel === "Email" ? "name@mail.com" : "@username"}
                    inputMode={form.channel === "Email" ? "email" : form.channel === "WhatsApp" ? "tel" : "text"}
                    autoComplete={form.channel === "Email" ? "email" : "off"}
                    aria-invalid={!!fieldErr.contact}
                    aria-describedby={fieldErr.contact ? "f-contact-err" : undefined}
                    className={`mt-2 w-full rounded-2xl border bg-nodix-bg px-4 py-3 text-sm outline-none transition focus:border-nodix-cyan focus:ring-2 focus:ring-nodix-cyan/30 ${fieldErr.contact ? "border-red-500" : "border-nodix-line"}`}
                  />
                  {fieldErr.contact && <p id="f-contact-err" className="mt-1 text-xs font-semibold text-red-600">{fieldErr.contact}</p>}
                </div>
              </div>

              {error && (
                <p role="alert" aria-live="polite" className="detail-in mt-4 flex items-center gap-2 rounded-2xl bg-red-50 p-3 text-xs font-semibold text-red-800">
                  <CircleAlert className="h-4 w-4 shrink-0" /> {error}
                </p>
              )}

              <button
                type="submit"
                disabled={sending}
                className="btn-dark-lift mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-nodix-dark px-6 py-4 text-sm font-extrabold text-white disabled:cursor-wait disabled:opacity-70"
              >
                {sending ? t.sending : t.submit}{" "}
                <ArrowRight className={`h-4 w-4 text-nodix-cyan ${t.dir === "rtl" ? "rotate-180" : ""}`} />
              </button>
              <p className="mt-3 text-center text-[11px] text-nodix-muted">{t.privacyNote}</p>
            </form>
          </Reveal>
        )}
      </section>

      {/* FOOTER */}
      <footer className="bg-nodix-dark text-white">
        <div className="mx-auto max-w-6xl px-4 pb-6 pt-14">
          <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
            {/* Brand */}
            <div>
              <a href="#home" className="flex items-center gap-3">
                <Image src="/nodixlogo.jpg" alt="NODIX Systems logo" width={44} height={44} className="h-11 w-11 rounded-full object-cover" />
                <span className="leading-tight">
                  <span className="block text-sm font-extrabold tracking-widest">
                    {lang === "en" ? "MISTER WAEL" : "مستر وائل"}
                  </span>
                  <span className="block text-[11px] font-medium tracking-[0.2em] text-white/50">
                    NODIX SYSTEMS
                  </span>
                </span>
              </a>
              <p className="mt-4 max-w-xs text-xs leading-6 text-white/55">{t.footerTagline}</p>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold transition hover:-translate-y-0.5 hover:border-nodix-cyan hover:text-nodix-cyan"
              >
                <InstagramIcon className="h-4 w-4 text-nodix-cyan" />
                nodix.core
                <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
              </a>
            </div>
            {/* Explore */}
            <nav aria-label={t.footerExplore}>
              <p className="text-xs font-extrabold tracking-[0.2em] text-nodix-cyan">{t.footerExplore}</p>
              <ul className="mt-4 space-y-2.5 text-sm text-white/65">
                {[
                  [t.navAbout, "#about"],
                  [t.navServices, "#services"],
                  [t.navSystems, "#systems"],
                  [t.navProcess, "#process"],
                  [t.navContact, "#contact"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <a href={href} className="transition hover:text-nodix-cyan">{label}</a>
                  </li>
                ))}
              </ul>
            </nav>
            {/* Services */}
            <div>
              <p className="text-xs font-extrabold tracking-[0.2em] text-nodix-cyan">{t.footerServicesT}</p>
              <ul className="mt-4 space-y-2.5 text-sm text-white/65">
                {t.services.slice(0, 5).map((s) => (
                  <li key={s.t}>
                    <a href="#services" className="transition hover:text-nodix-cyan">{s.t}</a>
                  </li>
                ))}
              </ul>
            </div>
            {/* CTA */}
            <div>
              <p className="text-xs font-extrabold tracking-[0.2em] text-nodix-cyan">{t.footerContactT}</p>
              <p className="mt-4 text-lg font-extrabold leading-snug">{t.footerCta}</p>
              <p className="mt-1 text-xs text-white/55">{t.footerCtaSub}</p>
              <a
                href="#start-project"
                className="btn-glow mt-5 inline-flex items-center gap-2 rounded-full bg-nodix-cyan px-6 py-3 text-sm font-bold text-nodix-dark"
              >
                {t.navCta} <ArrowRight className={`h-4 w-4 ${t.dir === "rtl" ? "rotate-180" : ""}`} />
              </a>
            </div>
          </div>
          {/* Bottom bar */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row">
            <p>{t.footerRights}</p>
            <p className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {t.footerAvailable} · {t.footerBuilt}
            </p>
            <a href="#home" className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-1.5 font-bold transition hover:border-nodix-cyan hover:text-nodix-cyan">
              <ArrowUp className="h-3.5 w-3.5" /> {t.footerTop}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
