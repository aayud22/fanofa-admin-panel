import React from 'react';
// import ServerError from './error/ServerError';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex h-screen flex-col items-center justify-center bg-gray-100">
          Internal error
          {/* <ServerError /> */}
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
