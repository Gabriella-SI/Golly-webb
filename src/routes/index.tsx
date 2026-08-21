import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Gauge,
  Globe,
  LifeBuoy,
  MonitorSmartphone,
  Palette,
  Quote,
  RefreshCw,
  Server,
  Sparkles,
  Target,
  Wrench,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { Reveal } from "@/components/site/Reveal";
import { HeroMockup } from "@/components/site/HeroMockup";
import { ModelPreview } from "@/components/site/ModelPreview";
import { QuoteForm } from "@/components/site/QuoteForm";
import { categories, models, WHATSAPP_URL, type ModelCategory } from "@/lib/models";

const TITLE = "Golly Web — Landing pages profissionais que convertem";
const DESCRIPTION =
  "A Golly Web cria landing pages modernas, estratégicas e responsivas para negócios, profissionais e criadores. Solicite seu orçamento.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Home,
});

const differentials = [
  {
    icon: Sparkles,
    title: "Design que chama atenção",
    text: "Visual moderno e profissional, feito para a sua marca parecer maior do que ela é hoje.",
  },
  {
    icon: Target,
    title: "Estrutura pensada para conversão",
    text: "Cada seção existe por um motivo: levar o visitante até a ação que importa.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsivo de verdade",
    text: "Experiência ajustada para celular, tablet e computador, sem quebras.",
  },
  {
    icon: Gauge,
    title: "Performance",
    text: "Páginas leves e rápidas — quem chega não desiste esperando carregar.",
  },
  {
    icon: Palette,
    title: "Personalização",
    text: "O projeto se adapta à sua identidade, ao seu público e aos seus objetivos.",
  },
  {
    icon: LifeBuoy,
    title: "Suporte contínuo",
    text: "Depois da entrega, é possível contratar manutenção e alterações quando precisar.",
  },
];

const steps = [
  {
    n: "01",
    title: "Você conta sua ideia",
    text: "Explique seu negócio, seu objetivo e o que você precisa alcançar com a página.",
  },
  {
    n: "02",
    title: "Definimos a melhor solução",
    text: "A Golly Web apresenta a estrutura, o formato e a proposta ideal para o seu caso.",
  },
  {
    n: "03",
    title: "Criamos sua landing page",
    text: "Design, conteúdo e estrutura desenvolvidos de acordo com o projeto aprovado.",
  },
  {
    n: "04",
    title: "Sua página vai para o ar",
    text: "Publicação, configurações finais, testes e entrega pronta para receber visitas.",
  },
];

const plans = [
  {
    name: "START",
    price: "A partir de R$ XXX",
    tagline: "Para quem precisa começar sua presença digital.",
    features: [
      "Modelo pronto personalizado",
      "Página única e objetiva",
      "Botão de WhatsApp integrado",
      "Hospedagem inclusa",
      "Totalmente responsiva",
    ],
    cta: "Quero começar",
    highlight: false,
  },
  {
    name: "PRO",
    price: "A partir de R$ XXX",
    tagline: "Para negócios que querem uma apresentação mais completa.",
    features: [
      "Estrutura ampliada por seções",
      "Ajustes de identidade visual",
      "Formulário de contato",
      "Otimização de performance",
      "Configuração de domínio",
      "Suporte inicial incluído",
    ],
    cta: "Quero o plano Pro",
    highlight: true,
  },
  {
    name: "CUSTOM",
    price: "Valor sob consulta",
    tagline: "Para projetos personalizados e necessidades específicas.",
    features: [
      "Projeto desenvolvido sob medida",
      "Design exclusivo",
      "Seções e recursos definidos com você",
      "Integrações conforme o escopo",
      "Plano de manutenção opcional",
    ],
    cta: "Solicitar orçamento",
    highlight: false,
  },
];

const extras = [
  {
    icon: Server,
    title: "Hospedagem",
    text: "Hospedagem gratuita inclusa nos projetos, com estrutura estável e rápida.",
  },
  {
    icon: Globe,
    title: "Domínio",
    text: "Pode ser gratuito ou pago, dependendo do projeto. Orientamos a melhor escolha.",
  },
  {
    icon: Wrench,
    title: "Manutenção",
    text: "Acompanhamento contínuo disponível mediante taxa combinada previamente.",
  },
  {
    icon: RefreshCw,
    title: "Alterações e atualizações",
    text: "Mudanças de conteúdo, seções e ajustes visuais após a entrega, sob demanda.",
  },
];

