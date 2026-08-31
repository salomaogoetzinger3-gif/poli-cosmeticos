export default function CustomProduto() {
  return (
    <section className="monte-presente">
      <div style={{ boxShadow: "0 1px 8px rgba(0, 0, 0, 0.05)" }}>
        <p className="monte-presente-titulo">
          Monte o seu{" "}
          <strong className="monte-presente-destaque">presente</strong>
        </p>
      </div>

      <div className="monte-presente-img-box">
        <img
          className="monte-presente-img"
          src="/pressets/hero/hero2.jpeg"
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
            <img
              src="/pressets/qualidades.png"
              style={{ height: "50px", height: "20%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
