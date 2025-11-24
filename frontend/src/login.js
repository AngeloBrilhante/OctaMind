import React, { useState } from "react";
import "./login.css";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/materias");
  };

  return (
    <div className="login-container">

      <div className="login-card">

        {/* LADO ESQUERDO */}
        <div className="login-left">

          {/* LOGO */}
          <img src="/logo.png" alt="Logo" className="logo-small" />

          <p className="subtitle">Acesse sua conta</p>

          <form onSubmit={handleLogin}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Seu email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Senha</label>
            <input
              type="password"
              placeholder="Sua senha..."
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />

            <button type="submit" className="btn-login">
              Entrar
            </button>
          </form>

          {/* Apenas isso foi alterado */}
          <Link to="/recuperar-senha" className="link-esqueci">
            Esqueci minha senha
          </Link>

        </div>

        {/* LADO DIREITO */}
        <div className="login-right">
          <img src="/login-image.png" alt="Imagem" className="side-img" />
        </div>

      </div>

    </div>
  );
}
