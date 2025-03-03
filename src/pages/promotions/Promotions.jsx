import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from '../../components/ui/switch';
import PlansView from '../../components/promotions/PlansView';
import { resetPageInfo, setPageInfo } from '../../redux/slices/pageSlice';
import AdvertisingView from '../../components/promotions/AdvertisingView';

export default function PromotionDashboard() {
  const dispatch = useDispatch();
  const [view, setView] = useState('advertising');

  useEffect(() => {
    dispatch(
      setPageInfo({
        title: 'Manage Promotions',
        breadcrumbs: [
          { label: 'Home', link: '/dashboard' },
          { label: 'Manage Promotions' },
        ],
      })
    );

    return () => {
      dispatch(resetPageInfo());
    };
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-background">
      {/* View Toggle */}
      <div className="container px-4 py-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span
              className={`${view === 'plans' ? 'text-darkBlueText' : 'text-muted-foreground'} text-base font-bold`}
            >
              Plans
            </span>
            <Switch
              checked={view === 'plans'}
              onCheckedChange={(checked) =>
                setView(checked ? 'plans' : 'advertising')
              }
            />
          </div>
          <div className="flex items-center gap-2">
            <span
              className={`${view === 'advertising' ? 'text-darkBlueText' : 'text-muted-foreground'} text-base font-bold`}
            >
              Advertising
            </span>
            <Switch
              checked={view === 'advertising'}
              onCheckedChange={(checked) =>
                setView(checked ? 'advertising' : 'plans')
              }
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container px-4 py-4">
        {view === 'advertising' ? <AdvertisingView /> : <PlansView />}
      </div>
    </div>
  );
}
