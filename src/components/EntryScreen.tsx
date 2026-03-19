import { useState } from "react";
import { cn } from "../lib/utils";

export function EntryScreen() {
  const [hours, setHours] = useState(8);
  const [minutes, setMinutes] = useState(30);
  const [activeActivity, setActiveActivity] = useState("Ministry");

  const dates = [22, 23, 24, 25, 26];
  const selectedDate = 24;

  const activities = ["Ministry", "Search Work", "Bible Studies"];

  const incrementHours = () => setHours((h) => (h < 23 ? h + 1 : 0));
  const decrementHours = () => setHours((h) => (h > 0 ? h - 1 : 23));
  const incrementMinutes = () => setMinutes((m) => (m < 59 ? m + 1 : 0));
  const decrementMinutes = () => setMinutes((m) => (m > 0 ? m - 1 : 59));

  return (
    <div className="space-y-12">
      {/* Editorial Header Section */}
      <section>
        <span className="font-headline text-primary uppercase tracking-[0.3em] text-[10px] block mb-2 opacity-70">
          Field Service
        </span>
        <h2 className="font-headline text-5xl font-light tracking-tighter text-on-surface leading-none">
          Time <span className="text-primary font-bold">Entry</span>
        </h2>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Date Selection Column */}
        <div className="md:col-span-12 lg:col-span-4 space-y-6">
          <div className="glass-panel rounded-xl p-6 flex flex-col items-center border-t border-l border-primary/10">
            <span className="font-headline text-on-surface-variant text-[10px] uppercase tracking-widest mb-4">
              Selected Date
            </span>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-headline font-bold text-primary">{selectedDate}</span>
              <span className="text-sm font-label text-secondary uppercase tracking-widest">October 2024</span>
            </div>
            <div className="mt-6 flex gap-2 overflow-x-auto pb-2 w-full justify-center">
              {dates.map((date) => (
                <button
                  key={date}
                  className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center text-xs font-headline transition-colors",
                    date === selectedDate
                      ? "bg-cyan-500/20 text-primary ring-1 ring-primary/40"
                      : "bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest"
                  )}
                >
                  {date}
                </button>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-xl p-6 border-t border-l border-primary/10">
            <span className="font-headline text-on-surface-variant text-[10px] uppercase tracking-widest block mb-4">
              Status Overview
            </span>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs text-on-surface/60">Weekly Goal</span>
                <span className="text-xs text-primary font-headline">32/40h</span>
              </div>
              <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[80%] shadow-[0_0_8px_rgba(153,247,255,0.5)]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Entry Column */}
        <div className="md:col-span-12 lg:col-span-8 space-y-6">
          {/* Digital Time Input */}
          <div className="glass-panel rounded-xl p-8 relative overflow-hidden border-t border-l border-primary/10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <span className="font-headline text-on-surface-variant text-[10px] uppercase tracking-widest block mb-8 text-center">
              Duration (Hours:Minutes)
            </span>
            <div className="flex items-center justify-center gap-6">
              {/* Hours Column */}
              <div className="flex flex-col items-center gap-4">
                <button onClick={incrementHours} className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-3xl">keyboard_arrow_up</span>
                </button>
                <div className="text-7xl font-headline font-bold text-white tracking-tighter">
                  {hours.toString().padStart(2, "0")}
                </div>
                <button onClick={decrementHours} className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-3xl">keyboard_arrow_down</span>
                </button>
              </div>

              <div className="text-6xl font-headline font-bold text-primary animate-pulse opacity-50">:</div>

              {/* Minutes Column */}
              <div className="flex flex-col items-center gap-4">
                <button onClick={incrementMinutes} className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-3xl">keyboard_arrow_up</span>
                </button>
                <div className="text-7xl font-headline font-bold text-white tracking-tighter">
                  {minutes.toString().padStart(2, "0")}
                </div>
                <button onClick={decrementMinutes} className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-3xl">keyboard_arrow_down</span>
                </button>
              </div>
            </div>
          </div>

          {/* Activity Details */}
          <div className="glass-panel rounded-xl p-8 space-y-6 border-t border-l border-primary/10">
            <div className="space-y-2">
              <label className="text-[10px] font-headline uppercase tracking-widest text-on-surface-variant ml-1">
                Activity Type
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {activities.map((activity) => (
                  <button
                    key={activity}
                    onClick={() => setActiveActivity(activity)}
                    className={cn(
                      "px-4 py-3 rounded-lg text-xs font-label text-left flex items-center justify-between transition-all",
                      activity === activeActivity
                        ? "bg-cyan-500/10 border border-primary/30 text-primary"
                        : "bg-surface-container-high border border-transparent text-on-surface/60 hover:border-outline-variant/30"
                    )}
                  >
                    {activity}
                    {activity === activeActivity && <span className="material-symbols-outlined text-sm">check_circle</span>}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-headline uppercase tracking-widest text-on-surface-variant ml-1">
                Notes / Log Entry
              </label>
              <textarea
                className="w-full bg-surface-container-low border-none rounded-xl p-4 text-on-surface placeholder:text-on-surface-variant/30 focus:ring-1 focus:ring-primary/40 min-h-[120px] resize-none font-body text-sm"
                placeholder="Describe technical actions taken during this interval..."
              ></textarea>
            </div>

            <div className="pt-4">
              <button className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-bold uppercase tracking-widest py-4 rounded-xl flex items-center justify-center gap-2 shadow-[0_8px_24px_rgba(153,247,255,0.15)] hover:scale-[1.01] active:scale-[0.98] transition-all">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>save</span>
                SAVE ENTRY
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
