import { Reveal } from "./Reveal";

export function HeroMockup() {
  return (
    <section className="relative pt-32 pb-20 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <Reveal>
          <h1 className="text-4xl md:text-6xl font-extrabold max-w-4xl mx-auto leading-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            Landing pages modernas para impulsionar seu negócio
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mt-6">
            Crie uma presença digital marcante com alta performance e design profissional.
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-16 max-w-sm mx-auto">
            <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 p-5 rounded-3xl shadow-2xl flex flex-col gap-4">
              <div className="flex items-center gap-4 bg-slate-950/60 border border-white/10 p-4 rounded-2xl">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 shrink-0" />
                <div className="flex flex-col gap-2 w-full">
                  <div className="h-3 w-3/4 bg-slate-700/60 rounded-full" />
                  <div className="h-2 bg-slate-800/60 rounded-full" />
                </div>
              </div>

              <div className="flex items-center gap-4 bg-slate-950/60 border border-white/10 p-4 rounded-2xl">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 shrink-0" />
                <div className="flex flex-col gap-2 w-full">
                  <div className="h-3 w-3/4 bg-slate-700/60 rounded-full" />
                  <div className="h-2 bg-slate-800/60 rounded-full" />
                </div>
              </div>

              <div className="flex items-center gap-4 bg-slate-950/60 border border-white/10 p-4 rounded-2xl">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 shrink-0" />
                <div className="flex flex-col gap-2 w-full">
                  <div className="h-3 w-3/4 bg-slate-700/60 rounded-full" />
                  <div className="h-2 bg-slate-800/60 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
