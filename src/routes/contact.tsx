import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — TCON Industries" },
      { name: "description", content: "Contact TCON for spacer specifications, samples, or quotes. Aluva, Kerala — India." },
      { property: "og:title", content: "Contact TCON" },
      { property: "og:description", content: "Talk to us on WhatsApp — +91 90487 11001" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="bg-background pt-40 pb-16 grid-bg">
        <div className="mx-auto max-w-[1400px] px-6">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">— Get in touch</p>
          <h1 className="mt-5 font-display text-7xl leading-[0.85] tracking-tight text-ink md:text-[10rem]">CONTACT <br/><span className="text-primary">US.</span></h1>
        </div>
      </section>

      <section className="bg-background pb-32">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="glass rounded-xl p-8">
              <p className="font-mono text-xs uppercase tracking-widest text-primary">Headquarters</p>
              <h3 className="mt-3 font-display text-3xl text-ink">TRANS EMIRATES FIBRE CONCRETE INDUSTRIES</h3>
              <p className="mt-2 font-mono text-xs text-ink/60">ISO 9001:2015 Certified</p>
              <address className="mt-6 not-italic text-ink/80">
                14/220-B, Desom, Aluva,<br/>Ernakulam District,<br/>Kerala 683102, India
              </address>
              <div className="mt-8 space-y-2 font-mono text-sm text-ink">
                <a href="tel:+919193410000" className="block hover:text-primary">+91 91934 10000</a>
                <a href="tel:+919048711001" className="block hover:text-primary">+91 90487 11001</a>
                <a href="tel:+919048471000" className="block hover:text-primary">+91 90484 71000</a>
                <a href="mailto:tcon.spacers@gmail.com" className="block hover:text-primary">tcon.spacers@gmail.com</a>
                <a href="https://www.t-con.in" className="block hover:text-primary">www.t-con.in</a>
              </div>
              <a href="https://wa.me/919048711001" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[oklch(0.65_0.18_145)] px-6 py-3.5 text-sm font-semibold uppercase tracking-widest text-white">● WhatsApp Us</a>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-3" delay={150}>
            <div className="overflow-hidden rounded-xl border border-ink/15">
              <iframe
                title="TCON location"
                src="https://www.google.com/maps?q=Aluva%20Ernakulam%20Kerala%20683102&output=embed"
                width="100%" height="540" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
