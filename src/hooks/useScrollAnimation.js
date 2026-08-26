import { useEffect } from "react";

// Reproduz o comportamento de javascript/animar.js: observa todos os
// elementos com a classe "animar" e adiciona "ativo" quando entram na tela,
// com um pequeno atraso escalonado entre eles.
export default function useScrollAnimation(deps = []) {
  useEffect(() => {
    const elementos = document.querySelectorAll(".animar");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("ativo");
          }, index * 300);
        }
      });
    });

    elementos.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
