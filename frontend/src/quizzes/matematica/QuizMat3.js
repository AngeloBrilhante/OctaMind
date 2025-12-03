import React from "react";
import QuizTemplate from "../QuizTemplate";
import { perguntasMat } from "./perguntasMat";

export default function QuizMat3() {
  return (
    <QuizTemplate
      perguntas={perguntasMat.nivel3}
      materia="matematica"
      nivel="nivel3"
    />
  );
}
