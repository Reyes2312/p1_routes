import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

export const PrivatePage1 = () => {
    const { state } = useLocation();
    const [formData, setFormData] = useState({
        name: state?.name || '',
        email: state?.email || '',
        password: ''
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log("Datos actualizados:", formData);
    };

    return (
        <div>
            <h1>Modificar Datos de Usuario</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password">Nueva Contraseña:</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
                </div>
                <button type="submit">Guardar Cambios</button>
            </form>
        </div>
    );
};
