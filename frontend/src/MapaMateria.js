// MapaMateria.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./MapaMateria.css";

export default function MapaMateria() {
  const { materia } = useParams();
  const navigate = useNavigate();

  const mapas = {
    matematica: "/mapas/mapa_matematica.png",
    portugues: "/mapas/mapa_portugues.png",
    historia: "/mapas/mapa_historia.png",
    quimica: "/mapas/mapa_quimica.png",
    biologia: "/mapas/mapa_biologia.png",
  };

  const fases = [
    { id: 1, x: "22%", y: "61%" },
    { id: 2, x: "44%", y: "15%" },
    { id: 3, x: "82%", y: "42%" },
    { id: 4, x: "56%", y: "68%" },
  ];

  const entrarNaFase = (faseId) => {
    navigate(`/quiz/${materia}/${faseId}`);
  };

  return (
    <div className="mapa-container">
      <img
        src={mapas[materia]}
        alt={`Mapa de ${materia}`}
        className="mapa-img"
      />

      {fases.map((f) => (
        <button
          key={f.id}
          className="fase-btn"
          style={{ left: f.x, top: f.y }}
          onClick={() => entrarNaFase(f.id)}
        >
          {f.id}
        </button>
      ))}
    </div>
  );
}
