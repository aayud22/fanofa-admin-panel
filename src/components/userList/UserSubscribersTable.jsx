import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import { MoreHorizontal, Star } from 'lucide-react';
import { Card } from '../ui/card';

const subscribers = [
  {
    srNo: '01',
    name: 'Arrora gaur',
    accountLink: 'http://www.zoomit.com',
    email: 'tranthuy@gmail.com',
    country: '🇮🇳',
    date: 'Oct 31, 2017',
    rating: 4,
  },
  {
    srNo: '02',
    name: 'James Mullican',
    accountLink: 'http://www.codehow.com',
    email: 'manhhaac@gmail.com',
    country: '🇧🇪',
    date: 'Feb 28, 2018',
    rating: 4,
  },
  {
    srNo: '02',
    name: 'Robert Bacins',
    accountLink: 'http://www.zencorporation.com',
    email: 'rvt.nxte@gmail.com',
    country: '🇮🇪',
    date: 'Mar 6, 2018',
    rating: 4,
  },
];

const UserSubscribersTable = () => {
  return (
    <Card>
      <div className="rounded-lg bg-white p-6">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Subscribers</h3>
          <button className="text-#3498db text-sm">View All</button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Sr No.</TableHead>
              <TableHead>Account Name</TableHead>
              <TableHead>Account Link</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Country</TableHead>
              <TableHead>Subscribed Date</TableHead>
              <TableHead>Activity</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subscribers.map((subscriber) => (
              <TableRow key={subscriber.email}>
                <TableCell>{subscriber.srNo}</TableCell>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/ac36/6cbd/7ffba935331f5d2ce0da0e20e2ecb618?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=oOw3aOrLFM6~Iq5LzuDDZx8yEes-jxfuA2et~~Cp4wW6TD11rn1eOsbXjuvRJcLMXl6t~krdl9lsRSKs4koHXdY4i0y4t9~tgyYeFaGfvrqgAv9wPoML6okbz37glvIVsMMyOUofJIWORdP4TyTpFMlIHzsVr3e2fj6AQyJncdFSCiv2abdujDm2nCQMTNHxeOyzHrPXlJi5dFidnTHpdxPlXURmozbmhj-DugqWGK0ei1C~VfCcH1dLvc6J9svHs3JdNx0k4fEXCiiTmQSxtORZn1vdFOj7E7HSqcTr7ECCR5R9CD55~LZ2u0KWIQ4D5XuFVcTwVQ2BJ2ttUvNv9g__"
                      alt={subscriber.name}
                      className="h-10 w-10 rounded-full"
                    />
                    {subscriber.name}
                  </div>
                </TableCell>
                <TableCell>{subscriber.accountLink}</TableCell>
                <TableCell>{subscriber.email}</TableCell>
                <TableCell>{subscriber.country}</TableCell>
                <TableCell>{subscriber.date}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{subscriber.rating}</span>
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
      </div>
    </Card>
  );
};

export default UserSubscribersTable;
