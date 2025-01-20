import React, { useState } from 'react';
import {
  Inbox,
  Users,
  Search,
  Calendar,
  BarChart,
  Settings,
  FolderClosed,
  ChevronsLeft,
  LayoutDashboard,
} from 'lucide-react';
import { cn } from '../../utils/classNames';
import { ASSETS } from '../../constants/assets';

function NavItem({ icon: Icon, label, isCollapsed, isActive }) {
  return (
    <div
      className={cn(
        'group flex cursor-pointer items-center gap-4 overflow-x-hidden rounded-lg px-3 py-2 text-white transition-colors',
        isActive ? 'bg-white/10' : 'hover:bg-white/10'
      )}
    >
      <Icon className="h-5 w-5 shrink-0" />
      <span
        className={cn(
          'text-sm transition-all duration-300',
          isCollapsed ? 'w-0 opacity-0' : 'opacity-100'
        )}
      >
        {label}
      </span>
      {isCollapsed && (
        <div className="absolute left-full ml-1 hidden rounded-md bg-black px-2 py-1 text-sm group-hover:block">
          {label}
        </div>
      )}
    </div>
  );
}

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={cn(
        'relative flex flex-col bg-primary-gradient transition-all duration-300 ease-in-out',
        isCollapsed ? 'w-16' : 'w-64'
      )}
      style={{ height: '100vh' }} // Ensure full screen height
    >
      {/* Static Logo Section */}
      <div className="flex items-center gap-4 border-b border-white/10 px-4 py-6">
        <span
          className={cn(
            'text-sm font-medium text-white opacity-100 transition-opacity duration-300',
            isCollapsed ? 'bg-none' : 'rounded-lg bg-white px-2 py-1'
          )}
        >
          <img
            alt="logo"
            src={isCollapsed ? ASSETS?.AUTH?.SMALL_LOGO : ASSETS?.AUTH?.LOGO}
          />
        </span>
      </div>

      {/* Scrollable Navigation Items */}
      <div className="flex-1 overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <nav className="p-2">
          <NavItem
            icon={LayoutDashboard}
            label="Dashboard"
            isCollapsed={isCollapsed}
            isActive
          />
          <NavItem icon={Inbox} label="Inbox" isCollapsed={isCollapsed} />
          <NavItem icon={Users} label="Accounts" isCollapsed={isCollapsed} />
          <NavItem icon={Calendar} label="Schedule" isCollapsed={isCollapsed} />
          <NavItem icon={Search} label="Search" isCollapsed={isCollapsed} />
          <NavItem
            icon={BarChart}
            label="Analytics"
            isCollapsed={isCollapsed}
          />
          <NavItem
            icon={FolderClosed}
            label="Files"
            isCollapsed={isCollapsed}
          />
          <NavItem icon={Settings} label="Setting" isCollapsed={isCollapsed} />
        </nav>
      </div>

      {/* Collapse Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={cn(
          'absolute -right-4 top-12 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-white text-black shadow-md',
          'hover:bg-gray-100 focus:outline-none'
        )}
      >
        <ChevronsLeft
          className={cn(
            'z-30 h-5 w-5 transition-transform duration-300',
            isCollapsed && 'rotate-180'
          )}
        />
      </button>
    </div>
  );
};

export default Sidebar;
