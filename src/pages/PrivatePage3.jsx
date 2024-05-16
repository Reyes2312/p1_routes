import React from 'react';

export const PrivatePage3 = () => {
    const activityLogs = [
        { id: 1, action: 'Inició sesión', date: '2024-05-15 10:00:00' },
        { id: 2, action: 'Modificó datos de perfil', date: '2024-05-14 15:30:00' },
    ];

    return (
        <div>
            <h1>Registro de Actividad del Usuario</h1>
            <ul>
                {activityLogs.map(log => (
                    <li key={log.id}>
                        <strong>{log.action}</strong> - {log.date}
                    </li>
                ))}
            </ul>
        </div>
    );
};
