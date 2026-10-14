import { Package } from "lucide-react";
import { Heart } from "lucide-react";
import { Tag } from "lucide-react";

const passos = [
  {
    icone: "fa-box-open",
    titulo: "Escolha os produtos",
    texto: "Navegue pelas categorias e selecione seus produtos favoritos.",
  },
  {
    icone: "fa-gift",
    titulo: "Adicione à sua cesta",
    texto: "Monte sua combinação perfeita de itens.",
  },
  {
    icone: "fa-box",
    titulo: "Personalize seu presente",
    texto: "Escolha a embalagem, mensagem e detalhes especiais.",
  },
  {
    icone: "fa-bag-shopping",
    titulo: "Finalize e surpreenda",
    texto: "Seu presente será preparado com todo carinho para encantar!",
  },
];

export default function CustomProduto() {
  return (
    <section className="monte-presente">
      <p className="monte-presente-titulo">
        Monte o seu{" "}
        <strong className="monte-presente-destaque">presente</strong>
      </p>

      <div className="monte-presente-banner">
        <div className="monte-presente-overlay">
          <div className="monte-presente-texto">
            <h2 className="bloco-texto-titulo">
              Escolha os produtos e crie um <em>presente</em> do seu jeito!
            </h2>
            <p className="bloco-texto-subtitulo">
              Personalize com carinho e surpreenda quem você ama.
            </p>
            <button className="button-custom-produto">
              <img src="/pressets/gift-branco.png" alt="" />
              Montar meu presente
            </button>
            <ul className="custom-qualidades">
              <li>
                <Package className="custom-icone" color="#8a315c" strokeWidth={1.5} />
                <p className="custom-quality">Embalagem especial</p>
              </li>
              <li>
                <Heart className="custom-icone" color="#8a315c" strokeWidth={1.5} />
                <p className="custom-quality">Feito com carinho</p>
              </li>
              <li>
                <Tag className="custom-icone" color="#8a315c" strokeWidth={1.5} />
                <p className="custom-quality">Personalize do seu jeito</p>
              </li>
            </ul>
          </div>
          <div className="cesta-gift entra-direita animar">
            <img
              className="cesta-gift-img"
              src="/pressets/background-gift.png"
              alt="Cesta de presente montada"
            />
          </div>
        </div>
      </div>

      <div className="como-funciona">
        <h2 className="como-funciona-titulo">
          <span className="linha" /> <i className="fa-solid fa-heart"></i>{" "}
          Como funciona <i className="fa-solid fa-heart"></i>{" "}
          <span className="linha" />
        </h2>

        <div className="como-funciona-passos">
          {passos.map((passo, i) => (
            <div className="passo-wrapper" key={passo.titulo}>
              {i > 0 && (
                <div className="passo-seta" aria-hidden="true">
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              )}
              <div className="passo">
                <div className="passo-numero">{i + 1}</div>
                <div className="passo-card">
                  <i className={`fa-solid ${passo.icone} passo-icone`}></i>
                  <h3>{passo.titulo}</h3>
                  <p>{passo.texto}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="detalhe-faixa">
        <div className="detalhe-faixa-texto">
          <h3>Cada detalhe faz a diferença!</h3>
          <p>
            Nossos presentes são preparados com muito amor e atenção para criar
            momentos inesquecíveis.
          </p>
        </div>
      </div>
    </section>
  );
}
