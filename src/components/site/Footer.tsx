import { Link } from "@tanstack/react-router";
import { Mail, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { EMAIL, WHATSAPP_URL } from "@/lib/models";

const links = [
  { label: "Início", hash: "inicio" },
  { label: "Soluções", hash: "solucoes" },
  { label: "Modelos", hash: "modelos" },
  { label: "Planos", hash: "planos" },
  { label: "FAQ", hash: "faq" },
  { label: "Contato", hash: "orcamento" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Landing pages que transformam ideias em presença digital.
          </p>
        </div>

        <nav className="grid grid-cols-2 gap-y-3 text-sm md:grid-cols-1">
          {links.map((l) => (
            <Link
              key={l.hash}
              to="/"
              hash={l.hash}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="space-y-3 text-sm">
          
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="h-4 w-4" /> {EMAIL}
          </a>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Golly Web. Todos os direitos reservados.</p>
          <p>Landing pages profissionais · Hospedagem · Manutenção</p>
        </div>
      </div>
    </footer>
  );
}
