import { Link } from "react-router-dom";

export default function ProdutoCard({ produto, origem = "catalogo", mostrarAvaliacao = true }) {
  const precoFormatado = produto.preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <li className={`card produto ${produto.categoria} ${produto.marca}`}>
      <Link
        to={`/produto/${produto.slug}`}
        state={{ from: origem }}
        className="link-presentes"
      >
        <div className="img-box">
          <img className="img-card" src={produto.imagem} alt={produto.nome} />
        </div>
        <div className="produto-texto">
          <p className="produto-card-tag">{produto.tag}</p>
          <h3 className="produto-card-titulo">{produto.nome}</h3>
          {mostrarAvaliacao && (
            <div className="produto-card-avaliacao">
              <span className="estrelas">★★★★★</span>
              <span>{produto.avaliacao}</span>
            </div>
          )}
          <p className="produto-card-preco">{precoFormatado}</p>
        </div>
      </Link>
    </li>
  );
}
