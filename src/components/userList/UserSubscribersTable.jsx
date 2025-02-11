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
    console.log('Column', column);
    console.log('Sort State', sortState);

    if (sortState.column !== column) return <ArrowUpDown className="h-4 w-4" />;
    return sortState.direction === 'asc' ? (
      <ArrowUp className="h-4 w-4" />
    ) : (
      <ArrowDown className="h-4 w-4" />
    );
  };

  const filteredSubscribers = (subscribers ?? []).filter((subscriber) =>
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

  const subscribersCount = subscribers?.filter((sub) => sub.isSubscribed).length;
  const subscribedAccountsCount = subscribers?.filter((sub) => !sub.isSubscribed).length;

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
        <TableHeader className="bg-gray-100">
          <TableRow>
            <TableHead className="w-[50px] px-4 py-2">
              <input 
                type="checkbox" 
                className="rounded border-gray-300"
                checked={sortedSubscribers.length > 0}
                onChange={() => {}}
              />
            </TableHead>
            <TableHead>
              <Button
                variant="ghost"
                onClick={() => handleSort('srNo')}
                className="flex items-center gap-2 p-0 h-auto text-sm font-medium hover:bg-transparent text-darkBlueText"
              >
                Sr No. {getSortIcon('srNo')}
              </Button>
            </TableHead>
            <TableHead>
              <Button
                variant="ghost"
                onClick={() => handleSort('name')}
                className="flex items-center gap-2 p-0 h-auto text-sm font-medium hover:bg-transparent text-darkBlueText"
              >
                Account Name {getSortIcon('name')}
              </Button>
            </TableHead>
            <TableHead>
              <Button
                variant="ghost"
                onClick={() => handleSort('accountLink')}
                className="flex items-center gap-2 p-0 h-auto text-sm font-medium hover:bg-transparent text-darkBlueText"
              >
                Account Link {getSortIcon('accountLink')}
              </Button>
            </TableHead>
            <TableHead>
              <Button
                variant="ghost"
                onClick={() => handleSort('email')}
                className="flex items-center gap-2 p-0 h-auto text-sm font-medium hover:bg-transparent text-darkBlueText"
              >
                Email {getSortIcon('email')}
              </Button>
            </TableHead>
            <TableHead className="text-sm font-medium text-darkBlueText">
              Country
            </TableHead>
            <TableHead>
              <Button
                variant="ghost"
                onClick={() => handleSort('date')}
                className="flex items-center gap-2 p-0 h-auto text-sm font-medium hover:bg-transparent text-darkBlueText"
              >
                Subscribed Date {getSortIcon('date')}
              </Button>
            </TableHead>
            <TableHead>
              <Button
                variant="ghost"
                onClick={() => handleSort('rating')}
                className="flex items-center gap-2 p-0 h-auto text-sm font-medium hover:bg-transparent text-darkBlueText"
              >
                Activity {getSortIcon('rating')}
              </Button>
            </TableHead>
            <TableHead className="text-center text-sm font-medium text-darkBlueText">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedSubscribers.map((subscriber) => (
            <TableRow key={subscriber.srNo} className="hover:bg-gray-50">
              <TableCell className="px-4 py-2">
                <input 
                  type="checkbox" 
                  className="rounded border-gray-300"
                  checked={false}
                  onChange={() => {}}
                />
              </TableCell>
              <TableCell className="text-sm font-medium text-darkBlueText">{subscriber.srNo}</TableCell>
              <TableCell className="text-sm font-medium text-darkBlueText">{subscriber.name}</TableCell>
              <TableCell>
                <a
                  href={subscriber.accountLink}
                  className="text-sm font-medium text-darkBlueText hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {subscriber.accountLink}
                </a>
              </TableCell>
              <TableCell className="text-sm font-medium text-darkBlueText">{subscriber.email}</TableCell>
              <TableCell className="flex items-center gap-1">
                <span
                  className={`flag-icon flag-icon-${subscriber.country.toLowerCase()}`}
                  style={{
                    fontSize: '1rem',
                    padding: '0.25rem',
                  }}
                ></span>
              </TableCell>
              <TableCell className="text-sm font-medium text-darkBlueText">{subscriber.date}</TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <Star
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                  <p className="text-sm font-medium text-darkBlueText">{subscriber.rating}</p>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center justify-center gap-2">
                  <Button
                    variant="ghost"
                    className="h-8 w-8 p-0"
                    title="More Options"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default UserSubscribersTable;
