import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
];

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[color:var(--paper)] text-[color:var(--ink)]">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[color:var(--paper)]/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
          <Link href="/" className="flex items-center gap-3 text-left">
            <div className="overflow-hidden rounded-full border border-black/20 bg-white p-1 shadow-sm">
              <Image
                src="/logo.jpg"
                alt="TwalaWorks logo"
                width={48}
                height={48}
                className="h-10 w-10 rounded-full object-cover"
              />
            </div>
            <div>
              <div className="font-serif text-2xl leading-none tracking-[-0.05em] text-[color:var(--ink)]">
                TwalaWorks
              </div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-[color:var(--muted)]">
                Contemporary art
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm uppercase tracking-[0.18em] text-[color:var(--muted)] transition-colors hover:text-[color:var(--ink)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-[color:var(--ink)] bg-[color:var(--ink)] px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-transparent hover:text-[color:var(--ink)]"
          >
            Book a viewing
          </Link>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-black/10 bg-[#f3efe8]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 md:grid-cols-3 md:px-8">
          <div>
            <div className="mb-3 font-serif text-3xl tracking-[-0.05em]">TwalaWorks</div>
            <p className="max-w-xs text-sm leading-6 text-[color:var(--muted)]">
              Original contemporary works for thoughtful interiors and collector spaces.
            </p>
          </div>

          <div>
            <div className="mb-3 text-xs uppercase tracking-[0.24em] text-[color:var(--muted)]">
              Visit
            </div>
            <ul className="space-y-2 text-sm text-[color:var(--ink)]">
              <li>Johannesburg</li>
              <li>By appointment</li>
              <li>Worldwide shipping</li>
            </ul>
          </div>

          <div>
            <div className="mb-3 text-xs uppercase tracking-[0.24em] text-[color:var(--muted)]">
              Connect
            </div>
            <ul className="space-y-2 text-sm text-[color:var(--ink)]">
              <li>Instagram</li>
              <li>TikTok</li>
              <li>hello@twalaworks.com</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
