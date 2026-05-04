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
      { title: `${loaderData?.product.name ?? "Product"} — T-CON Spacers` },
      { name: "description", content: loaderData?.product.tagline ?? "" },
      { property: "og:title", content: `${loaderData?.product.name} — T-CON` },
      { property: "og:description", content: loaderData?.product.tagline ?? "" },
      { property: "og:image", content: loaderData?.product.image ?? "" },
    ],
  }),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const quoteMsg = `Hi T-CON, I'd like a quote for the ${product.name}. Please share pricing and availability.`;

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
              <div className="absolute left-5 top-5 font-mono text-[10px] uppercase tracking-widest text-ink/50">T-CON / catalogue</div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">— Product</p>
            <h1 className="mt-3 font-display text-6xl leading-[0.9] tracking-tight text-ink md:text-7xl">{product.name.toUpperCase()}</h1>
            <p className="mt-5 text-lg text-ink/75">{product.tagline}</p>
            <div className="mt-6 space-y-4 text-ink/70">
              {product.description.map((d, i) => <p key={i}>{d}</p>)}
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
        <div className="mx-auto max-w-[1400px] px-6">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">— Specifications</p>
            <h2 className="mt-3 font-display text-5xl tracking-tight text-ink md:text-6xl">SIZE CHART</h2>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-10 overflow-hidden rounded-lg border border-ink/15">
              <table className="w-full font-mono text-sm">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    {product.specHeaders.map((h) => <th key={h} className="px-6 py-4 text-left text-xs uppercase tracking-widest">{h}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {product.specs.map((s) => (
                    <tr key={s.code} className="border-t border-ink/10 transition-colors hover:bg-background">
                      <td className="px-6 py-4 text-ink">{s.code}</td>
                      <td className="px-6 py-4 text-ink/80">{s.ref}</td>
                      <td className="px-6 py-4 text-primary">{s.cover}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto max-w-[1400px] px-6">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">— Other products</p>
          <h2 className="mt-3 font-display text-5xl tracking-tight text-ink md:text-6xl">EXPLORE MORE</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
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
