import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { APP_ROUTES } from '../constants/appRoutes';
import NotFound from '../components/Error/NotFound';
import SubAdminLogin from '../pages/auth/SubAdminLogin';
import ServerError from '../components/Error/ServerError';
import SuperAdminLogin from '../pages/auth/SuperAdminLogin';
import MaintenancePage from '../pages/error/MaintenancePage';
import SelectUserType from '../components/auth/SelectUserType';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={APP_ROUTES?.HOME} element={<SelectUserType />} />
      <Route path={APP_ROUTES?.LOGIN?.SUB_ADMIN} element={<SubAdminLogin />} />
      <Route
        path={APP_ROUTES?.LOGIN?.SUPER_ADMIN}
        element={<SuperAdminLogin />}
      />
      <Route
        path={APP_ROUTES.ERROR.MAINTENANCE}
        element={<MaintenancePage />}
      />
      <Route path={APP_ROUTES.ERROR.NOT_FOUND} element={<NotFound />} />
      <Route path={APP_ROUTES.ERROR.SERVER_ERROR} element={<ServerError />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
