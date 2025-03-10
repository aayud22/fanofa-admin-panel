import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../../components/ui/button';
import { FileDown, PencilLine, Trash2 } from 'lucide-react';
import { APP_ROUTES } from '../../constants/routeConstants';
import { resetPageInfo, setPageInfo } from '../../redux/slices/pageSlice';

const bannerData = [
  {
    title: 'Post Banner In Main Page',
    description: 'Lorem ipsum dolor sit amet, consectetur',
  },
  {
    title: 'Post Banner In Category',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam cupiditate qui quidem enim expedita repellendus eum eligendi dolores sequi repellat, sunt, quos molestiae labore rem.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam cupiditate qui quidem enim expedita repellendus eum eligendi dolores sequi repellat, sunt, quos molestiae labore rem.',
  },
  {
    title: 'Post Banner In Listing Page',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam cupiditate qui quidem enim expedita repellendus eum eligendi dolores sequi repellat, sunt, quos molestiae labore rem.',
  },
];

const pricingOptions = ['1 Month', '3 Month', '6 Month', '12 Month'];
const positions = ['Top', 'Center', 'Middle'];

const AdvertisePricingTable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const breadcrumbs = [
      { label: 'Home', link: APP_ROUTES.DASHBOARD.BASE },
      {
        label: 'Advertising in Banner',
        link: APP_ROUTES.ADVERTISES.ADVERTISE_BANNER_LIST,
      },
      { label: 'Payment & Timing' },
    ].filter(Boolean);

    dispatch(
      setPageInfo({
        title: 'Advertising in Banner',
        breadcrumbs,
      })
    );

    return () => {
      dispatch(resetPageInfo());
    };
  }, [dispatch]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <h2 className="text-lg font-semibold text-darkBlueText">
          Payment & Timing
        </h2>
        <div className="flex flex-wrap items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="text-xs font-medium text-darkBlueText"
          >
            <FileDown className="h-4 w-4" />
            Download
          </Button>
          <Button size="sm" className="bg-primary-gradient text-xs text-white">
            Add Another Section
          </Button>
        </div>
      </div>

      <div className="mx-auto space-y-4">
        {bannerData.map((banner, index) => (
          <PricingTable
            key={index}
            title={banner.title}
            description={banner.description}
          />
        ))}
      </div>
    </div>
  );
};

export default AdvertisePricingTable;

const PricingTable = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] sm:flex-row sm:items-start">
      {/* Left Section - Title & Description */}
      <div className="w-full max-w-sm overflow-hidden p-6 sm:w-1/3">
        <h2 className="text-lg font-semibold text-blue-900">{title}</h2>
        <p className="break-words text-sm text-gray-600">{description}</p>
      </div>

      {/* Right Section - Table */}
      <div className="w-full overflow-x-auto sm:w-3/4">
        <table className="w-full">
          <tbody>
            {positions.map((position, index) => (
              <TableRow
                key={index}
                position={position}
                isFirstRow={index === 0}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const TableRow = ({ position, isFirstRow }) => {
  return (
    <tr className={`${isFirstRow ? '' : 'border-t'}`}>
      <td className="tex-sm px-4 py-3 font-bold text-deepIndigo">{position}</td>
      {pricingOptions.map((month, index) => (
        <td key={index} className="px-4 py-3 text-center text-gray-700">
          <div className="text-xs font-medium">
            <p>{month}</p>
            <p>${index === 0 ? 10 : index * 100}</p>
          </div>
        </td>
      ))}
      <td className="px-4 py-3">
        <div className="flex justify-center space-x-3">
          <button className="text-blue-500 hover:text-blue-700">
            <PencilLine className="h-4 w-4" />
          </button>
          <button className="text-red-500 hover:text-red-700">
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </td>
    </tr>
  );
};
