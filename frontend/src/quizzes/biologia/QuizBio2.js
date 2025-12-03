import React from "react";
import QuizTemplate from "../QuizTemplate";
import { perguntasBio } from "./perguntasBio";

export default function QuizBio2() {
  return (
    <QuizTemplate
      perguntas={perguntasBio.nivel2}
      materia="biologia"
      nivel="nivel2"
    />
  );
}