import { useState } from "react";

export default function customProduto() {
  return (
    <section style={{ backgroundColor: "#4a1930", paddingTop: "30px" }}>
      <p
        style={{
          display: "inline-block",
          marginTop: "20",
          color: "#fff",
          fontSize: "clamp(20px, 2.5vw, 50px)",
          fontFamily: "poppins, sans-serif",
        }}
      >
        Monte o seu{" "}
        <strong
          style={{
            fontFamily: "Playfair, serif",
            fontSize: "clamp(30px, 3vw, 50px)",
            color: "#c4388d",
          }}
        >
          presente
        </strong>
      </p>
    </section>
  );
}
