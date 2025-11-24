import React from "react";
import { useNavigate } from "react-router-dom";
import "./Materias.css";

export default function Materias() {
  const navigate = useNavigate();

  const materias = [
    { nome: "matematica", titulo: "Matemática", img: "/icons/matematica.png" },
    { nome: "portugues", titulo: "Português", img: "/icons/portugues.png" },
    { nome: "historia", titulo: "História", img: "/icons/historia.png" },
    { nome: "quimica", titulo: "Química", img: "/icons/quimica.png" },
    { nome: "biologia", titulo: "Biologia", img: "/icons/biologia.png" },
  ];

  const handleClick = (materiaNome) => {
    const clickSound = new Audio("/sounds/click.mp3");
    clickSound.volume = 0.4;
    clickSound.play();

    document.body.classList.add("fade-out");

    setTimeout(() => {
      navigate(`/materia/${materiaNome}`);   // 👈 Agora vai para o mapa
      document.body.classList.remove("fade-out");
    }, 250);
  };

  return (
    <div className="materias-layout">

      <aside className="sidebar">
        <h2 className="sidebar-title">Octamind</h2>

        <ul className="sidebar-menu">
          <li className="active">📘 Matérias</li>
          <li>📊 Meu Desempenho</li>
          <li>🏅 Minhas Medalhas</li>
          <li>👤 Minha Conta</li>
          <li>⚙️ Configurações</li>
        </ul>
      </aside>

      <main className="main-content">

        <div className="top-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Pesquisar matéria..."
          />
        </div>

        <div className="materias-grid">
          {materias.map((m, index) => (
            <div
              className="materia-card"
              key={index}
              onClick={() => handleClick(m.nome)}
            >
              <img src={m.img} alt={m.titulo} className="materia-icon" />
              <p>{m.titulo}</p>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}
