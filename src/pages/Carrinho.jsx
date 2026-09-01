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
          <Link
            to="/produtos"
            className="nav-link12"
            style={{ display: "inline-block", marginTop: 20 }}
          >
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

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          maxWidth: 700,
        }}
      >
        {itens.map((item) => (
          <div
            key={item.slug}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              border: "1px solid #eee",
              borderRadius: 8,
              padding: 12,
            }}
          >
            <img
              src={item.imagem}
              alt={item.nome}
              style={{
                width: 70,
                height: 70,
                objectFit: "cover",
                borderRadius: 6,
              }}
            />

            <div style={{ flex: 1, color: "#000" }}>
              <p
                style={{
                  margin: 0,
                  fontWeight: "bold",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                {item.nome}
              </p>
              <p style={{ margin: 0, color: "#8a315c" }}>
                {item.preco.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                border: "1px solid #ddd",
                borderRadius: 8,
                padding: "4px 8px",
              }}
            >
              <button
                onClick={() =>
                  atualizarQuantidade(item.slug, item.quantidade - 1)
                }
                style={{
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                  fontSize: 16,
                }}
              >
                −
              </button>
              <span
                style={{ color: "#000", minWidth: 20, textAlign: "center" }}
              >
                {item.quantidade}
              </span>
              <button
                onClick={() =>
                  atualizarQuantidade(item.slug, item.quantidade + 1)
                }
                style={{
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                  fontSize: 16,
                }}
              >
                +
              </button>
            </div>

            <button
              onClick={() => removerItem(item.slug)}
              style={{
                border: "none",
                background: "none",
                color: "#b91c1c",
                cursor: "pointer",
              }}
              aria-label={`Remover ${item.nome}`}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        ))}
      </div>

      <div
        style={{
          maxWidth: 700,
          marginTop: 24,
          paddingTop: 16,
          borderTop: "1px solid #eee",
          alignItems: "center",
        }}
      >
        <h2 style={{ color: "#4a1930" }}>
          Total:{" "}
          <span style={{ color: "#c4388d" }}>
            {totalPreco.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </h2>
        <button
          className="btn-novidades"
          style={{ color: "#fff", backgroundColor: "#8a315c" }}
        >
          Finalizar compra
        </button>
      </div>
    </section>
  );
}
