import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '../../constants/routeConstants';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { resetPageInfo, setPageInfo } from '../../redux/slices/pageSlice';

const categories = [
  {
    title: 'Cars & Vehicles',
    image:
      'https://plus.unsplash.com/premium_photo-1731681926154-9fb4a306fe5a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    href: '/cars-vehicles',
  },
  {
    title: 'Buy & Sell',
    image:
      'https://plus.unsplash.com/premium_photo-1731681926154-9fb4a306fe5a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    href: '/buy-sell',
  },
  {
    title: 'Real Estate',
    image:
      'https://plus.unsplash.com/premium_photo-1731681926154-9fb4a306fe5a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    href: '/real-estate',
  },
  {
    title: 'Jobs',
    image:
      'https://plus.unsplash.com/premium_photo-1731681926154-9fb4a306fe5a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    href: '/jobs',
  },
  {
    title: 'Services',
    image:
      'https://plus.unsplash.com/premium_photo-1731681926154-9fb4a306fe5a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    href: '/services',
  },
  {
    title: 'Community',
    image:
      'https://plus.unsplash.com/premium_photo-1731681926154-9fb4a306fe5a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    href: '/community',
  },
  {
    title: 'Pets',
    image:
      'https://plus.unsplash.com/premium_photo-1731681926154-9fb4a306fe5a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    href: '/pet',
  },
  {
    title: 'Deals / Offers',
    image:
      'https://plus.unsplash.com/premium_photo-1731681926154-9fb4a306fe5a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    href: '/deals-offers',
  },
];

const CategoryList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setPageInfo({
        title: 'Manage Promotions',
        breadcrumbs: [
          { label: 'Home', link: '/dashboard' },
          { label: 'Categories' },
        ],
      })
    );

    return () => {
      dispatch(resetPageInfo());
    };
  }, [dispatch]);

  return (
    <div className="my-3 w-full rounded-xl bg-white p-6 shadow-soft-xl">
      <Card className="border-none shadow-none">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0 pb-2">
          <CardTitle className="text-lg font-bold text-darkBlueText">
            Listed Categories
          </CardTitle>
          <p
            onClick={() => navigate(APP_ROUTES.CATEGORIES)}
            className="cursor-pointer text-sm text-blue-600 transition-all hover:underline"
          >
            View All
          </p>
        </CardHeader>
      </Card>
      <CardContent className="p-0">
        <div className="flex flex-nowrap gap-6 overflow-x-auto pb-4 md:flex-wrap md:justify-start">
          {categories.map((category) => (
            <a
              key={category.title}
              href={category.href}
              className="group flex min-w-[100px] flex-col items-center"
            >
              <div className="mb-2 flex h-[100px] w-[100px] items-center justify-center rounded-2xl">
                <img
                  width={80}
                  height={80}
                  alt={category.title}
                  src={category.image || '/placeholder.svg'}
                  className="h-16 w-16 rounded-[8px] border-[1px] object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <span className="text-center text-sm font-bold text-deepBlue">
                {category.title}
              </span>
            </a>
          ))}
        </div>
      </CardContent>
    </div>
  );
};

export default CategoryList;
