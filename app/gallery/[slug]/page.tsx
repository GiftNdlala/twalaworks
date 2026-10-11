import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { artworks, formatPrice, getArtwork } from "@/lib/artworks";

export function generateStaticParams() {
  return artworks.map((artwork) => ({ slug: artwork.slug }));
}

export default async function ArtworkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const artwork = getArtwork(slug);

  if (!artwork) {
    notFound();
  }

  return (
    <SiteShell>
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:py-16">
        <div className="relative min-h-[520px] overflow-hidden bg-[#e9e2d8] md:min-h-[720px]">
          <Image
            src={artwork.image}
            alt={artwork.title}
            fill
            sizes="(min-width: 768px) 55vw, 100vw"
            className="object-contain"
            priority
          />
        </div>

        <div className="flex flex-col justify-center">
          <Link href="/gallery" className="mb-8 text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
            ← Back to gallery
          </Link>
          <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[color:var(--muted)]">Original work</p>
          <h1 className="font-serif text-5xl leading-none tracking-[-0.06em] md:text-7xl">{artwork.title}</h1>
          <dl className="mt-8 grid gap-5 border-y border-black/10 py-6 text-sm">
            {artwork.originalSize && (
              <div className="flex justify-between gap-6">
                <dt className="text-[color:var(--muted)]">Size</dt>
                <dd>{artwork.originalSize}</dd>
              </div>
            )}
            <div className="flex justify-between gap-6">
              <dt className="text-[color:var(--muted)]">Medium</dt>
              <dd className="text-right">{artwork.medium}</dd>
            </div>
            {artwork.originalPrice && (
              <div className="flex justify-between gap-6">
                <dt className="text-[color:var(--muted)]">Original</dt>
                <dd>{formatPrice(artwork.originalPrice)}</dd>
              </div>
            )}
          </dl>

          {artwork.note && <p className="mt-6 text-sm text-[color:var(--muted)]">{artwork.note}</p>}

          <div className="mt-8">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">Print options</p>
            <div className="divide-y divide-black/10 border-y border-black/10">
              {artwork.prints.map((print) => (
                <div key={print.size} className="flex items-center justify-between gap-6 py-4 text-sm">
                  <span>{print.size}</span>
                  <span>{formatPrice(print.price)}</span>
                </div>
              ))}
            </div>
          </div>

          <Link
            href={`/contact?artwork=${encodeURIComponent(artwork.title)}`}
            className="mt-8 inline-flex w-fit items-center justify-center rounded-full bg-[color:var(--ink)] px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-[color:var(--gold)] hover:text-[color:var(--ink)]"
          >
            Enquire about this work
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
