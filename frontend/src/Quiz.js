import React from "react";
import { useLocation } from "react-router-dom";
import QuizBase from "./QuizBase"; // seu componente base de quiz

const perguntasPorMateria = {
  matematica: [
    { pergunta: "Quanto é 2 + 2?", opcoes: ["3","4","5","6"], resposta: "4" },
    { pergunta: "Qual é a raiz quadrada de 16?", opcoes: ["2","3","4","5"], resposta: "4" },
    { pergunta: "Quanto é 5 x 3?", opcoes: ["8","10","15","20"], resposta: "15" },
    { pergunta: "Quanto é 10 ÷ 2?", opcoes: ["2","5","10","20"], resposta: "5" },
    { pergunta: "Quanto é 7 + 8?", opcoes: ["14","15","16","17"], resposta: "15" },
    { pergunta: "Qual é o dobro de 9?", opcoes: ["18","17","16","19"], resposta: "18" },
    { pergunta: "Quanto é 12 - 7?", opcoes: ["4","5","6","7"], resposta: "5" },
    { pergunta: "Quanto é 3²?", opcoes: ["6","9","12","8"], resposta: "9" },
    { pergunta: "Quanto é 100 ÷ 25?", opcoes: ["2","4","5","6"], resposta: "4" },
    { pergunta: "Qual é o valor de π (aprox.)?", opcoes: ["3.14","2.14","3.41","4.13"], resposta: "3.14" },
  ],
  portugues: [
    { pergunta: "Qual a forma correta?", opcoes: ["Mau","Mal","Mão","Mauz"], resposta: "Mal" },
    // ... 9 perguntas
  ],
  historia: [
    { pergunta: "Quem descobriu o Brasil?", opcoes: ["Pedro I","Pedro II","Cabral","Vasco"], resposta: "Cabral" },
    // ... 9 perguntas
  ],
  quimica: [
    { pergunta: "Água é formada por?", opcoes: ["H2O","O2","CO2","H2"], resposta: "H2O" },
    // ... 9 perguntas
  ],
  biologia: [
    { pergunta: "Qual o maior órgão do corpo humano?", opcoes: ["Fígado","Coração","Pele","Cérebro"], resposta: "Pele" },
    // ... 9 perguntas
  ],
};

export default function Quiz() {
  const location = useLocation();
  const materia = location.state?.materia;
  const perguntas = perguntasPorMateria[materia];

  if (!materia || !perguntas) return <div>Matéria não encontrada!</div>;

  return <QuizBase materia={materia} perguntas={perguntas} />;
}
