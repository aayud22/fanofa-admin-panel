// import React, { useState } from 'react';
// import {
//   Bell,
//   Star,
//   Mail,
//   Inbox,
//   Users,
//   Image,
//   Search,
//   LogOut,
//   UserCog,
//   Calendar,
//   BarChart,
//   Settings,
//   Settings2,
//   ChevronDown,
//   FolderClosed,
//   ChevronsLeft,
//   MessageSquare,
//   LayoutDashboard,
// } from 'lucide-react';
// import { cn } from '../../utils/classNames';
// import { ASSETS } from '../../constants/assets';

// function NavItem({ icon: Icon, label, isCollapsed, isActive }) {
//   return (
//     <div
//       className={cn(
//         'group flex cursor-pointer items-center gap-4 overflow-x-hidden rounded-lg px-3 py-2 text-white transition-colors',
//         isActive ? 'bg-white/10' : 'hover:bg-white/10'
//       )}
//     >
//       <Icon className="h-5 w-5 shrink-0" />
//       <span
//         className={cn(
//           'text-sm transition-all duration-300',
//           isCollapsed ? 'w-0 opacity-0' : 'opacity-100'
//         )}
//       >
//         {label}
//       </span>
//       {isCollapsed && (
//         <div className="absolute left-full ml-1 hidden rounded-md bg-black px-2 py-1 text-sm group-hover:block">
//           {label}
//         </div>
//       )}
//     </div>
//   );
// }

// const menuItems = [
//   {
//     title: 'Dashboard',
//     icon: LayoutDashboard,
//     href: '#',
//   },
//   {
//     title: 'Manage User',
//     icon: Users,
//     items: [
//       { title: 'View Users', href: '#' },
//       { title: 'Add User', href: '#' },
//     ],
//   },
//   {
//     title: 'Manage Ads',
//     icon: Image,
//     items: [
//       { title: 'Active Ads', href: '#' },
//       { title: 'Pending Ads', href: '#' },
//     ],
//   },
//   {
//     title: 'Manage Promotions',
//     icon: Star,
//     href: '#',
//   },
//   {
//     title: 'Manage Notification',
//     icon: Bell,
//     items: [
//       { title: 'Send Notification', href: '#' },
//       { title: 'Notification History', href: '#' },
//     ],
//   },
//   {
//     title: 'Manage Reviews & Stars',
//     icon: Star,
//     items: [
//       { title: 'View Reviews', href: '#' },
//       { title: 'Reported Reviews', href: '#' },
//     ],
//   },
//   {
//     title: 'Manage Footer',
//     icon: Settings,
//     href: '#',
//   },
//   {
//     title: 'Manage Auto Emails',
//     icon: Mail,
//     items: [
//       { title: 'Email Templates', href: '#' },
//       { title: 'Email History', href: '#' },
//     ],
//   },
//   {
//     title: 'Advertising in Banner',
//     icon: Image,
//     href: '#',
//   },
//   {
//     title: 'Manage Enquiry',
//     icon: MessageSquare,
//     items: [
//       { title: 'New Enquiries', href: '#' },
//       { title: 'Archived Enquiries', href: '#' },
//     ],
//   },
//   {
//     title: 'Manage System',
//     icon: Settings2,
//     items: [
//       { title: 'System Settings', href: '#' },
//       { title: 'Maintenance', href: '#' },
//     ],
//   },
//   {
//     title: 'Manage Admins',
//     icon: UserCog,
//     items: [
//       { title: 'Admin List', href: '#' },
//       { title: 'Add Admin', href: '#' },
//     ],
//   },
// ];

