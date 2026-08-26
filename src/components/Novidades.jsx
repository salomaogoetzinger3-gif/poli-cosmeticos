export default function Novidades() {
  return (
    <section className="novidades animar" id="novidades">
      <div className="circulo c1"></div>
      <div className="circulo c2"></div>
      <div className="align-novidades">
        <div className="grupo-whatsapp">
          <h3 className="novidade-exclusivo">
            <i className="fa-regular fa-star"></i>exclusivo para membros
          </h3>
          <h1 className="novidade-titulo">
            Acesse nosso <strong>Grupo VIP</strong>
          </h1>
          <p className="novidade-texto">
            Descubra os lancamentos da Poli Cosmeticos e realce sua beleza com produtos de
            qualidade e preços imperdíveis. Aproveite agora
          </p>
          <button className="btn-novidades">
            <a
              href="https://chat.whatsapp.com/FpvUWKMFgAsIKQoPADtpxU?mode=gi_t"
              className="btn-link"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-whatsapp"></i>Acesse nosso grupo VIP
            </a>
          </button>
        </div>
        <div className="redes-sociais">
          <h1 className="novidade-titulo1">
            Acesse nosso <strong>Perfil</strong>
          </h1>
          <div className="circle-foto c3">
            <img src="/pressets/carrossel/01.jpeg" alt="perfil-poli" className="foto-rede-social" />
          </div>
          <div className="redes-sociais-texto">
            <p>@policosmeticosfoz</p>
            <p>Poli Cosméticos| Poliana M R Kroetz</p>
          </div>
          <button className="btn-novidades">
            <a
              href="https://www.instagram.com/policosmeticosfoz?igsh=MW04cjN2bHFndXQ3bA=="
              className="btn-link"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>Instagram
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
