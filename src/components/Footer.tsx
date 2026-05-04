import { Link } from "@tanstack/react-router";
import logo from "@/assets/tcon-logo.jpg";
export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logo} alt="T-CON" className="h-14 w-auto bg-white p-2 rounded" />
          <p className="mt-5 max-w-md font-display text-3xl tracking-wide">EXTRA CARE FOR EXCELLENT CREATIONS.</p>
          <p className="mt-3 max-w-md text-sm text-paper/70">Trans Emirates Fibre Concrete Industries — ISO 9001:2015 Certified Company. Manufactured in Kerala, India.</p>
        </div>
        <div>
          <p className="font-mono text-xs uppercase text-primary">Navigate</p>
          <ul className="mt-4 space-y-2 text-sm text-paper/80">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/products" className="hover:text-primary">Products</Link></li>
            <li><Link to="/test-parameters" className="hover:text-primary">Test Parameters</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-mono text-xs uppercase text-primary">Contact</p>
          <address className="mt-4 not-italic text-sm leading-relaxed text-paper/80">
            14/220-B, Desom, Aluva,<br/>Ernakulam, Kerala 683102<br/>India
          </address>
          <p className="mt-3 font-mono text-xs text-paper/80">+91 91934 10000<br/>+91 90487 11001<br/>tcon.spacers@gmail.com</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center font-display text-2xl tracking-[0.4em] text-primary">COMMITTED IN QUALITY</div>
    </footer>
  );
}
