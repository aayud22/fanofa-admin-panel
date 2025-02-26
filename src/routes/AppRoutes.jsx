import AdsPage from '../pages/ads/AdsPage';
import AddNewAd from '../pages/ads/AddNewAd';
import UserList from '../pages/user/UserList';
import ChatPage from '../pages/chat/ChatPage';
import AdDetails from '../pages/ads/AdDetails';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import DealsPage from '../pages/deals/DealsPage';
import CreateDeal from '../pages/deals/CreateDeal';
import NotFound from '../components/error/NotFound';
import UserDetails from '../pages/user/UserDetails';
import Dashboard from '../pages/dashboard/Dashboard';
import AdsPromotions from '../pages/ads/AdsPromotions';
import Categories from '../pages/categories/Categories';
import SubAdminLogin from '../pages/auth/SubAdminLogin';
import { APP_ROUTES } from '../constants/routeConstants';
import ChatDetails from '../components/chat/ChatDetails';
import ServerError from '../components/error/ServerError';
import SuperAdminLogin from '../pages/auth/SuperAdminLogin';
import MaintenancePage from '../pages/error/MaintenancePage';
import TopInterests from '../pages/topInterests/TopInterests';
import SelectUserType from '../components/auth/SelectUserType';
import MySubscribers from '../pages/subscribers/MySubscribers';
import SubscribersPage from '../pages/subscribers/SubscribersPage';
import CountryVisitors from '../pages/countryVisitors/CountryVisitors';
import Promotions from '../pages/promotions/Promotions';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Routes WITHOUT Layout */}
      <Route path={APP_ROUTES.HOME} element={<SelectUserType />} />
      <Route
        path={APP_ROUTES.LOGIN.SELECT_USER_TYPE}
        element={<SelectUserType />}
      />
      <Route path={APP_ROUTES.LOGIN.SUB_ADMIN} element={<SubAdminLogin />} />
      <Route
        path={APP_ROUTES.LOGIN.SUPER_ADMIN}
        element={<SuperAdminLogin />}
      />
      <Route path={APP_ROUTES.ERROR.NOT_FOUND} element={<NotFound />} />
      <Route path={APP_ROUTES.ERROR.SERVER_ERROR} element={<ServerError />} />
      <Route
        path={APP_ROUTES.ERROR.MAINTENANCE}
        element={<MaintenancePage />}
      />

      {/* Routes WITH Layout */}
      <Route element={<Layout />}>
        <Route path={APP_ROUTES.USER.USER_LIST} element={<UserList />} />
        <Route path={APP_ROUTES.USER.USER_DETAILS} element={<UserDetails />} />
        <Route path={APP_ROUTES.DASHBOARD.BASE} element={<Dashboard />} />
        <Route path={APP_ROUTES.CATEGORIES} element={<Categories />} />
        <Route path={APP_ROUTES.ADS.NEW_AD} element={<AddNewAd />} />
        <Route path={APP_ROUTES.ADS.CATEGORIES} element={<Categories />} />
        <Route path={APP_ROUTES.ADS.PROMOTIONS} element={<AdsPromotions />} />
        <Route path={APP_ROUTES.TOP_INTERESTED} element={<TopInterests />} />
        <Route
          path={APP_ROUTES.COUNTRY_VISITORS}
          element={<CountryVisitors />}
        />
        <Route path={APP_ROUTES.ADS.BASE} element={<AdsPage />} />
        <Route path={APP_ROUTES.ADS.AD_DETAILS} element={<AdDetails />} />
        <Route
          path={APP_ROUTES.SUBSCRIBERS.BASE}
          element={<SubscribersPage />}
        />
        <Route
          path={APP_ROUTES.SUBSCRIBERS.ALL}
          element={<SubscribersPage />}
        />
        <Route
          path={APP_ROUTES.SUBSCRIBERS.MY_SUBSCRIBERS}
          element={<MySubscribers />}
        />
        <Route path={APP_ROUTES.DEALS.BASE} element={<DealsPage />} />
        <Route path={APP_ROUTES.DEALS.CREATE} element={<CreateDeal />} />
        <Route path={APP_ROUTES.CHAT.BASE} element={<ChatPage />} />
        <Route path={APP_ROUTES.CHAT.CHAT_DETAILS} element={<ChatDetails />} />
        <Route path={APP_ROUTES.PROMOTIONS.PROMOTION} element={<Promotions />} />
      </Route>

      {/* Catch-all */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
