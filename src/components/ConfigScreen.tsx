import { useState } from "react";
import { cn } from "../lib/utils";

export function ConfigScreen() {
  const [neuralSmoothing, setNeuralSmoothing] = useState(true);
  const [atmosphericBlur, setAtmosphericBlur] = useState(true);
  const [hapticFeedback, setHapticFeedback] = useState(false);

  return (
    <div className="space-y-16">
      {/* Editorial Header */}
      <section className="mb-16">
        <h2 className="text-6xl md:text-8xl font-headline font-bold tracking-tighter text-primary mb-4 opacity-90 leading-tight">
          System<br />Configuration
        </h2>
        <p className="text-on-surface-variant font-light max-w-md border-l border-primary/20 pl-6 text-lg">
          Calibrate your interface dynamics and manage architectural data integrity.
        </p>
      </section>

      {/* Bento Grid Settings */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Preferences Section */}
        <div className="md:col-span-7 glass-panel p-8 rounded-xl border-t border-l border-primary/10">
          <h3 className="font-headline text-secondary mb-8 uppercase text-sm tracking-[0.2em]">Interface Dynamics</h3>
          <div className="space-y-8">
            <ToggleItem
              title="Neural Smoothing"
              description="Reduce transition latency for UI elements"
              isEnabled={neuralSmoothing}
              onToggle={() => setNeuralSmoothing(!neuralSmoothing)}
            />
            <ToggleItem
              title="Atmospheric Blur"
              description="Enable high-fidelity glassmorphism effects"
              isEnabled={atmosphericBlur}
              onToggle={() => setAtmosphericBlur(!atmosphericBlur)}
            />
            <ToggleItem
              title="Haptic Feedback"
              description="Tactile response on interaction events"
              isEnabled={hapticFeedback}
              onToggle={() => setHapticFeedback(!hapticFeedback)}
            />
          </div>
        </div>

        {/* Action Buttons Side */}
        <div className="md:col-span-5 flex flex-col gap-6">
          {/* Backup Card */}
          <div className="bg-surface-container p-8 rounded-xl flex flex-col justify-between h-full group hover:bg-surface-container-high transition-colors">
            <div>
              <span className="material-symbols-outlined text-primary mb-6 block text-4xl">cloud_upload</span>
              <h4 className="font-headline text-xl font-bold text-on-surface mb-2">Backup Database</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Securely archive all system logs and user profiles to the encrypted cloud node.
              </p>
            </div>
            <button className="mt-8 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold py-3 rounded-md uppercase tracking-widest text-xs hover:shadow-[0_0_20px_rgba(153,247,255,0.3)] transition-all active:scale-95">
              Execute Backup
            </button>
          </div>

          {/* Import Card */}
          <div className="bg-surface-container-low p-8 rounded-xl flex flex-col justify-between h-full ring-1 ring-outline-variant/20">
            <div>
              <span className="material-symbols-outlined text-tertiary mb-6 block text-4xl">database</span>
              <h4 className="font-headline text-xl font-bold text-on-surface mb-2">Import Database</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Restore previous environment snapshots from local or remote repositories.
              </p>
            </div>
            <button className="mt-8 bg-surface-container-highest text-primary ring-1 ring-primary/20 font-bold py-3 rounded-md uppercase tracking-widest text-xs hover:bg-primary/10 transition-all active:scale-95">
              Initialize Import
            </button>
          </div>
        </div>

        {/* System Info Footer */}
        <div className="md:col-span-12 glass-panel p-6 rounded-xl flex flex-wrap gap-12 items-center justify-between border-t border-l border-primary/10">
          <InfoItem label="OS Kernel" value="v4.8.2-aurora" />
          <InfoItem label="Memory Load" value="12.4 GB / 32 GB" highlight />
          <InfoItem label="Uptime" value="14d 02h 44m" />
          <InfoItem label="Security Protocol" value="Quantum-L6" tertiary />
          <div className="h-10 w-[1px] bg-outline-variant/30 hidden md:block"></div>
          <div className="flex items-center gap-4 text-primary">
            <span className="material-symbols-outlined">verified_user</span>
            <span className="font-headline font-bold text-sm tracking-widest uppercase">System Optimal</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ToggleItem({ title, description, isEnabled, onToggle }: { title: string; description: string; isEnabled: boolean; onToggle: () => void }) {
  return (
    <div className="flex items-center justify-between group">
      <div className="flex flex-col gap-1">
        <span className="text-on-surface font-medium text-lg">{title}</span>
        <span className="text-on-surface-variant text-sm font-light">{description}</span>
      </div>
      <button
        onClick={onToggle}
        className={cn(
          "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ring-1",
          isEnabled ? "bg-primary/10 ring-primary/20" : "bg-surface-container-low ring-outline-variant/30"
        )}
      >
        <span
          className={cn(
            "inline-block h-4 w-4 transform rounded-full transition-transform",
            isEnabled
              ? "translate-x-6 bg-primary shadow-[0_0_12px_rgba(153,247,255,0.6)]"
              : "translate-x-1 bg-outline-variant"
          )}
        ></span>
      </button>
    </div>
  );
}

function InfoItem({ label, value, highlight, tertiary }: { label: string; value: string; highlight?: boolean; tertiary?: boolean }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-outline text-[10px] uppercase tracking-widest">{label}</span>
      <span
        className={cn(
          "font-headline font-medium",
          highlight ? "text-primary" : tertiary ? "text-tertiary" : "text-on-surface"
        )}
      >
        {value}
      </span>
    </div>
  );
}
