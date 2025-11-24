import React, { useState, useEffect } from "react";
import "./Quiz.css";

export default function QuizBase({ materia, perguntas }) {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    // Cria o audio de fundo
    const bgMusic = new Audio("/bgm.mp3");
    bgMusic.loop = true;       // toca em loop
    bgMusic.volume = 1;      // ajusta volume
    bgMusic.play().catch(() => {}); // ignora erros de autoplay

    // Para a música ao sair do quiz
    return () => {
      bgMusic.pause();
      bgMusic.currentTime = 0;
    };
  }, []);

  const handleAnswer = (opcao) => {
    if (opcao === perguntas[current].resposta) {
      setScore(score + 1);
    }
    const next = current + 1;
    if (next < perguntas.length) {
      setCurrent(next);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container">
      <div className="quiz-card-wrapper">
        <h1 className="quiz-title">Quiz de {materia}</h1>

        {showScore ? (
          <div className="quiz-score">
            <h2>Você acertou {score} de {perguntas.length}!</h2>
          </div>
        ) : (
          <div className="quiz-card">
            <h2>Pergunta {current + 1}:</h2>
            <p>{perguntas[current].pergunta}</p>
            <div className="quiz-options">
              {perguntas[current].opcoes.map((op, i) => (
                <button key={i} onClick={() => handleAnswer(op)}>
                  {op}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
