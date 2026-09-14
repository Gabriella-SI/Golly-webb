import { ArrowRight, MessageSquare, Sparkles, TrendingUp, Zap } from "lucide-react";
import { BrowserFrame } from "@/components/site/BrowserFrame";

const WHATSAPP_URL =
  "https://wa.me/5583998673599?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Golly%20Web%20e%20gostaria%20de%20um%20or%C3%A7amento.";

const stats = [
  { value: "48h", label: "Entrega média" },
  { value: "100%", label: "Responsivo" },
  { value: "+90", label: "Nota performance" },
];

export function HeroMockup() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="inicio" className="relative px-4 pt-28 pb-28 md:pt-36">
      {/* auras flutuantes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-drift absolute -top-24 left-[12%] h-[26rem] w-[26rem] rounded-full bg-violet/25 blur-[120px]" />
        <div className="animate-glow absolute top-32 right-[6%] h-[30rem] w-[30rem] rounded-full bg-primary/25 blur-[130px]" />
        <div className="grid-lines absolute inset-0 opacity-[0.25] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="float-panel relative px-6 py-12 md:px-12 md:py-16">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-2 text-[11px] font-medium tracking-wide text-muted-foreground backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-violet" />
                Landing pages de alta conversão
              </span>

              <h1 className="mt-7 text-4xl leading-[1.03] font-black md:text-6xl">
                Seu negócio merece mais do que{" "}
                <span className="text-gradient">uma página</span>
              </h1>

              <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                Páginas rápidas, elegantes e feitas para transformar visitantes em clientes.
                Design sob medida, animações suaves e foco total em resultado.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => scrollTo("orcamento")}
                  className="float-lift glow-brand bg-brand-gradient flex cursor-pointer items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:float-lift-hover"
                >
                  Solicitar orçamento <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="float-lift flex items-center gap-2 rounded-full border border-border bg-white/5 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur hover:float-lift-hover"
                >
                  <MessageSquare className="h-4 w-4 text-emerald-400" /> Falar no WhatsApp
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="float-card float-lift px-5 py-3 hover:float-lift-hover"
                  >
                    <p className="text-xl font-black">{item.value}</p>
                    <p className="text-[11px] text-muted-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* pilha flutuante */}
            <div className="relative">
              <div className="animate-float relative z-10 [--float-rotate:-2deg]">
                <BrowserFrame
                  url="gollyweb.com/sua-marca"
                  className="rounded-[1.75rem] shadow-[0_50px_90px_-40px_rgba(0,0,0,0.95)]"
                >
                  <div className="space-y-5 bg-background/80 p-7">
                    <span className="text-[10px] font-semibold tracking-[0.22em] text-violet uppercase">
                      Sua marca
                    </span>
                    <h3 className="text-xl leading-tight font-black">
                      Atendimento premium para quem quer resultado
                    </h3>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      Uma página feita para apresentar o seu serviço e receber contatos todos os
                      dias.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-1">
                      <span className="bg-brand-gradient rounded-full px-4 py-2 text-[11px] font-semibold text-primary-foreground">
                        Quero um orçamento
                      </span>
                      <span className="rounded-full border border-border px-4 py-2 text-[11px] font-semibold text-foreground">
                        Ver serviços
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-3 pt-3">
                      {[
                        { title: "Design próprio", text: "Visual único da sua marca" },
                        { title: "Conversão", text: "Textos que geram contato" },
                        { title: "Velocidade", text: "Abre em menos de 1s" },
                      ].map((item) => (
                        <div
                          key={item.title}
                          className="rounded-xl border border-border bg-white/5 p-3"
                        >
                          <p className="text-[11px] font-bold">{item.title}</p>
                          <p className="mt-1 text-[10px] leading-snug text-muted-foreground">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </BrowserFrame>
              </div>

              {/* cartão flutuante sobreposto */}
              <div className="animate-float-medium animate-delay-1 float-card absolute -bottom-8 -left-6 z-20 hidden w-52 items-center gap-3 p-4 sm:flex">
                <span className="bg-brand-gradient rounded-xl p-2.5">
                  <TrendingUp className="h-4 w-4 text-primary-foreground" />
                </span>
                <div>
                  <p className="text-sm font-black">+38%</p>
                  <p className="text-[10px] text-muted-foreground">de contatos no 1º mês</p>
                </div>
              </div>

              <div className="animate-float-reverse animate-delay-2 float-card absolute -top-7 -right-4 z-20 hidden items-center gap-2 px-4 py-3 md:flex">
                <Zap className="h-4 w-4 text-violet" />
                <p className="text-[11px] font-semibold">0,8s para carregar</p>
              </div>

              {/* reflexo */}
              <div className="pointer-events-none absolute -bottom-16 left-8 right-8 h-24 rounded-[50%] bg-primary/25 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
