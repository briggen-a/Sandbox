export function SummaryScreen() {
  const weeklyData = [
    { label: "WK 01", height: "60%" },
    { label: "WK 02", height: "85%" },
    { label: "WK 03", height: "45%" },
    { label: "WK 04", height: "75%" },
  ];

  const logs = [
    {
      title: "Core Engine Refactor",
      category: "Project Alpha • High Priority",
      time: "42.8 HRS",
      icon: "terminal",
      iconColor: "text-primary",
    },
    {
      title: "Schema Migration Beta",
      category: "Infrastructure • Maintenance",
      time: "28.2 HRS",
      icon: "database",
      iconColor: "text-tertiary",
    },
    {
      title: "Stakeholder Syncs",
      category: "Communications • General",
      time: "14.5 HRS",
      icon: "forum",
      iconColor: "text-on-surface-variant",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Metric Section */}
      <section className="relative">
        <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-[80px]"></div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="font-label text-on-surface-variant text-sm uppercase tracking-[0.2em] mb-2">Total time this month</p>
            <h2 className="font-headline font-bold text-7xl md:text-9xl tracking-tighter text-primary glow-text">
              164.5<span className="text-3xl md:text-5xl ml-2 font-light text-primary/60">HRS</span>
            </h2>
          </div>
          <div className="flex flex-col items-end border-l border-outline-variant/20 pl-6 pb-2">
            <span className="text-tertiary font-headline text-2xl font-medium">+12.4%</span>
            <span className="text-on-surface-variant text-xs font-label tracking-wider uppercase">Vs Previous Month</span>
          </div>
        </div>
      </section>

      {/* Bento Grid Visualization */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Weekly Distribution Chart */}
        <div className="md:col-span-2 glass-panel p-8 rounded-xl border-t border-l border-primary/10 shadow-2xl flex flex-col justify-between h-[400px]">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="font-headline text-xl text-on-surface font-semibold tracking-tight">Weekly Throughput</h3>
              <p className="text-on-surface-variant text-sm font-label">Operational load across active cycles</p>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-surface-container-high rounded-lg text-[10px] font-label text-primary ring-1 ring-primary/20 uppercase">
                October 2023
              </span>
            </div>
          </div>
          <div className="flex-grow flex items-end justify-around gap-4 pb-4">
            {weeklyData.map((data) => (
              <div key={data.label} className="flex flex-col items-center gap-3 w-full group">
                <div className="relative w-full bg-surface-container-highest rounded-lg overflow-hidden h-48">
                  <div
                    className="absolute bottom-0 w-full bg-gradient-to-t from-primary to-primary-container transition-all duration-500 shadow-[0_0_15px_rgba(153,247,255,0.3)]"
                    style={{ height: data.height }}
                  ></div>
                </div>
                <span className="text-[10px] font-label text-on-surface-variant group-hover:text-primary transition-colors tracking-widest uppercase">
                  {data.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Efficiency Pulse */}
        <div className="glass-panel p-8 rounded-xl border-t border-l border-primary/10 shadow-2xl flex flex-col justify-between">
          <div>
            <h3 className="font-headline text-xl text-on-surface font-semibold tracking-tight mb-6">Efficiency Pulse</h3>
            <div className="space-y-8">
              <EfficiencyItem label="Deep Work" value="72%" color="bg-primary" glow="shadow-[0_0_8px_rgba(153,247,255,0.8)]" />
              <EfficiencyItem label="Logistics" value="18%" color="bg-tertiary" glow="shadow-[0_0_8px_rgba(172,137,255,0.8)]" />
              <EfficiencyItem label="Idle" value="10%" color="bg-secondary-container" />
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-outline-variant/15">
            <button className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary-container py-3 rounded-lg font-headline font-bold text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all">
              EXPORT REPORT
            </button>
          </div>
        </div>
      </div>

      {/* Detailed Audit List */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h4 className="font-headline text-2xl font-bold tracking-tight">Log History</h4>
          <span className="text-on-surface-variant text-xs font-label tracking-[0.2em] uppercase">October 1 - October 31</span>
        </div>
        <div className="space-y-4">
          {logs.map((log) => (
            <div
              key={log.title}
              className="group flex items-center justify-between p-6 bg-surface-container-low rounded-xl hover:bg-surface-container-high transition-colors cursor-pointer border-l-2 border-transparent hover:border-primary"
            >
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center">
                  <span className={`material-symbols-outlined ${log.iconColor}`}>{log.icon}</span>
                </div>
                <div>
                  <h5 className="text-on-surface font-medium font-headline">{log.title}</h5>
                  <p className="text-on-surface-variant text-xs font-label uppercase tracking-widest mt-1">{log.category}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-headline font-bold text-lg tracking-tight ${log.iconColor}`}>{log.time}</p>
                <p className="text-[10px] text-on-surface-variant uppercase font-label tracking-tighter">This month</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function EfficiencyItem({ label, value, color, glow }: { label: string; value: string; color: string; glow?: string }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className={`w-2 h-2 rounded-full ${color} ${glow}`}></div>
        <span className="text-sm font-label text-on-surface-variant uppercase tracking-wider">{label}</span>
      </div>
      <span className="text-primary font-headline font-bold">{value}</span>
    </div>
  );
}