const faq = [
  {
    q: "A Golly Web cria landing pages personalizadas?",
    a: "Sim. Além dos modelos personalizáveis, também desenvolvemos projetos sob medida, com design e estrutura exclusivos.",
  },
  {
    q: "Preciso ter domínio?",
    a: "Não necessariamente. A Golly Web pode orientar e configurar o domínio conforme o projeto — em alguns casos ele é gratuito, em outros há custo de registro.",
  },
  {
    q: "A página funciona no celular?",
    a: "Sim. Todos os projetos são responsivos e testados em celular, tablet e computador.",
  },
  {
    q: "Vocês fazem manutenção?",
    a: "Sim. É possível contratar manutenção, alterações e atualizações após a entrega mediante taxa.",
  },
  {
    q: "Quanto custa uma landing page?",
    a: "O valor depende do modelo escolhido e das necessidades do projeto. Solicite um orçamento e enviaremos uma proposta clara.",
  },
  {
    q: "Posso ver exemplos antes de contratar?",
    a: "Sim. Na seção de modelos você consegue abrir demonstrações navegáveis dos projetos.",
  },
];

function SectionTitle({
  eyebrow,
  title,
  text,
  center = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="inline-block rounded-full border border-border bg-surface/50 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-bold leading-[1.08] sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {text && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{text}</p>}
    </div>
  );
}

