import React, { useState } from 'react';
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
  Search,
  Filter,
  ArrowDown,
  ArrowUpDown,
  MoreHorizontal,
  MessageSquareMore,
  FileDown,
} from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';

const SubscribersFullView = ({ subscribers, activeTab, onTabChange }) => {
  const [sortState, setSortState] = useState({
    column: null,
    direction: 'asc',
  });
  const [selectedRows, setSelectedRows] = useState([]);

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

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(sortedSubscribers.map(sub => sub.srNo));
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectRow = (srNo) => {
    setSelectedRows(prev => {
      if (prev.includes(srNo)) {
        return prev.filter(id => id !== srNo);
      } else {
        return [...prev, srNo];
      }
    });
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

  return (
    <div className="p-6">
      <div className="mb-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h3 className="text-xl font-semibold text-darkBlueText">
              Subscribers
            </h3>
          </div>
          <Button className="bg-primary-gradient text-white hover:text-white">
            <MessageSquareMore className="h-4 w-4 mr-2" />
            Send Message
          </Button>
        </div>

        <div className="flex items-center justify-between">
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
              My Subscribers
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
              Subscribed Accounts
            </Button>
          </div>

          {/* Search, Filter, and Download */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary text-darkBlueText placeholder:text-gray-400"
              />
              <Search className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
            <Button variant="outline" className="flex items-center gap-2 text-darkBlueText">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="text-sm !font-medium text-darkBlueText"
            >
              <FileDown className="!h-4 !w-4 text-darkBlueText mr-2" />
              Download
            </Button>
          </div>
        </div>
      </div>

      <Card className="p-6">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead className="w-[50px] px-4 py-2 text-xs font-normal">
                <input 
                  type="checkbox" 
                  className="rounded border-gray-300"
                  checked={selectedRows.length === sortedSubscribers.length}
                  onChange={handleSelectAll}
                />
              </TableHead>
              <TableHead className="px-4 py-2 text-left text-xs font-normal text-darkBlueText whitespace-nowrap">
                <Button
                  variant="ghost"
                  onClick={() => handleSort('srNo')}
                  className="flex items-center gap-2 p-0 h-auto text-xs font-normal hover:bg-transparent"
                >
                  Sr No. {getSortIcon('srNo')}
                </Button>
              </TableHead>
              <TableHead className="px-4 py-2 text-left text-xs font-normal text-darkBlueText whitespace-nowrap">
                <Button
                  variant="ghost"
                  onClick={() => handleSort('name')}
                  className="flex items-center gap-2 p-0 h-auto text-xs font-normal hover:bg-transparent"
                >
                  Account Name {getSortIcon('name')}
                </Button>
              </TableHead>
              <TableHead className="px-4 py-2 text-left text-xs font-normal text-darkBlueText whitespace-nowrap">
                <Button
                  variant="ghost"
                  onClick={() => handleSort('accountLink')}
                  className="flex items-center gap-2 p-0 h-auto text-xs font-normal hover:bg-transparent"
                >
                  Account Link {getSortIcon('accountLink')}
                </Button>
              </TableHead>
              <TableHead className="px-4 py-2 text-left text-xs font-normal text-darkBlueText whitespace-nowrap">
                <Button
                  variant="ghost"
                  onClick={() => handleSort('email')}
                  className="flex items-center gap-2 p-0 h-auto text-xs font-normal hover:bg-transparent"
                >
                  Email {getSortIcon('email')}
                </Button>
              </TableHead>
              <TableHead className="px-4 py-2 text-left text-xs font-normal text-darkBlueText whitespace-nowrap">
                Country
              </TableHead>
              <TableHead className="px-4 py-2 text-left text-xs font-normal text-darkBlueText whitespace-normal">
                <Button
                  variant="ghost"
                  onClick={() => handleSort('date')}
                  className="flex items-center gap-2 p-0 h-auto text-xs font-normal hover:bg-transparent"
                >
                  Subscribed Date {getSortIcon('date')}
                </Button>
              </TableHead>
              <TableHead className="px-4 py-2 text-left text-xs font-normal text-darkBlueText whitespace-normal">
                <Button
                  variant="ghost"
                  onClick={() => handleSort('rating')}
                  className="flex items-center gap-2 p-0 h-auto text-xs font-normal hover:bg-transparent"
                >
                  Activity {getSortIcon('rating')}
                </Button>
              </TableHead>
              <TableHead className="px-4 py-2 text-center text-xs font-normal text-darkBlueText whitespace-normal">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedSubscribers.map((subscriber) => (
              <TableRow key={subscriber.srNo}>
                <TableCell className="px-4 py-2">
                  <input 
                    type="checkbox" 
                    className="rounded border-gray-300"
                    checked={selectedRows.includes(subscriber.srNo)}
                    onChange={() => handleSelectRow(subscriber.srNo)}
                  />
                </TableCell>
                <TableCell className="px-4 py-2 text-darkBlueText text-sm font-medium">{subscriber.srNo}</TableCell>
                <TableCell className="px-4 py-2 text-darkBlueText text-sm font-medium">{subscriber.name}</TableCell>
                <TableCell className="px-4 py-2">
                  <a
                    href={subscriber.accountLink}
                    className="text-darkBlueText hover:text-primary text-sm font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {subscriber.accountLink}
                  </a>
                </TableCell>
                <TableCell className="px-4 py-2 text-darkBlueText text-sm font-medium">{subscriber.email}</TableCell>
                <TableCell className="px-4 py-2 text-center">
                  <span
                    className={`flag-icon flag-icon-${subscriber.country.toLowerCase()}`}
                  />
                </TableCell>
                <TableCell className="px-4 py-2 text-darkBlueText text-sm font-medium">{subscriber.date}</TableCell>
                <TableCell className="px-4 py-2">
                  <div className="flex items-center gap-1">
                    <Star
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                    <p className="text-darkBlueText text-sm font-medium">{subscriber.rating}</p>
                  </div>
                </TableCell>
                <TableCell className="px-4 py-2">
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
    </div>
  );
};

export default SubscribersFullView;
