import React from "react";
import QuizTemplate from "../QuizTemplate";
import { perguntasHist } from "./perguntasHist";

export default function QuizHist3() {
  return (
    <QuizTemplate
      perguntas={perguntasHist.nivel}
      materia="historia"
      nivel="nivel3"
    />
  );
}