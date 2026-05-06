import { AnimatePresence, motion } from "framer-motion";
import { useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        style={{ position: "relative", width: "100%" }}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.45, ease: "easeOut", delay: 0.05 } }}
        exit={{ opacity: 0, x: -40, transition: { duration: 0.35, ease: "easeInOut" } }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}