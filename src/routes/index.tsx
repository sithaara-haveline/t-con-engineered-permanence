import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/tcon-hero-products.png";
import taglineImg from "@/assets/tagline-creations.png";
import aboutPile from "@/assets/about-spacers-pile.jpg";
import aboutSite from "@/assets/about-construction.jpg";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { products } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TCON — Extra care for excellent creations" },
      { name: "description", content: "Fibre reinforced concrete spacers — engineered for permanence. ISO 9001:2015 certified, made in Kerala, India." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* HERO — pure product, no headings */}
      <section ref={heroRef} className="relative min-h-[100svh] w-full overflow-hidden bg-background grid-bg">
        {/* faint floating geometric accents */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-1/4 h-[420px] w-[420px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-[520px] w-[520px] rounded-full bg-ink/5 blur-3xl" />
          <div className="absolute left-10 top-28 font-mono text-[10px] uppercase tracking-[0.4em] text-ink/40">// fibre reinforced concrete · est. kerala</div>
          <div className="absolute right-10 top-28 font-mono text-[10px] uppercase tracking-[0.4em] text-ink/40">iso 9001:2015 — verified</div>
          <div className="absolute left-10 bottom-10 font-mono text-[10px] uppercase tracking-[0.4em] text-ink/40">scroll ↓</div>
          <div className="absolute right-10 bottom-10 font-mono text-[10px] uppercase tracking-[0.4em] text-ink/40">extra care · excellent creations</div>
        </div>

        {/* huge faint backdrop type */}
        <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center font-display text-[28vw] leading-none tracking-tighter text-ink/[0.04]">
          TCON
        </div>

        <div className="relative z-10 flex min-h-[100svh] items-center justify-center px-6">
          <img
            src={heroImg}
            alt="TCON fibre reinforced concrete spacers"
            className="max-h-[78svh] w-auto object-contain drop-shadow-2xl"
            style={{ transform: `translateY(${scrollY * -0.15}px) scale(${1 - Math.min(scrollY, 600) * 0.0003})` }}
          />
        </div>

        {/* glass tagline pill bottom */}
        <div className="absolute inset-x-0 bottom-10 z-10 flex justify-center px-6">
          <div className="glass rounded-full px-6 py-2.5 font-mono text-[11px] uppercase tracking-[0.35em] text-ink">
            <span className="text-primary">●</span> &nbsp;extra care for excellent creations
          </div>
        </div>
      </section>

      {/* ABOUT — directly under hero */}
      <section className="relative bg-background py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid items-center gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-5">
              <img src={taglineImg} alt="Extra care for excellent creations" className="w-full max-w-md mx-auto" />
            </Reveal>
            <Reveal className="md:col-span-7" delay={150}>
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">— About TCON</p>
              <h2 className="mt-5 font-display text-5xl leading-[0.95] tracking-tight text-ink md:text-6xl">
                BUILT IN KERALA. <br/><span className="text-stroke">TRUSTED WORLDWIDE.</span>
              </h2>
              <div className="mt-6 space-y-5 text-ink/75 md:text-lg">
                <p>TCON Industries manufactures fibre reinforced concrete cover blocks and rebar spacers engineered to outlast the structures they protect. Every block is extruded under ISO 9001:2015 controls, tested for compressive strength, water absorption and chloride content.</p>
                <p>Our spacers share the same thermal expansion as the surrounding concrete — eliminating the hairline failure points introduced by plastic and steel. Specified by infrastructure, marine and high-rise contractors across India and abroad.</p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="overflow-hidden rounded-lg">
                  <img src={aboutPile} alt="TCON spacer production" className="h-48 w-full object-cover transition hover:scale-105" />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <img src={aboutSite} alt="On-site construction" className="h-48 w-full object-cover transition hover:scale-105" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Marquee dark items={[
        "ISO 9001:2015 CERTIFIED",
        "M50+ COMPRESSIVE STRENGTH",
        "MADE IN INDIA",
        "GLOBAL SUPPLY",
        "MSME RECOGNIZED",
        "ZERO WEAK POINTS",
        "FIRE & WEATHER RESISTANT",
      ]} />

      {/* INTRO */}
      <section className="relative bg-background py-28 md:py-40">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">— Who we are</p>
            <h2 className="mt-6 font-display text-6xl leading-[0.9] tracking-tight text-ink md:text-7xl">
              WE DON'T <br /><span className="text-stroke">FILL GAPS.</span><br />WE ELIMINATE <span className="text-primary">WEAKNESS.</span>
            </h2>
          </Reveal>
          <Reveal className="md:col-span-7" delay={150}>
            <div className="space-y-6 text-base leading-relaxed text-ink/75 md:text-lg">
              <p>TCON Spacers are extruded fibre-reinforced concrete blocks engineered to share the same thermal expansion as the structure they protect — eliminating the potential failure points that plastic or steel spacers introduce.</p>
              <p>Sulphate resistant. Chloride resistant. Fire resistant. Built to last as long as the concrete around them — because they <em className="text-primary not-italic">are</em> concrete.</p>
              <p className="font-mono text-sm">Trusted across infrastructure, precast, marine, and high-rise projects.</p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { v: 50, s: "+", l: "N/mm² strength" },
                { v: 0.45, s: "%", d: 2, l: "water absorption" },
                { v: 0.003, s: "%", d: 3, l: "salt content" },
              ].map((s, i) => (
                <div key={i} className="glass rounded-md p-5">
                  <div className="font-display text-4xl text-primary md:text-5xl">
                    <CountUp to={s.v} suffix={s.s} decimals={s.d ?? 0} />
                  </div>
                  <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-ink/60">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRODUCT TEASER */}
      <section className="relative overflow-hidden bg-paper py-28">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="flex items-end justify-between">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">— Catalogue</p>
              <h2 className="mt-4 font-display text-6xl tracking-tight text-ink md:text-8xl">FIVE PRODUCTS.<br/>ONE STANDARD.</h2>
            </Reveal>
            <Reveal delay={200}>
              <Link to="/products" className="hidden items-center gap-3 rounded-full border border-ink px-6 py-3 text-xs font-semibold uppercase tracking-widest text-ink transition hover:bg-ink hover:text-paper md:inline-flex">
                View full catalogue →
              </Link>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {products.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 120}>
                <Link to="/products/$slug" params={{ slug: p.slug }} className="group block">
                  <div className="relative aspect-square overflow-hidden rounded-lg bg-bone">
                    <img src={p.image} alt={p.name} className="h-full w-full object-contain p-10 transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-widest text-ink/50">0{i + 1}</div>
                  </div>
                  <div className="mt-5">
                    <h3 className="font-display text-3xl tracking-wide text-ink">{p.name.toUpperCase()}</h3>
                    <div className="relative mt-1 h-[2px] w-12 bg-primary transition-all duration-500 group-hover:w-32" />
                    <p className="mt-3 text-sm text-ink/70">{p.tagline}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center md:hidden">
            <Link to="/products" className="inline-flex items-center gap-3 rounded-full border border-ink px-6 py-3 text-xs font-semibold uppercase tracking-widest text-ink">View all →</Link>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-ink py-28 text-paper">
        <div className="mx-auto max-w-[1400px] px-6">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">— Why TCON</p>
            <h2 className="mt-4 font-display text-6xl tracking-tight md:text-8xl">ENGINEERED <br/><span className="text-primary">FOR PERMANENCE.</span></h2>
          </Reveal>
          <div className="mt-16 grid gap-px bg-white/10 md:grid-cols-2">
            {[
              ["Excellent Compatibility", "Same thermal coefficient as concrete — no differential stress, no micro-cracks."],
              ["High Compressive Strength", "M50+ rated. Withstands site abuse during placement and casting."],
              ["Fire & Weather Resistance", "Non-combustible mineral matrix. UV, frost, and humidity proof."],
              ["Low Permeability", "0.45% water absorption. Stops chloride ingress at the bar interface."],
              ["Cost & Time Saving", "Faster placement, fewer reworks. Lower total cost than plastic or PVC."],
              ["Material Uniformity", "Extruded process delivers identical density and dimensions, batch after batch."],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 80} className="bg-ink p-10">
                <div className="font-mono text-xs text-primary">0{i + 1}</div>
                <h3 className="mt-4 font-display text-3xl tracking-wide">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/65">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-28">
        <div className="mx-auto max-w-[1400px] px-6 text-center">
          <Reveal>
            <h2 className="mx-auto max-w-4xl font-display text-5xl leading-[0.9] tracking-tight text-ink md:text-7xl">
              READY TO BUILD<br/>WITH <span className="text-primary">CONFIDENCE?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-ink/70">Talk to our team for technical specs, samples, or a project quote — direct on WhatsApp.</p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a href="https://wa.me/919048711001?text=Hi%20TCON%2C%20I%27d%20like%20a%20quote." target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition hover:scale-105">Get a quote on WhatsApp</a>
              <Link to="/products" className="inline-flex items-center gap-2 rounded-full border border-ink px-7 py-4 text-sm font-semibold uppercase tracking-widest text-ink transition hover:bg-ink hover:text-paper">Browse products</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
