import { useEffect, useState } from "react";

const imagens = [
  "/pressets/carrossel/01.jpeg",
  "/pressets/carrossel/02.jpeg",
  "/pressets/carrossel/03.jpeg",
  "/pressets/carrossel/04.jpeg",
];

export default function Apresentacao() {
  const [slideAtual, setSlideAtual] = useState(0);

  // Reproduz carrosel.js: avança automaticamente a cada 4 segundos
  useEffect(() => {
    const intervalo = setInterval(() => {
      setSlideAtual((atual) => (atual + 1) % imagens.length);
    }, 4000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <section className="apresentacao animar">
      <div className="align-apresentacao">
        <div className="apresentacao-conteudo">
          <h2 className="apresentacao-title">
            NOSSA MISSÃO É
            <br />
            <strong>cuidar de você</strong>
          </h2>
          <p className="apresentacao-texto">
            Na Poli Cosméticos, você encontra desde produtos de skincare e maquiagem até itens
            para cabelo, perfumes e cuidados pessoais, todos com a garantia de qualidade da marca
            Poli. Nossa equipe está sempre pronta para atendê-lo da melhor forma possível,
            garantindo agilidade, eficiência e, principalmente, sua satisfação.
          </p>
          <ul className="apresentacao-destaque">
            <li className="apresentacao-itens">
              <i className="fa-regular fa-heart"></i>
              <p className="apresentacao-texto1">Qualidade</p>
            </li>
            <li className="apresentacao-itens">
              <span className="material-symbols-outlined">shield</span>
              <p className="apresentacao-texto1">Garantia</p>
            </li>
            <li className="apresentacao-itens">
              <i className="fa-regular fa-handshake"></i>
              <p className="apresentacao-texto1">Confiança</p>
            </li>
            <li className="apresentacao-itens">
              <i className="fa-solid fa-angles-right"></i>
              <p className="apresentacao-texto1">Eficiência</p>
            </li>
          </ul>
        </div>
        <div className="slider">
          <div className="slides">
            <div
              className="slide primeiro"
              style={{ marginLeft: `-${slideAtual * 25}%` }}
            >
              {imagens.map((src) => (
                <img key={src} src={src} alt="Imagem natura" />
              ))}
            </div>
            <div className="navegation-auto">
              {imagens.map((_, i) => (
                <div className="auto-btn" key={i} />
              ))}
            </div>
          </div>
          <div className="manual-navegation">
            {imagens.map((_, i) => (
              <label
                key={i}
                className="manual-btn"
                onClick={() => setSlideAtual(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
