import React from "react";
import QuizTemplate from "../QuizTemplate";
import { perguntasQuim } from "./perguntasQuim";

export default function QuizQuim1() {
  return (
    <QuizTemplate
      perguntas={perguntasQuim.nivel1}
      materia="quimica"
      nivel="nivel1"
    />
  );
}