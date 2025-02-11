import React, { useEffect, useState } from 'react';
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
  Tag,
} from 'lucide-react';
import { cn } from '../../utils/classNames';
import { ASSETS } from '../../constants/assets';
import { useLocation, useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '../../constants/routeConstants';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../../redux/slices/commonSlice';

function NavItem({ href, label, onClick, children, icon: Icon, isCollapsed }) {
  const router = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);

  // Auto-open if route matches
  useEffect(() => {
    if (router.pathname === href && children && !hasAutoOpened) {
      setIsOpen(true);
      setHasAutoOpened(true); // Prevent future auto-opens
    }
  }, [router.pathname, href, children, hasAutoOpened]);

  // Handle click: Navigate if different route, otherwise toggle menu
  const handleClick = () => {
    if (router.pathname !== href) {
      navigate(href);
    } else {
      setIsOpen((prev) => !prev); // Toggle dropdown
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="group relative flex flex-col">
      <div
        className={cn(
          'relative flex cursor-pointer items-center justify-between gap-4 overflow-x-hidden rounded-lg px-3 py-2 text-white transition-colors',
          router.pathname === href ? 'bg-white/20' : 'hover:bg-white/10'
        )}
        onClick={handleClick} // Call the handleClick function
      >
        <div className="relative flex items-center gap-4">
          <Icon className="h-5 w-5 shrink-0" />
          <span
            className={cn(
              'text-sm transition-all duration-300',
              isCollapsed ? 'hidden w-0 opacity-0' : 'flex opacity-100'
            )}
          >
            {label}
          </span>
        </div>
        {children && (
          <ChevronDown
            className={cn(
              'h-5 w-5 transition-transform',
              isOpen ? 'rotate-180' : 'rotate-0'
            )}
          />
        )}
      </div>
      {isOpen && children && (
        <div className={`${isCollapsed ? 'ml-0' : 'ml-6'} space-y-1`}>
          {children}
        </div>
      )}
    </div>
  );
}

const menuItems = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    href: APP_ROUTES.DASHBOARD.BASE,
  },
  {
    icon: Users,
    title: 'User',
    href: APP_ROUTES.USER.USER_LIST,
    items: [
      { title: 'User Analytics', icon: BarChart, href: '#' },
      { title: 'Referrals', icon: Share, href: '#' },
    ],
  },
  {
    icon: Image,
    title: 'Manage Ads',
    href: APP_ROUTES.ADS.BASE,
    items: [
      { title: 'Post New Ads', icon: Star, href: '#' },
      { title: 'Manage Ads Category', icon: Star, href: '#' },
      { title: 'Ads Promotion Mgmt', icon: Star, href: '#' },
    ],
  },
  {
    icon: Tag,
    title: 'Manage Deals',
    href: APP_ROUTES.DEALS.BASE,
    items: [
      { title: 'Create New Deal', icon: Star, href: APP_ROUTES.DEALS.CREATE },
      { title: 'Active Deals', icon: Star, href: APP_ROUTES.DEALS.LIST },
    ],
  },
  {
    href: '#',
    icon: Bell,
    title: 'Manage Notification',
    items: [
      { title: 'Send Notification', icon: Send, href: '#' },
      { title: 'Notification History', icon: History, href: '#' },
    ],
  },
  {
    href: '#',
    icon: Settings2,
    title: 'Manage Reviews & Stars',
    items: [
      { title: 'System Settings', icon: Sliders, href: '#' },
      { title: 'Maintenance', icon: Wrench, href: '#' },
    ],
  },
  {
    href: '#',
    icon: Settings2,
    title: 'Manage Footer',
    items: [
      { title: 'Footer Settings', icon: Globe, href: '#' },
      { title: 'Footer Maintenance', icon: Wrench, href: '#' },
    ],
  },
  {
    href: '#',
    icon: Settings2,
    title: 'Manage Auto Emails',
    items: [
      { title: 'Email Settings', icon: Mail, href: '#' },
      { title: 'Email Maintenance', icon: Wrench, href: '#' },
    ],
  },
  {
    href: '#',
    icon: Settings2,
    title: 'Advertising in Banner',
    items: [
      { title: 'Banner Settings', icon: Sliders, href: '#' },
      { title: 'Banner Maintenance', icon: Wrench, href: '#' },
    ],
  },
  {
    href: '#',
    icon: Settings2,
    title: 'Manage Enquiry',
    items: [
      { title: 'Enquiry Settings', icon: Wrench, href: '#' },
      { title: 'Enquiry Maintenance', icon: Wrench, href: '#' },
    ],
  },
  {
    href: '#',
    icon: Settings2,
    title: 'Manage System',
    items: [
      { title: 'System Settings', icon: Sliders, href: '#' },
      { title: 'Maintenance', icon: Wrench, href: '#' },
    ],
  },
  {
    href: '#',
    icon: Settings2,
    title: 'Manage Admins',
    items: [
      { title: 'Admin Settings', icon: Sliders, href: '#' },
      { title: 'Admin Maintenance', icon: Wrench, href: '#' },
    ],
  },
];

const Sidebar = () => {
  const dispatch = useDispatch();
  const { common } = useSelector((state) => state);
  const isCollapsed = common.isCollapsed;

  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <div
      className={cn(
        'relative flex h-screen flex-col bg-primary-gradient transition-all duration-300 ease-in-out',
        isCollapsed ? 'w-16 min-w-[4rem]' : 'w-64 min-w-[16rem]'
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
              href={item.href}
              label={item.title}
              isCollapsed={isCollapsed}
              isOpen={openDropdown === index}
              onClick={() =>
                setOpenDropdown(openDropdown === index ? null : index)
              }
            >
              {item?.items &&
                item?.items?.map((subItem, subIndex) => (
                  <a
                    key={subIndex}
                    href={subItem.href}
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-white hover:bg-white/10"
                  >
                    <subItem.icon className="inline-block h-5 w-5" />
                    <span
                      className={cn(
                        'text-sm transition-all duration-300',
                        isCollapsed ? 'hidden' : 'block'
                      )}
                    >
                      {subItem.title}
                    </span>
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
        onClick={() => dispatch(toggleSidebar())}
        className={cn(
          'absolute top-12 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-white text-black shadow-md',
          isCollapsed ? '-right-3' : '-right-4'
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
