
import { BrowserFrame } from "./BrowserFrame";

export function HeroMockup() {
  return (
    <div className="relative pb-6 pl-4 pr-2 pt-2 sm:pb-10 sm:pl-8">
      <div
        className="pointer-events-none absolute -inset-10 -z-10 opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(45% 45% at 30% 25%, oklch(0.45 0.19 265 / 0.55), transparent 70%), radial-gradient(45% 45% at 75% 70%, oklch(0.42 0.2 300 / 0.5), transparent 70%)",
        }}
      />

      {/* dots soltos flutuando, só decoração */}
      <span
        className="animate-float-medium animate-delay-1 pointer-events-none absolute -left-2 top-6 hidden h-2.5 w-2.5 rounded-full bg-brand-gradient opacity-70 sm:block"
        aria-hidden="true"
      />
      <span
        className="animate-drift pointer-events-none absolute right-6 top-0 hidden h-1.5 w-1.5 rounded-full bg-violet opacity-60 sm:block"
        aria-hidden="true"
      />

      {/* estatística flutuante, sobreposta ao card principal */}
      <div
        className="animate-float-reverse card-elevated glow-brand pointer-events-none absolute -right-3 top-2 z-20 hidden rounded-2xl px-4 py-3 backdrop-blur sm:block"
        aria-hidden="true"
      >
        <p className="font-display text-lg font-bold text-gradient">+120</p>
        <p className="text-[10px] text-muted-foreground">projetos entregues</p>
      </div>

      {/* mini mockup mobile, flutuando atrás, dando profundidade */}
      <div
        className="animate-float-medium animate-delay-2 pointer-events-none absolute -bottom-6 -left-4 z-0 hidden w-32 origin-bottom-left sm:block"
        style={{ ["--float-rotate" as string]: "-6deg" }}
        aria-hidden="true"
      >
        <div className="card-elevated overflow-hidden rounded-xl opacity-90 shadow-2xl">
          <div className="flex items-center gap-1 border-b border-border bg-surface/70 px-2 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gradient" />
            <span className="h-1 w-10 rounded-full bg-foreground/30" />
          </div>
          <div className="space-y-1.5 bg-background p-2.5">
            <span className="block h-1.5 w-3/4 rounded-full bg-foreground/50" />
            <span className="block h-1.5 w-full rounded-full bg-foreground/15" />
            <span className="block h-8 w-full rounded-md bg-brand-gradient opacity-80" />
          </div>
        </div>
      </div>

      <BrowserFrame
        url="modelo.gollyweb.com"
        className="animate-float glow-brand relative z-10 -rotate-1 transition-transform duration-500 hover:rotate-0"
      >
        <div className="relative">
          <div className="flex items-center justify-between border-b border-border bg-surface/60 px-5 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-[3px] bg-brand-gradient" />
              <span className="text-xs font-semibold text-foreground/85">Studio Nova</span>
            </div>
            <div className="hidden gap-4 text-[11px] text-foreground/40 sm:flex">
              <span>Sobre</span>
              <span>Serviços</span>
              <span>Contato</span>
            </div>
          </div>

          <div className="grid gap-6 px-5 py-6 sm:grid-cols-[1.1fr_0.9fr] sm:px-8 sm:py-10">
            <div className="space-y-4">
              <span className="inline-block rounded-full border border-border px-2.5 py-1 text-[10px] text-muted-foreground">
                LANDING PAGE
              </span>
              <h3 className="font-display text-2xl font-bold leading-tight sm:text-3xl">
                Sua marca com <span className="text-gradient">presença de verdade</span>.
              </h3>
              <p className="max-w-sm text-sm text-muted-foreground">
                Estrutura pensada para conduzir o visitante até o contato, sem ruído e sem
                distração.
              </p>
              <div className="flex gap-3 pt-1">
                <span className="rounded-full bg-brand-gradient px-4 py-2 text-xs font-semibold text-primary-foreground">
                  Quero um orçamento
                </span>
                <span className="rounded-full border border-border px-4 py-2 text-xs text-foreground/70">
                  Ver mais
                </span>
              </div>
              <div className="flex gap-6 pt-4 text-xs text-muted-foreground">
                <div>
                  <p className="font-display text-base font-bold text-foreground">+120</p>
                  <p>projetos</p>
                </div>
                <div>
                  <p className="font-display text-base font-bold text-foreground">98%</p>
                  <p>mobile</p>
                </div>
                <div>
                  <p className="font-display text-base font-bold text-foreground">0.9s</p>
                  <p>carregando</p>
                </div>
              </div>
            </div>

            <div className="hidden space-y-3 sm:block">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-xl border border-border bg-surface/50 p-3"
                >
                  <span className="h-8 w-8 shrink-0 rounded-full bg-brand-gradient opacity-80" />
                  <div className="space-y-1.5">
                    <span className="block h-2 w-24 rounded-full bg-foreground/30" />
                    <span className="block h-2 w-16 rounded-full bg-foreground/15" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </BrowserFrame>
    </div>
  );
}
