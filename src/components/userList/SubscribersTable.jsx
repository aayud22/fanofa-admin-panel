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
import { Checkbox } from '../ui/checkbox';
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '../../constants/routeConstants';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Trash2, Eye } from 'lucide-react';

const SubscribersTable = ({
  subscribers = [],
  activeTab,
  onTabChange,
  isFullView = false,
}) => {
  const navigate = useNavigate();
  const [sortState, setSortState] = useState({
    column: null,
    direction: 'asc',
  });
  const [searchQuery, setSearchQuery] = useState('');
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

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedRows(sortedSubscribers.map((sub) => sub.srNo));
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectRow = (srNo) => {
    setSelectedRows((prev) =>
      prev.includes(srNo) ? prev.filter((id) => id !== srNo) : [...prev, srNo]
    );
  };

  const filteredSubscribers = (subscribers ?? []).filter((subscriber) => {
    const matchesTab =
      activeTab === 'subscribers'
        ? subscriber.isSubscribed
        : !subscriber.isSubscribed;

    const matchesSearch = searchQuery
      ? subscriber.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        subscriber.email.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    return matchesTab && matchesSearch;
  });

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

  const subscribersCount = subscribers?.filter(
    (sub) => sub.isSubscribed
  ).length;
  const subscribedAccountsCount = subscribers?.filter(
    (sub) => !sub.isSubscribed
  ).length;

  const handleDelete = (subscriberId) => {
    // Add delete confirmation dialog and functionality here
    console.log('Delete subscriber:', subscriberId);
  };

  return (
    <Card className={`${isFullView ? 'p-6' : '!p-6'}`}>
      <div className="mb-6 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex w-full items-center justify-between gap-4">
            <h3 className="text-xl font-semibold text-darkBlueText">
              {isFullView ? 'All Subscribers' : 'Subscribers'}
            </h3>
            {!isFullView ? (
              <Button
                variant="link"
                className="h-auto p-0 text-xs font-medium text-darkBlueText underline"
                onClick={() => navigate(APP_ROUTES.SUBSCRIBERS.ALL)}
              >
                View All
              </Button>
            ) : (
              <Button className="bg-primary-gradient text-white hover:text-white">
                <MessageSquareMore className="!mt-0.5 !h-4 !w-4" />
                Send Message
              </Button>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
          {/* Tabs */}
          <div className="flex w-max gap-2 rounded-md border border-softPaleBlue bg-white p-1">
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

          {/* Search, Filter, and Download */}
          {isFullView && (
            <div className="flex items-center gap-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="rounded-lg border border-gray-200 py-2 pl-10 pr-4 text-sm text-darkBlueText placeholder:text-gray-400 focus:border-primary focus:outline-none"
                />
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              </div>
              <Button
                variant="outline"
                className="flex items-center gap-2 text-darkBlueText"
              >
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="text-sm !font-medium text-darkBlueText"
              >
                <FileDown className="mr-2 !h-4 !w-4 text-darkBlueText" />
                Download
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead className="w-[50px] px-4 py-2">
                <Checkbox
                  checked={selectedRows.length === sortedSubscribers.length}
                  onCheckedChange={handleSelectAll}
                />
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => handleSort('srNo')}
                  className="flex h-auto items-center gap-2 p-0 text-sm font-medium text-darkBlueText hover:bg-transparent"
                >
                  Sr No. {getSortIcon('srNo')}
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => handleSort('name')}
                  className="flex h-auto items-center gap-2 p-0 text-sm font-medium text-darkBlueText hover:bg-transparent"
                >
                  Account Name {getSortIcon('name')}
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => handleSort('accountLink')}
                  className="flex h-auto items-center gap-2 p-0 text-sm font-medium text-darkBlueText hover:bg-transparent"
                >
                  Account Link {getSortIcon('accountLink')}
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => handleSort('email')}
                  className="flex h-auto items-center gap-2 p-0 text-sm font-medium text-darkBlueText hover:bg-transparent"
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
                  className="flex h-auto items-center gap-2 p-0 text-sm font-medium text-darkBlueText hover:bg-transparent"
                >
                  Subscribed Date {getSortIcon('date')}
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => handleSort('rating')}
                  className="flex h-auto items-center gap-2 p-0 text-sm font-medium text-darkBlueText hover:bg-transparent"
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
                  <Checkbox
                    checked={selectedRows.includes(subscriber.srNo)}
                    onCheckedChange={() => handleSelectRow(subscriber.srNo)}
                  />
                </TableCell>
                <TableCell className="text-sm font-medium text-darkBlueText">
                  {subscriber.srNo}
                </TableCell>
                <TableCell className="text-sm font-medium text-darkBlueText">
                  {subscriber.name}
                </TableCell>
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
                <TableCell className="text-sm font-medium text-darkBlueText">
                  {subscriber.email}
                </TableCell>
                <TableCell className="flex items-center gap-1">
                  <span
                    className={`flag-icon flag-icon-${subscriber.country.toLowerCase()}`}
                    style={{
                      fontSize: '1rem',
                      padding: '0.25rem',
                    }}
                  ></span>
                </TableCell>
                <TableCell className="text-sm font-medium text-darkBlueText">
                  {subscriber.date}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <p className="text-sm font-medium text-darkBlueText">
                      {subscriber.rating}
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center justify-center gap-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          className="h-8 w-8 p-0"
                          title="More Options"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-[160px]">
                        <DropdownMenuItem
                          className="cursor-pointer"
                          onClick={() =>
                            navigate(APP_ROUTES.SUBSCRIBERS.MY_SUBSCRIBERS)
                          }
                        >
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleDelete(subscriber.srNo)}
                          className="cursor-pointer text-destructive focus:text-destructive"
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};

export default SubscribersTable;
