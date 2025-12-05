// MedalhasPage.js

import React, { useEffect, useState } from "react";
import "./MedalhasPage.css";

// ⬇️ MOVER PARA FORA DO COMPONENTE
const materias = [
  { nome: "matematica", label: "Matemática" },
  { nome: "portugues", label: "Português" },
  { nome: "historia", label: "História" },
  { nome: "quimica", label: "Química" },
  { nome: "biologia", label: "Biologia" }
];

export default function MedalhasPage() {
  const [medalhas, setMedalhas] = useState({});

  useEffect(() => {
    const dados = {};

    materias.forEach((m) => {
      dados[m.nome] = {
        1: localStorage.getItem(`medal_${m.nome}_1`),
        2: localStorage.getItem(`medal_${m.nome}_2`),
        3: localStorage.getItem(`medal_${m.nome}_3`),
        4: localStorage.getItem(`medal_${m.nome}_4`)
      };
    });

    setMedalhas(dados);
  }, []); // ⬅️ agora não depende mais da array

  return (
    <div className="medalhas-container">
      <h2>Quadro de Medalhas</h2>

      <div className="materias-grid">
        {materias.map((m) => (
          <div key={m.nome} className="materia-card">
            <h3>{m.label}</h3>

            <div className="medalhas-row">
              {[1,2,3,4].map((nivel) => {
                const medalha = medalhas[m.nome]?.[nivel];

                return (
                  <img
                    key={nivel}
                    className="medal-img"
                    src={
                      medalha
                        ? `/medals/${medalha}.png`
                        : "/medals/empty.png"
                    }
                    alt="Medalha"
                  />
                );
              })}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
