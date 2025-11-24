import React from "react";
import QuizBase from "./QuizBase";

const perguntasPortugues = [
  { pergunta: "Qual é a forma correta?", opcoes: ["Mau","Mal","Mão","Mauz"], resposta: "Mal" },
  { pergunta: "Qual palavra está escrita corretamente?", opcoes: ["Excessão","Exceção","Excessão","Exceção"], resposta: "Exceção" },
  { pergunta: "Qual é o plural de 'cidadão'?", opcoes: ["Cidadãos","Cidadães","Cidadães","Cidadãoss"], resposta: "Cidadãos" },
  { pergunta: "Qual a classe gramatical de 'rápido' em 'Ele corre rápido'?", opcoes: ["Adjetivo","Substantivo","Advérbio","Verbo"], resposta: "Advérbio" },
  { pergunta: "Qual frase está correta?", opcoes: ["Mim gosta de ler","Me gosta de ler","Eu gosto de ler","Min gosta de ler"], resposta: "Eu gosto de ler" },
  { pergunta: "Qual a forma correta de plural de 'pão'?", opcoes: ["Pãos","Pães","Pãeses","Pãoses"], resposta: "Pães" },
  { pergunta: "Qual é o antônimo de 'difícil'?", opcoes: ["Complicado","Simples","Impossível","Chato"], resposta: "Simples" },
  { pergunta: "Qual frase está com pontuação correta?", opcoes: ["Vamos comer vovó","Vamos comer, vovó","Vamos, comer vovó","Vamos comer vovó,"], resposta: "Vamos comer, vovó" },
  { pergunta: "Qual é a forma correta do verbo 'haver' no presente?", opcoes: ["Há","Ha","Háe","Hã"], resposta: "Há" },
  { pergunta: "Qual é o sinônimo de 'feliz'?", opcoes: ["Triste","Alegre","Chateado","Bravo"], resposta: "Alegre" },
];

export default function QuizPortugues() {
  return <QuizBase materia="Português" perguntas={perguntasPortugues} />;
}
