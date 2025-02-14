import React, { useState } from 'react';
import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
} from '../../components/ui/table';
import {
  Eye,
  Star,
  Search,
  Filter,
  Trash2,
  FileDown,
  PencilLine,
  MoreVertical,
  ChevronRight,
  MoreHorizontal,
  MessageSquareMore,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu';
import { useSelector } from 'react-redux';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Checkbox } from '../../components/ui/checkbox';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '../../components/ui/avatar';

// Mock data for subscribers
const subscribers = [
  {
    id: '62875',
    adsId: '#62875',
    category: 'Buy & Sell',
    datePublished: 'March 26 2020, 12:42am',
    timeSpend: '16min: 22 sec',
    activity: 4,
    messageCount: 4,
    rating: 4,
    status: 'Active',
    email: 'manhhac@gmail.com',
  },
  {
    id: '62876',
    adsId: '#62875',
    category: 'Buy & Sell',
    datePublished: 'March 26 2020, 12:42am',
    timeSpend: '16min: 22 sec',
    activity: 4,
    messageCount: 4,
    rating: 4,
    status: 'Inactive',
    email: 'nvt.nute@gmail.com',
  },
  {
    id: '8575',
    adsId: '#8575',
    category: 'Buy & Sell',
    datePublished: 'March 26 2020, 12:42am',
    timeSpend: '16min: 22 sec',
    activity: 4,
    messageCount: 4,
    rating: 4,
    status: 'Active',
    email: 'binhan628@gmail.com',
  },
];

