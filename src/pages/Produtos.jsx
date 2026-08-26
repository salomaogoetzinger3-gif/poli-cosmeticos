import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { categorias, marcas } from "../data/produtos";
import { buscarProdutos } from "../data/api";
import ProdutoCard from "../components/ProdutoCard";

export default function Produtos() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    buscarProdutos()
      .then(setProdutos)
      .finally(() => setCarregando(false));
  }, []);

  const [termoBusca, setTermoBusca] = useState("");
  const [drawerAberto, setDrawerAberto] = useState(false);

  const categoriaAtiva = searchParams.get("categoria") || "all";
  const marcaAtiva = searchParams.get("marca") || "";

  function filtrarCategoria(valor) {
    const params = new URLSearchParams(searchParams);
    if (valor === "all") {
      params.delete("categoria");
    } else {
      params.set("categoria", valor);
    }
    params.delete("marca");
    setSearchParams(params);
  }

  function filtrarMarca(valor) {
    const params = new URLSearchParams(searchParams);
    params.set("marca", valor);
    params.delete("categoria");
    setSearchParams(params);
  }

  const produtosFiltrados = useMemo(() => {
    return produtos.filter((p) => {
      const passaCategoria =
        !categoriaAtiva ||
        categoriaAtiva === "all" ||
        p.categoria === categoriaAtiva;
      const passaMarca = !marcaAtiva || p.marca === marcaAtiva;
      const termo = termoBusca.trim().toLowerCase();
      const passaBusca =
        !termo ||
        p.nome.toLowerCase().includes(termo) ||
        p.descricao.toLowerCase().includes(termo);
      return passaCategoria && passaMarca && passaBusca;
    });
  }, [produtos, categoriaAtiva, marcaAtiva, termoBusca]);

  const filtroAtivo = categoriaAtiva !== "all" || !!marcaAtiva;

  return (
    <section className="home-produtos" id="produtos">
      <div className="align-texto-produto">
        <p className="produto-texto1" style={{ color: "#0000009a" }}>
          CATÁLOGO
        </p>
        <h1 className="produtos-titulo1">
          Nossos <span>Produtos</span>
        </h1>
        <p className="produto-texto2">
          Encontre os melhores cosméticos, presentes e chocolates para você ou
          para presentear.
        </p>
      </div>

      <div className="align-pesquisa-produtos">
        <img src="/pressets/search.svg" alt="pesquisa" />
        <input
          className="pesquisa-produtos"
          type="search"
          placeholder="Buscar produtos..."
          value={termoBusca}
          onChange={(e) => setTermoBusca(e.target.value)}
        />
      </div>

      {/* Botão de filtros — visível apenas no mobile via CSS */}
      <button
        className="btn-filtros-mobile"
        onClick={() => setDrawerAberto(true)}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="8" y1="12" x2="20" y2="12" />
          <line x1="12" y1="18" x2="20" y2="18" />
        </svg>
        Filtros
        {filtroAtivo && <span className="filtro-ativo-badge">1</span>}
      </button>

      <div className="layout-produtos">
        <div className="lista-categorias-produto">
          <p className="titulo-categoria-produto">CATEGORIAS</p>
          <ul className="categorias-produto">
            {categorias.map((c) => (
              <li
                className={`produto-link ${c.valor === categoriaAtiva ? "ativo" : ""}`}
                key={c.valor}
              >
                <a
                  href={`#produtos?categoria=${c.valor}`}
                  className="item-produto-link"
                  onClick={(e) => {
                    e.preventDefault();
                    filtrarCategoria(c.valor);
                  }}
                >
                  <p className="lista-produto-texto">{c.label}</p>
                </a>
              </li>
            ))}
          </ul>

          <p className="titulo-categoria-produto">MARCAS</p>
          <ul className="categorias-produtos-marcas">
            {marcas.map((m) => (
              <li
                className={`produto-link ${m.valor === marcaAtiva ? "ativo" : ""}`}
                key={m.valor}
              >
                <a
                  href="#"
                  className="item-produto-link"
                  onClick={(e) => {
                    e.preventDefault();
                    filtrarMarca(m.valor);
                  }}
                >
                  <p className="lista-produto-texto">{m.label}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="align-produtos-cards">
          <ul>
            {produtosFiltrados.length > 0 ? (
              produtosFiltrados.map((p) => (
                <ProdutoCard produto={p} key={p.slug} />
              ))
            ) : (
              <p style={{ color: "#0000009a", gridColumn: "1 / -1" }}>
                Nenhum produto encontrado.
              </p>
            )}
          </ul>
        </div>
      </div>

      {/* Drawer / overlay mobile */}
      <div
        className={`filtro-overlay${drawerAberto ? " ativo" : ""}`}
        onClick={() => setDrawerAberto(false)}
      />
      <div className={`filtro-drawer${drawerAberto ? " ativo" : ""}`}>
        <div className="filtro-drawer-handle" />
        <div className="filtro-drawer-header">
          <h2 className="filtro-drawer-titulo">Filtros</h2>
          <button
            className="filtro-drawer-fechar"
            onClick={() => setDrawerAberto(false)}
            aria-label="Fechar filtros"
          >
            ✕
          </button>
        </div>
        <div className="filtro-secao">
          <p className="filtro-secao-titulo">CATEGORIA</p>
          <ul className="filtro-chips">
            {categorias.map((c) => (
              <li
                key={c.valor}
                className={`filtro-chip${c.valor === categoriaAtiva ? " ativo" : ""}`}
                onClick={() => filtrarCategoria(c.valor)}
              >
                {c.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="filtro-secao">
          <p className="filtro-secao-titulo">MARCAS</p>
          <ul className="filtro-chips">
            {marcas.map((m) => (
              <li
                key={m.valor}
                className={`filtro-chip${m.valor === marcaAtiva ? " ativo" : ""}`}
                onClick={() => filtrarMarca(m.valor)}
              >
                {m.label}
              </li>
            ))}
          </ul>
        </div>
        <button
          className="filtro-btn-aplicar"
          onClick={() => setDrawerAberto(false)}
        >
          Ver produtos
        </button>
      </div>
    </section>
  );
}
