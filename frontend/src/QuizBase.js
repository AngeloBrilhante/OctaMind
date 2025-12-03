// QuizBase.js
import React, { useState } from "react";

export default function QuizBase({ materia, nivel, perguntas }) {
  const [index, setIndex] = useState(0);
  const [acertos, setAcertos] = useState(0);
  const [finalizado, setFinalizado] = useState(false);

  const perguntaAtual = perguntas[index];

  const responder = (opcao) => {
    if (opcao === perguntaAtual.resposta) {
      setAcertos(acertos + 1);
    }

    if (index + 1 < perguntas.length) {
      setIndex(index + 1);
    } else {
      setFinalizado(true);
    }
  };

  if (finalizado) {
    const porcentagem = (acertos / perguntas.length) * 100;
    let medalha = "Bronze 🥉";

    if (porcentagem >= 70) medalha = "Prata 🥈";
    if (porcentagem >= 90) medalha = "Ouro 🥇";

    return (
      <div style={{ padding: 30 }}>
        <h1>Quiz finalizado!</h1>
        <h2>Matéria: {materia}</h2>
        <h2>Nível: {nivel}</h2>
        <h2>Acertos: {acertos}/{perguntas.length}</h2>
        <h2>Medalha: {medalha}</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: 30 }}>
      <h1>{materia.toUpperCase()} - Nível {nivel}</h1>

      <h2>{perguntaAtual.pergunta}</h2>

      {perguntaAtual.opcoes.map((op) => (
        <button
          key={op}
          onClick={() => responder(op)}
          style={{
            display: "block",
            marginTop: 10,
            padding: "10px 20px",
            fontSize: 18
          }}
        >
          {op}
        </button>
      ))}
    </div>
  );
}
