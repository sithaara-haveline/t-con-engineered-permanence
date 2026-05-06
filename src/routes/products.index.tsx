import { createFileRoute, Link } from "@tanstack/react-router";
import { products } from "@/lib/products";
import { Marquee } from "@/components/Marquee";
import { motion } from "framer-motion";
import { useReducedAnim, dist, stagger } from "@/lib/motion";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products — TCON Fibre Reinforced Concrete Spacers" },
      { name: "description", content: "Single, Double, Triple cover spacers, Wheel spacers and Rebar end caps. Click any product for full specifications." },
      { property: "og:title", content: "TCON Products — Cover Spacers & Rebar Caps" },
      { property: "og:description", content: "Five products. One uncompromising standard." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const { reduce, mobile } = useReducedAnim();
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

      <section className="bg-background pb-32 overflow-x-hidden">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: dist(60, mobile, reduce) }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: i * stagger(0.12, mobile, reduce) }}
            >
              <Link to="/products/$slug" params={{ slug: p.slug }} className="group relative block overflow-hidden rounded-lg bg-paper transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <div className="pointer-events-none absolute right-3 top-2 z-0 font-display text-[7rem] leading-none text-ink/[0.04] transition-all duration-500 group-hover:scale-[1.6] group-hover:text-ink/[0.07]">0{i + 1}</div>
                <div className="absolute left-5 top-5 z-10 font-mono text-[10px] uppercase tracking-widest text-ink/50">0{i + 1} / 0{products.length}</div>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={p.image} alt={p.name} className="absolute inset-0 h-full w-full object-contain p-12 transition-transform duration-[400ms] group-hover:scale-[1.06]" />
                </div>
                <div className="relative border-t border-ink/10 p-6">
                  <h3 className="relative inline-block font-display text-3xl tracking-wide text-ink">
                    {p.name.toUpperCase()}
                    <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                  </h3>
                  <p className="mt-3 text-sm text-ink/70">{p.tagline}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-ink/50">View specs</span>
                    <span className="text-primary transition-transform duration-300 group-hover:translate-x-[6px]">→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <Marquee items={["EXTRA CARE FOR EXCELLENT CREATIONS", "ENGINEERED FOR PERMANENCE", "MADE IN KERALA · INDIA", "ISO 9001:2015"]} />
    </>
  );
}
