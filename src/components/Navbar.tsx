import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import logoMark from "@/assets/tcon-logo-mark.png";
import wordmark from "@/assets/tcon-wordmark.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();
  const onHome = location.pathname === "/";
  const markRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      <div className={`mx-auto flex max-w-[1400px] items-center justify-between rounded-full px-5 transition-all duration-500 ${show ? "glass shadow-lg py-2" : "bg-transparent py-2"}`}>
        <Link to="/" onClick={onLogoClick} className="flex items-center gap-2.5">
          <img ref={markRef} src={logoMark} alt="TCON" className="h-10 w-auto object-contain transition-transform duration-500 hover:rotate-12" />
          <img src={wordmark} alt="TCON Fibre Concrete Spacers" className="hidden h-6 w-auto object-contain sm:block" />
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-ink/80 md:flex">
          <Link to="/" activeOptions={{ exact: true }} className="story relative hover:text-primary [&.active]:text-primary" activeProps={{ className: "active" }}>Home</Link>
          <Link to="/products" className="hover:text-primary [&.active]:text-primary" activeProps={{ className: "active" }}>Products</Link>
          <Link to="/test-parameters" className="hover:text-primary [&.active]:text-primary" activeProps={{ className: "active" }}>Test Parameters</Link>
          <Link to="/about" className="hover:text-primary [&.active]:text-primary" activeProps={{ className: "active" }}>Why us?</Link>
          <Link to="/contact" className="hover:text-primary [&.active]:text-primary" activeProps={{ className: "active" }}>Contact</Link>
        </nav>
        <a href="https://wa.me/919048711001" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground transition hover:scale-105">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" /> WhatsApp
        </a>
      </div>
    </header>
  );
}
