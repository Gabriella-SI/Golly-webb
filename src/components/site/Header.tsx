import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Início", hash: "inicio" },
  { label: "Soluções", hash: "solucoes" },
  { label: "Modelos", hash: "modelos" },
  { label: "Como funciona", hash: "como-funciona" },
  { label: "Planos", hash: "planos" },
  { label: "FAQ", hash: "faq" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-8">
        <Link to="/" hash="inicio" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.hash}
              to="/"
              hash={item.hash}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/"
            hash="orcamento"
            className="hidden rounded-full bg-brand-gradient px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.03] sm:inline-flex"
          >
            Solicitar orçamento
          </Link>
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-border bg-background/95 backdrop-blur-xl transition-all duration-300 lg:hidden",
          open ? "max-h-96 border-b" : "max-h-0",
        )}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 pb-5 pt-2">
          {nav.map((item) => (
            <Link
              key={item.hash}
              to="/"
              hash={item.hash}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-base text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/"
            hash="orcamento"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-brand-gradient px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
          >
            Solicitar orçamento
          </Link>
        </nav>
      </div>
    </header>
  );
}
