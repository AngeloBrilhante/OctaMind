import React from "react";
import QuizBase from "./QuizBase";

const perguntasHistoria = [
  { pergunta: "Quem descobriu o Brasil?", opcoes: ["Pedro I","Pedro II","Cabral","Vasco"], resposta: "Cabral" },
  { pergunta: "Em que ano ocorreu a Proclamação da República?", opcoes: ["1889","1822","1500","1888"], resposta: "1889" },
  { pergunta: "Quem foi o primeiro presidente do Brasil?", opcoes: ["Deodoro da Fonseca","Getúlio Vargas","Pedro II","Juscelino Kubitschek"], resposta: "Deodoro da Fonseca" },
  { pergunta: "Qual civilização construiu as pirâmides?", opcoes: ["Romanos","Egípcios","Maias","Gregos"], resposta: "Egípcios" },
  { pergunta: "Qual guerra ficou conhecida como 'A Grande Guerra'?", opcoes: ["Segunda Guerra","Primeira Guerra Mundial","Guerra Fria","Guerra do Vietnã"], resposta: "Primeira Guerra Mundial" },
  { pergunta: "Quem liderou a Revolução Francesa?", opcoes: ["Napoleão","Robespierre","Louis XIV","Carlos Magno"], resposta: "Robespierre" },
  { pergunta: "O Brasil era colônia de qual país?", opcoes: ["Espanha","Portugal","Inglaterra","França"], resposta: "Portugal" },
  { pergunta: "Quando aconteceu a Independência do Brasil?", opcoes: ["1822","1889","1500","1808"], resposta: "1822" },
  { pergunta: "Quem foi Tiradentes?", opcoes: ["Herói da Inconfidência Mineira","Imperador do Brasil","Explorador","Escritor"], resposta: "Herói da Inconfidência Mineira" },
  { pergunta: "O que foi a Revolução Industrial?", opcoes: ["Mudança tecnológica e social","Guerra mundial","Descoberta de terras","Movimento artístico"], resposta: "Mudança tecnológica e social" },
];

export default function QuizHistoria() {
  return <QuizBase materia="História" perguntas={perguntasHistoria} />;
}
