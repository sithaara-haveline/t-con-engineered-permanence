import { useEffect, useState } from "react";

export function useReducedAnim() {
  const [reduce, setReduce] = useState(false);
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mqM = window.matchMedia("(max-width: 767px)");
    const upd = () => { setReduce(mq.matches); setMobile(mqM.matches); };
    upd();
    mq.addEventListener("change", upd);
    mqM.addEventListener("change", upd);
    return () => { mq.removeEventListener("change", upd); mqM.removeEventListener("change", upd); };
  }, []);
  return { reduce, mobile };
}

/** Scale a translate distance for mobile (halve) and reduced motion (zero). */
export function dist(value: number, mobile: boolean, reduce: boolean) {
  if (reduce) return 0;
  return mobile ? value / 2 : value;
}

/** Scale a stagger delay (60% on mobile, 0 if reduced). */
export function stagger(value: number, mobile: boolean, reduce: boolean) {
  if (reduce) return 0;
  return mobile ? value * 0.6 : value;
}