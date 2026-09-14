import { Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-white/10 py-12 relative z-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-xl font-bold text-white tracking-wider">GOLLY WEB</h2>
          <p className="text-xs text-slate-500 mt-1">
            Landing pages digitais que transformam visitantes em clientes.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:gollyweeb@gmail.com"
            className="flex items-center gap-2 text-xs text-slate-300 hover:text-purple-400 transition-colors bg-slate-900/60 px-4 py-2 rounded-full border border-white/10"
          >
            <Mail className="w-4 h-4 text-purple-400" />
            gollyweeb@gmail.com
          </a>
          <a
            href="https://instagram.com/Gollyweb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-slate-300 hover:text-purple-400 transition-colors bg-slate-900/60 px-4 py-2 rounded-full border border-white/10"
          >
            <Instagram className="w-4 h-4 text-purple-400" />
            @Gollyweb
          </a>
        </div>
        <p className="text-xs text-slate-600">
          © {new Date().getFullYear()} Golly Web. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