// const Sidebar = () => {
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   return (
//     <div
//       className={cn(
//         'relative flex flex-col bg-primary-gradient transition-all duration-300 ease-in-out',
//         isCollapsed ? 'w-16' : 'w-64'
//       )}
//       style={{ height: '100vh' }} // Ensure full screen height
//     >
//       {/* Static Logo Section */}
//       <div className="flex items-center gap-4 border-b border-white/10 px-4 py-6">
//         <span
//           className={cn(
//             'text-sm font-medium text-white opacity-100 transition-opacity duration-300',
//             isCollapsed ? 'bg-none' : 'rounded-lg bg-white px-2 py-1'
//           )}
//         >
//           <img
//             alt="logo"
//             src={isCollapsed ? ASSETS?.AUTH?.SMALL_LOGO : ASSETS?.AUTH?.LOGO}
//           />
//         </span>
//       </div>

//       {/* Scrollable Navigation Items */}
//       <div className="flex-1 overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
//         <nav className="p-2">
//           <NavItem
//             icon={LayoutDashboard}
//             label="Dashboard"
//             isCollapsed={isCollapsed}
//             isActive
//           />
//           <NavItem icon={Inbox} label="Inbox" isCollapsed={isCollapsed} />
//           <NavItem icon={Users} label="Accounts" isCollapsed={isCollapsed} />
//           <NavItem icon={Calendar} label="Schedule" isCollapsed={isCollapsed} />
//           <NavItem icon={Search} label="Search" isCollapsed={isCollapsed} />
//           <NavItem
//             icon={BarChart}
//             label="Analytics"
//             isCollapsed={isCollapsed}
//           />
//           <NavItem
//             icon={FolderClosed}
//             label="Files"
//             isCollapsed={isCollapsed}
//           />
//           <NavItem icon={Settings} label="Setting" isCollapsed={isCollapsed} />
//         </nav>
//       </div>

//       {/* Collapse Button */}
//       <button
//         onClick={() => setIsCollapsed(!isCollapsed)}
//         className={cn(
//           'absolute -right-4 top-12 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-white text-black shadow-md',
//           'hover:bg-gray-100 focus:outline-none'
//         )}
//       >
//         <ChevronsLeft
//           className={cn(
//             'z-30 h-5 w-5 transition-transform duration-300',
//             isCollapsed && 'rotate-180'
//           )}
//         />
//       </button>
//     </div>
//   );
// };

// export default Sidebar;

import React, { useState } from 'react';
import {
  Bell,
  Star,
  Send,
  Mail,
  Users,
  Image,
  Share,
  Globe,
  LogOut,
  Wrench,
  History,
  Sliders,
  BarChart,
  Settings2,
  ChevronDown,
  ChevronsLeft,
  LayoutDashboard,
} from 'lucide-react';
import { cn } from '../../utils/classNames';
import { ASSETS } from '../../constants/assets';

function NavItem({
  icon: Icon,
  label,
  isCollapsed,
  isActive,
  children,
  onClick,
  isOpen,
}) {
  return (
    <div className="flex flex-col">
      <div
        className={cn(
          'group flex cursor-pointer items-center justify-between gap-4 overflow-x-hidden rounded-lg px-3 py-2 text-white transition-colors',
          isActive ? 'bg-white/10' : 'hover:bg-white/10'
        )}
        onClick={onClick}
      >
        <div className="flex items-center gap-4">
          <Icon className="h-5 w-5 shrink-0" />
          <span
            className={cn(
              'text-sm transition-all duration-300',
              isCollapsed ? 'w-0 opacity-0' : 'opacity-100'
            )}
          >
            {label}
          </span>
        </div>
        {children && !isCollapsed && (
          <ChevronDown
            className={cn(
              'h-4 w-4 transition-transform',
              isOpen && 'rotate-180'
            )}
          />
        )}
      </div>
      {isOpen && children && <div className="ml-6 space-y-1">{children}</div>}
    </div>
  );
}

const menuItems = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    href: '#',
  },
  {
    title: 'User',
    icon: Users,
    items: [
      { title: 'User Analytics', icon: BarChart, href: '#' },
      { title: 'Referrals', icon: Share, href: '#' },
    ],
  },
  {
    title: 'Manage Ads',
    icon: Image,
    items: [{ title: 'Manage Promotions', icon: Star, href: '#' }],
  },
  {
    title: 'Manage Notification',
    icon: Bell,
    items: [
      { title: 'Send Notification', icon: Send, href: '#' },
      { title: 'Notification History', icon: History, href: '#' },
    ],
  },
  {
    title: 'Manage Reviews & Stars',
    icon: Settings2,
    items: [
      { title: 'System Settings', icon: Sliders, href: '#' },
      { title: 'Maintenance', icon: Wrench, href: '#' },
    ],
  },
  {
    title: 'Manage Footer',
    icon: Settings2,
    items: [
      { title: 'Footer Settings', icon: Globe, href: '#' },
      { title: 'Footer Maintenance', icon: Wrench, href: '#' },
    ],
  },
  {
    title: 'Manage Auto Emails',
    icon: Settings2,
    items: [
      { title: 'Email Settings', icon: Mail, href: '#' },
      { title: 'Email Maintenance', icon: Wrench, href: '#' },
    ],
  },
  {
    title: 'Advertising in Banner',
    icon: Settings2,
    items: [
      { title: 'Banner Settings', icon: Sliders, href: '#' },
      { title: 'Banner Maintenance', icon: Wrench, href: '#' },
    ],
  },
  {
    title: 'Manage Enquiry',
    icon: Settings2,
    items: [
      { title: 'Enquiry Settings', icon: Wrench, href: '#' },
      { title: 'Enquiry Maintenance', icon: Wrench, href: '#' },
    ],
  },
  {
    title: 'Manage System',
    icon: Settings2,
    items: [
      { title: 'System Settings', icon: Sliders, href: '#' },
      { title: 'Maintenance', icon: Wrench, href: '#' },
    ],
  },
  {
    title: 'Manage Admins',
    icon: Settings2,
    items: [
      { title: 'Admin Settings', icon: Sliders, href: '#' },
      { title: 'Admin Maintenance', icon: Wrench, href: '#' },
    ],
  },
];

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <div
      className={cn(
        'relative flex h-screen flex-col bg-primary-gradient transition-all duration-300 ease-in-out',
        isCollapsed ? 'w-16' : 'w-64'
      )}
    >
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

      <div className="flex-1 overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <nav className="p-2">
          {menuItems.map((item, index) => (
            <NavItem
              key={index}
              icon={item.icon}
              label={item.title}
              isCollapsed={isCollapsed}
              isOpen={openDropdown === index}
              onClick={() =>
                setOpenDropdown(openDropdown === index ? null : index)
              }
            >
              {item.items &&
                item.items.map((subItem, subIndex) => (
                  <a
                    key={subIndex}
                    href={subItem.href}
                    className="block rounded-lg px-3 py-2 text-sm text-white hover:bg-white/10"
                  >
                    <subItem.icon className="mr-2 inline-block h-4 w-4" />
                    {subItem.title}
                  </a>
                ))}
            </NavItem>
          ))}
        </nav>
      </div>

      {/* Logout Button Moved to Bottom */}
      <div className="mt-auto p-4">
        <NavItem
          icon={LogOut}
          label="Logout"
          isCollapsed={isCollapsed}
          onClick={() => console.log('Logging out...')}
        />
      </div>

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
