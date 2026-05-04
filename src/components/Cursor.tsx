import { useEffect, useRef, useState } from "react";

export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
    let rx = 0, ry = 0, dx = 0, dy = 0, mx = 0, my = 0;
    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    window.addEventListener("mousemove", onMove);
    let raf = 0;
    const loop = () => {
      dx += (mx - dx) * 0.5; dy += (my - dy) * 0.5;
      rx += (mx - rx) * 0.15; ry += (my - ry) * 0.15;
      if (dot.current) dot.current.style.transform = `translate(${dx}px, ${dy}px)`;
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    const hoverables = "a, button, [data-cursor='hover']";
    const onOver = (e: Event) => {
      const t = e.target as HTMLElement;
      if (t.closest(hoverables)) ring.current?.classList.add("scale-[2.2]");
    };
    const onOut = (e: Event) => {
      const t = e.target as HTMLElement;
      if (t.closest(hoverables)) ring.current?.classList.remove("scale-[2.2]");
    };
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  if (!enabled) return null;
  return (
    <>
      <div ref={dot} className="pointer-events-none fixed left-0 top-0 z-[9999] -ml-1 -mt-1 h-2 w-2 rounded-full bg-primary mix-blend-multiply" />
      <div ref={ring} className="pointer-events-none fixed left-0 top-0 z-[9998] -ml-5 -mt-5 h-10 w-10 rounded-full border border-primary/50 transition-transform duration-200" />
    </>
  );
}
