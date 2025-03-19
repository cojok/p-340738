
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure the component only renders client-side to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button 
        variant="outline" 
        size="icon" 
        className="w-10 h-10 rounded-xl bg-transparent hover:bg-[#E5E4F5] transition-colors border-none"
        tabIndex={0}
        aria-label="Toggle theme"
      >
        <Sun className="h-4 w-4" />
      </Button>
    );
  }

  return (
    <Button 
      variant="outline" 
      size="icon" 
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")} 
      className="w-10 h-10 rounded-xl bg-transparent hover:bg-[#E5E4F5] dark:hover:bg-[#3F3F5F] transition-colors border-none"
      tabIndex={0}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4 text-[#F5F5FF]" />
      ) : (
        <Moon className="h-4 w-4 text-[#626293]" />
      )}
    </Button>
  );
}
