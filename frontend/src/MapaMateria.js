// MapaMateria.js
import React, { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./MapaMateria.css";

export default function MapaMateria() {
  const { materia } = useParams();
  const navigate = useNavigate();

  const [loaded, setLoaded] = useState(false);

  // ✅ memoriza o objeto para não recriar a cada render
  const mapas = useMemo(() => ({
    matematica: "/mapas/mapa_matematica.png",
    portugues: "/mapas/mapa_portugues.png",
    historia: "/mapas/mapa_historia.png",
    quimica: "/mapas/mapa_quimica.png",
    biologia: "/mapas/mapa_biologia.png",
  }), []);

  const fases = [
    { id: 1, x: "22%", y: "61%" },
    { id: 2, x: "44%", y: "15%" },
    { id: 3, x: "82%", y: "42%" },
    { id: 4, x: "56%", y: "68%" },
  ];

  const entrarNaFase = (faseId) => {
    navigate(`/quiz/${materia}/${faseId}`);
  };

  // 🔥 pré-carrega a imagem
  useEffect(() => {
    const img = new Image();
    img.src = mapas[materia];
    img.onload = () => setLoaded(true);
  }, [materia, mapas]); // <-- mapas adicionado agora

  return (
    <div className={`mapa-container ${loaded ? "fade-in" : ""}`}>
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
