import React from "react";
import QuizTemplate from "../QuizTemplate";
import { perguntasMat } from "./perguntasMat";

export default function QuizMat2() {
  return (
    <QuizTemplate
      perguntas={perguntasMat.nivel2}
      materia="matematica"
      nivel="nivel2"
    />
  );
}
