export const categorias = [
  { label: "Todos", valor: "all" },
  { label: "Perfumes", valor: "perfume" },
  { label: "Hidratantes", valor: "hidratante" },
  { label: "Sabonetes", valor: "sabonete" },
  { label: "Pedrarias", valor: "pedrarias" },
  { label: "Maquiagem", valor: "makeup" },
  { label: "Protetor Solar", valor: "protetor" },
  { label: "Desodorante", valor: "desodorante" },
  { label: "Presentes", valor: "presentes" },
  { label: "Chocolates", valor: "chocolate" },
];

export const marcas = [
  { label: "Natura", valor: "natura" },
  { label: "OBoticario", valor: "oboticario" },
  { label: "Avon", valor: "avon" },
  { label: "Cacau Show", valor: "cacaushow" },
];

// Categorias em destaque na home (seção "Explore nossos produtos")
export const categoriasDestaque = [
  {
    id: "perfume",
    label: "PERFUME",
    png: "/pressets/gifs/perfume.png",
    gif: "/pressets/gifs/perfume.gif",
  },
  {
    id: "hidratante",
    label: "HIDRATANTES",
    png: "/pressets/gifs/creme-e-tubo.png",
    gif: "/pressets/gifs/creme-e-tubo.gif",
  },
  {
    id: "sabonete",
    label: "SABONETES",
    png: "/pressets/gifs/sabonete.png",
    gif: "/pressets/gifs/sabonete.gif",
  },
  {
    id: "pedrarias",
    label: "PEDRARIAS",
    png: "/pressets/gifs/joia.png",
    gif: "/pressets/gifs/joia.gif",
  },
  {
    id: "makeup",
    label: "MAQUIAGEM",
    png: "/pressets/gifs/corar.png",
    gif: "/pressets/gifs/corar.gif",
  },
  {
    id: "protetor",
    label: "PROTETOR SOLAR",
    png: "/pressets/gifs/protetor-solar.png",
    gif: "/pressets/gifs/protetor-solar.gif",
  },
  {
    id: "desodorante",
    label: "DESODORANTE",
    png: "/pressets/gifs/desodorante.png",
    gif: "/pressets/gifs/desodorante.gif",
  },
  {
    id: "canecas",
    label: "CANÉCAS",
    png: "/pressets/gifs/xicara-cafe.png",
    gif: "/pressets/gifs/xicara-de-cafe.gif",
  },
];

// Ofertas do mês (cestas presente)
export const ofertas = [
  {
    slug: "cesta-natura-1",
    marca: "PRODUTOS NATURA",
    nome: "Cesta presente",
    precoTexto: "Consulte o preço",
    imagem: "/pressets/cards/01.jpeg",
  },
  {
    slug: "cesta-natura-2",
    marca: "PRODUTOS NATURA",
    nome: "Cesta presente",
    precoTexto: "Consulte o preço",
    imagem: "/pressets/cards/02.jpeg",
  },
  {
    slug: "cesta-boticario-1",
    marca: "PRODUTOS BOTICARIO",
    nome: "Cesta presente",
    precoTexto: "Consulte o preço",
    imagem: "/pressets/cards/03.jpeg",
  },
  {
    slug: "cesta-cacau-show-1",
    marca: "PRODUTOS CACAU SHOW",
    nome: "Cesta presente",
    precoTexto: "Consulte o preço",
    imagem: "/pressets/cards/07.jpeg",
  },
];

// Catálogo de produtos (cada um ganha sua própria página em /produto/:slug)
export const produtos = [
  {
    slug: "hidratante-corporal",
    nome: "Hidratante Corporal",
    categoria: "hidratante",
    marca: "natura",
    marcaLabel: "Natura",
    tag: "HIDRATANTE",
    preco: 65.9,
    avaliacao: 4.8,
    imagem: "/pressets/perfume2.webp",
    descricao:
      "Hidratante corporal com toque seco e absorção rápida, deixando a pele macia e perfumada por horas.",
  },
  {
    slug: "floratta",
    nome: "Floratta",
    categoria: "perfume",
    marca: "oboticario",
    marcaLabel: "O Boticário",
    tag: "PERFUME",
    preco: 112.9,
    avaliacao: 4.8,
    imagem: "/pressets/perfume1.avif",
    descricao:
      "Deo colônia floral clássica, marcante e sofisticada, ideal para o uso diário.",
  },
];

export function getProdutoBySlug(slug) {
  return produtos.find((p) => p.slug === slug);
}
