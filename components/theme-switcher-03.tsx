"use client";

import React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const THEME_KEY = "theme";

function setHtmlTheme(theme: "light" | "dark") {
  if (typeof window === "undefined") return;
  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(theme);
}

function getInitialTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === "dark" || stored === "light") return stored;
  // fallback to system preference
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function ThemeSwitcher() {
  const [open, setOpen] = React.useState(false);
  const [theme, setTheme] = React.useState<"light" | "dark">(getInitialTheme);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setHtmlTheme(theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  // Sync theme on mount (for SSR hydration)
  React.useEffect(() => {
    setTheme(getInitialTheme());
    setMounted(true);
  }, []);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="outline">
          {mounted ? (theme === "dark" ? <MoonIcon /> : <SunIcon />) : null}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          disabled={theme === "light"}
        >
          <SunIcon className="mr-2 h-4 w-4" /> Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          disabled={theme === "dark"}
        >
          <MoonIcon className="mr-2 h-4 w-4" /> Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
