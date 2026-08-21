import type { LandingModel } from "@/lib/models";

/**
 * Miniature, non-interactive rendering of a model's landing page.
 * Used as a premium portfolio thumbnail instead of a stock screenshot.
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
          <span className="h-1.5 w-12 rounded-full bg-foreground/60" />
        </div>
        <div className="hidden gap-2 sm:flex">
          {model.demo.nav.map((n) => (
            <span key={n} className="h-1.5 w-6 rounded-full bg-foreground/20" />
          ))}
        </div>
        <span className="h-4 w-12 rounded-full" style={{ background: accent }} />
      </div>

      <div className="mt-6 max-w-[70%] space-y-2">
        <span className="block h-1.5 w-14 rounded-full" style={{ background: accent }} />
        <span className="block h-3 w-full rounded-md bg-foreground/75" />
        <span className="block h-3 w-4/5 rounded-md bg-foreground/55" />
        <span className="block h-1.5 w-3/4 rounded-full bg-foreground/25" />
        <span className="block h-1.5 w-2/3 rounded-full bg-foreground/20" />
        <div className="flex gap-2 pt-1">
          <span className="h-5 w-16 rounded-full" style={{ background: accent }} />
          <span className="h-5 w-14 rounded-full border border-border" />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="space-y-1.5 rounded-lg border border-border bg-surface/60 p-2"
            style={{ opacity: 1 - i * 0.12 }}
          >
            <span className="block h-2 w-2 rounded-[2px]" style={{ background: accent }} />
            <span className="block h-1.5 w-10 rounded-full bg-foreground/50" />
            <span className="block h-1.5 w-full rounded-full bg-foreground/15" />
          </div>
        ))}
      </div>
    </div>
  );
}