function Home() {
  const [filter, setFilter] = useState<ModelCategory | "Todos">("Todos");
  const visible = filter === "Todos" ? models : models.filter((m) => m.category === filter);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppFab />

      <main>
        {/* HERO */}
        <section id="inicio" className="relative overflow-hidden pb-16 pt-28 sm:pt-36 lg:pb-24">
          <div className="grid-lines pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-[520px]"
            style={{
              background:
                "radial-gradient(50% 60% at 20% 0%, oklch(0.4 0.16 265 / 0.45), transparent 70%), radial-gradient(45% 55% at 85% 10%, oklch(0.38 0.18 300 / 0.4), transparent 70%)",
            }}
          />
          <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
              <div>
                <Reveal>
                  <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-gradient" />
                    Landing pages profissionais
                  </span>
                </Reveal>
                <Reveal delay={80}>
                  <h1 className="mt-6 text-4xl font-bold leading-[1.02] sm:text-5xl lg:text-[3.65rem]">
                    Seu negócio merece
                    <br />
                    mais do que
                    <span className="text-gradient"> uma página</span>.
                  </h1>
                </Reveal>
                <Reveal delay={140}>
                  <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
                    Criamos landing pages modernas, estratégicas e feitas para transformar
                    visitantes em clientes.
                  </p>
                </Reveal>
                <Reveal delay={200}>
                  <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                    <Link
                      to="/"
                      hash="orcamento"
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.03]"
                    >
                      Solicitar orçamento
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                      to="/"
                      hash="modelos"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface/40 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-secondary"
                    >
                      Ver modelos
                    </Link>
                  </div>
                </Reveal>
                <Reveal delay={260}>
                  <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6">
                    {[
                      ["Modelos", "prontos e sob medida"],
                      ["Hospedagem", "inclusa no projeto"],
                      ["Suporte", "manutenção opcional"],
                    ].map(([t, d]) => (
                      <div key={t}>
                        <dt className="font-display text-sm font-bold">{t}</dt>
                        <dd className="mt-1 text-xs leading-snug text-muted-foreground">{d}</dd>
                      </div>
                    ))}
                  </dl>
                </Reveal>
              </div>

              <Reveal delay={160}>
                <HeroMockup />
              </Reveal>
            </div>
          </div>
        </section>

        {/* SOLUÇÕES / DIFERENCIAL */}
        <section id="solucoes" className="scroll-mt-20 py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <Reveal>
              <SectionTitle
                eyebrow="Soluções"
                title={
                  <>
                    Não criamos apenas páginas.
                    <br />
                    Criamos <span className="text-gradient">experiências</span>.
                  </>
                }
                text="Todo detalhe existe para o visitante confiar na sua marca e dar o próximo passo."
              />
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {differentials.map((d, i) => (
                <Reveal key={d.title} delay={i * 70}>
                  <article className="card-elevated group h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-primary-foreground">
                      <d.icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold">{d.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* MODELOS / PORTFÓLIO */}
        <section id="modelos" className="scroll-mt-20 border-y border-border bg-surface/25 py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <Reveal>
              <SectionTitle
                eyebrow="Modelos"
                title={
                  <>
                    Veja o que podemos <span className="text-gradient">criar</span>.
                  </>
                }
                text="Modelos navegáveis para você experimentar antes de decidir. Cada um pode ser adaptado ao seu negócio."
              />
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-9 flex flex-wrap gap-2">
                {(["Todos", ...categories] as const).map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setFilter(c)}
                    className={
                      filter === c
                        ? "rounded-full bg-brand-gradient px-4 py-2 text-xs font-semibold text-primary-foreground"
                        : "rounded-full border border-border px-4 py-2 text-xs text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    }
                  >
                    {c}
                  </button>
                ))}
              </div>
            </Reveal>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visible.map((m, i) => (
                <Reveal key={m.slug} delay={i * 60}>
                  <article className="card-elevated group h-full overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40">
                    <div className="overflow-hidden border-b border-border">
                      <div className="transition-transform duration-500 group-hover:scale-[1.04]">
                        <ModelPreview model={m} />
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-lg font-semibold">{m.name}</h3>
                        <span className="rounded-full border border-border px-2.5 py-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                          {m.category}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {m.summary}
                      </p>
                      <Link
                        to="/modelos/$slug"
                        params={{ slug: m.slug }}
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                      >
                        Ver demonstração
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section id="como-funciona" className="scroll-mt-20 py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <Reveal>
              <SectionTitle
                eyebrow="Como funciona"
                title={
                  <>
                    Do primeiro contato ao <span className="text-gradient">site no ar</span>.
                  </>
                }
                center
              />
            </Reveal>
            <div className="relative mt-14">
              <div className="absolute left-[1.35rem] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-primary/60 via-violet/40 to-transparent lg:left-0 lg:top-[1.35rem] lg:h-px lg:w-full lg:bg-gradient-to-r" />
              <ol className="grid gap-9 lg:grid-cols-4 lg:gap-6">
                {steps.map((s, i) => (
                  <Reveal as="li" key={s.n} delay={i * 90} className="relative pl-14 lg:pl-0">
                    <span className="absolute left-0 top-0 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background font-display text-xs font-bold text-foreground lg:static lg:mb-5 lg:flex">
                      {s.n}
                    </span>
                    <h3 className="text-lg font-semibold lg:mt-0">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* PLANOS */}
        <section id="planos" className="scroll-mt-20 border-y border-border bg-surface/25 py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <Reveal>
              <SectionTitle
                eyebrow="Planos"
                title={
                  <>
                    Escolha o ponto de <span className="text-gradient">partida</span>.
                  </>
                }
                text="Os valores são definidos conforme o escopo. Os campos abaixo são editáveis e servem como referência inicial."
                center
              />
            </Reveal>
            <div className="mt-12 grid items-start gap-6 lg:grid-cols-3">
              {plans.map((p, i) => (
                <Reveal key={p.name} delay={i * 80}>
                  <article
                    className={
                      p.highlight
                        ? "card-elevated relative h-full rounded-3xl border-primary/50 p-7 glow-brand"
                        : "card-elevated h-full rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1"
                    }
                  >
                    {p.highlight && (
                      <span className="absolute -top-3 left-7 rounded-full bg-brand-gradient px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                        Mais escolhido
                      </span>
                    )}
                    <h3 className="font-display text-xl font-bold tracking-tight">{p.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{p.tagline}</p>
                    <p className="mt-6 font-display text-2xl font-bold">{p.price}</p>
                    <ul className="mt-6 space-y-3">
                      {p.features.map((f) => (
                        <li key={f} className="flex gap-2.5 text-sm text-muted-foreground">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/"
                      hash="orcamento"
                      className={
                        p.highlight
                          ? "mt-8 inline-flex w-full items-center justify-center rounded-full bg-brand-gradient px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
                          : "mt-8 inline-flex w-full items-center justify-center rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                      }
                    >
                      {p.cta}
                    </Link>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SERVIÇOS ADICIONAIS */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <Reveal>
              <SectionTitle
                eyebrow="Serviços adicionais"
                title={
                  <>
                    O que acompanha o seu <span className="text-gradient">projeto</span>.
                  </>
                }
                text="Alguns serviços podem ser gratuitos dependendo do projeto, outros possuem custo adicional — sempre combinado antes."
              />
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {extras.map((e, i) => (
                <Reveal key={e.title} delay={i * 70}>
                  <article className="card-elevated flex h-full gap-4 rounded-2xl p-6 transition-colors hover:border-primary/40">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface/60 text-primary">
                      <e.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold">{e.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {e.text}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal delay={200}>
              <p className="mt-6 text-xs text-muted-foreground">
                Importante: domínio gratuito depende do tipo de projeto e não é garantido para
                todos os casos.
              </p>
            </Reveal>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section className="border-y border-border bg-surface/25 py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <Reveal>
              <SectionTitle
                eyebrow="Depoimentos"
                title={
                  <>
                    Este espaço é do <span className="text-gradient">próximo cliente</span>.
                  </>
                }
                text="A Golly Web está começando. Em vez de inventar depoimentos, deixamos a estrutura pronta para os seus resultados reais."
                center
              />
            </Reveal>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {[
                "Seu próximo cliente pode estar a uma boa landing page de distância.",
                "Espaço reservado para o depoimento do seu projeto.",
                "Aqui entra o resultado real de quem confiou na Golly Web.",
              ].map((t, i) => (
                <Reveal key={t} delay={i * 80}>
                  <figure className="card-elevated h-full rounded-2xl p-6">
                    <Quote className="h-6 w-6 text-primary" />
                    <blockquote className="mt-4 font-display text-lg leading-snug">{t}</blockquote>
                    <figcaption className="mt-6 flex items-center gap-3">
                      <span className="h-9 w-9 rounded-full border border-dashed border-border" />
                      <span className="text-xs text-muted-foreground">
                        Nome do cliente
                        <br />
                        <span className="text-muted-foreground/70">Empresa · placeholder</span>
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-20 py-20 lg:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <Reveal>
              <SectionTitle
                eyebrow="FAQ"
                title={
                  <>
                    Perguntas <span className="text-gradient">frequentes</span>.
                  </>
                }
                text="Se ficar alguma dúvida, fale com a gente no WhatsApp."
              />
            </Reveal>
            <Reveal delay={80}>
              <Accordion type="single" collapsible className="w-full">
                {faq.map((f, i) => (
                  <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
                    <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="relative overflow-hidden border-y border-border py-20 lg:py-28">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(45% 65% at 15% 20%, oklch(0.4 0.17 265 / 0.5), transparent 70%), radial-gradient(45% 60% at 85% 80%, oklch(0.38 0.19 300 / 0.45), transparent 70%)",
            }}
          />
          <div className="grid-lines pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]" />
          <div className="relative mx-auto max-w-3xl px-5 text-center lg:px-8">
            <Reveal>
              <h2 className="text-3xl font-bold leading-[1.06] sm:text-4xl lg:text-5xl">
                Pronto para transformar sua ideia em uma
                <span className="text-gradient"> página incrível</span>?
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground">
                Conte para a Golly Web o que você precisa. A gente cuida do resto.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  to="/"
                  hash="orcamento"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.03]"
                >
                  Solicitar orçamento
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/50 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-secondary"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FORMULÁRIO */}
        <section id="orcamento" className="scroll-mt-20 py-20 lg:py-28">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <Reveal>
              <SectionTitle
                eyebrow="Orçamento"
                title={
                  <>
                    Vamos falar sobre o seu <span className="text-gradient">projeto</span>.
                  </>
                }
                text="Poucas perguntas, direto ao ponto. Quanto mais claro o objetivo, melhor a proposta."
              />
              <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
                {[
                  "Resposta com proposta clara e sem letras miúdas",
                  "Orientação sobre domínio e hospedagem",
                  "Sem compromisso de contratação",
                ].map((t) => (
                  <li key={t} className="flex gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={80}>
              <QuoteForm />
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
