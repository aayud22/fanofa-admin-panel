import React, { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { Link, useLocation } from 'react-router-dom';
import { APP_ROUTES } from '../../constants/routeConstants';
import { Bell, ChevronDown, CircleUserRound, Search } from 'lucide-react';
import { useSelector } from 'react-redux';

const Header = () => {
  const location = useLocation();
  const {user} = useSelector((state) => state);

  const [selectedCountry, setSelectedCountry] = useState({
    code: 'gb',
    name: 'English',
  });

  const handleCountryChange = (countryCode, countryName) => {
    setSelectedCountry({ code: countryCode, name: countryName });
  };

  const getPageTitle = () => {
    const path = location.pathname
    switch (path) {
      case '':
      case APP_ROUTES.DASHBOARD.BASE:
        return 'Dashboard';
      case APP_ROUTES.USER.USER_LIST:
        return 'Manage Users';
      case APP_ROUTES.USER.USER_DETAILS:
        return 'Manage Users';
      case APP_ROUTES.SUBSCRIBERS.BASE:
        return 'Manage Users';
      case APP_ROUTES.SUBSCRIBERS.ALL:
        return 'Manage Users';
      default:
        return path.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
    }
  };


  const generateBreadcrumbs = () => {
    const pathname = location.pathname;

    if (pathname === '/') {
      return [];
    }

    const breadcrumbElements = [];

    // Always add Home as first element except for dashboard
    if (pathname !== '/dashboard') {
      breadcrumbElements.push(
        <React.Fragment key="home">
          <Link
            to={APP_ROUTES.DASHBOARD.BASE}
            className="text-sm font-normal text-deepBlue hover:underline"
          >
            Home
          </Link>
        </React.Fragment>
      );

      breadcrumbElements.push(
        <React.Fragment key="separator-1">
          <span className="text-sm font-normal text-deepBlue">{`//`}</span>
        </React.Fragment>
      );
    }

    const pathSegments = pathname.split('/').filter(Boolean);

    // Handle subscribers pages
    if (pathSegments.includes('subscribers')) {
      // Add User List
      breadcrumbElements.push(
        <React.Fragment key="user-list">
          <Link
            to={APP_ROUTES.USER.USER_LIST}
            className="text-sm font-normal text-deepBlue hover:underline"
          >
            User List
          </Link>
        </React.Fragment>
      );

      breadcrumbElements.push(
        <React.Fragment key="separator-2">
          <span className="text-sm font-normal text-deepBlue">{`//`}</span>
        </React.Fragment>
      );

      // Add User Name
      breadcrumbElements.push(
        <React.Fragment key="user-name">
          <Link
            to={APP_ROUTES.USER.USER_DETAILS}
            className="text-sm font-normal text-deepBlue hover:underline"
          >
            Arrora Gaur
          </Link>
        </React.Fragment>
      );

      breadcrumbElements.push(
        <React.Fragment key="separator-3">
          <span className="text-sm font-normal text-deepBlue">{`//`}</span>
        </React.Fragment>
      );

      // Add My Subscribers
      breadcrumbElements.push(
        <React.Fragment key="subscribers">
          <span className="text-sm font-normal text-deepBlue">
            My Subscribers
          </span>
        </React.Fragment>
      );

      return breadcrumbElements;
    }

    // Check if we're on user details page
    if (pathSegments.includes(APP_ROUTES.USER.USER_DETAILS.replace('/', ''))) {
      // Add User List
      breadcrumbElements.push(
        <React.Fragment key="user-list">
          <Link
            to={APP_ROUTES.USER.USER_LIST}
            className="text-sm font-normal text-deepBlue hover:underline"
          >
            User List
          </Link>
        </React.Fragment>,
        <React.Fragment key="separator-2">
          <span className="text-sm font-normal text-deepBlue">{`//`}</span>
        </React.Fragment>,
        <React.Fragment key="user-details">
          <span className="cursor-pointer bg-primary-gradient bg-clip-text text-sm font-normal text-transparent">
            {user?.selectedUser?.name || 'User Details'}
          </span>
        </React.Fragment>
      );
    }
    // Check if we're on user list page
    else if (pathSegments.includes(APP_ROUTES.USER.USER_LIST.replace('/', ''))) {
      breadcrumbElements.push(
        <React.Fragment key="user-list">
          <span className="cursor-pointer bg-primary-gradient bg-clip-text text-sm font-normal text-transparent">
            User List
          </span>
        </React.Fragment>
      );
    }

    return breadcrumbElements;
  };

  return (
    <header className="sticky top-0 w-full rounded-2xl border-b border-lightGray bg-white">
      <div className="mx-auto flex h-[86px] w-full max-w-[1400px] flex-col justify-center px-4 lg:px-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            {/* Page Title */}
            <h1 className="text-xl font-bold text-deepBlue">
              {getPageTitle()}
            </h1>
            <div className="flex items-center space-x-2 text-sm">
              {generateBreadcrumbs()}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* Language Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <span
                    className={`flag-icon flag-icon-${selectedCountry.code} rounded-full border border-gray-300`}
                    style={{
                      display: 'inline-block',
                      width: '24px',
                      height: '24px',
                      backgroundSize: 'cover',
                    }}
                  ></span>
                  <span className="hidden text-xl font-normal text-darkBlueText sm:inline-block">
                    {selectedCountry.name}
                  </span>
                  <ChevronDown className="h-5 w-5" color="#2B3674" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={() => handleCountryChange('gb', 'English')}
                >
                  <span
                    className="flag-icon flag-icon-gb mr-2 rounded-full border border-gray-300"
                    style={{
                      display: 'inline-block',
                      width: '24px',
                      height: '24px',
                      backgroundSize: 'cover',
                    }}
                  ></span>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleCountryChange('fr', 'French')}
                >
                  <span
                    className="flag-icon flag-icon-fr mr-2 rounded-full border border-gray-300"
                    style={{
                      display: 'inline-block',
                      width: '24px',
                      height: '24px',
                      backgroundSize: 'cover',
                    }}
                  ></span>
                  French
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleCountryChange('de', 'German')}
                >
                  <span
                    className="flag-icon flag-icon-de mr-2 rounded-full border border-gray-300"
                    style={{
                      display: 'inline-block',
                      width: '24px',
                      height: '24px',
                      backgroundSize: 'cover',
                    }}
                  ></span>
                  German
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {/* Search Button */}
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Search className="h-6 w-6 text-darkBlueText" />
            </Button>

            {/* Notification Button */}
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Bell className="h-6 w-6 text-darkBlueText" />
            </Button>

            {/* User Info Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  size="sm"
                  variant="ghost"
                  className="flex h-10 items-center gap-2 rounded-full bg-grayBackground px-3 py-3"
                >
                  <div className="rounded-full bg-lightGrayIcon p-2">
                    <CircleUserRound className="h-4 w-4 text-mutedBlue" />
                  </div>
                  <span className="hidden text-sm font-bold text-darkBlueText sm:inline-block">
                    John Smith
                  </span>
                  <ChevronDown className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
