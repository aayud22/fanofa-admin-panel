import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <Header />

        {/* Page content */}
        <main className="overflow-auto p-4">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
