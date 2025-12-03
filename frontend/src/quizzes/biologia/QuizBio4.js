import React from "react";
import QuizTemplate from "../QuizTemplate";
import { perguntasBio } from "./perguntasBio";

export default function QuizBio4() {
  return (
    <QuizTemplate
      perguntas={perguntasBio.nivel4}
      materia="biologia"
      nivel="nivel4"
    />
  );
}