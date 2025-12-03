import React from "react";
import QuizTemplate from "../QuizTemplate";
import { perguntasBio } from "./perguntasBio";

export default function QuizBio1() {
  return (
    <QuizTemplate
      perguntas={perguntasBio.nivel1}
      materia="biologia"
      nivel="nivel1"
    />
  );
}
