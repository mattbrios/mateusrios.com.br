# mateusrios.com.br

Site pessoal / currículo de Mateus Rios, reescrito com Next.js (App Router), TypeScript, Tailwind CSS v4 e Vitest.

Este projeto porta o conteúdo do site anterior (`mateusrios.com.br`, em JavaScript/Pages Router) para uma stack atualizada, mantendo o design e o conteúdo originais.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — servidor de desenvolvimento (Turbopack)
- `npm run build` — build de produção
- `npm run start` — sobe o build de produção
- `npm run lint` — ESLint
- `npm run test` — roda os testes com Vitest
- `npm run test:watch` — Vitest em modo watch

## Estrutura

- `src/app` — rotas do App Router (`layout.tsx` com header/footer/fontes/metadata, `page.tsx` com o conteúdo da home)
- `src/components` — componentes da página (sidebar, experiência profissional, skills, etc.)
- `public/images` — imagens e ícones estáticos
