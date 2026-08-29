import { Link } from "react-router-dom";

export default function ProdutoCard({ produto }) {
  const precoFormatado = produto.preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <li className={`card produto ${produto.categoria} ${produto.marca}`}>
      <Link
        to={`/produto/${produto.slug}`}
        state={{ from: "catalogo" }}
        className="link-presentes"
      >
        <div className="img-box">
          <img className="img-card" src={produto.imagem} alt={produto.nome} />
        </div>
        <div
          className="produto-texto"
          style={{ backgroundColor: "#f5f5f5", color: "#000" }}
        >
          <div style={{ padding: 10 }}>
            <p style={{ color: "#0000009a", fontSize: 10 }}>{produto.tag}</p>
            <h1 id="produto-titulo">{produto.nome}</h1>
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <p style={{ color: "#8a315c" }}>★★★★★</p>
              <p style={{ fontSize: 10 }}>{produto.avaliacao}</p>
            </div>
            <h1 id="produto-preco">{precoFormatado}</h1>
          </div>
        </div>
      </Link>
    </li>
  );
}
