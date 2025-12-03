// src/MedalhaService.js

export default function salvarMedalha(materia, nivel, medalha) {
  const chave = "medalhas";

  const data = JSON.parse(localStorage.getItem(chave)) || {};

  if (!data[materia]) data[materia] = {};

  data[materia][nivel] = medalha;

  localStorage.setItem(chave, JSON.stringify(data));
}
