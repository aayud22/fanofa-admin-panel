import React, { useState, useEffect } from 'react';
import {
  X,
  Edit,
  Check,
  Search,
  Trash2,
  Download,
  Ellipsis,
  RotateCcw,
  ChevronDown,
  ChevronRight,
  UserRoundPlus,
  ArrowUp,
  ArrowDown,
  ArrowUpDown,
} from 'lucide-react';
import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from '../../components/ui/select';
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableHeader,
} from '../../components/ui/table';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from '../../components/ui/dropdown-menu';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import CategoryModal from '../../components/category/CategoryModal';
import { useLocation } from 'react-router-dom';
import { APP_ROUTES } from '../../constants/routeConstants';
import { useDispatch } from 'react-redux';
import { resetPageInfo, setPageInfo } from '../../redux/slices/pageSlice';

const categories = [
  {
    id: 1,
    name: 'Category 1',
    icon: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    status: true,
    products: 10,
    subcategories: [
      { id: 11, name: 'Subcategory 1.1', status: true, products: 5 },
      { id: 12, name: 'Subcategory 1.2', status: false, products: 2 },
    ],
  },
  {
    id: 2,
    name: 'Category 2',
    icon: 'https://images.unsplash.com/photo-1583315527632-3e828f851fa1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    status: false,
    products: 20,
    subcategories: [
      { id: 21, name: 'Subcategory 2.1', status: true, products: 10 },
    ],
  },
];

