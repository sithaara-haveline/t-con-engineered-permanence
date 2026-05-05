import { createFileRoute, Link } from "@tanstack/react-router";
import { products } from "@/lib/products";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products — T-CON Fibre Reinforced Concrete Spacers" },
      { name: "description", content: "Single, Double, Triple cover spacers, Wheel spacers and Rebar end caps. Click any product for full specifications." },
      { property: "og:title", content: "T-CON Products — Cover Spacers & Rebar Caps" },
      { property: "og:description", content: "Five products. One uncompromising standard." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <section className="relative bg-background pt-40 pb-16 grid-bg">
        <div className="mx-auto max-w-[1400px] px-6">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">— Catalogue · 05 products</p>
          <h1 className="mt-5 font-display text-7xl leading-[0.85] tracking-tight text-ink md:text-[10rem]">
            OUR <br/><span className="text-stroke">PRODUCTS.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-ink/70">Click any image to view full technical specifications and request a WhatsApp quote.</p>
        </div>
      </section>

      <section className="bg-background pb-32">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <Link to="/products/$slug" params={{ slug: p.slug }} className="group relative block overflow-hidden rounded-lg bg-paper transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <div className="absolute left-5 top-5 z-10 font-mono text-[10px] uppercase tracking-widest text-ink/50">0{i + 1} / 0{products.length}</div>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={p.image} alt={p.name} className="absolute inset-0 h-full w-full object-contain p-12 transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-x-0 bottom-0 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full" />
                </div>
                <div className="border-t border-ink/10 p-6">
                  <h3 className="font-display text-3xl tracking-wide text-ink">{p.name.toUpperCase()}</h3>
                  <p className="mt-2 text-sm text-ink/70">{p.tagline}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-ink/50">View specs</span>
                    <span className="text-primary transition-transform group-hover:translate-x-2">→</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <Marquee items={["EXTRA CARE FOR EXCELLENT CREATIONS", "ENGINEERED FOR PERMANENCE", "MADE IN KERALA · INDIA", "ISO 9001:2015"]} />
    </>
  );
}
