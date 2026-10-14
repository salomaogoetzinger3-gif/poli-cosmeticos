import { Link } from "react-router-dom";
import { useCarrinho } from "../context/CarrinhoContext";

export default function Carrinho() {
  const { itens, removerItem, atualizarQuantidade, totalPreco } = useCarrinho();

  if (itens.length === 0) {
    return (
      <section className="home-produtos1">
        <div className="align-texto-produto">
          <h1 className="produtos-titulo1">Seu carrinho está vazio</h1>
          <p className="produto-texto2">Adicione produtos para vê-los aqui.</p>
          <Link to="/produtos" className="nav-link12 carrinho-vazio-btn">
            Ver produtos
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="home-produtos1">
      <div className="align-texto-produto">
        <h1 className="produtos-titulo1">Seu carrinho</h1>
      </div>

      <div className="carrinho-lista">
        {itens.map((item) => (
          <div className="carrinho-item" key={item.slug}>
            <img className="carrinho-item-img" src={item.imagem} alt={item.nome} />

            <div className="carrinho-item-info">
              <p className="carrinho-item-nome">{item.nome}</p>
              <p className="carrinho-item-preco">
                {item.preco.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>

            <div className="seletor-quantidade carrinho-item-qtd">
              <button
                onClick={() =>
                  atualizarQuantidade(item.slug, item.quantidade - 1)
                }
                aria-label="Diminuir quantidade"
              >
                −
              </button>
              <span>{item.quantidade}</span>
              <button
                onClick={() =>
                  atualizarQuantidade(item.slug, item.quantidade + 1)
                }
                aria-label="Aumentar quantidade"
              >
                +
              </button>
            </div>

            <button
              className="carrinho-item-remover"
              onClick={() => removerItem(item.slug)}
              aria-label={`Remover ${item.nome}`}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        ))}
      </div>

      <div className="carrinho-resumo">
        <h2 className="carrinho-total">
          Total:{" "}
          <span>
            {totalPreco.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </h2>
        <button className="btn-novidades btn-roxo">Finalizar compra</button>
      </div>
    </section>
  );
}
