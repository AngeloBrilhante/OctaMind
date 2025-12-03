import React from "react";
import QuizTemplate from "../QuizTemplate";
import { perguntasPort } from "./perguntasPort";

export default function QuizPort3() {
  return (
    <QuizTemplate
      perguntas={perguntasPort.nivel3}
      materia="portugues"
      nivel="nivel3"
    />
  );
}