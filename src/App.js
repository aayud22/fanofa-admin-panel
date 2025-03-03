import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import 'react-quill/dist/quill.snow.css';
import { Toaster } from 'react-hot-toast';
import AppRoutes from './routes/AppRoutes';
import 'react-phone-input-2/lib/style.css';
import ErrorBoundary from './components/ErrorBoundary';
import { BrowserRouter as Router } from 'react-router-dom';
import '../node_modules/flag-icon-css/css/flag-icons.min.css';

const App = () => {
  return (
    <Provider store={store}>
      <Toaster position="top-right" reverseOrder={false} />
      <Router>
        <ErrorBoundary>
          <AppRoutes />
        </ErrorBoundary>
      </Router>
    </Provider>
  );
};

export default App;
