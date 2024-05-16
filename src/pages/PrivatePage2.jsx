import React, { useState } from 'react';

export const PrivatePage2 = () => {
    const [formData, setFormData] = useState({
        email: '',
        message: ''
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
        console.log("Mensaje enviado:", formData);
    };

    return (
        <div>
            <h1>Obtener Ayuda</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="message">Mensaje:</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
                </div>
                <button type="submit">Enviar Mensaje</button>
            </form>
        </div>
    );
};
