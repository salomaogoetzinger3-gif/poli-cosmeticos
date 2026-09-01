import { createContext, useContext, useEffect, useState } from "react";

const CarrinhoContext = createContext(null);

const CHAVE_STORAGE = "poli-carrinho";

export function CarrinhoProvider({ children }) {
  const [itens, setItens] = useState(() => {
    try {
      const salvo = localStorage.getItem(CHAVE_STORAGE);
      return salvo ? JSON.parse(salvo) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(CHAVE_STORAGE, JSON.stringify(itens));
  }, [itens]);

  function adicionarItem(produto, quantidade = 1) {
    setItens((atual) => {
      const existente = atual.find((item) => item.slug === produto.slug);
      if (existente) {
        return atual.map((item) =>
          item.slug === produto.slug
            ? { ...item, quantidade: item.quantidade + quantidade }
            : item,
        );
      }
      return [
        ...atual,
        {
          slug: produto.slug,
          nome: produto.nome,
          preco: produto.preco,
          imagem: produto.imagem,
          quantidade,
        },
      ];
    });
  }

  function removerItem(slug) {
    setItens((atual) => atual.filter((item) => item.slug !== slug));
  }

  function atualizarQuantidade(slug, quantidade) {
    if (quantidade < 1) return;
    setItens((atual) =>
      atual.map((item) => (item.slug === slug ? { ...item, quantidade } : item)),
    );
  }

  function limparCarrinho() {
    setItens([]);
  }

  const totalItens = itens.reduce((soma, item) => soma + item.quantidade, 0);
  const totalPreco = itens.reduce(
    (soma, item) => soma + item.preco * item.quantidade,
    0,
  );

  return (
    <CarrinhoContext.Provider
      value={{
        itens,
        adicionarItem,
        removerItem,
        atualizarQuantidade,
        limparCarrinho,
        totalItens,
        totalPreco,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  const contexto = useContext(CarrinhoContext);
  if (!contexto) {
    throw new Error("useCarrinho precisa estar dentro de um CarrinhoProvider");
  }
  return contexto;
}
