import { Reveal } from "./Reveal";

export function HeroMockup() {
  return (
    <section className="relative pt-32 pb-20 bg-slate-950 text-white overflow-hidden">
      {/* Luzes neon de fundo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none animate-glow" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-purple-400 bg-purple-950/60 border border-purple-800/40 px-4 py-1.5 rounded-full mb-6">
            Landing Pages Digitais
          </span>
          
          <h1 className="text-4xl md:text-6xl font-extrabold max-w-4xl mx-auto leading-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            Páginas modernas e estratégicas para o seu negócio
          </h1>

          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mt-6">
            Transformamos a presença digital do seu negócio com design premium e alta performance.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/5583998763599?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Golly%20Web%20e%20gostaria%20de%20um%20or%C3%A7amento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold shadow-lg shadow-purple-500/25 hover:scale-105 transition-all duration-300"
            >
              Solicitar Orçamento
            </a>
          </div>
        </Reveal>

        {/* Mockup Flutuante com o design original de esqueleto minimalista */}
        <Reveal>
          <div className="mt-16 max-w-md mx-auto relative">
            <div className="relative bg-slate-900/40 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl flex flex-col gap-4 animate-float">
              
              <div className="flex items-center gap-4 bg-slate-950/60 border border-white/10 p-4 rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 shrink-0" />
                <div className="flex flex-col gap-2 w-full">
                  <div className="h-3 w-3/4 bg-slate-700/60 rounded-full" />
                  <div className="h-2.5 w-1/2 bg-slate-800/60 rounded-full" />
                </div>
              </div>

              <div className="flex items-center gap-4 bg-slate-950/60 border border-white/10 p-4 rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 shrink-0" />
                <div className="flex flex-col gap-2 w-full">
                  <div className="h-3 w-3/4 bg-slate-700/60 rounded-full" />
                  <div className="h-2.5 w-1/2 bg-slate-800/60 rounded-full" />
                </div>
              </div>

              <div className="flex items-center gap-4 bg-slate-950/60 border border-white/10 p-4 rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 shrink-0" />
                <div className="flex flex-col gap-2 w-full">
                  <div className="h-3 w-3/4 bg-slate-700/60 rounded-full" />
                  <div className="h-2.5 w-1/2 bg-slate-800/60 rounded-full" />
                </div>
              </div>

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
