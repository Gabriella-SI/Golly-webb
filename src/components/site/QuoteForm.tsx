import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

const fields = [
  { name: "nome", label: "Nome", placeholder: "Como podemos te chamar?", type: "text" },
  { name: "empresa", label: "Empresa / marca", placeholder: "Nome do seu negócio", type: "text" },
  { name: "whatsapp", label: "WhatsApp", placeholder: "(00) 00000-0000", type: "tel" },
  { name: "email", label: "E-mail", placeholder: "voce@email.com", type: "email" },
] as const;

const selects = [
  {
    name: "negocio",
    label: "Tipo de negócio",
    options: [
      "Pequeno negócio",
      "Empresa",
      "Profissional autônomo",
      "Criador de conteúdo",
      "Infoprodutor",
      "Prestador de serviço",
      "Outro",
    ],
  },
  {
    name: "necessidade",
    label: "O que você precisa?",
    options: [
      "Criar minha primeira página",
      "Substituir uma página atual",
      "Página para um lançamento",
      "Ainda não sei, quero orientação",
    ],
  },
  {
    name: "tipo",
    label: "Qual tipo de landing page deseja?",
    options: [
      "Modelo pronto personalizado",
      "Projeto sob medida",
      "Página de vendas (infoproduto)",
      "Perfil profissional",
      "Não tenho certeza",
    ],
  },
  {
    name: "investimento",
    label: "Faixa de investimento",
    options: ["Quero começar simples", "Faixa intermediária", "Projeto completo", "Prefiro conversar"],
  },
] as const;

export function QuoteForm() {
  const [sending, setSending] = useState(false);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    const form = event.currentTarget;
    setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success("Solicitação enviada!", {
        description: "A Golly Web vai retornar em breve pelo WhatsApp ou e-mail.",
      });
    }, 600);
  }

  return (
    <form onSubmit={onSubmit} className="card-elevated rounded-3xl p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((f) => (
          <label key={f.name} className="block">
            <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {f.label}
            </span>
            <input
              name={f.name}
              type={f.type}
              required={f.name === "nome" || f.name === "whatsapp"}
              placeholder={f.placeholder}
              className="w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-ring/30"
            />
          </label>
        ))}

        {selects.map((s) => (
          <label key={s.name} className="block">
            <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {s.label}
            </span>
            <select
              name={s.name}
              defaultValue=""
              className="w-full appearance-none rounded-xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30"
            >
              <option value="" disabled>
                Selecione
              </option>
              {s.options.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </label>
        ))}

        <label className="block sm:col-span-2">
          <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Conte sobre o projeto
          </span>
          <textarea
            name="projeto"
            rows={4}
            placeholder="O que você vende, para quem, e o que gostaria de alcançar com a página."
            className="w-full resize-none rounded-xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-ring/30"
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={sending}
        className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gradient px-6 py-4 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.01] disabled:opacity-70 sm:w-auto"
      >
        {sending ? "Enviando..." : "Quero meu orçamento"}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
      <p className="mt-3 text-xs text-muted-foreground">
        Sem compromisso. Responderemos com uma proposta clara para o seu projeto.
      </p>
    </form>
  );
}
