import { AnimatePresence, motion } from "framer-motion";
import { useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isLoading = useRouterState({ select: (s) => s.isLoading || s.isTransitioning });
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    if (isLoading) {
      const t = setTimeout(() => setShowBar(true), 80);
      return () => clearTimeout(t);
    }
    setShowBar(false);
  }, [isLoading]);

  return (
    <>
      {showBar && (
        <div className="fixed inset-x-0 top-0 z-[100] h-[2px] overflow-hidden">
          <div className="h-full w-1/3 animate-[loading-bar_1s_ease-in-out_infinite] bg-primary" />
        </div>
      )}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          style={{ position: "relative", width: "100%" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.18, ease: "easeOut" } }}
          exit={{ opacity: 0, transition: { duration: 0.12, ease: "easeIn" } }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}