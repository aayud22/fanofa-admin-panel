import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Dashboard from '../pages/dashboard/Dashboard';
import { APP_ROUTES } from '../constants/routeConstants.js';

const DashboardRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route
          path={APP_ROUTES.DASHBOARD.HOME.replace('/dashboard', '')}
          element={<Dashboard />}
        />
      </Routes>
    </Layout>
  );
};

export default DashboardRoutes;
