import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { buscarProdutoPorSlug, buscarProdutos } from "../data/api";

export default function Produto() {
  const { slug } = useParams();
  const [produto, setProduto] = useState(null);
  const [relacionados, setRelacionados] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [imagemAtiva, setImagemAtiva] = useState(0);
  const [quantidade, setQuantidade] = useState(1);
  const [cep, setCep] = useState("");
  const [frete, setFrete] = useState(null);
  const [calculando, setCalculando] = useState(false);
  const [erroCep, setErroCep] = useState("");
  useEffect(() => {
    setCarregando(true);
    buscarProdutoPorSlug(slug).then((encontrado) => {
      setProduto(encontrado);
      if (encontrado) {
        buscarProdutos().then((todos) => {
          setRelacionados(
            todos.filter(
              (p) =>
                p.slug !== encontrado.slug &&
                p.categoria === encontrado.categoria,
            ),
          );
        });
      }
      setCarregando(false);
    });
  }, [slug]);
  function calcularFrete() {
    const numeros = cep.replace(/\D/g, "");
    if (numeros.length !== 8) {
      setErroCep("Digite um CEP válido (8 números)");
      setFrete(null);
      return;
    }
    setErroCep("");
    setCalculando(true);
    setTimeout(() => {
      const primeiroDigito = Number(numeros[0]);
      setFrete({
        valor: 12 + primeiroDigito * 2,
        dias: 3 + primeiroDigito,
      });
      setCalculando(false);
    }, 700);
  }
  if (carregando) {
    return <p style={{ padding: 40 }}>Carregando produto...</p>;
  }

  if (!produto) {
    return (
      <section className="home-produtos">
        <div className="align-texto-produto">
          <h1 className="produtos-titulo1">Produto não encontrado</h1>
          <p className="produto-texto2">
            O produto que você procura não existe ou foi removido.
          </p>
          <Link
            to="/produtos"
            className="nav-link12"
            style={{ display: "inline-block", marginTop: 20 }}
          >
            Voltar ao catálogo
          </Link>
        </div>
      </section>
    );
  }
  const fotos = [produto.imagem, ...(produto.galeria || [])];
  const precoFormatado = produto.preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <section className="home-produtos">
      <Link
        to="/produtos"
        style={{ color: "#8a315c", fontFamily: "'poppins', sans-serif" }}
      >
        ← Voltar ao catálogo
      </Link>
      <div className="align-texto-produto">
        <p className="produto-texto1" style={{ color: "#0000009a" }}>
          {produto.marcaLabel}
        </p>
        <h1 className="produtos-titulo1">{produto.nome}</h1>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(600px, 420px) 1fr",
          gap: "40px",
          marginTop: 30,
        }}
        className="produto-detalhe"
      >
        <div className="galery-photos">
          <div className="img-box" style={{ borderRadius: 8 }}>
            <img
              className="img-card"
              src={fotos[imagemAtiva]}
              alt={produto.nome}
            />
          </div>
          <div className="galery-photos-img">
            {fotos.map((foto, i) => (
              <img
                key={foto}
                src={foto}
                alt={`${produto.nome} ${i + 1}`}
                onClick={() => setImagemAtiva(i)}
                style={{
                  width: 64,
                  height: 64,
                  objectFit: "cover",
                  borderRadius: 6,
                  cursor: "pointer",
                  border:
                    i === imagemAtiva
                      ? "2px solid #8a315c"
                      : "2px solid transparent",
                }}
              />
            ))}
          </div>
        </div>
        <div className="aligh-info">
          <p style={{ color: "#0000009a", fontSize: 12, letterSpacing: "1px" }}>
            {produto.tag}
          </p>
          {produto.subcategoria && (
            <span
              style={{
                background: "#f5d9e8",
                color: "#8a315c",
                fontSize: 12,
                padding: "3px 10px",
                borderRadius: 20,
              }}
            >
              {produto.subcategoria}
            </span>
          )}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <p style={{ color: "#8a315c", fontSize: 20 }}>★★★★★</p>
            <p style={{ color: "#000", fontSize: 14 }}>{produto.avaliacao}</p>
          </div>
          {produto.selos && (
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              {produto.selos
                .split(",")
                .map((selo) => selo.trim())
                .filter(Boolean)
                .map((selo) => (
                  <span
                    key={selo}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 13,
                      color: "#000",
                    }}
                  >
                    <i
                      className="fa-solid fa-circle-check"
                      style={{ color: "#8a315c" }}
                    ></i>
                    {selo}
                  </span>
                ))}
            </div>
          )}
          <h2 style={{ color: "#c4388d", fontSize: "clamp(28px, 4vw, 40px)" }}>
            {precoFormatado}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <span style={{ fontSize: 14, color: "#000" }}>Quantidade:</span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                border: "1px solid #ddd",
                borderRadius: 8,
                width: "fit-content",
                color: "#000",
                padding: "5px",
              }}
            >
              <button
                onClick={() => setQuantidade((q) => Math.max(1, q - 1))}
                style={{
                  padding: "8px 14px",
                  border: "none",
                  background: "none",
                  fontSize: 18,
                  cursor: "pointer",
                }}
              >
                <i className="fa-solid fa-minus"></i>
              </button>
              <span style={{ minWidth: 20, textAlign: "center" }}>
                {quantidade}
              </span>
              <button
                onClick={() => setQuantidade((q) => q + 1)}
                style={{
                  padding: "8px 14px",
                  border: "none",
                  background: "none",
                  fontSize: 18,
                  cursor: "pointer",
                }}
              >
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
          <p
            style={{
              color: "#0000009a",
              fontFamily: "'poppins', sans-serif",
              lineHeight: 1.6,
            }}
          >
            {produto.descricao}
          </p>
          <div className="aligh-btn1">
            <button
              className="btn-novidades"
              style={{
                alignSelf: "flex-start",
                color: "#fff",
                backgroundColor: "#8a315c",
              }}
            >
              <i className="fa-solid fa-bag-shopping"></i>Comprar
            </button>
            <button
              className="btn-novidades"
              style={{
                alignSelf: "flex-start",
                color: "#fff",
                backgroundColor: "#8a315c",
              }}
            >
              <i className="fa-solid fa-cart-shopping"></i>Adicionar ao carrinho
            </button>
          </div>

          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: 8,
              padding: 16,
              maxWidth: 340,
            }}
          >
            <p
              style={{
                color: "#000",
                fontSize: 14,
                marginBottom: 8,
                fontFamily: "'poppins', sans-serif",
              }}
            >
              <i
                className="fa-solid fa-truck"
                style={{ color: "#8a315c", marginRight: 6 }}
              ></i>
              Calcular frete e prazo
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              <input
                type="text"
                placeholder="Digite seu CEP"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                style={{
                  flex: 1,
                  minWidth: 0,
                  padding: 8,
                  border: "1px solid #ddd",
                  borderRadius: 6,
                }}
              />
              <button
                onClick={calcularFrete}
                style={{
                  padding: "8px 16px",
                  border: "none",
                  borderRadius: 6,
                  background: "#8a315c",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                {calculando ? "..." : "Calcular"}
              </button>
            </div>
            {erroCep && (
              <p
                style={{
                  color: "red",
                  fontSize: 12,
                  marginTop: 6,
                  fontFamily: "'poppins', sans-serif",
                }}
              >
                {erroCep}
              </p>
            )}
            {frete && (
              <p
                style={{
                  color: "#000",
                  fontSize: 13,
                  marginTop: 10,
                  fontFamily: "'poppins', sans-serif",
                }}
              >
                Entrega em até <strong>{frete.dias} dias úteis</strong> · R${" "}
                {frete.valor.toFixed(2)}
              </p>
            )}
          </div>
        </div>
      </div>

      {relacionados.length > 0 && (
        <div style={{ marginTop: 60 }}>
          <h2 className="title-categorias" style={{ textAlign: "left" }}>
            Você também pode <strong>gostar</strong>
          </h2>
          <div className="align-produtos-cards">
            <ul
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 260px))",
              }}
            >
              {relacionados.map((p) => (
                <li
                  className={`card produto ${p.categoria} ${p.marca}`}
                  key={p.slug}
                >
                  <Link to={`/produto/${p.slug}`} className="link-presentes">
                    <div className="img-box">
                      <img className="img-card" src={p.imagem} alt={p.nome} />
                    </div>
                    <div
                      className="produto-texto"
                      style={{ backgroundColor: "#f5f5f5", color: "#000" }}
                    >
                      <div style={{ padding: 10 }}>
                        <p style={{ color: "#0000009a", fontSize: 10 }}>
                          {p.tag}
                        </p>
                        <h1 id="produto-titulo">{p.nome}</h1>
                        <h1 id="produto-preco">
                          {p.preco.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </h1>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {produto.subdescricao && (
        <p
          style={{
            color: "#0000009a",
            marginTop: 32,
            lineHeight: 1.7,
            fontFamily: "'poppins', sans-serif",
            maxWidth: 800,
          }}
        >
          {produto.subdescricao}
        </p>
      )}
    </section>
  );
}
