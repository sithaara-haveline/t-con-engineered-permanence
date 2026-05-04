import { useEffect, useRef, useState } from "react";

export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
    let rx = 0, ry = 0, mx = 0, my = 0;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (dot.current) dot.current.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
    };
    window.addEventListener("mousemove", onMove);
    let raf = 0;
    const loop = () => {
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      if (ring.current) ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
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
      <div ref={dot} className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-primary" />
      <div ref={ring} className="pointer-events-none fixed left-0 top-0 z-[9998] h-9 w-9 rounded-full border border-primary/50 transition-[width,height] duration-200" />
    </>
  );
}
