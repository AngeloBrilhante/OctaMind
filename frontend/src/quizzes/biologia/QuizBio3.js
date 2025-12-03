import React from "react";
import QuizTemplate from "../QuizTemplate";
import { perguntasBio } from "./perguntasBio";

export default function QuizBio3() {
  return (
    <QuizTemplate
      perguntas={perguntasBio.nivel3}
      materia="biologia"
      nivel="nivel3"
    />
  );
}