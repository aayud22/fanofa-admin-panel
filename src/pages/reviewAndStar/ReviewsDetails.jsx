import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { APP_ROUTES } from '../../constants/routeConstants';
import { useDispatch } from 'react-redux';
import { resetPageInfo, setPageInfo } from '../../redux/slices/pageSlice';
import {
  Edit2Icon,
  Edit3,
  FileDown,
  FileText,
  MessageSquareMore,
  MoreVertical,
  OctagonAlert,
  Star,
  Trash2,
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Card } from '../../components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu';

const ReviewCard = () => {
  return (
    <Card className="relative bg-white p-4 shadow-sm">
      <div className="absolute right-4 top-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[160px]">
            <DropdownMenuItem className="flex items-center gap-2 text-skyBlue">
              <Edit2Icon className="h-4 w-4" />
              Edit
            </DropdownMenuItem>

            <DropdownMenuItem className="flex items-center gap-2 text-red-600">
              <Trash2 className="h-4 w-4" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="mb-4 flex items-center gap-3">
        <div>
          <img
            alt="User"
            className="h-12 w-12 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div>
          <p className="font-medium text-slate-700">James Mullican</p>
          <p className="text-xs text-slate-400">
            Id <span className="text-slate-500">#256748625</span>
          </p>
        </div>
      </div>

      <div className="mb-4 flex items-end gap-1.5">
        {[1, 2, 3].map((img) => (
          <div
            key={img}
            className="h-16 w-16 overflow-hidden rounded-sm border border-slate-200"
          >
            <img
              alt="Car thumbnail"
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1459603677915-a62079ffd002?q=80&w=1534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        ))}

        <div className="mb-4 flex justify-end">
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>4</span>
          </div>
        </div>
      </div>

      <div className="flex items-start">
        <div className="mr-2 mt-1 min-w-5">
          <MessageSquareMore className="!h-4 !w-4 text-blue-500" />
        </div>
        <p className="text-sm leading-relaxed text-slate-500">
          Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore
        </p>
      </div>
    </Card>
  );
};

const ReviewsDetails = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const data = location?.state?.data;

  useEffect(() => {
    const breadcrumbs = [
      { label: 'Home', link: APP_ROUTES.DASHBOARD.BASE },
      { label: 'Manage Reviews & Stars', link: '#' },
      {
        label: 'All review and starts List',
        link: APP_ROUTES.REVIEW_AND_STAR.REVIEW_AND_STAR_LIST,
      },
      { label: 'Arrora gaur' },
    ].filter(Boolean);

    dispatch(
      setPageInfo({
        title: 'Manage Reviews & Stars',
        breadcrumbs,
      })
    );

    return () => {
      dispatch(resetPageInfo());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex w-full flex-col items-start justify-between gap-4 md:flex-row md:gap-8">
        {/* Left Side - Profile Info */}
        <div className="flex w-full flex-col gap-4 md:w-auto md:flex-row">
          <img
            alt="Profile"
            className="h-16 w-16 rounded-full object-cover"
            src="https://plus.unsplash.com/premium_photo-1731681926154-9fb4a306fe5a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D"
          />

          <div className="flex flex-col">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-xl font-semibold text-deepIndigo">
                Arrora gaur
              </h2>
              {true && (
                <Badge
                  variant="secondary"
                  className="gap-1 !rounded-2xl !bg-warmAmber/[10%] text-base font-medium"
                >
                  <Star className="!h-5 !w-5 !fill-goldenAmber !text-goldenAmber" />
                  <span className="font-semibold text-deepIndigo">4</span>
                </Badge>
              )}
            </div>
            <p className="text-base font-normal text-deepIndigo">
              Owner Id: 2736426948754845
            </p>
          </div>
        </div>

        {/* Right Side - Buttons */}
        <div className="flex w-full flex-wrap justify-end gap-2 md:w-auto">
          <Button
            variant="outline"
            className="flex items-center gap-2 text-slate-700"
          >
            <FileDown className="h-4 w-4" />
            Download
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2 text-red-500"
          >
            <OctagonAlert className="h-4 w-4 text-danger-text" />
            Deactivate Ad
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2 text-red-500"
          >
            <Trash2 className="h-4 w-4" />
            Delete Ad
          </Button>
        </div>
      </div>

      <div className="my-4 h-[300px] w-full overflow-hidden">
        <img
          alt="BMW 7 Series"
          className="object-cover"
          src="https://images.unsplash.com/photo-1459603677915-a62079ffd002?q=80&w=1534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>

      <h1 className="mb-3 text-lg font-semibold text-deepIndigo">
        BMW 7 Series
      </h1>

      <p className="mb-3 text-sm font-normal text-deepTeal">
        BMW 7 Series is the brand's flagship sedan. It is a comfortable
        chauffeur-driven car which is great to drive as well. Its USPs include
        bold looks, business-class-like rear seating, and mind-blowing
        technology headlined by a cinema-style widescreen dropping down from the
        roof. But the new design is bound to divide opinions, and its length is
        also not ideal for crowded cities.
      </p>

      <h2 className="mb-3 text-lg font-semibold text-deepIndigo">Reviews</h2>

      <div className="w-full overflow-hidden">
        <div className="mb-8 flex gap-4 overflow-x-auto pb-4">
          {[1, 2, 3, 4, 5, 6].map((props, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 snap-start sm:w-[320px]"
            >
              <ReviewCard {...props} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsDetails;
