import { SiteShell } from "@/components/site-shell";

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[color:var(--muted)]">Contact</p>
          <h1 className="font-serif text-5xl leading-none tracking-[-0.06em] md:text-7xl">
            Enquire about a piece or private viewing.
          </h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-black/10 bg-[#f4efe8] p-8">
            <div className="mb-5 text-xs uppercase tracking-[0.24em] text-[color:var(--muted)]">Collector inquiries</div>
            <p className="mb-8 text-base leading-7 text-[color:var(--muted)]">
              For commissions, original works, or private appointments, send a message and the studio will get back to you soon.
            </p>
            <ul className="space-y-4 text-sm text-[color:var(--ink)]">
              <li>• Instagram / TikTok collaborations</li>
              <li>• Original artwork requests</li>
              <li>• Domestic and international delivery</li>
            </ul>
          </div>

          <form className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.03)] md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block text-sm text-[color:var(--muted)]">
                Name
                <input className="mt-2 w-full border border-black/10 bg-stone-50 px-4 py-3 text-[color:var(--ink)] outline-none transition focus:border-black" placeholder="Your name" />
              </label>
              <label className="block text-sm text-[color:var(--muted)]">
                Email
                <input className="mt-2 w-full border border-black/10 bg-stone-50 px-4 py-3 text-[color:var(--ink)] outline-none transition focus:border-black" placeholder="you@example.com" />
              </label>
            </div>

            <label className="mt-5 block text-sm text-[color:var(--muted)]">
              Enquiry type
              <select className="mt-2 w-full border border-black/10 bg-stone-50 px-4 py-3 text-[color:var(--ink)] outline-none transition focus:border-black">
                <option>Original artwork</option>
                <option>Framed piece</option>
                <option>Commission</option>
                <option>Private viewing</option>
              </select>
            </label>

            <label className="mt-5 block text-sm text-[color:var(--muted)]">
              Message
              <textarea className="mt-2 min-h-36 w-full border border-black/10 bg-stone-50 px-4 py-3 text-[color:var(--ink)] outline-none transition focus:border-black" placeholder="Tell me about the artwork you have in mind..." />
            </label>

            <button
              type="button"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[color:var(--ink)] px-5 py-3 text-xs font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-[color:var(--gold)] hover:text-[color:var(--ink)]"
            >
              Send enquiry
            </button>
          </form>
        </div>
      </section>
    </SiteShell>
  );
}
