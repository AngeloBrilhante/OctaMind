import React from "react";
import QuizTemplate from "../QuizTemplate";
import { perguntasPort } from "./perguntasPort";

export default function QuizPort1() {
  return (
    <QuizTemplate
      perguntas={perguntasPort.nivel1}
      materia="portugues"
      nivel="nivel1"
    />
  );
}
