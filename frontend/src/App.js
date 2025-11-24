import { BrowserRouter, Routes, Route } from "react-router-dom";
import Materias from "./Materias";
import MapaMateria from "./MapaMateria";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Materias />} />
        <Route path="/materia/:materia" element={<MapaMateria />} />
      </Routes>
    </BrowserRouter>
  );
}
