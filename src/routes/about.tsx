import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useReducedAnim, dist, stagger } from "@/lib/motion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Why Us — TCON Industries" },
      { name: "description", content: "Why structural engineers choose TCON: certified, lab-tested, engineered for permanence." },
      { property: "og:title", content: "Why TCON" },
      { property: "og:description", content: "Extra care for excellent creations." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { reduce, mobile } = useReducedAnim();
  const benefits = ["Excellent Compatibility","Excellent Quality","Low Permeability","Save Cost & Time","High Compressive Strength","Adequate Tensile Strength","Fire & Weather Resistance","Material Strength & Uniformity"];
  const quote = "WE DON'T FILL GAPS. WE ELIMINATE WEAKNESS.".split(" ");
  const headlineLines: { text: string; from: number; cls?: string }[] = [
    { text: "EXTRA CARE.", from: -80 },
    { text: "EXCELLENT", from: 80, cls: "text-primary" },
    { text: "CREATIONS.", from: -80 },
  ];
  return (
    <>
      <section className="bg-background pt-40 pb-20 grid-bg overflow-x-hidden">
        <div className="mx-auto max-w-[1400px] px-6">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">— Our story</p>
          <h1 className="mt-5 font-display text-7xl leading-[0.85] tracking-tight text-ink md:text-[9rem]">
            {headlineLines.map((l, i) => (
              <motion.span
                key={i}
                className={`block ${l.cls ?? ""}`}
                style={{ willChange: "transform" }}
                initial={{ opacity: 0, x: dist(l.from, mobile, reduce) }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: i * stagger(0.15, mobile, reduce) }}
              >
                {l.text}
              </motion.span>
            ))}
          </h1>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 md:grid-cols-2">
          <Reveal>
            <p className="text-lg leading-relaxed text-ink/80">
              Trans Emirates Fibre Concrete Industries — known to engineers across India and the Middle East as <strong className="text-primary">TCON</strong> — manufactures extruded fibre-reinforced concrete spacers from our facility in Aluva, Kerala.
            </p>
            <p className="mt-5 text-ink/70">
              Originally founded as <em>Transco Spacers</em>, the brand underwent a strategic re-branding to <strong>TCON Spacers</strong> as part of our forward-looking growth into international markets — while retaining the same engineering team, formulation, and quality systems that earned the original name its reputation.
            </p>
            <p className="mt-5 text-ink/70">
              We are an ISO 9001:2015 certified company, supported by the Ministry of MSME, Government of India.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="glass rounded-xl p-8">
              <p className="font-mono text-xs uppercase tracking-widest text-primary">Quote</p>
              <p className="mt-5 font-display text-4xl leading-tight text-ink md:text-5xl">
                "{quote.map((w, i) => {
                  const stroke = ["FILL", "GAPS."].includes(w);
                  const red = w === "WEAKNESS.";
                  return (
                    <motion.span
                      key={i}
                      className={`inline-block mr-[0.25em] ${stroke ? "text-stroke" : ""} ${red ? "text-primary" : ""}`}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.5, ease: "easeOut", delay: i * stagger(0.06, mobile, reduce) }}
                    >
                      {w}
                    </motion.span>
                  );
                })}"
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <div className="font-display text-5xl text-primary"><CountUp to={9001} /></div>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-ink/60">ISO certified</p>
                </div>
                <div>
                  <div className="font-display text-5xl text-primary"><CountUp to={5} />+</div>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-ink/60">core products</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STAKES / COMPARISON */}
      <section className="bg-background py-24 md:py-28">
        <div className="mx-auto max-w-[1400px] px-6">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">— The stakes</p>
            <h2 className="mt-4 max-w-5xl font-display text-5xl leading-[0.95] tracking-tight text-ink md:text-7xl">
              THE SMALLEST COMPONENT.<br/><span className="text-stroke">THE BIGGEST RESPONSIBILITY.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-ink/70 md:text-lg">
              Don't compromise a multi-million dollar structure with an uncertified spacer.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-14 overflow-hidden rounded-2xl glass">
              <div className="grid grid-cols-2">
                <div className="bg-ink/5 px-6 py-5 md:px-10 md:py-7">
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/50">— Standard</p>
                  <h3 className="mt-2 font-display text-2xl tracking-wide text-ink/60 md:text-3xl">Standard Local Block</h3>
                </div>
                <div className="bg-ink px-6 py-5 md:px-10 md:py-7">
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">— Certified</p>
                  <h3 className="mt-2 font-display text-2xl tracking-wide text-paper md:text-3xl">TCON Certified Block</h3>
                </div>
              </div>
              {[
                ["Hand-cast, inconsistent mix", "Machine-extruded, ISO 9001:2015 controlled"],
                ["Unknown compressive grade", "M50+ verified, lab certified"],
                ["High porosity, moisture ingress", "0.45% water absorption — chloride resistant"],
                ["Plastic or steel — different thermal expansion", "Same thermal expansion as surrounding concrete — zero cold joints"],
                ["No compliance documentation", "BS 8500 / Eurocode 2 / ACI aligned, TDS available"],
              ].map(([l, r], i) => (
                <div key={i} className="grid grid-cols-2 border-t border-ink/10">
                  <div className="bg-ink/[0.03] px-6 py-5 text-sm text-ink/55 md:px-10 md:py-7 md:text-base">{l}</div>
                  <div className="bg-ink px-6 py-5 text-sm text-paper md:px-10 md:py-7 md:text-base">
                    <span className="mr-2 text-primary">✓</span>{r}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <p className="mx-auto mt-14 max-w-4xl text-center font-display text-3xl leading-tight tracking-tight text-ink md:text-5xl">
              When moisture reaches the steel, the structure fails. <span className="text-primary">TCON ensures it never does.</span>
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-center text-ink/70">
              Specified by structural engineers across India and the Middle East.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHY TCON */}
      <section className="bg-ink py-24 text-paper">
        <div className="mx-auto max-w-[1400px] px-6">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">— Why TCON</p>
            <h2 className="mt-4 font-display text-6xl tracking-tight md:text-8xl">ENGINEERED <br/><span className="text-primary">FOR PERMANENCE.</span></h2>
          </Reveal>
          <PermanenceGrid mobile={mobile} reduce={reduce} />
        </div>
      </section>

      <section className="bg-ink py-24 text-paper overflow-x-hidden">
        <div className="mx-auto max-w-[1400px] px-6">
          <Reveal>
            <h2 className="font-display text-5xl tracking-tight md:text-7xl">BENEFITS THAT <br/><span className="text-primary">COMPOUND.</span></h2>
          </Reveal>
          <div className="mt-12 grid gap-px bg-white/10 md:grid-cols-4">
            {benefits.map((b, i) => (
              <motion.div
                key={b}
                className="bg-ink p-8"
                initial={{ opacity: 0, x: dist(-30, mobile, reduce) }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: i * stagger(0.08, mobile, reduce) }}
              >
                <div className="font-mono text-[10px] uppercase tracking-widest text-primary">0{i + 1}</div>
                <p className="mt-4 font-display text-2xl leading-tight">{b.toUpperCase()}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function PermanenceGrid({ mobile, reduce }: { mobile: boolean; reduce: boolean }) {
  const items: [string, string][] = [
    ["Excellent Compatibility", "Same thermal coefficient as concrete — no differential stress, no micro-cracks."],
    ["High Compressive Strength", "M50+ rated. Withstands site abuse during placement and casting."],
    ["Fire & Weather Resistance", "Non-combustible mineral matrix. UV, frost, and humidity proof."],
    ["Low Permeability", "0.45% water absorption. Stops chloride ingress at the bar interface."],
    ["Cost & Time Saving", "Faster placement, fewer reworks. Lower total cost than plastic or PVC."],
    ["Material Uniformity", "Extruded process delivers identical density and dimensions, batch after batch."],
  ];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <div ref={ref} className="mt-16 grid gap-px bg-white/10 md:grid-cols-2">
      {items.map(([t, d], i) => (
        <motion.div
          key={t}
          className="group relative overflow-hidden bg-ink p-10"
          initial={{ opacity: 0, y: dist(40, mobile, reduce), rotate: reduce ? 0 : 1.5 }}
          animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: i * stagger(0.1, mobile, reduce) }}
          whileHover={reduce ? undefined : { y: -4, boxShadow: "0 30px 60px -20px rgba(0,0,0,0.6)" }}
        >
          <div className="pointer-events-none absolute -right-4 -top-6 font-display text-[8rem] leading-none text-paper/0 transition-all duration-500 group-hover:text-paper/[0.05] group-hover:scale-[4]">
            0{i + 1}
          </div>
          <div className="relative font-mono text-xs text-primary">0{i + 1}</div>
          <h3 className="relative mt-4 font-display text-3xl tracking-wide">{t}</h3>
          <p className="relative mt-3 text-sm leading-relaxed text-paper/65">{d}</p>
        </motion.div>
      ))}
    </div>
  );
}
