import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import heroImg from "@/assets/tcon-hero-products.png";
import taglineImg from "@/assets/tagline-creations.png";
import logoMark from "@/assets/tcon-logo-mark.png";
import aboutPile from "@/assets/about-spacers-pile.jpg";
import aboutSite from "@/assets/about-construction.jpg";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { products } from "@/lib/products";
import { useReducedAnim, dist, stagger } from "@/lib/motion";

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
  const [scrollY, setScrollY] = useState(0);
  const wideRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [wideProgress, setWideProgress] = useState(0);
  const { reduce, mobile } = useReducedAnim();
  const headline = ["WHERE", "VISION", "MEETS", "STRUCTURE."];
  const headlineDone = 0.3 + headline.length * 0.08 + 0.6; // last word ends ~ start+0.6

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
      const el = wideRef.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const total = rect.height + vh;
        const passed = Math.min(Math.max(vh - rect.top, 0), total);
        setWideProgress(passed / total);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // iOS Safari: force-mute and attempt autoplay so the play overlay never appears.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;
    v.setAttribute("muted", "");
    v.setAttribute("playsinline", "");
    v.setAttribute("webkit-playsinline", "");
    const tryPlay = () => v.play().catch(() => {});
    tryPlay();
    const onTouch = () => { tryPlay(); document.removeEventListener("touchstart", onTouch); };
    document.addEventListener("touchstart", onTouch, { passive: true });
    return () => document.removeEventListener("touchstart", onTouch);
  }, []);

  return (
    <>
      {/* HERO — cinematic video */}
      <section className="relative min-h-[100svh] w-full overflow-hidden bg-ink">
        <video
          ref={videoRef}
          src="/tcon-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disableRemotePlayback
          {...({ "x5-playsinline": "true", "webkit-playsinline": "true" } as Record<string, string>)}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ transform: `scale(${1 + Math.min(scrollY, 800) * 0.0004})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ink/55 via-ink/25 to-ink/75" />
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-15" />

        <div className="absolute left-8 top-28 z-10 hidden md:block">
          <div className="glass-dark rounded-full px-4 py-2 font-mono text-[10px] uppercase tracking-[0.4em] text-paper/90">// fibre reinforced concrete · kerala</div>
        </div>
        <div className="absolute right-8 top-28 z-10 hidden md:block">
          <div className="glass-dark rounded-full px-4 py-2 font-mono text-[10px] uppercase tracking-[0.4em] text-paper/90">iso 9001:2015</div>
        </div>

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-6 pb-28 pt-40">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div className="max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-primary" style={{ animation: "fade-up 1s both" }}>— TCON · Fibre Concrete Spacers</p>
            <h1 className="mt-5 font-display text-6xl leading-[0.92] tracking-tight text-paper md:text-[7rem]">
              <span className="flex flex-wrap gap-x-[0.25em]">
                {headline.map((w, i) => (
                  <span key={i} className="inline-block overflow-hidden pb-[0.05em]">
                    <motion.span
                      className={`inline-block ${w === "MEETS" ? "text-primary" : ""}`}
                      style={{ willChange: "transform" }}
                      initial={{ y: reduce ? 0 : "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: reduce ? 0 : 0.3 + i * stagger(0.08, mobile, false) }}
                      onAnimationComplete={(e: any) => { e && (e.willChange = "auto"); }}
                    >
                      {w}
                    </motion.span>
                  </span>
                ))}
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-paper/80 md:text-lg" style={{ animation: "fade-up 1s 0.3s both" }}>
              Engineered cover blocks and rebar spacers built to outlast the structures they protect. Extra care for excellent creations.
            </p>
            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: reduce ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: reduce ? 0 : headlineDone + 0.1 }}
            >
              <Link to="/products" className="glass rounded-full px-7 py-4 text-sm font-semibold uppercase tracking-widest text-ink transition hover:scale-105">Explore Products →</Link>
              <a href="https://wa.me/919048711001" target="_blank" rel="noreferrer" className="rounded-full border border-paper/40 px-7 py-4 text-sm font-semibold uppercase tracking-widest text-paper backdrop-blur-md transition hover:bg-paper hover:text-ink">Talk to us</a>
            </motion.div>
          </div>
          <motion.img
            src={logoMark}
            alt="TCON"
            className="hidden md:block h-[18rem] lg:h-[22rem] w-auto object-contain drop-shadow-[0_20px_50px_rgba(204,0,0,0.35)]"
            initial={{ opacity: 0, scale: reduce ? 1 : 0.6, rotate: reduce ? 0 : -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: reduce ? 0 : 0.6 }}
          />
          </div>

          <div className="mt-16 grid max-w-3xl grid-cols-3 gap-4">
            {[[10,"Years"],[50,"Trusted Clients"],[6,"Countries Served"]].map(([n,l]) => (
              <div key={l as string} className="glass-dark rounded-xl px-5 py-4">
                <div className="font-display text-3xl text-paper md:text-4xl">
                  <CountUp to={n as number} suffix="+" duration={1500} />
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-paper/60">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-6 z-10 flex justify-center">
          <div className="glass-dark rounded-full px-6 py-2 font-mono text-[11px] uppercase tracking-[0.35em] text-paper/90">
            <span className="text-primary">●</span> &nbsp;extra care for excellent creations
          </div>
        </div>
      </section>

      {/* PRODUCT LINEUP — original hero image stays in the site */}
      <section className="relative overflow-hidden bg-background py-24">
        <div className="pointer-events-none absolute -left-32 top-1/3 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="mx-auto max-w-[1400px] px-6">
          <Reveal>
            <p className="text-center font-mono text-xs uppercase tracking-[0.35em] text-primary">— Our complete range</p>
            <h2 className="mt-4 text-center font-display text-5xl leading-[0.9] tracking-tight text-ink md:text-7xl">FIVE BLOCKS. <span className="text-stroke">ONE STANDARD.</span></h2>
          </Reveal>
          <Reveal variant="scale" delay={150}>
            <img src={heroImg} alt="TCON spacer lineup" className="mx-auto mt-12 w-full max-w-5xl drop-shadow-2xl animate-float-slow" />
          </Reveal>
        </div>
      </section>

      {/* ABOUT */}
      <section className="relative bg-background py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid items-center gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-5" variant="left">
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
                <div className="overflow-hidden rounded-lg tilt-card">
                  <img src={aboutPile} alt="TCON spacer production" className="h-48 w-full object-cover transition duration-700 hover:scale-110" />
                </div>
                <div className="overflow-hidden rounded-lg tilt-card">
                  <img src={aboutSite} alt="On-site construction" className="h-48 w-full object-cover transition duration-700 hover:scale-110" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WIDE SCROLL IMAGE — full-width reveal */}
      <section ref={wideRef} className="relative h-[180vh] w-full bg-ink">
        <div
          className="sticky top-0 h-screen w-full overflow-hidden"
          style={{ clipPath: `inset(${Math.max(0, (1 - wideProgress * 2.6) * 50)}% 0 ${Math.max(0, (1 - wideProgress * 2.6) * 50)}% 0)` }}
        >
          <img
            src={aboutPile}
            alt="TCON production line"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ transform: `scale(${1.1 + wideProgress * 0.2}) translateY(${(0.5 - wideProgress) * -40}px)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-ink/50" />
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div
              className="text-center"
              style={{ opacity: Math.min(1, Math.max(0, (wideProgress - 0.25) * 2.5)), transform: `translateY(${(0.5 - wideProgress) * 80}px)` }}
            >
              <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary">— Production · Aluva, Kerala</p>
              <h2 className="mt-4 font-display text-5xl leading-[0.9] tracking-tight text-paper md:text-8xl">EVERY BLOCK,<br/><span className="text-primary">EXTRUDED.</span> TESTED.</h2>
              <div className="mx-auto mt-8 inline-block glass-dark rounded-full px-6 py-3 font-mono text-[11px] uppercase tracking-[0.35em] text-paper/90">Thousands a day · Identical · Verified</div>
            </div>
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

      {/* WHY US LINK */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-[1400px] px-6 text-center">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">— The full story</p>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl leading-tight tracking-tight text-ink md:text-6xl">
              SEE WHY ENGINEERS CHOOSE <span className="text-primary">TCON.</span>
            </h2>
            <div className="mt-8">
              <Link to="/about" className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-semibold uppercase tracking-widest text-paper transition hover:bg-primary">
                Why us? →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* COMPACT REQUEST TDS */}
      <section className="bg-background pb-28">
        <div className="mx-auto max-w-[1100px] px-6">
          <Reveal>
            <div className="glass rounded-2xl p-10 text-center md:p-14">
              <p className="font-display text-3xl leading-tight tracking-tight text-ink md:text-4xl">
                Every batch lab-tested. <span className="text-primary">TDS available on request.</span>
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://wa.me/919048711001?text=Hi%20TCON%2C%20I%27d%20like%20to%20request%20your%20Technical%20Data%20Sheet."
                  target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition hover:scale-105"
                >
                  Request Technical Data Sheet
                </a>
                <Link
                  to="/test-parameters"
                  className="inline-flex items-center gap-2 rounded-full border border-ink px-7 py-4 text-sm font-semibold uppercase tracking-widest text-ink transition hover:bg-ink hover:text-paper"
                >
                  View Test Parameters →
                </Link>
              </div>
            </div>
          </Reveal>
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
