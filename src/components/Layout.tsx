import React from "react";
import { cn } from "../lib/utils";

interface LayoutProps {
  children: React.ReactNode;
  activeScreen: "SUMMARY" | "ENTRY" | "CONFIG";
  onScreenChange: (screen: "SUMMARY" | "ENTRY" | "CONFIG") => void;
}

export function Layout({ children, activeScreen, onScreenChange }: LayoutProps) {
  const navItems = [
    { id: "ENTRY", icon: "timer", label: "ENTRY" },
    { id: "SUMMARY", icon: "calendar_view_month", label: "SUMMARY" },
    { id: "CONFIG", icon: "settings_input_component", label: "CONFIG" },
  ] as const;

  return (
    <div className="min-h-screen bg-background text-on-background font-body">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-slate-950/60 backdrop-blur-xl flex justify-between items-center px-6 h-16 shadow-[0_8_24px_rgba(153,247,255,0.1)]">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-cyan-400">grid_view</span>
          <h1 className="text-xl font-bold tracking-widest text-cyan-400 uppercase font-headline">
            {activeScreen === "SUMMARY" ? "Totals" : activeScreen === "ENTRY" ? "Field Service" : "Settings"}
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-slate-400 hover:text-cyan-200 transition-colors cursor-pointer">
            notifications
          </span>
          <div className="w-8 h-8 rounded-full bg-surface-container-highest ring-1 ring-primary/20 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQRtShtVjt_FZrPJ5ia5SguMYc1eBhXoBPLt3v3OhZV8fXuX05vFoZkT1cA-5yBe1JKOBZ0OWvtcYUFwHjMltTH3sjKQxucsNPAETNxM1crnfB1EbDHIYf9W5YoQ0PU-2PYKThkG9c-ojqTlLoVNkZLISoVadyvwoD8kkEn4ALHzTxnmNXyJUM1zQtC3hX8bmCtHSsjKy3xc8rz8v5Pww8SyUoHKUEPFDmRuA2HmNtCZC1eHm0y_jLiDTgAym1f6X3Pi6qb0p_LUlO"
              alt="User avatar"
            />
          </div>
        </div>
      </header>

      <main className="pt-24 pb-32 px-6 max-w-5xl mx-auto">
        {children}
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-3 bg-slate-900/40 backdrop-blur-2xl rounded-t-3xl pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.4)]">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onScreenChange(item.id)}
            className={cn(
              "flex flex-col items-center justify-center px-4 py-2 transition-all duration-300 rounded-xl",
              activeScreen === item.id
                ? "bg-cyan-500/20 text-cyan-300 ring-1 ring-cyan-500/30 scale-100"
                : "text-slate-500 opacity-60 hover:bg-slate-800/50 hover:text-cyan-100 active:scale-90"
            )}
          >
            <span className="material-symbols-outlined text-2xl mb-1">{item.icon}</span>
            <span className="font-headline text-[10px] uppercase tracking-widest">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
