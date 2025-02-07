import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import { Card } from '../ui/card';
import {
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  MoreHorizontal,
  Star,
  MessageSquareMore,
} from 'lucide-react';

const subscribers = [
  {
    srNo: '01',
    name: 'Arrora gaur',
    accountLink: 'http://www.zoomit.com',
    email: 'tranthuy@gmail.com',
    country: 'IN',
    date: 'Oct 31, 2017',
    rating: 4,
    messageCount: 4,
  },
  {
    srNo: '02',
    name: 'James Mullican',
    accountLink: 'http://www.codehow.com',
    email: 'manhhaac@gmail.com',
    country: 'BE',
    date: 'Feb 28, 2018',
    rating: 4,
    messageCount: 6,
  },
  {
    srNo: '03',
    name: 'Robert Bacins',
    accountLink: 'http://www.zencorporation.com',
    email: 'rvt.nxte@gmail.com',
    country: 'IE',
    date: 'Mar 6, 2018',
    rating: 4,
    messageCount: 9,
  },
];

const UserSubscribersTable = () => {
  const [sortState, setSortState] = useState({
    column: null,
    direction: 'asc',
  });

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

  const sortedSubscribers = [...subscribers].sort((a, b) => {
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
    <Card className="!p-6">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-darkBlueText">Subscribers</h3>
        <button className="text-xs font-medium text-darkBlueText underline">
          View All
        </button>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead className="px-4 py-2 text-left text-sm font-semibold text-darkBlueText">
              <button
                className="flex items-center gap-2"
                onClick={() => handleSort('srNo')}
              >
                Sr No. {getSortIcon('srNo')}
              </button>
            </TableHead>
            <TableHead className="px-4 py-2 text-left text-sm font-semibold text-darkBlueText">
              <button
                className="flex items-center gap-2"
                onClick={() => handleSort('name')}
              >
                Account Name {getSortIcon('name')}
              </button>
            </TableHead>
            <TableHead className="px-4 py-2 text-left text-sm font-semibold text-darkBlueText">
              Account Link
            </TableHead>
            <TableHead className="px-4 py-2 text-left text-sm font-semibold text-darkBlueText">
              <button
                className="flex items-center gap-2"
                onClick={() => handleSort('email')}
              >
                Email {getSortIcon('email')}
              </button>
            </TableHead>
            <TableHead className="px-4 py-2 text-left text-sm font-semibold text-darkBlueText">
              <button
                className="flex items-center gap-2"
                onClick={() => handleSort('country')}
              >
                Country {getSortIcon('country')}
              </button>
            </TableHead>
            <TableHead className="px-4 py-2 text-left text-sm font-semibold text-darkBlueText">
              <button
                className="flex items-center gap-2"
                onClick={() => handleSort('date')}
              >
                Subscribed Date {getSortIcon('date')}
              </button>
            </TableHead>
            <TableHead className="px-4 py-2 text-left text-sm font-semibold text-darkBlueText">
              Activity
            </TableHead>
            <TableHead className="px-4 py-2 text-left text-sm font-semibold text-darkBlueText">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedSubscribers.map((subscriber) => (
            <TableRow key={subscriber.email}>
              <TableCell>
                <p className="text-sm font-medium text-darkBlueText">
                  {subscriber.srNo}
                </p>
              </TableCell>
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  <div className="flex-shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt={subscriber.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium text-darkBlueText">
                    {subscriber.name}
                  </span>
                </div>
              </TableCell>

              <TableCell>
                <a
                  href={subscriber.accountLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  {subscriber.accountLink}
                </a>
              </TableCell>
              <TableCell>
                <p className="text-sm font-medium text-darkBlueText">
                  {subscriber.email}
                </p>
              </TableCell>
              <TableCell>
                <div className="flex items-center justify-center">
                  <span
                    className={`flag-icon flag-icon-${subscriber.country.toLowerCase()}`}
                    style={{ fontSize: '1rem' }}
                  />
                </div>
              </TableCell>
              <TableCell>
                <p className="text-sm font-medium text-darkBlueText">
                  {subscriber.date}
                </p>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-darkBlueText">
                      {subscriber.rating}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageSquareMore className="h-4 w-4 text-skyBlue" />
                    <span className="text-sm font-medium text-darkBlueText">
                      {subscriber.messageCount}
                    </span>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <button>
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default UserSubscribersTable;
