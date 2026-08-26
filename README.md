# Poli Cosméticos — versão React

Conversão do site original (HTML + CSS + JS puro) para React, sem
bibliotecas de UI. O CSS foi mantido praticamente como estava; a única
biblioteca adicionada foi `react-router-dom`, necessária para as páginas de
produto (`/produto/:slug`) e o catálogo (`/produtos`).

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (geralmente http://localhost:5173).

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
  components/   Header, Footer, Hero, Marcas, Apresentacao (carrossel),
                Ofertas, Categorias, Novidades, ProdutoCard
  pages/        Home, Produtos (catálogo com filtro/busca), Produto (página
                individual de cada produto)
  data/         produtos.js — dados de categorias, marcas, ofertas e produtos
  hooks/        useScrollAnimation — reproduz o fade-in dos elementos ".animar"
  styles/       CSS original, praticamente inalterado
```

## Rotas

- `/` — Home (hero, marcas, apresentação, ofertas do mês, categorias, VIP/Instagram)
- `/produtos` — catálogo completo, com filtro por categoria/marca e busca
- `/produtos?categoria=perfume` ou `?marca=natura` — catálogo pré-filtrado
- `/produto/:slug` — página individual de cada produto

## Adicionando novos produtos

Edite `src/data/produtos.js` e adicione um novo objeto ao array `produtos`.
Cada produto gera automaticamente sua própria página em `/produto/<slug>`.

## O que foi convertido do JS original

| Arquivo original         | Equivalente em React                          |
| ------------------------- | ---------------------------------------------- |
| `nav-bar.js`               | `Header.jsx` (menu mobile + header ao rolar)   |
| `animar.js`                | `hooks/useScrollAnimation.js`                  |
| `carrosel.js`               | `Apresentacao.jsx` (state + `setInterval`)     |
| `gifs.js`                   | `Categorias.jsx` (troca de imagem no hover)    |
| `mudancaPagina.js`          | React Router (`/`, `/produtos`, `/produto/:slug`) + filtros em `Produtos.jsx` |
| `scroll.js`                 | `scrollIntoView` embutido nos componentes      |
