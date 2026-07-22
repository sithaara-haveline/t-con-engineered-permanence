import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 bg-paper/60 text-ink backdrop-blur-md transition hover:scale-105 hover:bg-paper focus:outline-none focus:ring-2 focus:ring-primary/50"
    >
      {isLight ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
