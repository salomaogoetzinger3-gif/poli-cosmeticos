import { produtos as produtosLocais, getProdutoBySlug } from "./produtos";

const POCKETBASE_URL = "https://pocketbase-production-c411.up.railway.app";

function montarUrlImagem(registro) {
  if (!registro.imagem) return null;
  return `${POCKETBASE_URL}/api/files/${registro.collectionId}/${registro.id}/${registro.imagem}`;
}
function montarUrlGaleria(registro) {
  if (!registro.galeria || registro.galeria.length === 0) return [];
  return registro.galeria.map(
    (nome) =>
      `${POCKETBASE_URL}/api/files/${registro.collectionId}/${registro.id}/${nome}`,
  );
}

// Busca na API; se ela falhar (fora do ar, erro de rede) devolve null
async function buscarNaApi(caminho) {
  try {
    const resposta = await fetch(`${POCKETBASE_URL}${caminho}`);
    if (!resposta.ok) {
      console.error("Erro ao buscar produtos:", resposta.status);
      return null;
    }
    const dados = await resposta.json();
    return dados.items || null;
  } catch (erro) {
    console.error("API indisponível:", erro);
    return null;
  }
}

export async function buscarProdutos() {
  const itens = await buscarNaApi("/api/collections/produtos/records");

  // Sem API ou sem produtos cadastrados: usa os produtos de exemplo
  if (!itens || itens.length === 0) return produtosLocais;

  return itens.map((item) => ({
    ...item,
    imagem: montarUrlImagem(item),
  }));
}

export async function buscarProdutoPorSlug(slug) {
  const itens = await buscarNaApi(
    `/api/collections/produtos/records?filter=(slug='${slug}')`,
  );
  const item = itens?.[0];
  if (!item) return getProdutoBySlug(slug);

  return {
    ...item,
    imagem: montarUrlImagem(item),
    galeria: montarUrlGaleria(item),
  };
}
