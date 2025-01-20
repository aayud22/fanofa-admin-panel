import React, { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { Bell, ChevronDown, CircleUserRound, Search } from 'lucide-react';

const Header = () => {
  const [selectedCountry, setSelectedCountry] = useState({
    code: 'gb',
    name: 'English',
  });

  const handleCountryChange = (countryCode, countryName) => {
    setSelectedCountry({ code: countryCode, name: countryName });
  };

  return (
    <header className="border-lightGray sticky top-0 w-full rounded-2xl border-b bg-white">
      <div className="mx-auto flex h-[86px] w-full max-w-[1400px] flex-col justify-center px-4 lg:px-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-deepBlue">Dashboard</h1>
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-sm font-normal text-deepBlue">Home</span>
              <span className="text-sm font-normal text-deepBlue">{`//`}</span>
              <span className="cursor-pointer bg-primary-gradient bg-clip-text text-sm font-normal text-transparent">
                Dashboard
              </span>
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
                  <span className="hidden text-xl font-normal text-[#2B3674] sm:inline-block">
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
              <Search className="text-darkBlueText h-6 w-6" />
            </Button>

            {/* Notification Button */}
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Bell className="text-darkBlueText h-6 w-6" />
            </Button>

            {/* User Info Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  size="sm"
                  variant="ghost"
                  className="bg-grayBackground flex h-10 items-center gap-2 rounded-full px-3 py-3"
                >
                  <div className="bg-lightGrayIcon rounded-full p-2">
                    <CircleUserRound className="text-mutedBlue h-4 w-4" />
                  </div>
                  <span className="text-darkBlueText hidden text-sm font-bold sm:inline-block">
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
