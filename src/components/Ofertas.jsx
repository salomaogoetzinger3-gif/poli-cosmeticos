import { ofertas } from "../data/produtos";

export default function Ofertas() {
  return (
    <section className="presentes animar">
      <p className="visitados-texto">DESTAQUE</p>
      <h2 className="title-categorias">
        OFERTAS <strong>DESSE MÊS</strong>
      </h2>
      <div className="cards-categorias">
        <ul className="align-cards">
          {ofertas.map((oferta) => (
            <li className="card" key={oferta.slug}>
              <a href="#" className="link-presentes">
                <div className="img-box">
                  <img className="img-card" src={oferta.imagem} alt="cesta1" />
                </div>
                <span className="cards-titulo-categorias">
                  {oferta.marca}
                  <h3>{oferta.nome}</h3>
                </span>
                <h4>
                  {oferta.precoTexto}
                  <i className="fa-solid fa-arrow-right"></i>
                </h4>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
