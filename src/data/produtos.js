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

// Produtos de exemplo: usados quando a API (PocketBase) está fora do ar
// ou ainda não tem produtos cadastrados, para o site não ficar vazio.
// As 4 primeiras são cestas (categoria "presentes") e aparecem em
// "Ofertas desse mês" na home.
export const produtos = [
  // ---------- Cestas ----------
  {
    slug: "cesta-cuide-se-bem-pessegura",
    nome: "Cesta Cuide-se Bem Pessegura",
    categoria: "presentes",
    subcategoria: "Cestas",
    marca: "oboticario",
    marcaLabel: "O Boticário",
    tag: "CESTA PRESENTE",
    preco: 119.9,
    avaliacao: "(4.9)",
    imagem: "/pressets/cards/04.jpeg",
    selos: "Embalagem especial, Feito com carinho",
    descricao:
      "Cesta de madeira com loção hidratante e body splash Cuide-se Bem Pessegura, finalizada com flor e papel de seda. Um mimo perfumado e delicado.",
  },
  {
    slug: "cesta-angel-cacau-show",
    nome: "Cesta Angel Cacau Show",
    categoria: "presentes",
    subcategoria: "Cestas",
    marca: "cacaushow",
    marcaLabel: "Cacau Show",
    tag: "CESTA PRESENTE",
    preco: 149.9,
    avaliacao: "(5.0)",
    imagem: "/pressets/cards/05.jpeg",
    selos: "Embalagem especial, Acompanha flor",
    descricao:
      "Cesta dourada com caixa de bombons Angel, trufas sortidas e flor Angel com bombom. Perfeita para surpreender quem você ama.",
  },
  {
    slug: "cesta-doce-gesto-amor",
    nome: "Cesta Doce Gesto Amor",
    categoria: "presentes",
    subcategoria: "Cestas",
    marca: "cacaushow",
    marcaLabel: "Cacau Show",
    tag: "CESTA PRESENTE",
    preco: 179.9,
    avaliacao: "(4.9)",
    imagem: "/pressets/cards/08.jpeg",
    selos: "Embalagem especial, Feito com carinho",
    descricao:
      "Cesta \"amor\" com tablete Doce Gesto, trufas Cacau Show e hidratante corporal Cereja de Fases. Doce e cheirosa na medida certa.",
  },
  {
    slug: "cesta-cuide-se-bem-cereja",
    nome: "Cesta Cuide-se Bem Cereja",
    categoria: "presentes",
    subcategoria: "Cestas",
    marca: "oboticario",
    marcaLabel: "O Boticário",
    tag: "CESTA PRESENTE",
    preco: 109.9,
    avaliacao: "(4.8)",
    imagem: "/pressets/cards/09.jpeg",
    selos: "Embalagem especial, Feito com carinho",
    descricao:
      "Cesta de madeira com loção hidratante Cuide-se Bem Cereja de Fases e sabonetes em barra, decorada com fita vermelha e flores secas.",
  },

  // ---------- Produtos ----------
  {
    slug: "floratta",
    nome: "Floratta",
    categoria: "perfume",
    marca: "oboticario",
    marcaLabel: "O Boticário",
    tag: "PERFUME",
    preco: 112.9,
    avaliacao: "(4.8)",
    imagem: "/pressets/perfume1.avif",
    descricao:
      "Deo colônia floral clássica, marcante e sofisticada, ideal para o uso diário.",
  },
  {
    slug: "floratta-rose-kit-presente",
    nome: "Kit Presente Floratta Rose",
    categoria: "perfume",
    marca: "oboticario",
    marcaLabel: "O Boticário",
    tag: "KIT PERFUME",
    preco: 159.9,
    avaliacao: "(4.9)",
    imagem: "/pressets/perfume1.avif",
    selos: "Embalagem especial",
    descricao:
      "Deo colônia Floratta Rose em embalagem de presente. Fragrância floral romântica, delicada e feminina.",
  },
  {
    slug: "kit-luna-radiante",
    nome: "Kit Luna Radiante",
    categoria: "perfume",
    marca: "natura",
    marcaLabel: "Natura",
    tag: "KIT PERFUME",
    preco: 199.9,
    avaliacao: "(4.9)",
    imagem: "/pressets/cards/03.jpeg",
    selos: "Vegano, Embalagem especial",
    descricao:
      "Kit com deo parfum e creme corporal Luna, embalados em cesta florida. Fragrância floral e envolvente.",
  },
  {
    slug: "hidratante-corporal",
    nome: "Hidratante Corporal",
    categoria: "hidratante",
    marca: "natura",
    marcaLabel: "Natura",
    tag: "HIDRATANTE",
    preco: 65.9,
    avaliacao: "(4.8)",
    imagem: "/pressets/perfume2.webp",
    descricao:
      "Hidratante corporal com toque seco e absorção rápida, deixando a pele macia e perfumada por horas.",
  },
  {
    slug: "kit-tododia-tamara-e-canela",
    nome: "Kit Tododia Tâmara e Canela",
    categoria: "hidratante",
    marca: "natura",
    marcaLabel: "Natura",
    tag: "KIT HIDRATANTE",
    preco: 89.9,
    avaliacao: "(4.9)",
    imagem: "/pressets/cards/01.jpeg",
    selos: "Vegano, Nutrição prebiótica",
    descricao:
      "Creme para o corpo Tododia Tâmara e Canela com sabonete em barra, em cesta decorada. Nutrição de 24h com perfume aconchegante.",
  },
  {
    slug: "kit-cuide-se-bem-deleite",
    nome: "Kit Cuide-se Bem Deleite",
    categoria: "hidratante",
    marca: "oboticario",
    marcaLabel: "O Boticário",
    tag: "KIT HIDRATANTE",
    preco: 99.9,
    avaliacao: "(4.8)",
    imagem: "/pressets/cards/06.jpeg",
    selos: "Vegano, Cruelty free",
    descricao:
      "Loção desodorante hidratante e creme para mãos Cuide-se Bem Deleite, com body splash. Cheirinho doce de leite.",
  },
  {
    slug: "locao-cuide-se-bem-pessegura",
    nome: "Loção Cuide-se Bem Pessegura",
    categoria: "hidratante",
    marca: "oboticario",
    marcaLabel: "O Boticário",
    tag: "HIDRATANTE",
    preco: 44.9,
    avaliacao: "(4.7)",
    imagem: "/pressets/cards/04.jpeg",
    selos: "Vegano, Cruelty free",
    descricao:
      "Loção desodorante hidratante com fragrância de pêssego, textura leve e rápida absorção.",
  },
  {
    slug: "kit-tododia-limao-e-hortela",
    nome: "Kit Tododia Limão e Hortelã",
    categoria: "sabonete",
    marca: "natura",
    marcaLabel: "Natura",
    tag: "KIT SABONETE",
    preco: 84.9,
    avaliacao: "(4.8)",
    imagem: "/pressets/cards/02.jpeg",
    selos: "Vegano, Nutrição prebiótica",
    descricao:
      "Sabonete em barra e creme corporal Tododia Limão e Hortelã. Frescor e hidratação para o dia a dia.",
  },
  {
    slug: "caixa-bombons-angel",
    nome: "Caixa de Bombons Angel",
    categoria: "chocolate",
    marca: "cacaushow",
    marcaLabel: "Cacau Show",
    tag: "CHOCOLATE",
    preco: 59.9,
    avaliacao: "(5.0)",
    imagem: "/pressets/cards/05.jpeg",
    descricao:
      "Caixa de bombons sortidos Angel da Cacau Show. Recheios cremosos e embalagem pronta para presentear.",
  },
  {
    slug: "kit-amor-para-a-vida-toda",
    nome: "Kit Amor para a Vida Toda",
    categoria: "chocolate",
    marca: "cacaushow",
    marcaLabel: "Cacau Show",
    tag: "KIT CHOCOLATE",
    preco: 159.9,
    avaliacao: "(4.9)",
    imagem: "/pressets/cards/07.jpeg",
    selos: "Acompanha balão, Embalagem especial",
    descricao:
      "Caixa \"amor para a vida toda\" com laCreme Mezzo, tablete Doce Gesto, trufas e balão de coração.",
  },
];

export function getProdutoBySlug(slug) {
  return produtos.find((p) => p.slug === slug) || null;
}
