import React from "react";
import QuizTemplate from "../QuizTemplate";
import { perguntasPort } from "./perguntasPort";

export default function QuizPort2() {
  return (
    <QuizTemplate
      perguntas={perguntasPort.nivel2}
      materia="portugues"
      nivel="nivel2"
    />
  );
}