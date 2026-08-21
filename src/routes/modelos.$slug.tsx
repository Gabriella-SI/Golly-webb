import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Sparkles } from "lucide-react";
import { getModel, models, WHATSAPP_URL } from "@/lib/models";
import { Logo } from "@/components/site/Logo";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

export const Route = createFileRoute("/modelos/$slug")({
  loader: ({ params }) => {
    const model = getModel(params.slug);
    if (!model) throw notFound();
    return { model };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Modelo indisponível — Golly Web" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `Modelo ${loaderData.model.name} (${loaderData.model.category}) — Golly Web`;
    const description = loaderData.model.summary;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: ModelDemo,
});

function ModelDemo() {
  const { model } = Route.useLoaderData();
  const d = model.demo;
  const accent = `oklch(0.55 0.18 ${model.hue})`;
  const accentDeep = `oklch(0.32 0.13 ${model.hue})`;
  const others = models.filter((m) => m.slug !== model.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background" style={{ ["--accent-demo" as string]: accent }}>
      <WhatsAppFab />

      {/* Golly Web demo bar */}
      <div className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-3 text-sm text-muted-foreground">
            <ArrowLeft className="h-4 w-4" />
            <Logo showName={false} />
            <span className="hidden sm:inline">Voltar para a Golly Web</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="hidden text-xs text-muted-foreground sm:inline">
              Demonstração · modelo {model.name}
            </span>
            <Link
              to="/"
              hash="orcamento"
              className="rounded-full bg-brand-gradient px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Quero esse modelo
            </Link>
          </div>
        </div>
      </div>

      {/* Demo page */}
      <main>
        <div
          className="border-b border-border"
          style={{
            background: `radial-gradient(60% 70% at 20% 0%, ${accentDeep}88, transparent 70%), radial-gradient(50% 60% at 90% 20%, ${accentDeep}66, transparent 70%)`,
          }}
        >
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <nav className="flex items-center justify-between py-5">
              <span className="inline-flex items-center gap-2 font-display text-base font-bold">
                <span className="h-4 w-4 rounded-[5px]" style={{ background: accent }} />
                {d.brand}
              </span>
              <div className="hidden gap-6 text-sm text-muted-foreground md:flex">
                {d.nav.map((n) => (
                  <span key={n}>{n}</span>
                ))}
              </div>
              <span
                className="rounded-full px-4 py-2 text-xs font-semibold text-primary-foreground"
                style={{ background: accent }}
              >
                {d.primaryCta}
              </span>
            </nav>

            <div className="max-w-2xl py-16 sm:py-24">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
                <Sparkles className="h-3 w-3" /> {d.eyebrow}
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-[1.03] sm:text-5xl lg:text-[3.4rem]">
                {d.headline}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {d.subheadline}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <span
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-primary-foreground"
                  style={{ background: accent }}
                >
                  {d.primaryCta} <ArrowRight className="h-4 w-4" />
                </span>
                <span className="inline-flex items-center justify-center rounded-full border border-border bg-background/40 px-6 py-3.5 text-sm font-semibold backdrop-blur">
                  {d.secondaryCta}
                </span>
              </div>
              <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-border pt-6">
                {d.stats.map((s) => (
                  <div key={s.label}>
                    <dt className="font-display text-xl font-bold">{s.value}</dt>
                    <dd className="mt-1 text-xs text-muted-foreground">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        <section className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {d.features.map((f) => (
              <article key={f.title} className="card-elevated h-full rounded-2xl p-6">
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-primary-foreground"
                  style={{ background: accent }}
                >
                  <Check className="h-5 w-5" />
                </span>
                <h2 className="mt-5 text-lg font-semibold">{f.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-border bg-surface/25 py-20">
          <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 md:grid-cols-2 lg:px-8">
            <div>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">{d.offer.title}</h2>
              <ul className="mt-6 space-y-3">
                {d.offer.items.map((i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: accent }} />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-elevated rounded-3xl p-7">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Investimento</p>
              <p className="mt-3 font-display text-3xl font-bold">{d.offer.price}</p>
              <p className="mt-2 text-sm text-muted-foreground">{d.offer.note}</p>
              <span
                className="mt-7 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-primary-foreground"
                style={{ background: accent }}
              >
                {d.primaryCta}
              </span>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-5 py-20 text-center lg:px-8">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">{d.closing.title}</h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground">{d.closing.text}</p>
          <span
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-primary-foreground"
            style={{ background: accent }}
          >
            {d.closing.cta} <ArrowRight className="h-4 w-4" />
          </span>
          <p className="mt-4 text-xs text-muted-foreground">
            Conteúdo de demonstração. Textos e imagens são adaptados ao seu negócio.
          </p>
        </section>
      </main>

      {/* Golly Web footer for demo */}
      <div className="border-t border-border bg-background py-14">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Gostou do modelo <span className="text-gradient">{model.name}</span>?
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground">
            A Golly Web adapta esse modelo à sua marca — ou cria um projeto totalmente sob medida.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/"
              hash="orcamento"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Solicitar orçamento <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              Falar no WhatsApp
            </a>
          </div>

          <div className="mt-12 border-t border-border pt-8">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              Outros modelos
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {others.map((m) => (
                <Link
                  key={m.slug}
                  to="/modelos/$slug"
                  params={{ slug: m.slug }}
                  className="card-elevated rounded-2xl p-4 transition-all hover:-translate-y-1 hover:border-primary/40"
                >
                  <p className="font-semibold">{m.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{m.category}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
