import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./login";
import Materias from "./Materias";
import MapaMateria from "./MapaMateria";

import QuizMat1 from "./quizzes/matematica/QuizMat1";
import QuizMat2 from "./quizzes/matematica/QuizMat2";
import QuizMat3 from "./quizzes/matematica/QuizMat3";
import QuizMat4 from "./quizzes/matematica/QuizMat4";

import QuizPort1 from "./quizzes/portugues/QuizPort1";
import QuizPort2 from "./quizzes/portugues/QuizPort2";
import QuizPort3 from "./quizzes/portugues/QuizPort3";
import QuizPort4 from "./quizzes/portugues/QuizPort4";

import QuizHist1 from "./quizzes/historia/QuizHist1";
import QuizHist2 from "./quizzes/historia/QuizHist2";
import QuizHist3 from "./quizzes/historia/QuizHist3";
import QuizHist4 from "./quizzes/historia/QuizHist4";

import QuizQuim1 from "./quizzes/quimica/QuizQuim1";
import QuizQuim2 from "./quizzes/quimica/QuizQuim2";
import QuizQuim3 from "./quizzes/quimica/QuizQuim3";
import QuizQuim4 from "./quizzes/quimica/QuizQuim4";

import QuizBio1 from "./quizzes/biologia/QuizBio1";
import QuizBio2 from "./quizzes/biologia/QuizBio2";
import QuizBio3 from "./quizzes/biologia/QuizBio3";
import QuizBio4 from "./quizzes/biologia/QuizBio4";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>

      {/* Login */}
      <Route path="/" element={<Login />} />

      {/* Tela de seleção das matérias */}
      <Route path="/materias" element={<Materias />} />

      {/* Tela intermediária com os níveis da matéria (Mapa) */}
      <Route path="/materia/:materia" element={<MapaMateria />} />

      {/* ======================== */}
      {/*   ROTAS DOS QUIZZES      */}
      {/* ======================== */}

      {/* Matemática */}
      <Route path="/quiz/matematica/1" element={<QuizMat1 />} />
      <Route path="/quiz/matematica/2" element={<QuizMat2 />} />
      <Route path="/quiz/matematica/3" element={<QuizMat3 />} />
      <Route path="/quiz/matematica/4" element={<QuizMat4 />} />

      {/* Português */}
      <Route path="/quiz/portugues/1" element={<QuizPort1 />} />
      <Route path="/quiz/portugues/2" element={<QuizPort2 />} />
      <Route path="/quiz/portugues/3" element={<QuizPort3 />} />
      <Route path="/quiz/portugues/4" element={<QuizPort4 />} />

      {/* História */}
      <Route path="/quiz/historia/1" element={<QuizHist1 />} />
      <Route path="/quiz/historia/2" element={<QuizHist2 />} />
      <Route path="/quiz/historia/3" element={<QuizHist3 />} />
      <Route path="/quiz/historia/4" element={<QuizHist4 />} />

      {/* Química */}
      <Route path="/quiz/quimica/1" element={<QuizQuim1 />} />
      <Route path="/quiz/quimica/2" element={<QuizQuim2 />} />
      <Route path="/quiz/quimica/3" element={<QuizQuim3 />} />
      <Route path="/quiz/quimica/4" element={<QuizQuim4 />} />

      {/* Biologia */}
      <Route path="/quiz/biologia/1" element={<QuizBio1 />} />
      <Route path="/quiz/biologia/2" element={<QuizBio2 />} />
      <Route path="/quiz/biologia/3" element={<QuizBio3 />} />
      <Route path="/quiz/biologia/4" element={<QuizBio4 />} />

    </Routes>
  </BrowserRouter>
);
