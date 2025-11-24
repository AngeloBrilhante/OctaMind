import { db } from "../database/db.js";

export const login = (req, res) => {
  const { email, senha } = req.body;

  const sql = "SELECT * FROM usuarios WHERE email = ? AND senha = ?";

  db.query(sql, [email, senha], (err, result) => {
    if (err) return res.status(500).json({ error: "Erro no servidor" });

    if (result.length > 0) {
      return res.json({ message: "Login OK" });
    } else {
      return res.status(401).json({ error: "Email ou senha incorretos" });
    }
  });
};
