import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [headerAtivo, setHeaderAtivo] = useState(false);
  const navigate = useNavigate();

  // Reproduz nav-bar.js: adiciona classe "ativo" ao header ao rolar a página
  useEffect(() => {
    function handleScroll() {
      setHeaderAtivo(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function menuShow() {
    setMenuAberto((prev) => !prev);
  }

  function irParaOfertas(e) {
    e.preventDefault();
    setMenuAberto(false);
    navigate("/");
    setTimeout(() => {
      document
        .querySelector(".presentes")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  return (
    <header className={`main-header${headerAtivo ? " ativo" : ""}`}>
      <nav className="nav-bar">
        <div className="logo">
          <Link to="/">
            <img
              className="logo-foto"
              src="/pressets/poli_logo.png"
              alt="poli-logo"
            />
          </Link>
        </div>
        <div className="main-header img2">
          <img
            className="logo2"
            src="/pressets/poli_logo2.png"
            alt="logo_alternativa"
          />
        </div>
        <div className="nav-list">
          <ul>
            <li className="nav-item">
              <Link className="links-nav" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="links-nav" to="/produtos">
                Produtos
              </Link>
            </li>
            <li className="nav-item">
              <a className="links-nav" href="#ofertas" onClick={irParaOfertas}>
                Ofertas
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-carrinho">
          <a className="links-nav" href="#">
            <i className="fa-solid fa-cart-shopping"></i>
          </a>
          <a className="links-nav" href="#">
            <i className="fa-regular fa-user"></i>
          </a>
        </div>
        <div className="align-icon">
          <div className="nav-icon">
            <ul>
              <li>
                <a href="#">
                  <i className="fa-solid fa-heart"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-solid fa-cart-arrow-down"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="mobile-menu-icon">
            <button onClick={menuShow}>
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>
      <div className={`mobile-menu${menuAberto ? " open" : ""}`}>
        <ul>
          <li className="nav-item">
            <Link
              className="links-nav"
              to="/"
              onClick={() => setMenuAberto(false)}
            >
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="links-nav"
              to="/produtos"
              onClick={() => setMenuAberto(false)}
            >
              Produtos
            </Link>
          </li>
          <li className="nav-item">
            <a className="links-nav" href="#ofertas" onClick={irParaOfertas}>
              Ofertas
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
