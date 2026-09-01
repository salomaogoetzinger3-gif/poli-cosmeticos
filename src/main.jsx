import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles/globalCss.css";
import { CarrinhoProvider } from "./context/CarrinhoContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CarrinhoProvider>
        <App />
      </CarrinhoProvider>
    </BrowserRouter>
  </StrictMode>,
);
