import React, { useState } from 'react';
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

const categories = [
  {
    id: 1,
    name: 'Category 1',
    icon: 'https://s3-alpha-sig.figma.com/img/dc9f/07e8/db61e6d455caf6eb9af8548ea989593c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U08go0uBM2g2kUiD40q5PTQ3qN2kuh~4fRXGQlIEtA8CL6n3OQVAj~YnfE~9e7uKrlwfrbPN-DRL-5VNyPcN~p91wJjD9b26Rt2uQjrJWhT~xuvEn8HtlIMck9sa49tFepNpX901zy4GEsGpm8QvEbhPzLd1UL03HowpcRDlsx~odZgsu7SGdLHK7TQ6-i1pzNCXmQOShAsDVQipDCd4iu3feIBT-LwC3bLixvH4Ssurmp0pDm8ev5n8LuRpkzM6p-gK5vt1joW0p9siIZfisYTdSPWycjF7q3DgxJv19pLJA4qzsUyffdh6hm~PsqbVvnK~OYHlPSY-wPoHga4Jfw__',
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
    icon: 'https://s3-alpha-sig.figma.com/img/1950/81e0/71b76d8334301e7d91fae8a1cc11d538?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K9egviHrGwODQKkVZ0jVYnhrpeDdIEI3FHV4tsnLtDh5hu8d8J8iLyxR2sZtVC6Wih6JeYzUBdW1Lo57Vx5KOt~M-7WPy0pCbJENj7Mu-qoFOYcQaT~ggEZrq~Vi0CtV3n4-zMN2lvVbUAWlpg0BSSU-68P878ypmX0s7~3dCKWZNHlEderkB8FPPipY-o8uMwh23pdnp4Dhnb4t0UayTBGJ3tzXMpSmW9B-1011Lcf5DKzhO8t1WxTNjaW9uFcd5yX0iVNCDvY6f3lXLdRh5fizPf930yCwBFGU7t4P3NXgfxiPehBx989ozoV25vMMRzIQMzPaF4z17~sKLcj-1w__',
    status: false,
    products: 20,
    subcategories: [
      { id: 21, name: 'Subcategory 2.1', status: true, products: 10 },
    ],
  },
];

const Categories = () => {
  const [modalMode, setModalMode] = useState('add');
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [expandedCategories, setExpandedCategories] = useState([]);
  const [sortState, setSortState] = useState({ column: null, direction: null });

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
        <h1 className="text-2xl font-semibold">Category Management</h1>
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

      {/* Search and filter section remains unchanged */}
      <div className="flex flex-col flex-wrap items-end gap-4 rounded-lg border-[1px] border-softPaleBlue bg-white p-3 sm:flex-row">
        <div className="relative border-r border-softLavender pr-4">
          <Input
            value={searchQuery}
            className="w-[200px] pl-8"
            placeholder="Search Country Name"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
        </div>
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
              <TableHead className="w-[300px] py-3.5 text-sm font-medium text-darkBlueText whitespace-nowrap">
                <button
                  className="flex items-center gap-2"
                  onClick={() => handleSort('name')}
                >
                  Name
                  {getSortIcon('name')}
                </button>
              </TableHead>
              <TableHead className="py-3.5 text-sm font-medium text-darkBlueText whitespace-nowrap">
                <button
                  className="flex items-center gap-2"
                  onClick={() => handleSort('subcategory')}
                >
                  Subcategory
                  {getSortIcon('subcategory')}
                </button>
              </TableHead>
              <TableHead className="py-3.5 text-sm font-medium text-darkBlueText whitespace-nowrap">
                <button
                  className="flex items-center gap-2"
                  onClick={() => handleSort('no_of_subcategory')}
                >
                  No of Subcategory
                  {getSortIcon('no_of_subcategory')}
                </button>
              </TableHead>
              <TableHead className="py-3.5 text-sm font-medium text-darkBlueText whitespace-nowrap">
                <button
                  className="flex items-center gap-2"
                  onClick={() => handleSort('status')}
                >
                  Status
                  {getSortIcon('status')}
                </button>
              </TableHead>
              <TableHead className="py-3.5 text-right text-sm font-medium text-darkBlueText whitespace-nowrap">
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
                        className={`${category.status === 'active' && '!bg-mintGreen'} ${category.status === 'inactive' && '!bg-red-50'} w-[100px]`}
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
