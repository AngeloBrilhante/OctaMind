// src/medals/MedalhaService.js

export function salvarMedalha(materia, nivel, medalha) {
  const chave = `medal_${materia}_${nivel}`;

  const medalhaValor = {
    bronze: 1,
    prata: 2,
    ouro: 3,
  };

  const atual = localStorage.getItem(chave);

  // Nunca foi feito um quiz neste nível
  if (!atual) {
    localStorage.setItem(chave, medalha);
    return;
  }

  // Já existe uma medalha salva, compara para ver se deve atualizar
  const valorAtual = medalhaValor[atual] ?? 0;
  const novoValor = medalhaValor[medalha] ?? 0;

  // Só atualiza se a medalha nova for melhor
  if (novoValor > valorAtual) {
    localStorage.setItem(chave, medalha);
  }
}
