import React, { useState } from "react";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export const Login = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser, setIsAuthenticated } = useUser();
  const navigate = useNavigate();

  const validarInput = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (password.length < 6) {
      setError(
        "Recuerda que todas las contraseñas registradas tienen al menos 6 caracteres"
      );
      return;
    }

    // Obtener usuario almacenado en localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    // Validar credenciales
    if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
      setError("Correo o contraseña incorrectos.");
      return; // 🚨 Si falla, detenemos aquí.
    }

    // Si las credenciales son correctas
    setUser(storedUser);
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");

    setError("");
    setEmail("");
    setPassword("");

    alert("Inicio de sesión completado exitosamente!");
    navigate("/profile");
  };

  return (
    <div className="container plox mt-5">
      <div className="login-form-container">
        <form onSubmit={validarInput}>
          <fieldset>
            <legend className="Logintext">Inicio de Sesión</legend>
            <hr />
            <div className="mb-3">
              <label htmlFor="userEmail" className="form-label">
                Ingrese su correo electrónico
              </label>
              <input
                type="email"
                id="userEmail"
                className="form-control"
                placeholder="correo@ejemplo.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>
            <hr />
            <div className="row">
              <div className="mb-3 col">
                <label htmlFor="userPassword" className="form-label">
                  Ingrese su contraseña
                </label>
                <input
                  type="password"
                  id="userPassword"
                  className="form-control"
                  placeholder="Contraseña"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                  autoComplete="current-password"
                />
              </div>
            </div>
            <hr />
            <button type="submit" className="register-btn">
              Iniciar sesión
            </button>
            <hr />
          </fieldset>
        </form>
        {error && (
          <p className="bg-danger text-light fs-6 p-3 rounded border border-danger-subtle mt-3">
            {error}
          </p>
        )}
      </div>
    </div>
  );
};
