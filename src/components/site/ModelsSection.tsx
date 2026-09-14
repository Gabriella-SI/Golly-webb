import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { ModelPreview } from "./ModelPreview";
import { models, categories, type ModelCategory } from "@/lib/models";

export function ModelsSection() {
  const [active, setActive] = useState<ModelCategory | "Todos">("Todos");
  const visible = active === "Todos" ? models : models.filter((m) => m.category === active);

  return (
    <section id="modelos" className="py-24 bg-slate-950 text-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-purple-400 bg-purple-950/60 border border-purple-800/40 px-4 py-1.5 rounded-full">
              Modelos
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-4 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Modelos prontos para o seu segmento
            </h2>
            <p className="text-slate-400 mt-4 text-base">
              Escolha uma direção e veja a demonstração real da página.
            </p>
          </div>
        </Reveal>

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {(["Todos", ...categories] as const).map((c) => (
            <button
              key={c}
              onClick={() => setActive(c as ModelCategory | "Todos")}
              className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors ${
                active === c
                  ? "border-purple-500/50 bg-purple-500/20 text-purple-200"
                  : "border-white/10 bg-white/5 text-slate-400 hover:text-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((model) => (
            <Reveal key={model.slug}>
              <div className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/40">
                <ModelPreview model={model} />
                <div className="space-y-3 p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-white">{model.name}</h3>
                    <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] text-slate-400">
                      {model.category}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed text-slate-400">{model.summary}</p>
                  <Link
                    to="/modelos/$slug"
                    params={{ slug: model.slug }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-300 transition-colors hover:text-purple-200"
                  >
                    Ver demonstração
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
