import React from "react";
import QuizTemplate from "../QuizTemplate";
import { perguntasMat } from "./perguntasMat";

export default function QuizMat1() {
  return (
    <QuizTemplate
      perguntas={perguntasMat.nivel1}
      materia="matematica"
      nivel="nivel1"
    />
  );
}
