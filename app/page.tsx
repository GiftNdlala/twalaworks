import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

const featuredWorks = [
  { title: "Sunlit Bloom", detail: "Mixed media / 90 x 90 cm" },
  { title: "Night Drift", detail: "Acrylic on canvas / 120 x 90 cm" },
  { title: "Quiet Geometry", detail: "Ink and pigment / 80 x 80 cm" },
];

export default function Home() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden bg-[color:var(--paper)]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1.05fr_0.95fr] md:items-center md:px-8 md:py-16">
          <div className="order-2 md:order-1">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
              Contemporary art by Thando Twala
            </p>
            <h1 className="max-w-xl text-5xl leading-[0.9] tracking-[-0.06em] text-[color:var(--ink)] md:text-7xl">
              Original works with presence, texture and soul.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[color:var(--muted)]">
              TwalaWorks curates expressive contemporary pieces for collectors, thoughtful spaces,
              and modern interiors looking for work that feels personal and lasting.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/gallery"
                className="inline-flex items-center justify-center rounded-full bg-[color:var(--ink)] px-5 py-3 text-xs font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-[color:var(--gold)] hover:text-[color:var(--ink)]"
              >
                View collection
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-black/15 px-5 py-3 text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--ink)] transition-colors hover:bg-black hover:text-white"
              >
                Book a viewing
              </Link>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white p-3 shadow-[0_30px_70px_rgba(0,0,0,0.08)]">
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/bg-1.jpg"
                  alt="Featured artwork from TwalaWorks"
                  width={900}
                  height={1200}
                  priority
                  className="h-[540px] w-full object-cover md:h-[650px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[color:var(--muted)]">Featured</p>
            <h2 className="font-serif text-5xl leading-none tracking-[-0.05em] md:text-6xl">Signature works</h2>
          </div>
          <Link href="/gallery" className="hidden text-sm uppercase tracking-[0.2em] text-[color:var(--muted)] md:inline-block">
            Explore more
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredWorks.map((work, index) => (
            <article key={work.title} className="overflow-hidden border border-black/10 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.03)]">
              <div
                className="h-72 bg-cover bg-center"
                style={{
                  backgroundImage:
                    index === 0
                      ? "url('/bg-1.jpg')"
                      : index === 1
                        ? "url('/bg-2.jpg')"
                        : "linear-gradient(rgba(0,0,0,0.08), rgba(0,0,0,0.08)), url('/logo.jpg')",
                }}
              />
              <div className="space-y-2 p-5">
                <h3 className="font-serif text-3xl tracking-[-0.05em]">{work.title}</h3>
                <p className="text-sm leading-6 text-[color:var(--muted)]">{work.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f1eadf] py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.95fr_1.05fr] md:px-8">
          <div className="rounded-[2rem] border border-black/10 bg-white p-4 shadow-[0_18px_40px_rgba(0,0,0,0.04)]">
            <Image src="/logo.jpg" alt="TwalaWorks signature mark" width={700} height={700} className="h-full w-full rounded-[1.5rem] object-cover" />
          </div>

          <div className="flex flex-col justify-center">
            <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[color:var(--muted)]">Artist ethos</p>
            <h2 className="font-serif text-5xl leading-none tracking-[-0.05em] md:text-6xl">
              A practice rooted in movement, feeling and material.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-[color:var(--muted)]">
              The studio explores texture, rhythm and expression in equal measure — creating original pieces that feel both intimate and architectural.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex w-fit items-center justify-center rounded-full border border-black/15 px-5 py-3 text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--ink)] transition-colors hover:bg-black hover:text-white"
            >
              Read more about the artist
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
