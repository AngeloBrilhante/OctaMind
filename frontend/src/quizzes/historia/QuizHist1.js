import React from "react";
import QuizTemplate from "../QuizTemplate";
import { perguntasHist } from "./perguntasHist";

export default function QuizHist1() {
  return (
    <QuizTemplate
      perguntas={perguntasHist.nivel1}
      materia="historia"
      nivel="nivel1"
    />
  );
}