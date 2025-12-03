import { BrowserRouter, Routes, Route } from "react-router-dom";

import Materias from "./Materias";
import MapaMateria from "./MapaMateria";

import QuizTemplate from "./QuizTemplate";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Materias />} />
        <Route path="/materia/:materia" element={<MapaMateria />} />

        {/* ROTA ÚNICA PARA TODOS OS QUIZZES */}
        <Route path="/quiz/:materia/:fase" element={<QuizTemplate />} />
      </Routes>
    </BrowserRouter>
  );
}
