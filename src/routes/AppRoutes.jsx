import React from 'react';
import AuthRoutes from './AuthRoutes';
import DashboardRoutes from './DashboardRoutes';
import NotFound from '../components/Error/NotFound';
import { APP_ROUTES } from '../constants/routeConstants';
import ServerError from '../components/Error/ServerError';
import { Routes, Route, Navigate } from 'react-router-dom';
import MaintenancePage from '../pages/error/MaintenancePage';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Auth routes */}
      <Route
        path="/"
        element={<Navigate to={APP_ROUTES.LOGIN.SELECT_USER_TYPE} replace />}
      />
      <Route path="/login/*" element={<AuthRoutes />} />

      {/* Dashboard routes */}
      <Route path="/dashboard/*" element={<DashboardRoutes />} />

      {/* Error routes */}
      <Route
        path={APP_ROUTES.ERROR.MAINTENANCE}
        element={<MaintenancePage />}
      />
      <Route path={APP_ROUTES.ERROR.NOT_FOUND} element={<NotFound />} />
      <Route path={APP_ROUTES.ERROR.SERVER_ERROR} element={<ServerError />} />

      {/* Catch-all */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
