import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { buscarProdutos } from "../data/api";

export default function Ofertas() {
  const [ofertas, setOfertas] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    buscarProdutos().then((todos) => {
      setOfertas(todos.filter((p) => p.categoria === "presentes").slice(0, 4));
      setCarregando(false);
    });
  }, []);

  if (!carregando && ofertas.length === 0) return null;

  return (
    <section className="presentes animar">
      <p className="visitados-texto">DESTAQUE</p>
      <h2 className="title-categorias">
        OFERTAS <strong>DESSE MÊS</strong>
      </h2>
      <div className="cards-categorias">
        <ul className="align-cards">
          {ofertas.map((oferta) => (
            <li className="card" style={{ maxWidth: 280 }} key={oferta.slug}>
              <Link
                to={`/produto/${oferta.slug}`}
                state={{ from: "home" }}
                className="link-presentes"
              >
                <div className="img-box">
                  <img
                    className="img-card"
                    src={oferta.imagem}
                    alt={oferta.nome}
                  />
                </div>
                <span className="cards-titulo-categorias">
                  {oferta.marcaLabel}
                  <h3>{oferta.nome}</h3>
                </span>
                <h4>
                  {oferta.preco
                    ? oferta.preco.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })
                    : "Consulte o preço"}
                  <i className="fa-solid fa-arrow-right"></i>
                </h4>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
