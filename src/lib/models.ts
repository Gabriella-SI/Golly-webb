
export type ModelCategory =
  | "Negócios"
  | "Serviços"
  | "Profissionais"
  | "Produtos"
  | "Criadores"
  | "Infoprodutos";

export type LandingModel = {
  slug: string;
  name: string;
  category: ModelCategory;
  summary: string;
  /** hue used for the model accent (oklch hue angle) */
  hue: number;
  demo: {
    brand: string;
    nav: string[];
    eyebrow: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    stats: { value: string; label: string }[];
    features: { title: string; text: string }[];
    offer: { title: string; items: string[]; price: string; note: string };
    closing: { title: string; text: string; cta: string };
  };
};

export const models: LandingModel[] = [
  {
    slug: "aurora-negocios",
    name: "Aurora",
    category: "Negócios",
    summary: "Estrutura direta para lojas e pequenos negócios locais captarem contato.",
    hue: 262,
    demo: {
      brand: "Aurora Studio",
      nav: ["Início", "Sobre", "Serviços", "Contato"],
      eyebrow: "Negócio local",
      headline: "Seu negócio visível para quem já está procurando.",
      subheadline:
        "Uma página objetiva, rápida e feita para transformar visitas em conversas no WhatsApp.",
      primaryCta: "Falar agora",
      secondaryCta: "Ver serviços",
      stats: [
        { value: "+8 anos", label: "de mercado" },
        { value: "4.9", label: "avaliação média" },
        { value: "24h", label: "para responder" },
      ],
      features: [
        { title: "Atendimento próximo", text: "Contato direto, sem formulário longo e sem burocracia." },
        { title: "Portfólio claro", text: "Mostre o que você faz com fotos e provas do seu trabalho." },
        { title: "Localização", text: "Endereço, horários e rota destacados na página." },
      ],
      offer: {
        title: "Comece hoje",
        items: ["Página completa em uma tela", "Botão de WhatsApp fixo", "Otimizada para celular"],
        price: "A partir de R$ XXX",
        note: "Valores definidos conforme o projeto.",
      },
      closing: {
        title: "Vamos colocar seu negócio no ar?",
        text: "Conte o que você precisa e receba uma proposta simples e clara.",
        cta: "Solicitar orçamento",
      },
    },
  },
  {
    slug: "vertex-servicos",
    name: "Vertex",
    category: "Serviços",
    summary: "Ideal para prestadores de serviço que precisam explicar processo e gerar confiança.",
    hue: 285,
    demo: {
      brand: "Vertex Serviços",
      nav: ["Início", "Como funciona", "Planos", "Contato"],
      eyebrow: "Prestador de serviço",
      headline: "Serviço bem feito começa com uma proposta clara.",
      subheadline: "Apresente seu processo, seus diferenciais e receba solicitações qualificadas.",
      primaryCta: "Pedir orçamento",
      secondaryCta: "Entender o processo",
      stats: [
        { value: "3 etapas", label: "processo simples" },
        { value: "100%", label: "atendimento direto" },
        { value: "Garantia", label: "de acompanhamento" },
      ],
      features: [
        { title: "Processo transparente", text: "O cliente entende cada etapa antes de fechar." },
        { title: "Orçamento guiado", text: "Formulário curto que já traz as informações certas." },
        { title: "Prova social", text: "Espaço preparado para depoimentos e resultados." },
      ],
      offer: {
        title: "Pacotes",
        items: ["Diagnóstico inicial", "Execução acompanhada", "Suporte pós-entrega"],
        price: "A partir de R$ XXX",
        note: "Personalizável por escopo.",
      },
      closing: {
        title: "Pronto para receber mais pedidos?",
        text: "Uma página organizada faz o cliente chegar já decidido.",
        cta: "Solicitar orçamento",
      },
    },
  },
  {
    slug: "monolith-profissionais",
    name: "Monolith",
    category: "Profissionais",
    summary: "Página de autoridade para autônomos, consultores e especialistas.",
    hue: 250,
    demo: {
      brand: "Monolith",
      nav: ["Perfil", "Atuação", "Agenda", "Contato"],
      eyebrow: "Profissional autônomo",
      headline: "Autoridade se constrói na primeira impressão.",
      subheadline: "Um perfil profissional elegante, com foco em credibilidade e agendamento.",
      primaryCta: "Agendar conversa",
      secondaryCta: "Ver atuação",
      stats: [
        { value: "Especialista", label: "posicionamento" },
        { value: "Agenda", label: "aberta" },
        { value: "Online", label: "e presencial" },
      ],
      features: [
        { title: "Perfil forte", text: "Sua trajetória apresentada de forma direta e sofisticada." },
        { title: "Áreas de atuação", text: "Blocos organizados para cada tipo de atendimento." },
        { title: "Contato rápido", text: "Agendamento em um toque, sem fricção." },
      ],
      offer: {
        title: "Atendimento",
        items: ["Consulta inicial", "Acompanhamento contínuo", "Materiais complementares"],
        price: "A partir de R$ XXX",
        note: "Ajustável ao seu formato de trabalho.",
      },
      closing: {
        title: "Sua próxima oportunidade começa aqui.",
        text: "Deixe seu trabalho ser encontrado do jeito certo.",
        cta: "Solicitar orçamento",
      },
    },
  },
  {
    slug: "prisma-produtos",
    name: "Prisma",
    category: "Produtos",
    summary: "Vitrine focada em um produto principal, com destaque visual e chamada única.",
    hue: 275,
    demo: {
      brand: "Prisma",
      nav: ["Produto", "Detalhes", "Perguntas", "Comprar"],
      eyebrow: "Lançamento de produto",
      headline: "Um produto. Uma página. Zero distração.",
      subheadline: "Destaque o que importa e leve o visitante direto para a decisão de compra.",
      primaryCta: "Quero o meu",
      secondaryCta: "Ver detalhes",
      stats: [
        { value: "Foco", label: "em um objetivo" },
        { value: "Rápida", label: "carregamento leve" },
        { value: "Mobile", label: "primeiro" },
      ],
      features: [
        { title: "Destaque do produto", text: "Composição visual que valoriza o que você vende." },
        { title: "Benefícios claros", text: "Cada bloco responde uma dúvida do comprador." },
        { title: "Chamada única", text: "Uma ação principal repetida com inteligência." },
      ],
      offer: {
        title: "Oferta",
        items: ["Descrição completa", "Perguntas frequentes", "Checkout ou WhatsApp"],
        price: "A partir de R$ XXX",
        note: "Integrações conforme o projeto.",
      },
      closing: {
        title: "Seu produto merece uma boa vitrine.",
        text: "Vamos montar a página que apresenta ele do jeito certo.",
        cta: "Solicitar orçamento",
      },
    },
  },
  {
    slug: "pulse-criadores",
    name: "Pulse",
    category: "Criadores",
    summary: "Hub de links e apresentação para criadores de conteúdo e marcas pessoais.",
    hue: 300,
    demo: {
      brand: "Pulse",
      nav: ["Sobre", "Conteúdo", "Parcerias", "Contato"],
      eyebrow: "Criador de conteúdo",
      headline: "Toda sua audiência em um só lugar.",
      subheadline: "Reúna conteúdos, redes e parcerias em uma página com a sua cara.",
      primaryCta: "Fechar parceria",
      secondaryCta: "Ver conteúdos",
      stats: [
        { value: "Comunidade", label: "engajada" },
        { value: "Mídia kit", label: "integrado" },
        { value: "Links", label: "centralizados" },
      ],
      features: [
        { title: "Identidade autoral", text: "Visual construído em cima do seu estilo." },
        { title: "Mídia kit", text: "Números e formatos de publi organizados para marcas." },
        { title: "Links inteligentes", text: "Tudo o que sua audiência precisa em um toque." },
      ],
      offer: {
        title: "Parcerias",
        items: ["Formatos disponíveis", "Cases anteriores", "Contato comercial"],
        price: "A partir de R$ XXX",
        note: "Estrutura adaptável ao seu nicho.",
      },
      closing: {
        title: "Transforme audiência em oportunidade.",
        text: "Uma página profissional muda como as marcas te veem.",
        cta: "Solicitar orçamento",
      },
    },
  },
  {
    slug: "orbit-infoprodutos",
    name: "Orbit",
    category: "Infoprodutos",
    summary: "Página de vendas longa com argumentação, módulos e garantia.",
    hue: 292,
    demo: {
      brand: "Orbit",
      nav: ["Método", "Conteúdo", "Bônus", "Inscrição"],
      eyebrow: "Infoproduto",
      headline: "Do interesse à inscrição, sem perder ninguém no caminho.",
      subheadline: "Argumentação organizada, provas, módulos e uma chamada que conduz à ação.",
      primaryCta: "Garantir vaga",
      secondaryCta: "Ver conteúdo",
      stats: [
        { value: "Módulos", label: "bem apresentados" },
        { value: "Garantia", label: "em destaque" },
        { value: "Conversão", label: "no centro" },
      ],
      features: [
        { title: "Narrativa guiada", text: "A página conduz o visitante do problema à solução." },
        { title: "Estrutura de módulos", text: "Conteúdo apresentado de forma clara e desejável." },
        { title: "Quebra de objeções", text: "FAQ e garantia posicionados nos pontos certos." },
      ],
      offer: {
        title: "Inscrição",
        items: ["Acesso completo", "Materiais de apoio", "Bônus de lançamento"],
        price: "A partir de R$ XXX",
        note: "Checkout externo integrado.",
      },
      closing: {
        title: "Sua próxima turma começa com essa página.",
        text: "Vamos construir a estrutura que sustenta o seu lançamento.",
        cta: "Solicitar orçamento",
      },
    },
  },
];

export const categories: ModelCategory[] = [
  "Negócios",
  "Serviços",
  "Profissionais",
  "Produtos",
  "Criadores",
  "Infoprodutos",
];

export function getModel(slug: string) {
  return models.find((m) => m.slug === slug);
}

export const WHATSAPP_URL = "https://wa.me/5583998673599";
export const INSTAGRAM_URL = "https://instagram.com/gollyweb";
export const EMAIL = "gollyweb@gmail.com";
