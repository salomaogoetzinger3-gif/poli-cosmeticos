import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { categoriasDestaque } from "../data/produtos";

function ItemCategoria({ categoria, onClick }) {
  const [hover, setHover] = useState(false);

  return (
    <li className="itens-visitados">
      <a
        href={`/produtos?categoria=${categoria.id}`}
        className="link-visitados"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={(e) => {
          e.preventDefault();
          onClick(categoria.id);
        }}
      >
        <img
          className="gif"
          src={hover ? categoria.gif : categoria.png}
          alt={`gif-${categoria.id}`}
        />
        {categoria.label}
      </a>
    </li>
  );
}

export default function Categorias() {
  const navigate = useNavigate();

  function irParaCategoria(id) {
    navigate(`/produtos?categoria=${id}`);
  }

  return (
    <section className="visitados animar" id="visitados">
      <div className="align-visitados">
        <p className="visitados-texto">CATEGORIAS</p>
        <h2 className="visitados-titulo">
          EXPLORE NOSSOS <strong>PRODUTOS</strong>
        </h2>
        <ul className="lista-visitados">
          {categoriasDestaque.map((categoria) => (
            <ItemCategoria key={categoria.id} categoria={categoria} onClick={irParaCategoria} />
          ))}
        </ul>
      </div>
    </section>
  );
}
