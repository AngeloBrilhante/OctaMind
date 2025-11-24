import React from "react";
import QuizBase from "./QuizBase";

const perguntasBiologia = [
  { pergunta: "Qual o maior órgão do corpo humano?", opcoes: ["Fígado","Coração","Pele","Cérebro"], resposta: "Pele" },
  { pergunta: "Qual célula realiza fotossíntese?", opcoes: ["Animal","Vegetal","Bacteriana","Fúngica"], resposta: "Vegetal" },
  { pergunta: "Qual é a função dos glóbulos vermelhos?", opcoes: ["Defesa","Transporte de oxigênio","Produção de hormônios","Digestão"], resposta: "Transporte de oxigênio" },
  { pergunta: "O que é DNA?", opcoes: ["Proteína","Ácido nucleico","Carboidrato","Lipídio"], resposta: "Ácido nucleico" },
  { pergunta: "Qual sistema regula hormônios?", opcoes: ["Nervoso","Digestivo","Endócrino","Circulatório"], resposta: "Endócrino" },
  { pergunta: "O que as mitocôndrias fazem?", opcoes: ["Produzem energia","Armazenam água","Sintetizam proteínas","Defendem a célula"], resposta: "Produzem energia" },
  { pergunta: "Qual é o maior planeta do sistema solar?", opcoes: ["Terra","Marte","Júpiter","Saturno"], resposta: "Júpiter" },
  { pergunta: "Qual é a função da raiz nas plantas?", opcoes: ["Fotossíntese","Fixação e absorção","Respiração","Reprodução"], resposta: "Fixação e absorção" },
  { pergunta: "O que caracteriza seres vivos?", opcoes: ["Movimento","Respiração","Metabolismo","Tudo isso"], resposta: "Tudo isso" },
  { pergunta: "Qual é o órgão responsável pelo bombeamento de sangue?", opcoes: ["Pulmão","Coração","Rim","Fígado"], resposta: "Coração" },
];

export default function QuizBiologia() {
  return <QuizBase materia="Biologia" perguntas={perguntasBiologia} />;
}
