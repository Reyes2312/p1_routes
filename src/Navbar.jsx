import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/login', {
            replace: true,
        });
    };

    return (
        <>
            <header>
                <h1>
                    <Link to='/'>Logo</Link>
                </h1>

                {state?.logged ? (
                    <div className='user'>
                        <span className='username'>{state?.name}</span>
                        <button className='btn-logout' onClick={onLogout}>
                            Cerrar sesión
                        </button>
                    </div>
                ) : (
                    <nav>
                        <Link to='/login'>Iniciar sesión</Link>
                        <Link to='/register'>Registrarse</Link>
                        <Link to='/contact'>Contacto</Link>
                        <Link to='/about'>Acerca de Nosotros</Link>
                        <Link to='/privacy'>Políticas de Privacidad</Link>
                    </nav>
                )}

                {/* Nuevos botones para las rutas privadas */}
                {state?.logged && (
                    <nav>
                        <Link to='/PrivatePage1'>Modificar Datos</Link>
                        <Link to='/PrivatePage2'>Obtener Ayuda</Link>
                        <Link to='/PrivatePage3'>Registro de Actividad</Link>
                    </nav>
                )}
            </header>

            <Outlet />
        </>
    );
};
