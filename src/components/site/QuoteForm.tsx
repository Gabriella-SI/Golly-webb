import { useState } from "react";
import { Send } from "lucide-react";
import { Reveal } from "./Reveal";

export function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Landing Page Standard",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const textMessage =
    `Olá! Vim pelo site da Golly Web.\n\n` +
    `Nome: ${formData.name || "Não informado"}\n` +
    `Email: ${formData.email || "Não informado"}\n` +
    `Telefone: ${formData.phone || "Não informado"}\n` +
    `Projeto: ${formData.projectType}\n` +
    `Mensagem: ${formData.message || "Sem mensagem"}`;

  const whatsappUrl = `https://wa.me/5583998673599?text=${encodeURIComponent(textMessage)}`;

  return (
    <section id="orcamento" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-purple-400 bg-purple-950/60 border border-purple-800/40 px-4 py-1.5 rounded-full">
              Solicite seu Orçamento
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-4 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Vamos tirar seu projeto do papel?
            </h2>
            <p className="text-slate-400 mt-3 text-sm md:text-base">
              Preencha os campos abaixo para iniciar o atendimento.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Seu Nome *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ex: Lucas Silva"
                  className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">E-mail *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seuemail@exemplo.com"
                    className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">WhatsApp com DDD *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(83) 99867-3599"
                    className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Tipo de Projeto</label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
                >
                  <option value="Landing Page Standard">Landing Page Standard</option>
                  <option value="Landing Page Premium Flutuante">Landing Page Premium Flutuante</option>
                  <option value="Redesign de Site Existente">Redesign de Site Existente</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Detalhes do Projeto (Opcional)</label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Conte um pouco sobre seu negócio ou objetivos..."
                  className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                />
              </div>

              <a
                href={whatsappUrl}
                target="_top"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold text-sm shadow-lg shadow-purple-500/25 transition-all duration-300 flex items-center justify-center gap-2 text-center block"
              >
                Enviar Orçamento pelo WhatsApp <Send className="w-4 h-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
