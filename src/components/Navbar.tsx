import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import logoMark from "@/assets/tcon-logo-mark.png";
import wordmark from "@/assets/tcon-wordmark.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
  const onHome = location.pathname === "/";
  const markRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => { setOpen(false); }, [location.pathname]);
  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const show = scrolled || !onHome;

  const onLogoClick = (e: React.MouseEvent) => {
    if (onHome) {
      e.preventDefault();
      const el = markRef.current;
      if (el) {
        el.animate(
          [{ transform: "scale(1)" }, { transform: "scale(1.05)" }, { transform: "scale(1)" }],
          { duration: 400, easing: "ease-out" }
        );
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${show ? "py-3" : "py-5"}`}>
      <div className={`mx-auto flex max-w-[1400px] items-center justify-between rounded-full px-4 sm:px-5 transition-all duration-500 ${show || open ? "glass shadow-lg py-2" : "bg-transparent py-2"}`}>
        <Link to="/" onClick={onLogoClick} className="flex items-center gap-2 sm:gap-2.5">
          <img ref={markRef} src={logoMark} alt="TCON" className="h-9 sm:h-10 w-auto object-contain transition-transform duration-500 hover:rotate-12" />
          <img src={wordmark} alt="TCON Fibre Concrete Spacers" className="h-5 sm:h-6 w-auto object-contain" />
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-ink/80 md:flex">
          <Link to="/" activeOptions={{ exact: true }} className="story relative hover:text-primary [&.active]:text-primary" activeProps={{ className: "active" }}>Home</Link>
          <Link to="/products" className="hover:text-primary [&.active]:text-primary" activeProps={{ className: "active" }}>Products</Link>
          <Link to="/test-parameters" className="hover:text-primary [&.active]:text-primary" activeProps={{ className: "active" }}>Test Parameters</Link>
          <Link to="/about" className="hover:text-primary [&.active]:text-primary" activeProps={{ className: "active" }}>Why us?</Link>
          <Link to="/contact" className="hover:text-primary [&.active]:text-primary" activeProps={{ className: "active" }}>Contact</Link>
        </nav>
        <div className="flex items-center gap-2">
          <a href="https://wa.me/919048711001" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-3 sm:px-4 py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-primary-foreground transition hover:scale-105">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" /> <span className="hidden xs:inline sm:inline">WhatsApp</span><span className="xs:hidden sm:hidden">Chat</span>
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(o => !o)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 bg-paper/60 text-ink backdrop-blur-md transition hover:bg-paper md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      <div
        className={`md:hidden fixed inset-x-0 top-[68px] z-40 mx-3 origin-top overflow-hidden rounded-2xl glass shadow-xl transition-all duration-300 ${open ? "max-h-[80vh] opacity-100 scale-100" : "max-h-0 opacity-0 scale-95 pointer-events-none"}`}
      >
        <nav className="flex flex-col p-3 text-base font-medium text-ink">
          {[
            { to: "/", label: "Home", exact: true },
            { to: "/products", label: "Products" },
            { to: "/test-parameters", label: "Test Parameters" },
            { to: "/about", label: "Why us?" },
            { to: "/contact", label: "Contact" },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={l.exact ? { exact: true } : undefined}
              className="rounded-xl px-4 py-3 transition hover:bg-ink/5 [&.active]:bg-primary/10 [&.active]:text-primary"
              activeProps={{ className: "active" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
