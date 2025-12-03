import React from "react";
import QuizTemplate from "../QuizTemplate";
import { perguntasHist } from "./perguntasHist";

export default function QuizHist2() {
  return (
    <QuizTemplate
      perguntas={perguntasHist.nivel2}
      materia="historia"
      nivel="nivel2"
    />
  );
}