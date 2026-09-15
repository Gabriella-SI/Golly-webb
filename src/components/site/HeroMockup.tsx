import { ArrowRight, MessageSquare, TrendingUp } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5583998673599?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20GollyWeb%20e%20gostaria%20de%20um%20or%C3%A7amento.";

const stats = [
  { value: "48h", label: "Entrega média" },
  { value: "100%", label: "Responsivo" },
  { value: "+90", label: "Nota performance" },
];

const features = [
  { title: "Design próprio", text: "Visual único da sua marca" },
  { title: "Conversão", text: "Textos que geram contato" },
  { title: "Velocidade", text: "Abre em menos de 1s" },
];

export function HeroMockup() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="inicio"
      className="relative flex items-center justify-center overflow-hidden px-6 pt-32 pb-24 md:pt-40 md:pb-32"
    >
      {/* brilhos ambiente */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-full w-full max-w-6xl -translate-x-1/2 -translate-y-1/2">
        <div className="animate-glow absolute top-1/4 -right-20 h-96 w-96 rounded-full bg-violet/20 blur-[120px]" />
        <div className="animate-drift absolute bottom-1/4 -left-20 h-96 w-96 rounded-full bg-primary/15 blur-[120px]" />
      </div>

      {/* painel de vidro principal */}
      <div className="relative flex w-full max-w-6xl flex-col items-center gap-12 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-8 shadow-[0_60px_120px_-50px_rgba(0,0,0,0.95)] backdrop-blur-2xl lg:flex-row lg:p-16">
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-20" />

        {/* conteúdo */}
        <div className="relative z-10 flex-1">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
            <span className="h-2 w-2 animate-pulse rounded-full bg-violet" />
            <span className="font-mono text-[11px] font-medium tracking-[0.14em] text-foreground/80 uppercase">
              Landing pages de alta conversão
            </span>
          </div>

          <h1 className="mb-6 font-display text-4xl leading-[1.08] font-bold text-foreground md:text-5xl lg:text-6xl">
            Seu negócio merece mais do que <span className="text-gradient">uma página</span>
          </h1>

          <p className="mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Páginas rápidas, elegantes e feitas para transformar visitantes em clientes. Design sob
            medida, animações suaves e foco total em resultado.
          </p>

          <div className="mb-12 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => scrollTo("orcamento")}
              className="float-lift glow-brand bg-brand-gradient flex cursor-pointer items-center gap-2 rounded-2xl px-8 py-4 font-display font-semibold text-primary-foreground hover:float-lift-hover active:scale-95"
            >
              Solicitar orçamento <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="float-lift flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-display font-semibold text-foreground backdrop-blur hover:float-lift-hover active:scale-95"
            >
              <MessageSquare className="h-4 w-4 text-emerald-400" /> Falar no WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
            {stats.map((item) => (
              <div key={item.label}>
                <div className="font-display text-2xl font-bold text-foreground">{item.value}</div>
                <div className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* visual */}
        <div className="relative z-10 w-full flex-1">
          <div className="group relative">
            <div className="pointer-events-none absolute -top-6 -right-6 h-24 w-24 rounded-2xl bg-violet/15 blur-xl transition-all group-hover:blur-2xl" />
            <div className="pointer-events-none absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-primary/15 blur-xl transition-all group-hover:blur-2xl" />

            <div className="animate-float relative overflow-hidden rounded-2xl border border-white/20 bg-background shadow-[0_50px_90px_-40px_rgba(0,0,0,0.95)] transition-transform duration-700 group-hover:rotate-0 lg:rotate-2">
              <div className="flex h-9 items-center gap-1.5 border-b border-white/10 bg-white/5 px-4">
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="ml-3 flex-1 truncate rounded-md bg-background/70 px-3 py-1 font-mono text-[10px] text-muted-foreground">
                  gollyweb.com/sua-marca
                </span>
              </div>

              <div className="space-y-5 bg-gradient-to-br from-white/5 to-transparent p-7">
                <span className="font-mono text-[10px] font-medium tracking-[0.22em] text-violet uppercase">
                  Sua marca
                </span>
                <h3 className="font-display text-xl leading-tight font-bold">
                  Atendimento premium para quem quer resultado
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  Uma página feita para apresentar o seu serviço e receber contatos todos os dias.
                </p>
                <div className="flex flex-wrap gap-3 pt-1">
                  <span className="bg-brand-gradient rounded-full px-4 py-2 font-display text-[11px] font-semibold text-primary-foreground">
                    Quero um orçamento
                  </span>
                  <span className="rounded-full border border-white/10 px-4 py-2 font-display text-[11px] font-semibold text-foreground">
                    Ver serviços
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3 pt-2">
                  {features.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-white/10 bg-white/5 p-3"
                    >
                      <p className="font-display text-[11px] font-bold">{item.title}</p>
                      <p className="mt-1 text-[10px] leading-snug text-muted-foreground">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* cartão flutuante */}
            <div className="animate-float-medium animate-delay-1 absolute -right-4 -bottom-10 hidden rounded-2xl border border-white/20 bg-white/10 p-4 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.9)] backdrop-blur-md md:block">
              <div className="flex items-center gap-3">
                <span className="bg-brand-gradient flex h-10 w-10 items-center justify-center rounded-full">
                  <TrendingUp className="h-4 w-4 text-primary-foreground" />
                </span>
                <div>
                  <div className="font-mono text-[10px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
                    Conversão
                  </div>
                  <div className="font-display text-lg font-bold text-foreground">+32,5%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
