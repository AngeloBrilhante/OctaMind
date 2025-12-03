import React from "react";
import QuizTemplate from "../QuizTemplate";
import { perguntasHist } from "./perguntasHist";

export default function QuizHist4() {
  return (
    <QuizTemplate
      perguntas={perguntasHist.nivel4}
      materia="historia"
      nivel="nivel4"
    />
  );
}