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
        <div className="como-funciona">
          <h2 className="como-funciona-titulo">
            <span className="linha" /> <i className="fa-solid fa-heart"></i>{" "}
            Como funciona <i className="fa-solid fa-heart"></i>{" "}
            <span className="linha" />
          </h2>

          <div className="como-funciona-passos">
            <div className="passo">
              <div className="passo-numero">1</div>
              <div className="passo-card">
                <i className="fa-solid fa-box-open passo-icone"></i>
                <h3>Escolha os produtos</h3>
                <p>
                  Navegue pelas categorias e selecione seus produtos favoritos.
                </p>
              </div>
            </div>

            <div className="passo-seta">
              <i
                className="fa-solid fa-arrow-right"
                style={{ paddingTop: "80px" }}
              ></i>
            </div>
            <div className="passo">
              <div className="passo-numero">2</div>
              <div className="passo-card">
                <i className="fa-solid fa-gift passo-icone"></i>
                <h3>Adicione à sua cesta</h3>
                <p>Monte sua combinação perfeita de itens.</p>
              </div>
            </div>

            <div className="passo-seta">
              <i
                className="fa-solid fa-arrow-right"
                style={{ paddingTop: "80px" }}
              ></i>
            </div>

            <div className="passo">
              <div className="passo-numero">3</div>
              <div className="passo-card">
                <i className="fa-solid fa-box passo-icone"></i>
                <h3>Personalize seu presente</h3>
                <p>Escolha a embalagem, mensagem e detalhes especiais.</p>
              </div>
            </div>

            <div className="passo-seta">
              <i
                className="fa-solid fa-arrow-right"
                style={{ paddingTop: "80px" }}
              ></i>
            </div>

            <div className="passo">
              <div className="passo-numero">4</div>
              <div className="passo-card">
                <i className="fa-solid fa-bag-shopping passo-icone"></i>
                <h3>Finalize e surpreenda</h3>
                <p>
                  Seu presente será preparado com todo carinho para encantar!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="detalhe-faixa">
          <div className="detalhe-faixa-texto">
            <h3>Cada detalhe faz a diferença!</h3>
            <p>
              Nossos presentes são preparados com muito amor e atenção para
              criar momentos inesquecíveis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
