import React, { useEffect, useState } from 'react';
import {
  Tag,
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
  Megaphone,
  ListChecks,
  ChevronDown,
  ChevronsLeft,
  LayoutDashboard,
} from 'lucide-react';
import { cn } from '../../utils/classNames';
import { ASSETS } from '../../constants/assets';
import { useDispatch, useSelector } from 'react-redux';
import { APP_ROUTES } from '../../constants/routeConstants';
import { toggleSidebar } from '../../redux/slices/commonSlice';
import { Link, useLocation, useNavigate } from 'react-router-dom';

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
      setIsOpen((prev) => !prev);
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
      { title: 'Post New Ads', icon: Star, href: APP_ROUTES.ADS.NEW_AD },
      {
        title: 'Manage Ads Category',
        icon: Star,
        href: APP_ROUTES.ADS.CATEGORIES,
      },
      {
        title: 'Ads Promotion Mgmt',
        icon: Megaphone,
        href: APP_ROUTES.ADS.PROMOTIONS,
      },
    ],
  },
  {
    icon: Tag,
    title: 'Manage Promotions',
    href: APP_ROUTES.PROMOTIONS.PROMOTION,
  },
  {
    icon: Bell,
    title: 'Manage Notification',
    href: APP_ROUTES.NOTIFICATION.NOTIFICATION_LIST,
    items: [
      {
        title: 'Send Notification',
        icon: Send,
        href: '#',
      },
      { title: 'Notification Placement', icon: History, href: '#' },
      { title: 'Request More Quoets', icon: History, href: '#' },
      { title: 'Reviews & Comments', icon: History, href: '#' },
    ],
  },
  {
    href: APP_ROUTES.ADVERTISES.ADVERTISE_LIST,
    icon: Settings2,
    title: 'Advertising in Banner',
    items: [
      { title: 'Banner in Website', icon: Sliders, href: '#' },
      { title: 'Payment & Timing', icon: Wrench, href: '#' },
      { title: 'Individual Offer & Deals', icon: Wrench, href: '#' },
    ],
  },
  {
    icon: Settings2,
    title: 'Manage Enquiry',
    href: APP_ROUTES.ENQUIRY.MANAGE_ENQUIRY,
    items: [
      {
        title: 'Contact Us',
        icon: Wrench,
        href: APP_ROUTES.ENQUIRY.CONTACT_US_LIST,
      },
      { title: 'Dispute', icon: Wrench, href: APP_ROUTES.ENQUIRY.DISPUTE_LIST },
      {
        title: 'Complaints',
        icon: Wrench,
        href: APP_ROUTES.ENQUIRY.COMPLAINTS_LIST,
      },
      { title: 'Support', icon: Wrench, href: APP_ROUTES.ENQUIRY.SUPPORT_LIST },
      {
        title: 'Advertising',
        icon: Wrench,
        href: APP_ROUTES.ENQUIRY.REPORT_ADS_LIST,
      },
      {
        title: 'Support Ticket',
        icon: Wrench,
        href: APP_ROUTES.ENQUIRY.SUPPORT_TICKET_LIST,
      },
    ],
  },
  {
    icon: Users,
    title: 'Manage Reviews & Stars',
    href: APP_ROUTES.REVIEW_AND_STAR.REVIEW_AND_STAR_LIST,
    items: [
      { title: 'Add Stars & Comment by Admin', icon: BarChart, href: '#' },
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
                  <Link
                    key={subIndex}
                    to={subItem?.href} // Use "to" instead of "href"
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
                  </Link>

                  // <a
                  //   key={subIndex}
                  //   href={subItem.href}
                  //   className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-white hover:bg-white/10"
                  // >
                  //   <subItem.icon className="inline-block h-5 w-5" />
                  //   <span
                  //     className={cn(
                  //       'text-sm transition-all duration-300',
                  //       isCollapsed ? 'hidden' : 'block'
                  //     )}
                  //   >
                  //     {subItem.title}
                  //   </span>
                  // </a>
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
