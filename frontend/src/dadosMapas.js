// src/dadosMapas.js
const dadosMapas = {
  matematica: {
    titulo: "Matemática",
    fases: [
      { id: 1, img: "/sprites/fase1.png", quiz: "/quiz/matematica/1" },
      { id: 2, img: "/sprites/fase2.png", quiz: "/quiz/matematica/2" },
      { id: 3, img: "/sprites/fase3.png", quiz: "/quiz/matematica/3" },
    ]
  },

  portugues: {
    titulo: "Português",
    fases: [
      { id: 1, img: "/sprites/fase1.png", quiz: "/quiz/portugues/1" },
      { id: 2, img: "/sprites/fase2.png", quiz: "/quiz/portugues/2" },
    ]
  },

  historia: {
    titulo: "História",
    fases: [
      { id: 1, img: "/sprites/fase1.png", quiz: "/quiz/historia/1" },
    ]
  },

  geografia: {
    titulo: "Geografia",
    fases: [
      { id: 1, img: "/sprites/fase2.png", quiz: "/quiz/geografia/1" },
      { id: 2, img: "/sprites/fase3.png", quiz: "/quiz/geografia/2" },
    ]
  }
};

export default dadosMapas;
