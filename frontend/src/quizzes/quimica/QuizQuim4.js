import React from "react";
import QuizTemplate from "../QuizTemplate";
import { perguntasQuim } from "./perguntasQuim";

export default function QuizQuim4() {
  return (
    <QuizTemplate
      perguntas={perguntasQuim.nivel4}
      materia="quimica"
      nivel="nivel4"
    />
  );
}