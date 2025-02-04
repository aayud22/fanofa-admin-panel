// import React from 'react';
// import UserList from '../pages/user/UserList';
// import { Routes, Route } from 'react-router-dom';
// import Layout from '../components/layout/Layout';
// import NotFound from '../components/error/NotFound';
// import Dashboard from '../pages/dashboard/Dashboard';
// import Categories from '../pages/category/Categories';
// import SubAdminLogin from '../pages/auth/SubAdminLogin';
// import { APP_ROUTES } from '../constants/routeConstants';
// import ServerError from '../components/error/ServerError';
// import SuperAdminLogin from '../pages/auth/SuperAdminLogin';
// import MaintenancePage from '../pages/error/MaintenancePage';
// import TopInterests from '../pages/topInterests/TopInterests';
// import SelectUserType from '../components/auth/SelectUserType';
// import CountryVisitors from '../pages/countryVisitors/CountryVisitors';

// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path={APP_ROUTES.HOME} element={<SelectUserType />} />

//       {/* Authentication routes */}
//       <Route
//         path={APP_ROUTES.LOGIN.SELECT_USER_TYPE}
//         element={<SelectUserType />}
//       />
//       <Route path={APP_ROUTES.LOGIN.SUB_ADMIN} element={<SubAdminLogin />} />
//       <Route
//         path={APP_ROUTES.LOGIN.SUPER_ADMIN}
//         element={<SuperAdminLogin />}
//       />
//       {/* User List */}
//       <Route element={<Layout />}>
//         <Route path={APP_ROUTES.USER.USER_LIST} element={<UserList />} />
//       </Route>

//       {/* Dashboard routes wrapped in Layout */}
//       <Route
//         path={`${APP_ROUTES.DASHBOARD.BASE}/*`}
//         element={
//           <Layout>
//             <Routes>
//               <Route
//                 path={APP_ROUTES?.DASHBOARD?.HOME}
//                 element={<Dashboard />}
//               />
//               <Route
//                 path={APP_ROUTES?.DASHBOARD?.TOP_INTERESTED}
//                 element={<TopInterests />}
//               />
//               <Route
//                 path={APP_ROUTES?.DASHBOARD?.CATEGORIES}
//                 element={<Categories />}
//               />
//               <Route
//                 path={APP_ROUTES?.DASHBOARD?.COUNTRY_VISITORS}
//                 element={<CountryVisitors />}
//               />
//             </Routes>
//           </Layout>
//         }
//       />
//       {/* Error Pages */}
//       <Route
//         path={APP_ROUTES.ERROR.MAINTENANCE}
//         element={<MaintenancePage />}
//       />
//       <Route path={APP_ROUTES.ERROR.NOT_FOUND} element={<NotFound />} />
//       <Route path={APP_ROUTES.ERROR.SERVER_ERROR} element={<ServerError />} />

//       {/* Catch-all route */}
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   );
// };

// export default AppRoutes;

import { Routes, Route } from 'react-router-dom';
import UserList from '../pages/user/UserList';
import Layout from '../components/layout/Layout';
import NotFound from '../components/error/NotFound';
import Dashboard from '../pages/dashboard/Dashboard';
import Categories from '../pages/category/Categories';
import SubAdminLogin from '../pages/auth/SubAdminLogin';
import { APP_ROUTES } from '../constants/routeConstants';
import ServerError from '../components/error/ServerError';
import SuperAdminLogin from '../pages/auth/SuperAdminLogin';
import MaintenancePage from '../pages/error/MaintenancePage';
import TopInterests from '../pages/topInterests/TopInterests';
import SelectUserType from '../components/auth/SelectUserType';
import CountryVisitors from '../pages/countryVisitors/CountryVisitors';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Routes WITHOUT Layout */}
      <Route path={APP_ROUTES.HOME} element={<SelectUserType />} />
      <Route
        path={APP_ROUTES.LOGIN.SELECT_USER_TYPE}
        element={<SelectUserType />}
      />
      <Route path={APP_ROUTES.LOGIN.SUB_ADMIN} element={<SubAdminLogin />} />
      <Route
        path={APP_ROUTES.LOGIN.SUPER_ADMIN}
        element={<SuperAdminLogin />}
      />
      <Route path={APP_ROUTES.ERROR.NOT_FOUND} element={<NotFound />} />
      <Route path={APP_ROUTES.ERROR.SERVER_ERROR} element={<ServerError />} />
      <Route
        path={APP_ROUTES.ERROR.MAINTENANCE}
        element={<MaintenancePage />}
      />

      {/* Routes WITH Layout */}
      <Route element={<Layout />}>
        <Route path={APP_ROUTES.USER.USER_LIST} element={<UserList />} />
        <Route path={APP_ROUTES.DASHBOARD.BASE} element={<Dashboard />} />
        <Route path={APP_ROUTES.CATEGORIES} element={<Categories />} />
        <Route path={APP_ROUTES.TOP_INTERESTED} element={<TopInterests />} />
        <Route
          path={APP_ROUTES.COUNTRY_VISITORS}
          element={<CountryVisitors />}
        />
      </Route>

      {/* Catch-all */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
