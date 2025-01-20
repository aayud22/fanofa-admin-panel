import React from 'react';
// import AppRoutes from './routes/AppRoutes';
import AppRoutes from "./routes/AppRoutes"
import ErrorBoundary from './components/ErrorBoundary';
import { BrowserRouter as Router } from 'react-router-dom';
import '../node_modules/flag-icon-css/css/flag-icons.min.css';

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <AppRoutes />
      </ErrorBoundary>
    </Router>
  );
};

export default App;
