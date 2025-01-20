import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { APP_ROUTES } from '../constants/routeConstants';
import SubAdminLogin from '../pages/auth/SubAdminLogin';
import SuperAdminLogin from '../pages/auth/SuperAdminLogin';
import SelectUserType from '../components/auth/SelectUserType';

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path={APP_ROUTES.HOME} element={<SelectUserType />} />
      <Route path={APP_ROUTES.LOGIN.SUB_ADMIN} element={<SubAdminLogin />} />
      <Route
        path={APP_ROUTES.LOGIN.SUPER_ADMIN}
        element={<SuperAdminLogin />}
      />
    </Routes>
  );
};

export default AuthRoutes;
