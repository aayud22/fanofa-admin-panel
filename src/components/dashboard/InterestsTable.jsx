import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '../../constants/routeConstants';

const interests = [
  {
    id: '1',
    category: 'Cars & Vehicles',
    icon: 'https://plus.unsplash.com/premium_photo-1731681926154-9fb4a306fe5a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    users: '9821 Users',
    gender: { male: 252, female: 3541 },
    rating: 4,
  },
  {
    id: '2',
    category: 'Buy & Sell',
    icon: 'https://plus.unsplash.com/premium_photo-1731681926154-9fb4a306fe5a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    users: '9821 Users',
    gender: { male: 252, female: 3541 },
    rating: 4,
  },
  {
    id: '3',
    category: 'Real Estate',
    icon: 'https://plus.unsplash.com/premium_photo-1731681926154-9fb4a306fe5a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    users: '9821 Users',
    gender: { male: 252, female: 3541 },
    rating: 4,
  },
  {
    id: '4',
    category: 'Jobs',
    icon: 'https://plus.unsplash.com/premium_photo-1731681926154-9fb4a306fe5a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    users: '9821 Users',
    gender: { male: 252, female: 3541 },
    rating: 4,
  },
  {
    id: '5',
    category: 'Services',
    icon: 'https://plus.unsplash.com/premium_photo-1731681926154-9fb4a306fe5a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    users: '9821 Users',
    gender: { male: 252, female: 3541 },
    rating: 4,
  },
  {
    id: '6',
    category: 'Deals/Offers',
    icon: 'https://plus.unsplash.com/premium_photo-1731681926154-9fb4a306fe5a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    users: '9821 Users',
    gender: { male: 252, female: 3541 },
    rating: 4,
  },
];

const InterestsTable = () => {
  const navigate = useNavigate();

  return (
    <div className="rounded-xl bg-white p-6 shadow-soft-xl">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-bold text-darkBlueText">Top Interests</h2>
          <span className="text-xs font-medium text-mutedBlue">
            (This Week)
          </span>
        </div>
        <p
          onClick={() => navigate(APP_ROUTES.TOP_INTERESTED)}
          className="cursor-pointer text-sm text-blue-600 transition-all hover:underline"
        >
          View All
        </p>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-sm font-medium text-mutedBlue">
                Category
              </TableHead>
              <TableHead className="text-sm font-medium text-mutedBlue">
                No. of Users
              </TableHead>
              <TableHead className="text-sm font-medium text-mutedBlue">
                Gender
              </TableHead>
              <TableHead className="text-sm font-medium text-mutedBlue">
                Rating
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {interests.map((interest) => (
              <TableRow key={interest.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <img
                      width={40}
                      height={40}
                      className="rounded-xl"
                      alt={interest.category}
                      src={interest.icon || '/placeholder.svg'}
                    />
                    <span className="text-sm font-semibold text-deepBlue">
                      {interest.category}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-sm font-medium text-deepBlue">
                  {interest.users}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <span className="text-blue-500">♂</span>
                      <span className="text-sm font-semibold text-deepBlue">
                        {interest.gender.male}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-blue-500">♀</span>
                      <span className="text-sm font-semibold text-deepBlue">
                        {interest.gender.female}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold text-deepBlue">
                      {interest.rating}
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default InterestsTable;
