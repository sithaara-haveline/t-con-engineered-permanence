import { useEffect, useRef, type ReactNode } from "react";
type Variant = "up" | "left" | "scale";
export function Reveal({ children, className = "", delay = 0, variant = "up" }: { children: ReactNode; className?: string; delay?: number; variant?: Variant }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setTimeout(() => el.classList.add("in"), delay); io.unobserve(el); } });
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  const cls = variant === "left" ? "reveal-left" : variant === "scale" ? "reveal-scale" : "reveal";
  return <div ref={ref} className={`${cls} ${className}`}>{children}</div>;
}
