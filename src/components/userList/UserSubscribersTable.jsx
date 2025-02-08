import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
} from '../ui/table';
import {
  Star,
  ArrowUp,
  ArrowDown,
  ArrowUpDown,
  MoreHorizontal,
  MessageSquareMore,
} from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { APP_ROUTES } from '../../constants/routeConstants';

const UserSubscribersTable = ({ subscribers, activeTab, onTabChange }) => {
  const navigate = useNavigate();
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

  const filteredSubscribers = subscribers.filter((subscriber) =>
    activeTab === 'subscribers' ? subscriber.isSubscribed : !subscriber.isSubscribed
  );

  const sortedSubscribers = [...filteredSubscribers].sort((a, b) => {
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

  const subscribersCount = subscribers.filter((sub) => sub.isSubscribed).length;
  const subscribedAccountsCount = subscribers.filter((sub) => !sub.isSubscribed).length;

  return (
    <Card className="!p-6">
      <div className="mb-6 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-darkBlueText">Subscribers</h3>
          <Button
            variant="link"
            className="text-xs font-medium text-darkBlueText underline h-auto p-0"
            onClick={() => navigate(APP_ROUTES.SUBSCRIBERS.ALL)}
          >
            View All
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 bg-white border w-max p-1 border-softPaleBlue rounded-md">
          <Button
            onClick={() => onTabChange('subscribers')}
            variant="ghost"
            className={`rounded-md px-4 py-2 text-sm font-medium ${
              activeTab === 'subscribers'
                ? '!bg-primary-gradient text-white hover:text-white'
                : 'text-darkBlueText hover:text-darkBlueText'
            }`}
          >
            My Subscribers ({subscribersCount})
          </Button>
          <Button
            onClick={() => onTabChange('accounts')}
            variant="ghost"
            className={`rounded-md px-4 py-2 text-sm font-medium ${
              activeTab === 'accounts'
                ? '!bg-primary-gradient text-white hover:text-white'
                : 'text-darkBlueText hover:text-darkBlueText'
            }`}
          >
            Subscribed Accounts ({subscribedAccountsCount})
          </Button>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead className="px-4 py-2 text-left text-sm font-semibold text-darkBlueText">
              <Button
                variant="ghost"
                className="flex items-center gap-2 p-0 h-auto font-semibold hover:bg-transparent"
                onClick={() => handleSort('srNo')}
              >
                Sr No. {getSortIcon('srNo')}
              </Button>
            </TableHead>
            <TableHead className="px-4 py-2 text-left text-sm font-semibold text-darkBlueText">
              <Button
                variant="ghost"
                className="flex items-center gap-2 p-0 h-auto font-semibold hover:bg-transparent"
                onClick={() => handleSort('name')}
              >
                Account Name {getSortIcon('name')}
              </Button>
            </TableHead>
            <TableHead className="px-4 py-2 text-left text-sm font-semibold text-darkBlueText">
              Account Link
            </TableHead>
            <TableHead className="px-4 py-2 text-left text-sm font-semibold text-darkBlueText">
              <Button
                variant="ghost"
                className="flex items-center gap-2 p-0 h-auto font-semibold hover:bg-transparent"
                onClick={() => handleSort('email')}
              >
                Email {getSortIcon('email')}
              </Button>
            </TableHead>
            <TableHead className="px-4 py-2 text-left text-sm font-semibold text-darkBlueText">
              <Button
                variant="ghost"
                className="flex items-center gap-2 p-0 h-auto font-semibold hover:bg-transparent"
                onClick={() => handleSort('country')}
              >
                Country {getSortIcon('country')}
              </Button>
            </TableHead>
            <TableHead className="px-4 py-2 text-left text-sm font-semibold text-darkBlueText">
              <Button
                variant="ghost"
                className="flex items-center gap-2 p-0 h-auto font-semibold hover:bg-transparent"
                onClick={() => handleSort('date')}
              >
                Subscribed Date {getSortIcon('date')}
              </Button>
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
                <Button
                  variant="ghost"
                  className="h-auto p-0 hover:bg-transparent"
                >
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default UserSubscribersTable;
