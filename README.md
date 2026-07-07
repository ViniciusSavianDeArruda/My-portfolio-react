# Meu Portfolio Pessoal

Portfólio pessoal desenvolvido com **React**, **TypeScript** e **Tailwind CSS**, com identidade visual no tema **hacker terminal** — fundo escuro, verde neon como acento e efeito Matrix no Hero.

---

## Tecnologias

- **React 18** — biblioteca de interface
- **TypeScript** — tipagem estática
- **Tailwind CSS v3** — estilização utilitária
- **Vite** — bundler e servidor de desenvolvimento
- **ESLint + Prettier** — lint e formatação
- **Simple Icons** (CDN) — ícones das tecnologias na seção de habilidades
- **Google Fonts** — fontes Orbitron e Share Tech Mono

---

## Estrutura do Projeto

```
portfolio/
├── public/
│   ├── projects/            # imagens dos cards de projeto
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── sections/        # "capítulos" da página, cada um usado 1x
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx    # bio + status + formação (painel de cards)
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/               # peças reutilizáveis / estrutura da interface
│   │       ├── Navbar.tsx
│   │       ├── Footer.tsx
│   │       ├── BackToTop.tsx
│   │       ├── MatrixCanvas.tsx
│   │       ├── SectionLabel.tsx
│   │       ├── Card.tsx
│   │       ├── FormationCard.tsx
│   │       └── icons.tsx
│   ├── data/
│   │   └── index.ts          # todos os dados do portfólio (edite aqui!)
│   ├── hooks/
│   │   ├── useTypewriter.ts
│   │   └── useActiveSection.ts
│   ├── types/
│   │   └── index.ts          # interfaces (Project, Skill, ContactLink, AboutRow...)
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css             # entrada do Tailwind + classes custom
├── index.html
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
├── eslint.config.js
└── package.json
```

---

## Como rodar localmente

### Pré-requisitos

- Node.js 18+
- [pnpm](https://pnpm.io/) (o projeto fixa a versão em `packageManager` no `package.json`)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/ViniciusSavianDeArruda/My-portfolio-react.git

# Entre na pasta
cd My-portfolio-react

# Instale as dependências
pnpm install

# Inicie o servidor de desenvolvimento
pnpm dev
```

O projeto estará disponível em `http://localhost:5173`

### Scripts disponíveis

```bash
pnpm dev       # servidor de desenvolvimento
pnpm build     # build de produção (roda tsc + vite build)
pnpm preview   # serve o build localmente
pnpm lint      # ESLint
pnpm format    # Prettier (formata o projeto inteiro)
```

Um workflow de CI (`.github/workflows/ci.yml`) roda `lint` e `build` a cada push/PR.

---

## Como personalizar

Todos os dados do portfólio estão centralizados em **`src/data/index.ts`**. Edite esse arquivo para atualizar o conteúdo sem precisar mexer nos componentes — os tipos ficam em `src/types/index.ts`.

### Projetos

```ts
export const PROJECTS: Project[] = [
  {
    id: "01",
    name: "Nome do Projeto",
    desc: "Descrição do projeto...",
    tech: ["React", "Node.js", "PostgreSQL"],
    status: "PRODUCTION", // texto livre do badge (ex: PRODUCTION, OPEN SOURCE)
    statusColor: "#00FF41", // cor do badge
    github: "https://github.com/seuuser/projeto",
    demo: "https://seuprojeto.com", // opcional
    photo: "/projects/screenshot.png", // imagem do card, em public/projects/
  },
];
```

### Habilidades

Adicione ou remova tecnologias usando os slugs do [Simple Icons](https://simpleicons.org). Se o ícone for escuro/preto por padrão (some no fundo escuro), adicione o slug em `LIGHT_OVERRIDE_ICONS` no topo de `src/components/sections/Skills.tsx`:

```ts
{ name: "React", icon: "react" },
{ name: "Next.js", icon: "nextdotjs" },
```

### Contato

```ts
export const CONTACT_LINKS: ContactLink[] = [
  {
    label: "GITHUB",
    value: "github.com/seuuser",
    href: "https://github.com/seuuser",
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/seuuser",
    href: "https://linkedin.com/in/seuuser",
  },
];
```

### Dados pessoais / Status

Edite `ABOUT_ROWS` em `src/data/index.ts` para atualizar nome, localização, especialidade etc. O campo opcional `dot` (`"amber"` ou `"blue"`) controla a cor da bolinha na frente de cada linha no card de Status; sem `dot`, usa o verde padrão.

### Hero

Em `src/components/sections/Hero.tsx`, troque o nome, os textos das linhas de digitação e as URLs do GitHub/LinkedIn nos botões de CTA.

---

## Identidade Visual

O verde neon é usado como **acento** (títulos, prompts, links, badges, hover), não como cor de base — bordas, divisores e texto secundário usam cinza neutro.

| Elemento              | Valor                              |
| --------------------- | ---------------------------------- |
| Verde neon (destaque) | `#00FF41`                          |
| Verde secundário      | `#00AA2A`                          |
| Fundo                 | `#080808`                          |
| Fundo de cards        | `#0a0a0a`                          |
| Bordas / divisores    | tons de cinza neutro (`neutral-*`) |
| Texto corrido         | cinza claro (`neutral-200`)        |
| Fonte display         | Orbitron (títulos e logo)          |
| Fonte mono            | Share Tech Mono (todo o resto)     |

As cores ficam centralizadas em `tailwind.config.ts` (`theme.extend.colors`) — evite usar hex direto no JSX quando já existir um token equivalente.

---

## Responsividade

- **Mobile** — menu hamburger com overlay fullscreen animado
- **Desktop** — navegação horizontal, projetos em lista alternada, painel do About em cards lado a lado

---

## Seções

| Seção        | Descrição                                                                                |
| ------------ | ---------------------------------------------------------------------------------------- |
| **Home**     | Hero com efeito Matrix, typing animation e botões de CTA                                 |
| **About**    | Bio, status (localização, disponibilidade etc.) e formação acadêmica, em painel de cards |
| **Skills**   | Ícones das tecnologias agrupados por categoria                                           |
| **Projects** | Cards com imagem, descrição, stack e links                                               |
| **Contact**  | E-mail e links para redes sociais                                                        |

---

## Deploy

### Vercel (recomendado)

1. Suba o projeto para o GitHub
2. Acesse [vercel.com](https://vercel.com) e importe o repositório
3. A Vercel detecta o Vite automaticamente — clique em **Deploy**

Deploy atual: https://viniciusarruda.dev/

### Netlify

```bash
pnpm build
# Arraste a pasta /dist para netlify.com/drop
```

---

## Licença

Este projeto é de uso pessoal. Sinta-se livre para usar como referência e adaptá-lo ao seu próprio portfólio.

---

Desenvolvido por **Vinicius Arruda** — [github.com/ViniciusSavianDeArruda](https://github.com/ViniciusSavianDeArruda)
