import React from "react";
import QuizTemplate from "../QuizTemplate";
import { perguntasPort } from "./perguntasPort";

export default function QuizPort4() {
  return (
    <QuizTemplate
      perguntas={perguntasPort.nivel4}
      materia="portugues"
      nivel="nivel4"
    />
  );
}