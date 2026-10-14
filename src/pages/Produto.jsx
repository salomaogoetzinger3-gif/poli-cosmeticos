import { useEffect, useState } from "react";
import { buscarProdutoPorSlug, buscarProdutos } from "../data/api";
import { Link, useLocation, useParams } from "react-router-dom";
import { useCarrinho } from "../context/CarrinhoContext";
import ProdutoCard from "../components/ProdutoCard";

export default function Produto() {
  const { slug } = useParams();
  const location = useLocation();
  const veioDaHome = location.state?.from === "home";
  const [produto, setProduto] = useState(null);
  const [relacionados, setRelacionados] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [imagemAtiva, setImagemAtiva] = useState(0);
  const [quantidade, setQuantidade] = useState(1);
  const [cep, setCep] = useState("");
  const [frete, setFrete] = useState(null);
  const [calculando, setCalculando] = useState(false);
  const [erroCep, setErroCep] = useState("");
  const { adicionarItem } = useCarrinho();
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
    return (
      <section className="home-produtos">
        <p className="produto-carregando">Carregando produto...</p>
      </section>
    );
  }

  if (!produto) {
    return (
      <section className="home-produtos">
        <div className="align-texto-produto">
          <h1 className="produtos-titulo1">Produto não encontrado</h1>
          <p className="produto-texto2">
            O produto que você procura não existe ou foi removido.
          </p>
          <Link to={veioDaHome ? "/" : "/produtos"} className="produto-voltar">
            ← {veioDaHome ? "Voltar ao início" : "Voltar ao catálogo"}
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
      <Link to={veioDaHome ? "/" : "/produtos"} className="produto-voltar">
        ← {veioDaHome ? "Voltar ao início" : "Voltar ao catálogo"}
      </Link>
      <div className="align-texto-produto">
        <p className="produto-texto1">{produto.marcaLabel}</p>
        <h1 className="produtos-titulo1">{produto.nome}</h1>
      </div>

      <div className="produto-detalhe">
        <div className="galery-photos">
          <div className="img-box produto-foto-principal">
            <img
              className="img-card"
              src={fotos[imagemAtiva]}
              alt={produto.nome}
            />
          </div>
          {fotos.length > 1 && (
            <div className="galery-photos-img">
              {fotos.map((foto, i) => (
                <img
                  key={foto}
                  src={foto}
                  alt={`${produto.nome} ${i + 1}`}
                  onClick={() => setImagemAtiva(i)}
                  className={`produto-miniatura${i === imagemAtiva ? " ativa" : ""}`}
                />
              ))}
            </div>
          )}
        </div>
        <div className="aligh-info">
          <p className="produto-tag">{produto.tag}</p>
          {produto.subcategoria && (
            <span className="produto-subcategoria">{produto.subcategoria}</span>
          )}
          <div className="produto-avaliacao">
            <p className="estrelas">★★★★★</p>
            <p>{produto.avaliacao}</p>
          </div>
          {produto.selos && (
            <div className="produto-selos">
              {produto.selos
                .split(",")
                .map((selo) => selo.trim())
                .filter(Boolean)
                .map((selo) => (
                  <span key={selo} className="produto-selo">
                    <i className="fa-solid fa-circle-check"></i>
                    {selo}
                  </span>
                ))}
            </div>
          )}
          <h2 className="produto-preco">{precoFormatado}</h2>
          <div className="produto-quantidade">
            <span>Quantidade:</span>
            <div className="seletor-quantidade">
              <button
                onClick={() => setQuantidade((q) => Math.max(1, q - 1))}
                aria-label="Diminuir quantidade"
              >
                <i className="fa-solid fa-minus"></i>
              </button>
              <span>{quantidade}</span>
              <button
                onClick={() => setQuantidade((q) => q + 1)}
                aria-label="Aumentar quantidade"
              >
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
          <p className="produto-descricao">{produto.descricao}</p>
          <div className="aligh-btn1">
            <button className="btn-novidades btn-roxo">
              <i className="fa-solid fa-bag-shopping"></i>Comprar
            </button>
            <button
              className="btn-novidades btn-roxo"
              onClick={() => adicionarItem(produto, quantidade)}
            >
              <i className="fa-solid fa-cart-shopping"></i>Adicionar ao carrinho
            </button>
          </div>

          <div className="frete-box">
            <p className="frete-titulo">
              <i className="fa-solid fa-truck"></i>
              Calcular frete e prazo
            </p>
            <div className="frete-form">
              <input
                type="text"
                inputMode="numeric"
                placeholder="Digite seu CEP"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
              />
              <button onClick={calcularFrete}>
                {calculando ? "..." : "Calcular"}
              </button>
            </div>
            {erroCep && <p className="frete-erro">{erroCep}</p>}
            {frete && (
              <p className="frete-resultado">
                Entrega em até <strong>{frete.dias} dias úteis</strong> · R${" "}
                {frete.valor.toFixed(2)}
              </p>
            )}
          </div>
        </div>
      </div>

      {relacionados.length > 0 && (
        <div className="produto-relacionados">
          <h2 className="title-categorias">
            Você também pode <strong>gostar</strong>
          </h2>
          <div className="align-produtos-cards">
            <ul>
              {relacionados.map((p) => (
                <ProdutoCard produto={p} key={p.slug} mostrarAvaliacao={false} />
              ))}
            </ul>
          </div>
        </div>
      )}
      {produto.subdescricao && (
        <p className="produto-subdescricao">{produto.subdescricao}</p>
      )}
    </section>
  );
}
