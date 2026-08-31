import { Package } from "lucide-react";
import { Heart } from "lucide-react";
import { Tag } from "lucide-react";

export default function CustomProduto() {
  return (
    <section className="monte-presente">
      <div>
        <p className="monte-presente-titulo">
          Monte o seu{" "}
          <strong className="monte-presente-destaque">presente</strong>
        </p>
      </div>

      <div className="monte-presente-img-box">
        <img
          className="monte-presente-img"
          src="/pressets/background.jpeg"
          alt="Monte seu presente"
        />

        <div className="monte-presente-overlay">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "35px",
              alignItems: "center",
            }}
          >
            <h2 className="bloco-texto-titulo">
              Escolha os produtos e crie um <em>presente</em> do seu jeito!
            </h2>
            <p className="bloco-texto-subtitulo">
              Personalize com carinho e surpreenda quem você ama.
            </p>
            <button className="button-custom-produto">
              <img src="/pressets/gift-branco.png" style={{ height: "30px" }} />
              Montar meu presente
            </button>
            <div>
              <ul
                style={{ display: "flex", alignItems: "center", gap: "15px" }}
              >
                <li>
                  <Package size={50} color="#8a315c" strokeWidth={1.5} />
                  <p className="custom-quality">Embalagem especial</p>
                </li>
                <li>
                  <Heart size={50} color="#8a315c" strokeWidth={1.5} />
                  <p className="custom-quality">Embalagem especial</p>
                </li>
                <li>
                  <Tag size={50} color="#8a315c" strokeWidth={1.5} />
                  <p className="custom-quality">Embalagem especial</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="cesta-gift">
            <img
              className="cesta-gift-img"
              src="/pressets/background-gift.png"
              alt="Monte seu presente"
            />
          </div>
        </div>
        <div className="custom-funcionalidades">
          <h3>Como funciona</h3>
        </div>
      </div>
    </section>
  );
}
