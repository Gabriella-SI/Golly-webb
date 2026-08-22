import type { LandingModel } from "@/lib/models";

/**
 * Miniature, non-interactive rendering of a model's landing page.
 * Uses the model's real demo copy instead of abstract bars, so it reads as
 * an actual preview rather than a blank/unloaded placeholder.
 */
export function ModelPreview({ model }: { model: LandingModel }) {
  const accent = `oklch(0.55 0.18 ${model.hue})`;
  const accentSoft = `oklch(0.42 0.14 ${model.hue})`;

  return (
    <div
      className="relative h-56 w-full overflow-hidden bg-background px-4 py-3 sm:h-64"
      style={{
        backgroundImage: `radial-gradient(120% 90% at 80% -10%, ${accentSoft}55, transparent 60%)`,
      }}
      aria-hidden="true"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-[3px]" style={{ background: accent }} />
          <span className="truncate text-[10px] font-semibold text-foreground/80">
            {model.demo.brand}
          </span>
        </div>
        <div className="hidden gap-2 sm:flex">
          {model.demo.nav.slice(0, 3).map((n) => (
            <span key={n} className="text-[9px] text-foreground/35">
              {n}
            </span>
          ))}
        </div>
        <span
          className="rounded-full px-2 py-0.5 text-[8px] font-semibold text-primary-foreground"
          style={{ background: accent }}
        >
          {model.demo.primaryCta}
        </span>
      </div>

      <div className="mt-6 max-w-[75%] space-y-2">
        <span
          className="block text-[9px] font-semibold uppercase tracking-wider"
          style={{ color: accent }}
        >
          {model.demo.eyebrow}
        </span>
        <p className="text-[13px] font-bold leading-snug text-foreground line-clamp-2">
          {model.demo.headline}
        </p>
        <p className="text-[10px] leading-snug text-foreground/50 line-clamp-2">
          {model.demo.subheadline}
        </p>
        <div className="flex gap-2 pt-1">
          <span
            className="rounded-full px-2.5 py-1 text-[9px] font-semibold text-primary-foreground"
            style={{ background: accent }}
          >
            {model.demo.primaryCta}
          </span>
          <span className="rounded-full border border-border px-2.5 py-1 text-[9px] text-foreground/60">
            {model.demo.secondaryCta}
          </span>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2">
        {model.demo.stats.slice(0, 3).map((s, i) => (
          <div
            key={s.label}
            className="space-y-1 rounded-lg border border-border bg-surface/60 p-2"
            style={{ opacity: 1 - i * 0.1 }}
          >
            <span className="block text-[11px] font-bold" style={{ color: accent }}>
              {s.value}
            </span>
            <span className="block text-[8px] leading-tight text-foreground/45">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
