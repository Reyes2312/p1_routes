import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../Navbar';
import {
  HomePage,
  DashboardPage,
  LoginPage,
  RegisterPage,
  AboutPage,
  ContactPage,
  PrivacyPage,
  PrivatePage1,
  PrivatePage2,
  PrivatePage3
} from '../pages';
import { PrivateRoute } from './PrivateRoute';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<HomePage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='register' element={<RegisterPage />} />
        <Route path='dashboard' element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
        <Route path='about' element={<AboutPage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='privacy' element={<PrivacyPage />} />
        {/* Rutas privadas */}
        <Route path='privatepage1' element={<PrivateRoute><PrivatePage1 /></PrivateRoute>} />
        <Route path='privatepage2' element={<PrivateRoute><PrivatePage2 /></PrivateRoute>} />
        <Route path='privatepage3' element={<PrivateRoute><PrivatePage3 /></PrivateRoute>} />
      </Route>
    </Routes>
  );
};

export default AppRouter;