export default function Footer() {
  return (
    <footer className="rodape rodape--noite">
      <div className="rodape__grid">
        <div className="rodape__col rodape__marca">
          <p className="rodape__logo">Poli Cosméticos</p>
          <p className="rodape__sobre">
            A beleza que você merece. Produtos de qualidade das melhores marcas
            do Brasil.
          </p>
          <div className="rodape__social">
            <a
              href="https://www.instagram.com/policosmeticosfoz?igsh=MW04cjN2bHFndXQ3bA=="
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://chat.whatsapp.com/FpvUWKMFgAsIKQoPADtpxU?mode=gi_t"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>

        <div className="rodape__col">
          <p className="rodape__titulo">Navegação</p>
          <ul className="rodape__lista">
            <li>
              <a href="/">Início</a>
            </li>
            <li>
              <a href="/produtos">Produtos</a>
            </li>
            <li>
              <a href="#ofertas">Ofertas</a>
            </li>
          </ul>
        </div>

        <div className="rodape__col">
          <p className="rodape__titulo">Marcas</p>
          <ul className="rodape__lista">
            <li>
              <a href="/produtos?marca=natura">Natura</a>
            </li>
            <li>
              <a href="/produtos?marca=oboticario">O Boticário</a>
            </li>
            <li>
              <a href="/produtos?marca=avon">Avon</a>
            </li>
            <li>
              <a href="/produtos?marca=cacaushow">Cacau Show</a>
            </li>
          </ul>
        </div>

        <div className="rodape__col">
          <p className="rodape__titulo">Horário</p>
          <p className="rodape__horario">
            Segunda a sexta: 9h às 18h
            <br />
            Sábado: 9h às 13h
          </p>
        </div>
      </div>

      <div className="rodape__base">
        <p>© 2026 Poli Cosméticos. Todos os direitos reservados.</p>
        <div className="rodape__legal">
          <a href="#">Termos de uso</a>
          <a href="#">Privacidade</a>
        </div>
      </div>
    </footer>
  );
}
