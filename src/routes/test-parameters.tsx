import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/test-parameters")({
  head: () => ({
    meta: [
      { title: "Test Parameters — T-CON Spacers" },
      { name: "description", content: "Independently tested. Compressive strength, water absorption, sulphate, chloride, and more." },
      { property: "og:title", content: "T-CON Test Parameters — Verified Performance" },
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
  return (
    <>
      <section className="bg-background pt-40 pb-16 grid-bg">
        <div className="mx-auto max-w-[1400px] px-6">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">— Verified performance</p>
          <h1 className="mt-5 font-display text-7xl leading-[0.85] tracking-tight text-ink md:text-[9rem]">TEST <br/>PARAMETERS.</h1>
          <p className="mt-8 max-w-2xl text-ink/70">Independent laboratory results. The numbers below are why T-CON spacers are specified on critical infrastructure projects worldwide.</p>
        </div>
      </section>

      <section className="bg-background pb-32">
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
                    <tr key={k} className="border-t border-ink/10 transition-colors hover:bg-paper" style={{ animation: `fade-up 0.5s ${i * 60}ms both` }}>
                      <td className="px-6 py-5 text-sm text-ink">{k}</td>
                      <td className="px-6 py-5 text-sm font-medium text-primary">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
