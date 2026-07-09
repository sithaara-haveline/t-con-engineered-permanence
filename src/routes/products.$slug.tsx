import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProduct, products, whatsappLink } from "@/lib/products";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.product.name ?? "Product"} — TCON Spacers` },
      { name: "description", content: loaderData?.product.tagline ?? "" },
      { property: "og:title", content: `${loaderData?.product.name} — TCON` },
      { property: "og:description", content: loaderData?.product.tagline ?? "" },
      { property: "og:image", content: loaderData?.product.image ?? "" },
    ],
  }),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const quoteMsg = `Hi TCON, I'd like a quote for the ${product.name}. Please share pricing and availability.`;

  return (
    <>
      <section className="relative bg-background pt-32 pb-12">
        <div className="mx-auto max-w-[1400px] px-6">
          <Link to="/products" className="font-mono text-xs uppercase tracking-widest text-ink/60 hover:text-primary">← Back to products</Link>
        </div>
      </section>

      <section className="bg-background pb-24">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 md:grid-cols-2 md:gap-20">
          <Reveal>
            <div className="relative aspect-square overflow-hidden rounded-xl bg-paper">
              <div className="absolute inset-0 grid-bg opacity-50" />
              <img src={product.image} alt={product.name} className="relative h-full w-full object-contain p-10 animate-float-slow" />
              <div className="absolute left-5 top-5 font-mono text-[10px] uppercase tracking-widest text-ink/50">TCON / catalogue</div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">— Product</p>
            <h1 className="mt-3 font-display text-6xl leading-[0.9] tracking-tight text-ink md:text-7xl">{product.name.toUpperCase()}</h1>
            <p className="mt-5 text-lg text-ink/75">{product.tagline}</p>
            <div className="mt-6 space-y-4 text-ink/70">
              {product.description.map((d: string, i: number) => <p key={i}>{d}</p>)}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={whatsappLink(quoteMsg)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[oklch(0.65_0.18_145)] px-6 py-3.5 text-sm font-semibold uppercase tracking-widest text-white transition hover:scale-105">
                <span>●</span> Get quote on WhatsApp
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-ink px-6 py-3.5 text-sm font-semibold uppercase tracking-widest text-ink hover:bg-ink hover:text-paper transition">Contact us</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-24">
        <div className="mx-auto max-w-[1100px] px-6">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">— Sizes & Specifications</p>
            <h2 className="mt-3 font-display text-5xl tracking-tight text-ink md:text-6xl">NEED SIZE DETAILS?</h2>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-8 rounded-2xl border border-ink/15 bg-background p-8 md:p-12">
              <p className="text-ink/75 md:text-lg">
                Full size charts, concrete cover options and packing details for the <span className="font-semibold text-ink">{product.name}</span> are shared directly with clients. Message us on WhatsApp and our team will send the exact specifications for your project.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={whatsappLink(`Hi TCON, please share size details and specifications for the ${product.name}.`)}
                  target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[oklch(0.65_0.18_145)] px-6 py-3.5 text-sm font-semibold uppercase tracking-widest text-white transition hover:scale-105"
                >
                  <span>●</span> Get size details on WhatsApp
                </a>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-ink px-6 py-3.5 text-sm font-semibold uppercase tracking-widest text-ink hover:bg-ink hover:text-paper transition">Contact us</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto max-w-[1400px] px-6">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">— Other products</p>
          <h2 className="mt-3 font-display text-5xl tracking-tight text-ink md:text-6xl">EXPLORE MORE</h2>
          {/* Mobile: horizontal scroll of smaller cards */}
          <div className="mt-10 -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 md:hidden">
            {products.filter(p => p.slug !== product.slug).map((p) => (
              <Link key={p.slug} to="/products/$slug" params={{ slug: p.slug }} className="group block w-[45%] shrink-0 snap-start">
                <div className="aspect-square overflow-hidden rounded-md bg-paper">
                  <img src={p.image} alt={p.name} className="h-full w-full object-contain p-4 transition group-hover:scale-110" />
                </div>
                <h3 className="mt-2 font-display text-sm tracking-wide text-ink group-hover:text-primary">{p.name.toUpperCase()}</h3>
              </Link>
            ))}
          </div>
          {/* Desktop grid */}
          <div className="mt-10 hidden gap-6 md:grid md:grid-cols-4">
            {products.filter(p => p.slug !== product.slug).map((p) => (
              <Link key={p.slug} to="/products/$slug" params={{ slug: p.slug }} className="group block">
                <div className="aspect-square overflow-hidden rounded-md bg-paper">
                  <img src={p.image} alt={p.name} className="h-full w-full object-contain p-8 transition group-hover:scale-110" />
                </div>
                <h3 className="mt-3 font-display text-xl tracking-wide text-ink group-hover:text-primary">{p.name.toUpperCase()}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
