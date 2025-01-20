import React from 'react';
import AuthRoutes from './AuthRoutes';
import DashboardRoutes from './DashboardRoutes';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../components/Error/NotFound';
import { APP_ROUTES } from '../constants/routeConstants';
import ServerError from '../components/Error/ServerError';
import MaintenancePage from '../pages/error/MaintenancePage';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Auth routes */}
      <Route path={APP_ROUTES.HOME} element={<AuthRoutes />} />

      {/* Dashboard routes */}
      <Route
        path={APP_ROUTES.DASHBOARD.HOME + '/*'}
        element={<DashboardRoutes />}
      />

      {/* Error routes */}
      <Route
        path={APP_ROUTES.ERROR.MAINTENANCE}
        element={<MaintenancePage />}
      />
      <Route path={APP_ROUTES.ERROR.NOT_FOUND} element={<NotFound />} />
      <Route path={APP_ROUTES.ERROR.SERVER_ERROR} element={<ServerError />} />

      {/* Catch-all route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
