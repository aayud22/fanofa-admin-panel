import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import 'react-quill/dist/quill.snow.css';
import AppRoutes from './routes/AppRoutes';
import ErrorBoundary from './components/ErrorBoundary';
import { BrowserRouter as Router } from 'react-router-dom';
import '../node_modules/flag-icon-css/css/flag-icons.min.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <ErrorBoundary>
          <AppRoutes />
        </ErrorBoundary>
      </Router>
    </Provider>
  );
};

export default App;
