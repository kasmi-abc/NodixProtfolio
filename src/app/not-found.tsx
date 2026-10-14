import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-nodix-bg px-4 text-nodix-navy">
      <div className="w-full max-w-md rounded-3xl border border-nodix-line bg-white p-10 text-center">
        <p className="text-6xl font-extrabold text-nodix-cyan-dark">404</p>
        <h1 className="mt-3 text-xl font-extrabold">
          Page not found · الصفحة غير موجودة
        </h1>
        <p className="mt-2 text-sm text-nodix-muted">
          The link you followed doesn’t exist. الرابط الذي اتبعته غير موجود.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-nodix-dark px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5"
        >
          ← Back to home · العودة للرئيسية
        </Link>
      </div>
    </div>
  );
}
