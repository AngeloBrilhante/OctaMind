import React from "react";
import QuizBase from "./QuizBase";

const perguntasMatematica = [
  { pergunta: "Quanto é 2 + 2?", opcoes: ["3", "4", "5", "6"], resposta: "4" },
  { pergunta: "Qual é a raiz quadrada de 16?", opcoes: ["2", "3", "4", "5"], resposta: "4" },
  { pergunta: "Quanto é 5 x 3?", opcoes: ["15", "10", "8", "13"], resposta: "15" },
  { pergunta: "Quanto é 10 ÷ 2?", opcoes: ["2", "5", "10", "20"], resposta: "5" },
  { pergunta: "Quanto é 7 + 8?", opcoes: ["14", "15", "16", "17"], resposta: "15" },
  { pergunta: "Qual é o dobro de 9?", opcoes: ["18", "17", "16", "19"], resposta: "18" },
  { pergunta: "Quanto é 12 - 7?", opcoes: ["4", "5", "6", "7"], resposta: "5" },
  { pergunta: "Quanto é 3²?", opcoes: ["6", "9", "12", "8"], resposta: "9" },
  { pergunta: "Quanto é 100 ÷ 25?", opcoes: ["2", "4", "5", "6"], resposta: "4" },
  { pergunta: "Qual é o valor de π (aprox.)?", opcoes: ["3.14", "2.14", "3.41", "4.13"], resposta: "3.14" },
];

export default function QuizMatematica() {
  return <QuizBase materia="Matemática" perguntas={perguntasMatematica} />;
}
