// import React from 'react';
// import AuthRoutes from './AuthRoutes';
// import DashboardRoutes from './DashboardRoutes';
// import NotFound from '../components/Error/NotFound';
// import { APP_ROUTES } from '../constants/routeConstants';
// import ServerError from '../components/Error/ServerError';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import MaintenancePage from '../pages/error/MaintenancePage';

// const AppRoutes = () => {
//   return (
//     <Routes>
//       {/* Auth routes */}
//       <Route
//         path="/"
//         element={
//           <Navigate to={`login/${APP_ROUTES.LOGIN.SELECT_USER_TYPE}`} replace />
//         }
//       />
//       <Route path="/login/*" element={<AuthRoutes />} />

//       {/* Dashboard routes */}
//       <Route path="/dashboard/*" element={<DashboardRoutes />} />

//       {/* Error routes */}
//       <Route
//         path={APP_ROUTES.ERROR.MAINTENANCE}
//         element={<MaintenancePage />}
//       />
//       <Route path={APP_ROUTES.ERROR.NOT_FOUND} element={<NotFound />} />
//       <Route path={APP_ROUTES.ERROR.SERVER_ERROR} element={<ServerError />} />

//       {/* Catch-all */}
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   );
// };

// export default AppRoutes;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import NotFound from '../components/error/NotFound';
import Dashboard from '../pages/dashboard/Dashboard';
import SubAdminLogin from '../pages/auth/SubAdminLogin';
import { APP_ROUTES } from '../constants/routeConstants';
import ServerError from '../components/error/ServerError';
import SuperAdminLogin from '../pages/auth/SuperAdminLogin';
import MaintenancePage from '../pages/error/MaintenancePage';
import SelectUserType from '../components/auth/SelectUserType';
import TopInterests from '../pages/topInterests/TopInterests';
import Categories from '../pages/category/Categories';
import CountryVisitors from '../pages/countryVisitors/CountryVisitors';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={APP_ROUTES.HOME} element={<SelectUserType />} />

      {/* Authentication routes */}
      <Route
        path={APP_ROUTES.LOGIN.SELECT_USER_TYPE}
        element={<SelectUserType />}
      />
      <Route path={APP_ROUTES.LOGIN.SUB_ADMIN} element={<SubAdminLogin />} />
      <Route
        path={APP_ROUTES.LOGIN.SUPER_ADMIN}
        element={<SuperAdminLogin />}
      />

      {/* Dashboard routes wrapped in Layout */}
      <Route
        path={`${APP_ROUTES.DASHBOARD.BASE}/*`}
        element={
          <Layout>
            <Routes>
              <Route
                path={APP_ROUTES?.DASHBOARD?.HOME}
                element={<Dashboard />}
              />
              <Route
                path={APP_ROUTES?.DASHBOARD?.TOP_INTERESTED}
                element={<TopInterests />}
              />
              <Route
                path={APP_ROUTES?.DASHBOARD?.CATEGORIES}
                element={<Categories />}
              />
              <Route
                path={APP_ROUTES?.DASHBOARD?.COUNTRY_VISITORS}
                element={<CountryVisitors />}
              />
              {/* <Route path="/" element={<Dashboard />} />
              <Route path="analytics" element={<>ACTIVITY</>} />
              <Route path="reports" element={<>REPORTS</>} />
              <Route path="settings" element={<>SETTINGS</>} /> */}
            </Routes>
          </Layout>
        }
      />

      {/* Error Pages */}
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