// Reviews data
const reviews = [
  {
    id: 1,
    name: 'James Mullican',
    adId: '256748625',
    avatar:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4,
    text: 'Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
    images: [
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1708979436186-40ede48208e4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1533416784636-2b0ccfea6b97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    id: 2,
    name: 'James Mullican',
    adId: '256748625',
    avatar:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4,
    text: 'Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
    images: [
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1708979436186-40ede48208e4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1533416784636-2b0ccfea6b97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    id: 3,
    name: 'James Mullican',
    adId: '256748625',
    avatar:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4,
    text: 'Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
    images: [
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1708979436186-40ede48208e4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1533416784636-2b0ccfea6b97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    id: 4,
    name: 'James Mullican',
    adId: '256748625',
    avatar:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4,
    text: 'Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
    images: [
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1708979436186-40ede48208e4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1533416784636-2b0ccfea6b97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    id: 5,
    name: 'James Mullican',
    adId: '256748625',
    avatar:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 5,
    text: 'Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
    images: [
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1708979436186-40ede48208e4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1533416784636-2b0ccfea6b97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    id: 6,
    name: 'James Mullican',
    adId: '256748625',
    avatar:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 8,
    text: 'Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
    images: [
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1708979436186-40ede48208e4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1533416784636-2b0ccfea6b97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
  {
    id: 7,
    name: 'James Mullican',
    adId: '256748625',
    avatar:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 2,
    text: 'Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
    images: [
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1708979436186-40ede48208e4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1533416784636-2b0ccfea6b97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
];

const MySubscribers = () => {
  const { user } = useSelector((state) => state);

  const cardsPerSlide = 4; // Show 3 cards per slide
  const totalSlides = Math.ceil(reviews.length / cardsPerSlide);
  const sliderRef = React.useRef(null);

  const [selectedRows, setSelectedRows] = useState([]);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const [activeSlide, setActiveSlide] = React.useState(0);

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedRows(subscribers.map((sub) => sub.id));
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const handleSlideChange = (index) => {
    setActiveSlide(index);
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth;
      const scrollPosition = index * slideWidth;
      sliderRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="container mx-auto px-6 py-3">
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-darkBlueText">
            {user?.selectedUser?.name}
          </h2>
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
              variant="outline"
              className="flex items-center gap-2 text-darkBlueText"
            >
              <FileDown className="h-4 w-4" />
              Download
            </Button>
          </div>
        </div>
      </div>

      <div className="mb-6 rounded border">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="w-[40px]">
                <Checkbox
                  checked={selectedRows.length === subscribers.length}
                  onCheckedChange={handleSelectAll}
                />
              </TableHead>
              <TableHead className="w-[100px]">Ads ID</TableHead>
              <TableHead className="w-[120px]">Category</TableHead>
              <TableHead className="w-[180px]">Date Published</TableHead>
              <TableHead className="w-[120px]">Time Spend</TableHead>
              <TableHead className="w-[100px]">Activity</TableHead>
              <TableHead className="w-[120px]">Product Status</TableHead>
              <TableHead className="w-[200px] text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subscribers.map((subscriber) => (
              <TableRow key={subscriber.id} className="hover:bg-gray-50">
                <TableCell className="w-[40px]">
                  <Checkbox
                    checked={selectedRows.includes(subscriber.id)}
                    onCheckedChange={() => handleSelectRow(subscriber.id)}
                  />
                </TableCell>
                <TableCell className="w-[100px] font-medium">
                  {subscriber.adsId}
                </TableCell>
                <TableCell className="w-[120px]">
                  {subscriber.category}
                </TableCell>
                <TableCell className="w-[180px]">
                  {subscriber.datePublished}
                </TableCell>
                <TableCell className="w-[120px]">
                  {subscriber.timeSpend}
                </TableCell>
                <TableCell className="w-[100px]">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{subscriber.rating}</span>
                    <MessageSquareMore className="h-4 w-4 text-blue-500" />
                    <span>{subscriber.messageCount}</span>
                  </div>
                </TableCell>
                <TableCell className="w-[120px]">
                  <span
                    className={`inline-flex rounded px-2 py-1 text-xs font-medium ${
                      subscriber.status === 'Active'
                        ? 'bg-success-bg text-success-text'
                        : 'bg-danger-bg text-danger-text'
                    }`}
                  >
                    {subscriber.status}
                  </span>
                </TableCell>
                <TableCell className="w-[200px]">
                  <div className="flex items-center justify-center gap-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                        >
                          <MoreHorizontal className="h-4 w-4 text-blue-500" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem className="cursor-pointer">
                          <Eye className="!h-4 !w-4 text-blue-500" />
                          Reviews
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">
                          <PencilLine className="!h-4 !w-4 text-blue-500" />
                          Product purchased
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">
                          <MessageSquareMore className="!h-4 !w-4 text-blue-500" />
                          Chat
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">
                          <Trash2 className="!h-4 !w-4 text-destructive" />
                          Deactivate
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">
                          <Trash2 className="!h-4 !w-4 text-destructive" />
                          Report
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

      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-darkBlueText">Reviews</h2>
        </div>

        <div className="relative">
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-hidden scroll-smooth pb-8"
          >
            {reviews.map((review, index) => (
              <Card
                className={`min-w-[300px] max-w-[300px] rounded-lg p-4 transition-transform duration-300`}
                style={{
                  transform: `translateX(-${activeSlide * 100}%)`,
                }}
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={review.avatar} alt={review.name} />
                      <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-sm font-medium text-darkBlueText">
                        {review.name}
                      </h3>
                      <p className="text-xs text-gray-500">
                        Ad Id #{review.adId}
                      </p>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Report</DropdownMenuItem>
                      <DropdownMenuItem>Share</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="mb-4 grid grid-cols-3 gap-2">
                  {review.images.map((image, imageIndex) => (
                    <div
                      key={imageIndex}
                      className="relative aspect-square overflow-hidden rounded-lg"
                    >
                      <img
                        src={image}
                        alt={`Review ${imageIndex + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div className="mb-2 flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-sm text-gray-600">{review.text}</p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-gray-500">1/3</span>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-4 flex justify-center gap-2">
            {[...Array(totalSlides)]?.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === activeSlide ? 'bg-primary-gradient' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySubscribers;
