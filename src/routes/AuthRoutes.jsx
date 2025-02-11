import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SubAdminLogin from '../pages/auth/SubAdminLogin';
import { APP_ROUTES } from '../constants/routeConstants';
import SuperAdminLogin from '../pages/auth/SuperAdminLogin';
import SelectUserType from '../components/auth/SelectUserType';

const AuthRoutes = () => {
  return (
    <Routes>
      <Route
        path={APP_ROUTES.LOGIN.SELECT_USER_TYPE}
        element={<SelectUserType />}
      />
      <Route path={APP_ROUTES.LOGIN.SUB_ADMIN} element={<SubAdminLogin />} />
      <Route
        path={APP_ROUTES.LOGIN.SUPER_ADMIN}
        element={<SuperAdminLogin />}
      />
    </Routes>
  );
};

export default AuthRoutes;
