import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — TCON Industries" },
      { name: "description", content: "TCON, formerly Transco Spacers — ISO 9001:2015 certified manufacturer of fibre reinforced concrete spacers from Kerala, India." },
      { property: "og:title", content: "About TCON" },
      { property: "og:description", content: "Extra care for excellent creations." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-background pt-40 pb-20 grid-bg">
        <div className="mx-auto max-w-[1400px] px-6">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">— Our story</p>
          <h1 className="mt-5 font-display text-7xl leading-[0.85] tracking-tight text-ink md:text-[9rem]">EXTRA CARE.<br/><span className="text-primary">EXCELLENT</span><br/>CREATIONS.</h1>
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
              <p className="mt-5 font-display text-4xl leading-tight text-ink md:text-5xl">"WE DON'T <span className="text-stroke">FILL GAPS.</span> WE ELIMINATE <span className="text-primary">WEAKNESS.</span>"</p>
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

      <section className="bg-ink py-24 text-paper">
        <div className="mx-auto max-w-[1400px] px-6">
          <Reveal>
            <h2 className="font-display text-5xl tracking-tight md:text-7xl">BENEFITS THAT <br/><span className="text-primary">COMPOUND.</span></h2>
          </Reveal>
          <div className="mt-12 grid gap-px bg-white/10 md:grid-cols-4">
            {["Excellent Compatibility","Excellent Quality","Low Permeability","Save Cost & Time","High Compressive Strength","Adequate Tensile Strength","Fire & Weather Resistance","Material Strength & Uniformity"].map((b, i) => (
              <Reveal key={b} delay={i * 60} className="bg-ink p-8">
                <div className="font-mono text-[10px] uppercase tracking-widest text-primary">0{i + 1}</div>
                <p className="mt-4 font-display text-2xl leading-tight">{b.toUpperCase()}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
