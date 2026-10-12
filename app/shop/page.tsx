import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { artworks, formatPrice } from "@/lib/artworks";

export default function ShopPage() {
  return (
    <SiteShell>
      <section className="art-grain mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-20">
        <p className="art-index mb-3">Collector portal / enquire</p>
        <h1 className="font-serif text-5xl leading-none tracking-[-0.06em] md:text-7xl">Available works</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--muted)]">
          Browse original works and limited-edition prints. Enquire with the studio for availability, delivery, and payment details.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {artworks.map((work) => (
            <article key={work.slug} className="group flex gap-5 border border-black/10 bg-white p-4 shadow-[0_18px_50px_rgba(0,0,0,0.03)] transition-transform duration-500 hover:-translate-y-1">
              <Link href={`/gallery/${work.slug}`} className="relative h-32 w-28 shrink-0 overflow-hidden bg-[#e9e2d8]">
                <Image src={work.image} alt={work.title} fill sizes="112px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </Link>
              <div className="flex min-w-0 flex-1 flex-col justify-between gap-3 py-1">
                <div>
                  <h2 className="font-serif text-2xl tracking-[-0.04em]">{work.title}</h2>
                  <p className="mt-1 text-sm text-[color:var(--muted)]">{work.originalSize ?? "Prints available"}</p>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm">{work.originalPrice ? formatPrice(work.originalPrice) : "Prints"}</span>
                  <Link href={`/gallery/${work.slug}`} className="text-xs uppercase tracking-[0.16em] text-[color:var(--muted)]">
                    Details
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
