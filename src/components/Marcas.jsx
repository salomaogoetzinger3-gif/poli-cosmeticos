import { useNavigate } from "react-router-dom";

const listaMarcas = [
  { id: "natura", src: "/pressets/natura.jpeg", alt: "marca-natura" },
  { id: "oboticario", src: "/pressets/oboticario.jpeg", alt: "marca-oboticario" },
  { id: "avon", src: "/pressets/avon.jpeg", alt: "marca-avon" },
  { id: "cacaushow", src: "/pressets/cacau show.jpeg", alt: "marca-cacau-Show" },
];

export default function Marcas() {
  const navigate = useNavigate();

  function irParaMarca(marca) {
    navigate(`/produtos?marca=${marca}`);
  }

  return (
    <section className="marcas animar">
      <div className="align-marcas">
        <p className="marca-text">MARCAS PARCEIRAS</p>
        <ul className="lista-marcas">
          {listaMarcas.map((marca) => (
            <li className="marca-li" key={marca.id}>
              <a
                href="#"
                className="link-marca"
                onClick={(e) => {
                  e.preventDefault();
                  irParaMarca(marca.id);
                }}
              >
                <img src={marca.src} alt={marca.alt} className="marca-foto" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
