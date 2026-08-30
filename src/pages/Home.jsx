import Hero from "../components/Hero";
import Marcas from "../components/Marcas";
import Apresentacao from "../components/Apresentacao";
import Ofertas from "../components/Ofertas";
import Categorias from "../components/Categorias";
import Novidades from "../components/Novidades";
import Customproduto from "../components/Customproduto";
import useScrollAnimation from "../hooks/useScrollAnimation";
export default function Home() {
  useScrollAnimation();

  return (
    <section className="catalogo" id="home">
      <Hero />
      <Ofertas />
      <Customproduto />
      <Categorias />
      <Apresentacao />
      <Marcas />
      <Novidades />
    </section>
  );
}
