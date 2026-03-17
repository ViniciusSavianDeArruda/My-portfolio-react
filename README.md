# 🟢 Portfolio — React + TypeScript + Tailwind

Portfólio Full Stack Developer com estética hacker terminal.

## 🚀 Como rodar

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 📁 Estrutura

```
src/
├── components/
│   ├── Navbar.tsx        # Navegação fixa com active tracking
│   ├── MatrixCanvas.tsx  # Efeito Matrix animado
│   ├── Hero.tsx          # Seção inicial com typing animation
│   ├── About.tsx         # Bio + tabela de informações
│   ├── Skills.tsx        # Grid de ícones por categoria
│   ├── Projects.tsx      # Cards de projetos
│   ├── Contact.tsx       # Links de contato
│   ├── SectionLabel.tsx  # Componente reutilizável de título
│   └── Footer.tsx        # Rodapé
├── data/
│   └── index.ts          # Todos os dados do portfólio (edite aqui!)
├── App.tsx
├── main.tsx
└── index.css
```

## ✏️ Personalizar

Edite **`src/data/index.ts`** para atualizar:
- Seus projetos (`PROJECTS`)
- Suas habilidades e ícones (`SKILL_CATEGORIES`)
- Links de contato (`CONTACT_LINKS`)
- Dados pessoais (`ABOUT_ROWS`)

No **`src/components/Hero.tsx`**, troque:
- `SEU NOME` → seu nome real
- Os textos das linhas de digitação

No **`src/components/Contact.tsx`**, troque:
- `seuemail@email.com` → seu e-mail real

## 🎨 Tecnologias

- React 18 + TypeScript
- Tailwind CSS v3
- Vite
- Simple Icons (CDN)
- Google Fonts: Orbitron + Share Tech Mono
