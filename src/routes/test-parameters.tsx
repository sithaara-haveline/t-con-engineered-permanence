import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";
import { useReducedAnim, dist, stagger } from "@/lib/motion";

export const Route = createFileRoute("/test-parameters")({
  head: () => ({
    meta: [
      { title: "Test Parameters — TCON Spacers" },
      { name: "description", content: "Independently tested. Compressive strength, water absorption, sulphate, chloride, and more." },
      { property: "og:title", content: "TCON Test Parameters — Verified Performance" },
      { property: "og:description", content: "Compressive strength M50+, water absorption 0.45%, salt content 0.003%." },
    ],
  }),
  component: TestParamsPage,
});

const rows: Array<[string, string]> = [
  ["Compressive Strength", "Not less than M50"],
  ["Water Absorption", "0.45%"],
  ["Sulphate Content", "0.23% by mass of cement"],
  ["Chloride Content", "0.12 kg/m³"],
  ["Rapid Chloride Penetration", "Very Low"],
  ["Water Penetration", "0.67 mm"],
  ["Chloride Migration Coefficient", "2.2 × 10⁻¹² m²/sec"],
  ["Alkali Silica Reactivity", "Harmless"],
  ["Salt Content", "0.003%"],
];

function TestParamsPage() {
  const { reduce, mobile } = useReducedAnim();
  return (
    <>
      <section className="bg-background pt-40 pb-16 grid-bg">
        <div className="mx-auto max-w-[1400px] px-6">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">— Verified performance</p>
          <h1 className="mt-5 font-display text-7xl leading-[0.85] tracking-tight text-ink md:text-[9rem]">TEST <br/>PARAMETERS.</h1>
          <p className="mt-8 max-w-2xl text-ink/70">Independent laboratory results. The numbers below are why TCON spacers are specified on critical infrastructure projects worldwide.</p>
        </div>
      </section>

      <section className="bg-background pb-32 overflow-x-hidden">
        <div className="mx-auto max-w-[1100px] px-6">
          <Reveal>
            <div className="overflow-hidden rounded-lg border border-ink/15">
              <table className="w-full font-mono">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="px-6 py-5 text-left text-xs uppercase tracking-widest">Test Parameter</th>
                    <th className="px-6 py-5 text-left text-xs uppercase tracking-widest">Result</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map(([k, v], i) => (
                    <motion.tr
                      key={k}
                      className="border-t border-ink/10 transition-colors hover:bg-paper"
                      initial={{ opacity: 0, x: dist(-40, mobile, reduce) }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ duration: 0.5, ease: "easeOut", delay: i * stagger(0.06, mobile, reduce) }}
                    >
                      <td className="px-6 py-5 text-sm text-ink">{k}</td>
                      <motion.td
                        className="px-6 py-5 text-sm font-medium text-primary"
                        initial={{ backgroundColor: "rgba(204,0,0,0)", color: "var(--color-primary)" }}
                        whileInView={reduce ? {} : {
                          backgroundColor: ["rgba(204,0,0,0)", "rgba(204,0,0,0.85)", "rgba(204,0,0,0)"],
                          color: ["var(--color-primary)", "#ffffff", "var(--color-primary)"],
                        }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.55, ease: "easeOut", delay: i * stagger(0.06, mobile, reduce) + 0.25, times: [0, 0.45, 1] }}
                      >
                        {v}
                      </motion.td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/919048711001?text=Hi%20TCON%2C%20I%27d%20like%20to%20request%20your%20Technical%20Data%20Sheet."
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition hover:scale-105"
              >
                Request Technical Data Sheet
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
