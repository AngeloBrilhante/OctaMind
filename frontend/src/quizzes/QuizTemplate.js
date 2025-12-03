// src/quizzes/QuizTemplate.js
import React, { useState } from "react";
import salvarMedalha from "../MedalhaService";
import "./quiz.css";


export default function QuizTemplate({ perguntas, materia, nivel }) {
  const [indice, setIndice] = useState(0);
  const [acertos, setAcertos] = useState(0);
  const [finalizado, setFinalizado] = useState(false);

  const atual = perguntas[indice];

  const responder = (alt) => {
    if (alt === atual.correta) setAcertos(acertos + 1);

    if (indice + 1 < perguntas.length) {
      setIndice(indice + 1);
    } else {
      setFinalizado(true);

      // Calcula medalha
      const total = perguntas.length;
      const percent = (acertos / total) * 100;

      let medalha = "bronze";
      if (percent >= 75) medalha = "ouro";
      else if (percent >= 50) medalha = "prata";

      salvarMedalha(materia, nivel, medalha);
    }
  };

  if (finalizado) {
    return (
      <div className="quiz-final">
        <h1>Quiz Finalizado!</h1>
        <p>Acertos: {acertos} / {perguntas.length}</p>
        <h2>Medalha registrada!</h2>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h2>{atual.pergunta}</h2>

      {atual.alternativas.map((alt, i) => (
        <button key={i} onClick={() => responder(alt)}>
          {alt}
        </button>
      ))}
    </div>
  );
}
