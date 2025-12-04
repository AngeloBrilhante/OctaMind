// src/medals/MedalhasPage.js
import React, { useEffect, useState } from "react";
import "./medalhas.css";

export default function MedalhasPage() {
  const materias = ["matematica", "portugues", "historia", "quimica", "biologia"];
  const materiasLabel = {
    matematica: "Matemática",
    portugues: "Português",
    historia: "História",
    quimica: "Química",
    biologia: "Biologia"
  };

  // caminhos em public (confirmou que /medalIcons/ funciona)
  const icones = {
    ouro: "/medalIcons/ouro.png",
    prata: "/medalIcons/prata.png",
    bronze: "/medalIcons/bronze.png",
  };

  const [medalhas, setMedalhas] = useState([]);

  useEffect(() => {
    // monta array de medalhas lendo localStorage
    const arr = [];
    materias.forEach((materia) => {
      for (let nivel = 1; nivel <= 4; nivel++) {
        const chave = `medal_${materia}_${nivel}`;
        const medalhaSalva = localStorage.getItem(chave) || "nenhuma";

        arr.push({
          materia,
          nivel,
          medalha: medalhaSalva
        });
      }
    });

    console.log("Medalhas lidas do localStorage:", arr); // debug
    setMedalhas(arr);
  }, []);

  return (
    <div className="medalhas-container">
      <h1 className="titulo">Minhas Medalhas</h1>

      <div className="medalhas-grid">
        {medalhas.map((m, idx) => (
          <div key={idx} className="medal-card">
            <p className="materia">
              {materiasLabel[m.materia]} — Nível {m.nivel}
            </p>

            {m.medalha === "nenhuma" ? (
              <div className="medal-placeholder">?</div>
            ) : (
              <img
                src={icones[m.medalha] || "/medalIcons/bronze.png"}
                alt={m.medalha}
                className={`medal-img ${m.medalha}`}
                onError={(e) => {
                  // fallback se imagem nao existir
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/medalIcons/bronze.png";
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
