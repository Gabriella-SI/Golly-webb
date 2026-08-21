import { BrowserFrame } from "./BrowserFrame";

export function HeroMockup() {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute -inset-10 -z-10 opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(45% 45% at 30% 25%, oklch(0.45 0.19 265 / 0.55), transparent 70%), radial-gradient(45% 45% at 75% 70%, oklch(0.42 0.2 300 / 0.5), transparent 70%)",
        }}
      />
      <BrowserFrame url="modelo.gollyweb.com" className="animate-float glow-brand">
        <div className="bg-background">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-[4px] bg-brand-gradient" />
              <span className="text-[11px] font-semibold tracking-tight">Studio Nova</span>
            </div>
            <div className="hidden gap-4 text-[10px] text-muted-foreground sm:flex">
              <span>Sobre</span>
              <span>Serviços</span>
              <span>Contato</span>
            </div>
            <span className="rounded-full bg-brand-gradient px-2.5 py-1 text-[10px] font-semibold text-primary-foreground">
              Orçamento
            </span>
          </div>

          <div className="grid gap-6 px-5 py-7 sm:grid-cols-[1.1fr_0.9fr] sm:px-7 sm:py-9">
            <div>
              <span className="inline-block rounded-full border border-border px-2.5 py-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                Landing page
              </span>
              <h3 className="mt-3 font-display text-2xl font-bold leading-[1.05] sm:text-[2rem]">
                Sua marca com <span className="text-gradient">presença de verdade</span>.
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                Estrutura pensada para conduzir o visitante até o contato, sem ruído e sem
                distração.
              </p>
              <div className="mt-5 flex gap-2">
                <span className="rounded-full bg-brand-gradient px-3.5 py-2 text-[11px] font-semibold text-primary-foreground">
                  Quero um orçamento
                </span>
                <span className="rounded-full border border-border px-3.5 py-2 text-[11px] text-muted-foreground">
                  Ver mais
                </span>
              </div>
              <div className="mt-6 flex gap-5">
                {[
                  ["+120", "projetos"],
                  ["98%", "mobile"],
                  ["0.9s", "carregando"],
                ].map(([v, l]) => (
                  <div key={l}>
                    <p className="font-display text-sm font-bold">{v}</p>
                    <p className="text-[10px] text-muted-foreground">{l}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="rounded-xl border border-border bg-surface/60 p-3 transition-transform"
                  style={{ transform: `translateX(${i * 6}px)` }}
                >
                  <div className="flex items-center gap-2">
                    <span className="h-5 w-5 rounded-md bg-brand-gradient" />
                    <span className="h-1.5 w-16 rounded-full bg-foreground/50" />
                  </div>
                  <span className="mt-2 block h-1.5 w-full rounded-full bg-foreground/15" />
                  <span className="mt-1.5 block h-1.5 w-2/3 rounded-full bg-foreground/10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </BrowserFrame>
    </div>
  );
}
