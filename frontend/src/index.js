import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login";
import Materias from "./Materias";
import MapaMateria from "./MapaMateria";  // ✅ IMPORTAR O MAPA
import QuizMatematica from "./QuizMatematica";
import QuizPortugues from "./QuizPortugues";
import QuizHistoria from "./QuizHistoria";
import QuizQuimica from "./QuizQuimica";
import QuizBiologia from "./QuizBiologia";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />

      {/* Tela de matérias */}
      <Route path="/materias" element={<Materias />} />

      {/* ✅ Rota do Mapa da Matéria */}
      <Route path="/materia/:materia" element={<MapaMateria />} />

      {/* Rotas dos quizzes */}
      <Route path="/quiz/matematica" element={<QuizMatematica />} />
      <Route path="/quiz/portugues" element={<QuizPortugues />} />
      <Route path="/quiz/historia" element={<QuizHistoria />} />
      <Route path="/quiz/quimica" element={<QuizQuimica />} />
      <Route path="/quiz/biologia" element={<QuizBiologia />} />
    </Routes>
  </BrowserRouter>
);
