const POCKETBASE_URL = "http://127.0.0.1:8090";

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

export async function buscarProdutos() {
  const resposta = await fetch(
    `${POCKETBASE_URL}/api/collections/produtos/records`,
  );

  if (!resposta.ok) {
    console.error("Erro ao buscar produtos:", resposta.status);
    return [];
  }

  const dados = await resposta.json();
  return dados.items.map((item) => ({
    ...item,
    imagem: montarUrlImagem(item),
  }));
}

export async function buscarProdutoPorSlug(slug) {
  const resposta = await fetch(
    `${POCKETBASE_URL}/api/collections/produtos/records?filter=(slug='${slug}')`,
  );

  if (!resposta.ok) {
    console.error("Erro ao buscar produto:", resposta.status);
    return null;
  }

  const dados = await resposta.json();
  const item = dados.items[0];
  if (!item) return null;
  return {
    ...item,
    imagem: montarUrlImagem(item),
    galeria: montarUrlGaleria(item), // ← linha nova
  };
}
