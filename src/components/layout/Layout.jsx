import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { cn } from '../../utils/classNames';

const Layout = () => {
  const isCollapsed = useSelector((state) => state.common.isCollapsed);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar className={cn(isCollapsed ? 'w-16' : 'w-64', 'flex-shrink-0')} />
      <div
        className={cn(
          'flex w-full flex-1 flex-col transition-all duration-300',
          isCollapsed ? 'max-w-[calc(100vw-64px)]' : 'max-w-[calc(100vw-256px)]'
        )}
      >
        <Header />
        <main className="w-full min-w-0 flex-1 overflow-y-auto overflow-x-hidden p-4">
          <div className="w-full max-w-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
