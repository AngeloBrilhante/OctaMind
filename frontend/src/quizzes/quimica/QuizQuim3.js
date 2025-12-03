import React from "react";
import QuizTemplate from "../QuizTemplate";
import { perguntasQuim } from "./perguntasQuim";

export default function QuizQuim3() {
  return (
    <QuizTemplate
      perguntas={perguntasQuim.nivel3}
      materia="quimica"
      nivel="nivel3"
    />
  );
}