const Categories = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const [modalMode, setModalMode] = useState('add');
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [expandedCategories, setExpandedCategories] = useState([]);
  const [sortState, setSortState] = useState({ column: null, direction: null });

  useEffect(() => {
    dispatch(
      setPageInfo({
        title:
          location?.pathname === APP_ROUTES.ADS.CATEGORIES
            ? 'Manage Ads'
            : 'Manage Promotions',
        breadcrumbs: [
          { label: 'Home', link: '/dashboard' },
          location?.pathname === APP_ROUTES.ADS.CATEGORIES && {
            label: 'Manage Ad',
            link: APP_ROUTES.ADS.BASE,
          },
          {
            label:
              location?.pathname === APP_ROUTES.ADS.CATEGORIES
                ? 'Manage Ads Category'
                : 'Categories',
          },
        ].filter(Boolean),
      })
    );

    return () => {
      dispatch(resetPageInfo());
    };
  }, [dispatch]);

  const toggleCategory = (categoryId) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleSort = (column) => {
    setSortState((prev) => {
      const isAsc = prev.column === column && prev.direction === 'asc';
      return { column, direction: isAsc ? 'desc' : 'asc' };
    });
  };

  const getSortIcon = (column) => {
    if (sortState.column !== column) return <ArrowUpDown className="h-4 w-4" />;
    return sortState.direction === 'asc' ? (
      <ArrowUp className="h-4 w-4" />
    ) : (
      <ArrowDown className="h-4 w-4" />
    );
  };

  const sortedCategories = [...categories].sort((a, b) => {
    if (!sortState.column) return 0;
    const { column, direction } = sortState;

    if (direction === 'asc') {
      return a[column] > b[column] ? 1 : -1;
    } else {
      return a[column] < b[column] ? 1 : -1;
    }
  });

  const handleAddCategory = () => {
    setModalMode('add');
    setSelectedCategory(null);
    setIsModalOpen(true);
  };

  const handleEditCategory = (item, isSubcategory = false) => {
    setModalMode('edit');
    setSelectedCategory({
      ...item,
      isSubcategory,
      parentCategory: isSubcategory
        ? categories.find((cat) =>
            cat.subcategories?.some((sub) => sub.id === item.id)
          )
        : null,
    });
    setIsModalOpen(true);
  };

  return (
    <div className="mx-auto max-w-[1400px] space-y-4 p-4">
      {/* Header section remains unchanged */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold">
          {location?.pathname === APP_ROUTES.ADS.CATEGORIES
            ? 'Categories '
            : 'Category Management'}
        </h1>
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="flex items-center gap-2 rounded-[10px] border-[1px] border-softPaleBlue text-sm font-semibold text-darkBlueText shadow-soft-2xl"
          >
            <Download className="h-5 w-5" />
            Download
          </Button>
          <Button
            onClick={handleAddCategory}
            className="flex items-center gap-2 rounded-[10px] border-[1px] border-softPaleBlue bg-primary-gradient text-sm font-semibold text-white shadow-soft-2xl"
          >
            <UserRoundPlus className="h-5 w-5" />
            Add Categories
          </Button>
        </div>
      </div>

      {/* Search and filter section */}
      <div className="flex flex-col flex-wrap items-end gap-4 rounded-lg border-[1px] border-softPaleBlue bg-white p-3 sm:flex-row">
        <div
          className={`${location?.pathname !== APP_ROUTES.ADS.CATEGORIES ? 'border-r border-softLavender' : ''} relative pr-4`}
        >
          <Input
            value={searchQuery}
            className="w-[200px] pl-8"
            placeholder="Search Country Name"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
        </div>
        {location?.pathname !== APP_ROUTES.ADS.CATEGORIES && (
          <>
            <div className="border-r border-softLavender pr-4">
              <Select>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Product Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Products</SelectItem>
                  <SelectItem value="active">Active Products</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="border-r border-softLavender pr-4">
              <Select>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Sub Cat" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="border-softLavender pr-4">
              <Select>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Sub-Sub Cat" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Subcategories</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </>
        )}
        <div className="ml-auto flex gap-2">
          <Button className="bg-primary-gradient text-white">Search</Button>
          <div className="group flex cursor-pointer items-center gap-[3px] text-xs font-semibold text-red-500 transition-all hover:text-red-600 hover:underline">
            <RotateCcw className="h-4 w-4 group-hover:text-red-600" />
            Reset Filter
          </div>
        </div>
      </div>

      {/* Updated table section with accordion and dropdown menu */}
      <div className="rounded-lg border">
        <Table className="border-none">
          <TableHeader className="bg-softPaleBlue">
            <TableRow className="bg-muted/50">
              <TableHead className="w-[300px] py-3.5 text-sm font-medium text-darkBlueText">
                <button
                  className="flex items-center gap-2"
                  onClick={() => handleSort('name')}
                >
                  Name
                  {getSortIcon('name')}
                </button>
              </TableHead>
              <TableHead className="py-3.5 text-sm font-medium text-darkBlueText">
                <button
                  className="flex items-center gap-2"
                  onClick={() => handleSort('subcategory')}
                >
                  Subcategory
                  {getSortIcon('subcategory')}
                </button>
              </TableHead>
              <TableHead className="py-3.5 text-sm font-medium text-darkBlueText">
                <button
                  className="flex items-center gap-2"
                  onClick={() => handleSort('no_of_subcategory')}
                >
                  No of Subcategory
                  {getSortIcon('no_of_subcategory')}
                </button>
              </TableHead>
              <TableHead className="py-3.5 text-sm font-medium text-darkBlueText">
                <button
                  className="flex items-center gap-2"
                  onClick={() => handleSort('status')}
                >
                  Status
                  {getSortIcon('status')}
                </button>
              </TableHead>
              <TableHead className="py-3.5 text-right text-sm font-medium text-darkBlueText">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedCategories.map((category) => (
              <>
                <TableRow key={category.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => toggleCategory(category.id)}
                        aria-expanded={expandedCategories.includes(category.id)}
                      >
                        {expandedCategories.includes(category.id) ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </Button>
                      <div className="h-8 w-8 overflow-hidden rounded-full">
                        <img
                          src={category.icon}
                          alt={category.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <p className="text-sm font-bold text-darkBlueText">
                        {category.name}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    {category.status ? (
                      <div className="h-5 w-5 rounded-full bg-vividGreen">
                        <Check className="h-5 w-5 px-[2px] text-white" />
                      </div>
                    ) : (
                      <div className="h-5 w-5 rounded-full bg-mutedBlue">
                        <X className="h-5 w-5 px-[2px] text-white" />
                      </div>
                    )}
                  </TableCell>
                  <TableCell className="text-sm font-bold text-darkBlueText">
                    {category.products || '--'}
                  </TableCell>
                  <TableCell>
                    <Select
                      defaultValue={category.status ? 'active' : 'inactive'}
                    >
                      <SelectTrigger
                        className={`${category.status === 'active' ? '!bg-mintGreen' : ''} ${
                          category.status === 'inactive' ? '!bg-red-50' : ''
                        } w-[100px]`}
                      >
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">
                          <span className="flex items-center rounded px-2 py-1 text-sm font-semibold text-emeraldGreen">
                            Active
                          </span>
                        </SelectItem>
                        <SelectItem value="inactive">
                          <span className="flex items-center rounded py-1 text-sm font-semibold text-red-600">
                            Inactive
                          </span>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>

                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <Ellipsis className="h-4 w-4 text-skyBlue" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() => handleEditCategory(category)}
                          className="text-[#2563EB] focus:bg-blue-50 focus:text-[#2563EB]"
                        >
                          <Edit className="mr-2 h-4 w-4" />
                          <span>Edit</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-[#DC2626] focus:bg-red-50 focus:text-[#DC2626]">
                          <Trash2 className="mr-2 h-4 w-4" />
                          <span>Delete</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                {expandedCategories.includes(category.id) &&
                  category.subcategories?.map((sub, index) => (
                    <TableRow key={sub.id} className="bg-muted/50">
                      <TableCell className="pl-12">
                        <div className="flex items-center gap-2 text-sm font-medium text-darkBlueText">
                          {sub.name}
                        </div>
                      </TableCell>
                      <TableCell>
                        {sub.status ? (
                          <div className="h-5 w-5 rounded-full bg-vividGreen">
                            <Check className="h-5 w-5 px-[2px] text-white" />
                          </div>
                        ) : (
                          <div className="h-5 w-5 rounded-full bg-mutedBlue">
                            <X className="h-5 w-5 px-[2px] text-white" />
                          </div>
                        )}
                      </TableCell>
                      <TableCell className="text-sm font-medium text-darkBlueText">
                        {sub.products}
                      </TableCell>
                      <TableCell>
                        <Select
                          defaultValue={sub.status ? 'active' : 'inactive'}
                        >
                          <SelectTrigger className="w-[100px]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="active">
                              <span className="flex items-center rounded px-2 py-1 text-sm font-semibold text-emeraldGreen">
                                Active
                              </span>
                            </SelectItem>
                            <SelectItem value="inactive">
                              <span className="flex items-center rounded py-1 text-sm font-semibold text-red-600">
                                Inactive
                              </span>
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <Ellipsis className="h-4 w-4 text-skyBlue" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem
                              onClick={() => handleEditCategory(sub, true)}
                              className="text-coolSky focus:bg-blue-50 focus:text-coolSky"
                            >
                              <Edit className="mr-2 h-4 w-4" />
                              <span>Edit</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-crimsonRed focus:bg-red-50 focus:text-crimsonRed">
                              <Trash2 className="mr-2 h-4 w-4" />
                              <span>Delete</span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
              </>
            ))}
          </TableBody>
        </Table>
      </div>

      {isModalOpen && (
        <CategoryModal
          mode={modalMode}
          isOpen={isModalOpen}
          initialData={selectedCategory}
          onClose={() => setIsModalOpen(false)}
          onSubmit={(data) => {
            console.log('Form submitted:', data);
            setIsModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default Categories;
