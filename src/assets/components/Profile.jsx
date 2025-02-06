import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
    // Datos de usuario (esto debería venir de un sistema de autenticación real)
    const [userData, setUserData] = useState({
        name: 'Juan Pérez',
        email: 'juan.perez@mail.com',
        age: 30,
        address: 'Calle Ficticia 123',
        phone: '123-456-7890',
    });

    // Estado para controlar si los campos son editables
    const [isEditing, setIsEditing] = useState(false);

    // Función para habilitar o deshabilitar la edición de datos
    const handleEdit = () => {
        setIsEditing(!isEditing);
    };

    return (
        <div className="profile-container">
            <div className="profile-header">
                <span className="profile-icon">👤</span> {/* Icono de silueta de usuario */}
                <h2>Mi Perfil</h2>
            </div>
            <div className="profile-info">
                <div className="profile-item">
                    <label>Nombre:</label>
                    {isEditing ? (
                        <input
                            type="text"
                            value={userData.name}
                            onChange={(e) =>
                                setUserData({ ...userData, name: e.target.value })
                            }
                        />
                    ) : (
                        <span>{userData.name}</span>
                    )}
                </div>
                <div className="profile-item">
                    <label>Correo Electrónico:</label>
                    {isEditing ? (
                        <input
                            type="email"
                            value={userData.email}
                            onChange={(e) =>
                                setUserData({ ...userData, email: e.target.value })
                            }
                        />
                    ) : (
                        <span>{userData.email}</span>
                    )}
                </div>
                <div className="profile-item">
                    <label>Edad:</label>
                    {isEditing ? (
                        <input
                            type="number"
                            value={userData.age}
                            onChange={(e) =>
                                setUserData({ ...userData, age: e.target.value })
                            }
                        />
                    ) : (
                        <span>{userData.age}</span>
                    )}
                </div>
                <div className="profile-item">
                    <label>Dirección:</label>
                    {isEditing ? (
                        <input
                            type="text"
                            value={userData.address}
                            onChange={(e) =>
                                setUserData({ ...userData, address: e.target.value })
                            }
                        />
                    ) : (
                        <span>{userData.address}</span>
                    )}
                </div>
                <div className="profile-item">
                    <label>Teléfono:</label>
                    {isEditing ? (
                        <input
                            type="tel"
                            value={userData.phone}
                            onChange={(e) =>
                                setUserData({ ...userData, phone: e.target.value })
                            }
                        />
                    ) : (
                        <span>{userData.phone}</span>
                    )}
                </div>
            </div>
            <button className="edit-button" onClick={handleEdit}>
                {isEditing ? 'Guardar cambios' : 'Editar datos'}
            </button>
        </div>
    );
};

export default Profile;
