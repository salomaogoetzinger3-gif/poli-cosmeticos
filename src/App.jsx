import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Produto from "./pages/Produto";
import Carrinho from "./pages/Carrinho";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/produto/:slug" element={<Produto />} />
          <Route path="/carrinho" element={<Carrinho />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
