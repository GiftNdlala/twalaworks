import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

export default function ShopPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-5xl px-5 py-16 md:px-8">
        <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[color:var(--muted)]">Collector portal</p>
        <h1 className="font-serif text-5xl leading-none tracking-[-0.06em] md:text-7xl">Shop — coming soon</h1>

        <div className="mt-10 rounded-[2rem] border border-black/10 bg-white p-8 shadow-[0_18px_50px_rgba(0,0,0,0.03)] md:p-12">
          <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted)]">
            This space is set up as a placeholder for the future e-commerce layer, where collectors can browse available works,
            check prices, and complete secure purchases.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/gallery" className="rounded-full bg-[color:var(--ink)] px-5 py-3 text-xs uppercase tracking-[0.2em] text-white">
              Browse gallery
            </Link>
            <Link href="/contact" className="rounded-full border border-black/15 px-5 py-3 text-xs uppercase tracking-[0.2em] text-[color:var(--ink)]">
              Contact the studio
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
