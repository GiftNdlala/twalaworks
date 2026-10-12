import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { artworks, formatPrice } from "@/lib/artworks";

export default function GalleryPage() {
  return (
    <SiteShell>
      <section className="art-grain mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="art-index mb-3">The archive / 12 works</p>
            <h1 className="font-serif text-5xl leading-none tracking-[-0.06em] md:text-7xl">
              Selected works
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-[color:var(--muted)]">
              A living collection of expressive studies, originals, and limited-edition prints by Thando Twala.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-black/15 px-5 py-3 text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--ink)] transition-colors hover:bg-black hover:text-white"
          >
            Enquire about originals
          </Link>
        </div>

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {artworks.map((work, index) => (
            <article
              key={work.slug}
              className="group overflow-hidden border border-black/10 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.03)] transition-transform duration-500 hover:-translate-y-2"
            >
              <Link href={`/gallery/${work.slug}`} className="block">
                <div className="relative h-80 overflow-hidden bg-[#e9e2d8]">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 bg-[color:var(--paper)]/90 px-3 py-2 text-[10px] uppercase tracking-[0.18em]">
                    {String(index + 1).padStart(2, "0")} / 12
                  </span>
                </div>
              </Link>
              <div className="space-y-3 p-5">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="font-serif text-3xl tracking-[-0.05em]">{work.title}</h2>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[color:var(--muted)]">
                    {work.originalSize ?? "Prints"}
                  </span>
                </div>
                <p className="text-sm text-[color:var(--muted)]">{work.medium}</p>
                <div className="flex items-center justify-between gap-4 pt-1">
                  <span className="text-sm font-medium">
                    {work.originalPrice ? `${formatPrice(work.originalPrice)} original` : "Limited-edition prints"}
                  </span>
                  <Link href={`/gallery/${work.slug}`} className="text-xs uppercase tracking-[0.18em] text-[color:var(--muted)]">
                    View work
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
