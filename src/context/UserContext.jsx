import React, { createContext, useState, useContext } from 'react';

// Creamos el contexto de User
export const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);
  const [profile, setProfile] = useState(null); // Nuevo estado para almacenar el perfil del usuario

  // Método para hacer login
  const login = async (email, password) => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    setToken(data.token); // Guardamos el token
    setEmail(email);      // Guardamos el email
  };

  // Método para hacer logout
  const logout = () => {
    setToken(null);
    setEmail(null);
    setProfile(null); // Eliminamos también el perfil del usuario
  };

  // Método para obtener el perfil del usuario autenticado
  const getProfile = async () => {
    if (!token) return; // Si no hay token, no se hace la petición

    const response = await fetch('/api/auth/me', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`, // Pasamos el token en los headers
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const userProfile = await response.json();
      setProfile(userProfile); // Guardamos el perfil en el estado
    } else {
      console.error('Error al obtener el perfil');
    }
  };

  return (
    <UserContext.Provider value={{ token, email, profile, login, logout, getProfile }}>
      {children}
    </UserContext.Provider>
  );
};
