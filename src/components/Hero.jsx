export default function Hero() {
  function scrollParaVisitados(e) {
    e.preventDefault();
    document.getElementById("visitados")?.scrollIntoView({ behavior: "smooth" });
  }

  function scrollParaNovidades(e) {
    e.preventDefault();
    document.getElementById("novidades")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="hero animar">
      <video className="back-video" autoPlay muted loop playsInline src="/video_background/video_background.mp4" />
      <div className="text-hero">
        <h2 className="title-hero">
          Bem-vindo à
          <br />
          Poli Cosméticos
        </h2>
        <p className="subtitle-hero">A beleza que você merece</p>
        <div className="nav">
          <a className="nav-link12" href="#visitados" onClick={scrollParaVisitados}>
            Explore nossos produtos
          </a>
          <a className="nav-link" href="#novidades" onClick={scrollParaNovidades}>
            Grupo VIP Whatsapp
          </a>
        </div>
      </div>
    </section>
  );
}
