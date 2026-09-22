import { SiteShell } from "@/components/site-shell";

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[color:var(--muted)]">Artist profile</p>
          <h1 className="font-serif text-5xl leading-none tracking-[-0.06em] md:text-7xl">
            Art shaped by rhythm, memory and texture.
          </h1>
        </div>

        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.03)]">
            <div
              className="h-[540px] rounded-[1.5rem] bg-cover bg-center"
              style={{ backgroundImage: "url('/bg-1.jpg')" }}
            />
          </div>

          <div className="space-y-6 text-base leading-8 text-[color:var(--muted)]">
            <p>
              TwalaWorks is a contemporary art practice rooted in expressive mark-making, tactile surfaces,
              and the emotional charge of everyday observation.
            </p>
            <p>
              Each work begins as a study in movement and material, exploring the tension between structure and
              freedom. The process is intentionally tactile, often layering texture, colour and gestural energy to
              create visual stories that feel personal and intimate.
            </p>
            <p>
              The goal is not simply to decorate a room, but to give it atmosphere, character and memory.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {[
            ["2019", "Started creating and sharing original works through digital channels."],
            ["2021", "Built a collector-focused practice with commissions and original series."],
            ["2025", "Preparing for a wider digital gallery, shopping and private viewing experience."],
          ].map(([year, copy]) => (
            <div key={year} className="border-t border-black/15 pt-5">
              <div className="mb-3 text-xs uppercase tracking-[0.24em] text-[color:var(--muted)]">{year}</div>
              <p className="text-base leading-7 text-[color:var(--ink)]">{copy}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
