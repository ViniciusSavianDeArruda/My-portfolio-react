# Meu Portfólio Pessoal

Portfólio pessoal desenvolvido com **React**, **TypeScript**, **Tailwind CSS** e **Vite**, com foco em apresentação profissional, experiência do usuário, responsividade e uma identidade visual editorial em tons escuros com acentos em azul cobalto.

O projeto apresenta minha experiência, tecnologias, projetos e formas de contato em uma interface moderna, responsiva e com animações sutis.

## Demonstração

- **Site:** [viniciusarruda.dev](https://viniciusarruda.dev/)
- **GitHub:** [ViniciusSavianDeArruda](https://github.com/ViniciusSavianDeArruda)
- **LinkedIn:** [arrudavinicius](https://linkedin.com/in/arrudavinicius)

---

## Tecnologias

- **React 18**
- **TypeScript**
- **Tailwind CSS v3**
- **Vite**
- **Motion / motion/react**
- **ESLint**
- **Prettier**
- **Simple Icons**
- **Google Fonts**
  - Manrope
  - Share Tech Mono

---

## Estrutura do Projeto

```text
My-portfolio-react/
├── public/
│   ├── images/
│   │   ├── profile/
│   │   │   └── about-eu.jpeg
│   │   └── projects/
│   │       ├── facilita-oab.png
│   │       ├── fitnnes-ai.png
│   │       └── museu-treze-de-maio.png
│   ├── robots.txt
│   └── sitemap.xml
│
├── src/
│   ├── components/
│   │   ├── hero/
│   │   │   ├── GeometricBackground.tsx
│   │   │   └── TechMarquee.tsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Footer.tsx
│   │   │   └── Navbar.tsx
│   │   │
│   │   ├── motion/
│   │   │   └── stagger-reveal.tsx
│   │   │
│   │   ├── projects/
│   │   │   ├── ProjectDetailsDialog.tsx
│   │   │   └── ProjectShowcase.tsx
│   │   │
│   │   ├── sections/
│   │   │   ├── About.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Projects.tsx
│   │   │   └── Skills.tsx
│   │   │
│   │   └── ui/
│   │       ├── BackToTop.tsx
│   │       └── icons.tsx
│   │
│   ├── data/
│   │   └── index.ts
│   │
│   ├── hooks/
│   │   └── useActiveSection.ts
│   │
│   ├── types/
│   │   └── index.ts
│   │
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── .github/
├── eslint.config.js
├── index.html
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

### Organização

A estrutura foi dividida por responsabilidade:

- `components/sections` — principais seções da página.
- `components/layout` — elementos globais da interface, como Navbar e Footer.
- `components/hero` — componentes exclusivos da seção Hero.
- `components/projects` — componentes relacionados à apresentação e aos detalhes dos projetos.
- `components/motion` — componentes reutilizáveis de animação.
- `components/ui` — componentes genéricos da interface.
- `data` — dados reutilizados pelas seções.
- `hooks` — hooks customizados.
- `types` — tipos e interfaces TypeScript.

A organização foi mantida propositalmente simples para facilitar a manutenção e a evolução do projeto.

---

## Como Rodar Localmente

### Pré-requisitos

- [Node.js 18+](https://nodejs.org/)
- [pnpm](https://pnpm.io/)

### Instalação

```bash
git clone https://github.com/ViniciusSavianDeArruda/My-portfolio-react.git
cd My-portfolio-react
pnpm install
pnpm dev
```

O projeto ficará disponível em:

```text
http://localhost:5173
```

---

## Scripts Disponíveis

```bash
pnpm dev      # inicia o servidor de desenvolvimento
pnpm build    # gera o build de produção
pnpm preview  # executa localmente o build de produção
pnpm lint     # executa o ESLint
pnpm format   # formata o projeto com Prettier
```

O projeto também possui um workflow de CI em `.github/workflows/ci.yml`, responsável por validar o código em pushes e pull requests.

---

## Seções do Portfólio

### Hero

Apresentação principal do portfólio, com:

- nome e especialidade;
- chamadas para projetos e redes profissionais;
- background geométrico;
- marquee de tecnologias;
- animações de entrada com `motion/react`.

### Sobre

Seção editorial com:

- apresentação pessoal;
- foto;
- informações acadêmicas e profissionais;
- princípios que orientam o desenvolvimento.

### Stack

Tecnologias utilizadas nos projetos, organizadas por categoria:

- Frontend;
- Backend;
- Banco de dados;
- DevOps e ferramentas.

### Projetos

Os projetos são apresentados em formato visual com screenshots.

Cada projeto pode abrir um modal com:

- descrição detalhada;
- principais funcionalidades;
- tecnologias utilizadas;
- galeria de imagens;
- link para o GitHub;
- demonstração, quando disponível.

### Contato

Seção de contato com:

- e-mail;
- GitHub;
- LinkedIn;
- opção para copiar o endereço de e-mail.

### Footer

Encerramento do portfólio com:

- identidade visual;
- navegação;
- links sociais;
- localização;
- copyright.

---

## Como Adicionar Projetos

Os projetos são mantidos em:

```text
src/data/index.ts
```

Exemplo simplificado:

```ts
export const PROJECTS: Project[] = [
  {
    id: "01",
    name: "Nome do Projeto",
    shortDesc: "Descrição curta do projeto.",
    fullDesc: "Descrição completa do projeto.",
    tech: ["React", "TypeScript", "Node.js"],
    type: "Aplicação Web",
    github: "https://github.com/usuario/projeto",
    demo: "https://projeto.com",
    images: ["/images/projects/projeto.png"],
  },
];
```

Os screenshots devem ser adicionados em:

```text
public/images/projects/
```

---

## Contato e Dados Centralizados

Os principais links de contato são centralizados em:

```text
src/data/index.ts
```

Essa abordagem evita a duplicação de URLs entre a Navbar, a seção Contact e o Footer.

---

## Identidade Visual

O portfólio utiliza uma estética **dark editorial** e técnica.

| Elemento | Valor |
| --- | --- |
| Fundo principal | `#07080B` |
| Surface secundária | `#0A0D14` |
| Texto principal | `#F4F6FB` |
| Texto secundário | `#9096A3` |
| Accent | `#5B7CFF` |
| Accent hover | `#7691FF` |
| Fonte principal | Manrope |
| Fonte técnica | Share Tech Mono |

A fonte mono é utilizada apenas em labels e pequenos metadados.

---

## Animações

As animações utilizam `motion/react`.

O projeto prioriza:

- reveals sutis;
- stagger curto;
- microinterações;
- transições rápidas;
- suporte a `prefers-reduced-motion`.

Não são utilizadas animações contínuas ou efeitos excessivos.

---

## Responsividade

O layout foi desenvolvido com foco em desktop e mobile.

Principais comportamentos:

- Navbar adaptada a diferentes tamanhos de tela;
- grids de projetos responsivos;
- tipografia fluida;
- modal de projetos adaptado para dispositivos móveis;
- Footer reorganizado em telas menores;
- áreas de interação adequadas para toque.

---

## Acessibilidade

O projeto inclui:

- `focus-visible`;
- navegação por teclado;
- labels acessíveis;
- suporte a `prefers-reduced-motion`;
- contraste adequado;
- targets clicáveis confortáveis;
- modal com comportamento acessível.

---

## Deploy

O projeto está publicado em:

[viniciusarruda.dev](https://viniciusarruda.dev/)

Também pode ser publicado facilmente em serviços compatíveis com Vite, como:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)

### Build de Produção

```bash
pnpm build
```

O resultado será gerado na pasta:

```text
dist/
```

---

## CI

O workflow localizado em:

```text
.github/workflows/ci.yml
```

executa validações automáticas para ajudar a manter a qualidade do projeto em pushes e pull requests.

---

## Licença

Este projeto é de uso pessoal e pode ser utilizado como referência para estudos e desenvolvimento de portfólios próprios.

---

Desenvolvido por **Vinicius Arruda**.

- [GitHub](https://github.com/ViniciusSavianDeArruda)
- [LinkedIn](https://linkedin.com/in/arrudavinicius)
