import React, { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../ui/table';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import {
  Search,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  RotateCcw,
} from 'lucide-react';

const data = [
  {
    country: 'India',
    flag: 'In',
    male: 252,
    female: 3541,
    agePercentage: 80,
    totalAds: 2231,
    totalEarning: '$542231',
  },
  {
    country: 'Iceland',
    flag: 'US',
    male: 252,
    female: 3541,
    agePercentage: 50,
    totalAds: 213,
    totalEarning: '$54213',
  },
];

const TopInterestCountry = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortState, setSortState] = useState({ column: null, direction: null });

  const handleSort = (column) => {
    setSortState((prev) => ({
      column,
      direction:
        prev.column === column && prev.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  const getSortIcon = (column) => {
    if (sortState.column !== column) return <ArrowUpDown className="h-4 w-4" />;
    return sortState.direction === 'asc' ? (
      <ArrowUp className="h-4 w-4" />
    ) : (
      <ArrowDown className="h-4 w-4" />
    );
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortState.column) return 0;

    const { column, direction } = sortState;
    const isAscending = direction === 'asc';

    if (typeof a[column] === 'string') {
      return isAscending
        ? a[column].localeCompare(b[column])
        : b[column].localeCompare(a[column]);
    }

    if (typeof a[column] === 'number') {
      return isAscending ? a[column] - b[column] : b[column] - a[column];
    }

    return 0;
  });

  return (
    <div className="mx-auto w-full max-w-7xl space-y-4 rounded-xl bg-white p-4 shadow-soft-xl">
      <div className="flex flex-col flex-wrap items-end gap-4 rounded-lg border-[1px] border-softPaleBlue bg-white p-3 sm:flex-row">
        <div className="relative border-r border-softLavender pr-4">
          <Input
            value={searchQuery}
            className="w-[200px] pl-8"
            placeholder="Search Country Name"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
        </div>
        <div className="border-r border-softLavender pr-4">
          <Select>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="border-r border-softLavender pr-4">
          <Select>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Age" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Ages</SelectItem>
              <SelectItem value="18-24">18-24</SelectItem>
              <SelectItem value="25-34">25-34</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="pr-4">
          <Select>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Posted Ad Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Ranges</SelectItem>
              <SelectItem value="0-100">0-100</SelectItem>
              <SelectItem value="101-500">101-500</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="ml-auto flex gap-2">
          <Button className="bg-primary-gradient text-white">Search</Button>
          <div className="group flex cursor-pointer items-center gap-[3px] text-xs font-semibold text-red-500 transition-all hover:text-red-600 hover:underline">
            <RotateCcw className="h-4 w-4 group-hover:text-red-600" />
            Reset Filter
          </div>
        </div>
      </div>

      <Table className="border-none">
        <TableHeader className="bg-softPaleBlue">
          <TableRow className="bg-muted/50">
            <TableHead className="w-[200px] py-3.5 text-sm font-medium text-darkBlueText whitespace-normal">
              <button
                className="flex items-center gap-2"
                onClick={() => handleSort('country')}
              >
                Country
                {getSortIcon('country')}
              </button>
            </TableHead>
            <TableHead className="py-3.5 text-sm font-medium text-darkBlueText whitespace-normal">
              <button
                className="flex items-center gap-2"
                onClick={() => handleSort('male')}
              >
                Gender
                {getSortIcon('male')}
              </button>
            </TableHead>
            <TableHead className="py-3.5 text-sm font-medium text-darkBlueText whitespace-normal">
              <button
                className="flex items-center gap-2"
                onClick={() => handleSort('agePercentage')}
              >
                Age
                {getSortIcon('agePercentage')}
              </button>
            </TableHead>
            <TableHead className="py-3.5 text-right text-sm font-bold text-darkBlueText whitespace-normal">
              <button
                className="ml-auto flex items-center justify-end gap-2"
                onClick={() => handleSort('totalAds')}
              >
                Total Ads Posted
                {getSortIcon('totalAds')}
              </button>
            </TableHead>
            <TableHead className="py-3.5 text-right text-sm font-bold text-darkBlueText whitespace-normal">
              <button
                className="ml-auto flex items-center justify-end gap-2"
                onClick={() => handleSort('totalEarning')}
              >
                Total Earning
                {getSortIcon('totalEarning')}
              </button>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedData?.map((row, index) => (
            <TableRow
              key={index}
              className={`${index % 2 === 0 ? 'bg-muted/50' : ''} border-none`}
            >
              <TableCell className="py-3 font-medium">
                <div className="flex items-center gap-2 text-sm font-medium text-darkBlueText">
                  <span
                    className={`flag-icon flag-icon-${row.flag.toLowerCase()}`}
                    style={{ fontSize: '1rem' }}
                  />
                  {row.country}
                </div>
              </TableCell>
              <TableCell className="py-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-darkBlueText">
                    <span>♂</span> {row.male}
                  </span>
                  <span className="text-sm font-medium text-darkBlueText">
                    <span>♀</span> {row.female}
                  </span>
                </div>
              </TableCell>
              <TableCell className="py-3">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-24 rounded-full bg-gray-200">
                    <div
                      className="h-full rounded-full bg-blue-500"
                      style={{ width: `${row.agePercentage}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-darkBlueText">
                    {row.agePercentage}%
                  </span>
                </div>
              </TableCell>
              <TableCell className="py-3 text-right text-sm font-medium text-darkBlueText">
                {row.totalAds}
              </TableCell>
              <TableCell className="py-3 text-right text-sm font-medium text-darkBlueText">
                {row.totalEarning}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TopInterestCountry;
