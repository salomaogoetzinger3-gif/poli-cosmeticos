export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="apresentacao-footer">
          <img src="/pressets/poli_logo.png" alt="logo-poli" className="apresentacao-footer-img" />
          <p className="apresentacao-footer-texto">
            A beleza que você merece. Produtos de qualidade das melhores marcas do Brasil
          </p>
        </div>
        <div className="navegacao-footer">
          <h2 className="navegacao-footer-titulo">NAVEGAÇÃO</h2>
          <ul className="lista-navegacao">
            <li className="link-navegacao">
              <a href="#" className="link-navegacao-a">
                Início
              </a>
            </li>
            <li className="link-navegacao">
              <a href="#" className="link-navegacao-a">
                Cosméticos
              </a>
            </li>
            <li className="link-navegacao">
              <a href="#" className="link-navegacao-a">
                Sobre nós
              </a>
            </li>
            <li className="link-navegacao">
              <a href="#" className="link-navegacao-a">
                Ofertas
              </a>
            </li>
          </ul>
        </div>
        <div className="marcas-footer">
          <h2 className="marcas-footer-titulo">MARCAS</h2>
          <ul className="lista-marcas-footer">
            <li className="link-marcas-footer">
              <a href="#" className="link-marcas-a">
                Natura
              </a>
            </li>
            <li className="link-marcas-footer">
              <a href="#" className="link-marcas-a">
                O Boticario
              </a>
            </li>
            <li className="link-marcas-footer">
              <a href="#" className="link-marcas-a">
                Avon
              </a>
            </li>
            <li className="link-marcas-footer">
              <a href="#" className="link-marcas-a">
                Cacau Show
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <div className="direitos">
        <p>© 2026 Poli Cosméticos. Todos os direitos reservados.</p>
        <p>Feito com amor por Poli Cosméticos</p>
      </div>
    </>
  );
}
