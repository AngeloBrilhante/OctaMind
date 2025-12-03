import React from "react";
import QuizTemplate from "../QuizTemplate";
import { perguntasMat } from "./perguntasMat";

export default function QuizMat4() {
  return (
    <QuizTemplate
      perguntas={perguntasMat.nivel4}
      materia="matematica"
      nivel="nivel4"
    />
  );
}
