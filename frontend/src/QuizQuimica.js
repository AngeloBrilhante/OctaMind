import React from "react";
import QuizBase from "./QuizBase";

const perguntasQuimica = [
  { pergunta: "Água é formada por?", opcoes: ["H2O","O2","CO2","H2"], resposta: "H2O" },
  { pergunta: "Qual elemento tem símbolo 'Na'?", opcoes: ["Nitrogênio","Sódio","Nióbio","Nêon"], resposta: "Sódio" },
  { pergunta: "Qual é a fórmula do sal de cozinha?", opcoes: ["NaCl","KCl","HCl","CaCl2"], resposta: "NaCl" },
  { pergunta: "Qual é o pH da água neutra?", opcoes: ["7","0","14","1"], resposta: "7" },
  { pergunta: "O que acontece quando ácidos e bases se misturam?", opcoes: ["Neutralização","Combustão","Evaporação","Fusão"], resposta: "Neutralização" },
  { pergunta: "Qual gás é liberado na respiração celular?", opcoes: ["O2","CO2","H2","N2"], resposta: "CO2" },
  { pergunta: "Qual é o símbolo químico do ouro?", opcoes: ["Au","Ag","Fe","Hg"], resposta: "Au" },
  { pergunta: "Qual é o estado físico do gelo à temperatura ambiente?", opcoes: ["Sólido","Líquido","Gasoso","Plasma"], resposta: "Sólido" },
  { pergunta: "Qual molécula é responsável pelo ar que respiramos?", opcoes: ["O2","CO2","H2O","CH4"], resposta: "O2" },
  { pergunta: "Qual é o elemento mais abundante na crosta terrestre?", opcoes: ["Oxigênio","Silício","Ferro","Carbono"], resposta: "Oxigênio" },
];

export default function QuizQuimica() {
  return <QuizBase materia="Química" perguntas={perguntasQuimica} />;
}
