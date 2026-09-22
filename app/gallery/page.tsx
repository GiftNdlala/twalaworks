import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

const works = [
  { title: "Sunlit Bloom", size: "90 x 90 cm", type: "Mixed media" },
  { title: "Night Drift", size: "120 x 90 cm", type: "Acrylic on canvas" },
  { title: "Quiet Geometry", size: "80 x 80 cm", type: "Ink and pigment" },
  { title: "Copper Form", size: "100 x 120 cm", type: "Textured study" },
  { title: "Soft Current", size: "70 x 100 cm", type: "Framed work" },
  { title: "Velvet Silence", size: "110 x 140 cm", type: "Original painting" },
];

export default function GalleryPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[color:var(--muted)]">Collection</p>
            <h1 className="font-serif text-5xl leading-none tracking-[-0.06em] md:text-7xl">
              Selected works
            </h1>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-black/15 px-5 py-3 text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--ink)] transition-colors hover:bg-black hover:text-white"
          >
            Enquire about originals
          </Link>
        </div>

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {works.map((work, index) => (
            <article
              key={work.title}
              className="group overflow-hidden border border-black/10 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.03)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div
                className="relative h-80 overflow-hidden bg-cover bg-center"
                style={{
                  backgroundImage:
                    index % 2 === 0
                      ? "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url('/bg-1.jpg')"
                      : "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url('/bg-2.jpg')",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="space-y-3 p-5">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="font-serif text-3xl tracking-[-0.05em]">{work.title}</h2>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[color:var(--muted)]">
                    {work.size}
                  </span>
                </div>
                <p className="text-sm text-[color:var(--muted)]">{work.type}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
