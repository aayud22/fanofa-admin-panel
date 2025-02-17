import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '../../constants/routeConstants';
import { Bell, ChevronDown, CircleUserRound, Search } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const { user } = useSelector((state) => state);
  const { pageTitle, breadcrumbs } = useSelector((state) => state.page);

  const [selectedCountry, setSelectedCountry] = useState({
    code: 'gb',
    name: 'English',
  });

  const handleCountryChange = (countryCode, countryName) => {
    setSelectedCountry({ code: countryCode, name: countryName });
  };

  return (
    <header className="sticky top-0 w-full rounded-2xl border-b border-lightGray bg-white">
      <div className="mx-auto flex h-[86px] w-full max-w-[1400px] flex-col justify-center px-4 lg:px-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            {/* Page Title */}
            <h1 className="text-xl font-bold text-deepBlue">{pageTitle}</h1>
            {breadcrumbs && breadcrumbs?.length > 0 && (
              <nav className="flex" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-1">
                  {breadcrumbs?.map((item, index) => (
                    <li key={index} className="flex items-center">
                      {index > 0 && (
                        <span className="mr-1 text-darkBlueText">{`//`}</span>
                      )}
                      {index < breadcrumbs.length - 1 ? (
                        item.link ? (
                          <Link
                            to={item.link}
                            className="text-sm font-normal text-darkBlueText hover:underline"
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <span className="text-sm font-normal text-darkBlueText">
                            {item.label}
                          </span>
                        )
                      ) : (
                        <span className="cursor-pointer bg-primary-gradient bg-clip-text text-sm font-normal text-transparent">
                          {item.label}
                        </span>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            )}
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
