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
import DisputeList from '../pages/enquiry/DisputeList';
import SupportList from '../pages/enquiry/SupportList';
import Categories from '../pages/categories/Categories';
import SubAdminLogin from '../pages/auth/SubAdminLogin';
import Promotions from '../pages/promotions/Promotions';
import { APP_ROUTES } from '../constants/routeConstants';
import ChatDetails from '../components/chat/ChatDetails';
import ReportAdList from '../pages/enquiry/ReportAdList';
import ServerError from '../components/error/ServerError';
import AdvertsList from '../pages/advertises/AdvertsList';
import ContactUsList from '../pages/enquiry/ContactUsList';
import SuperAdminLogin from '../pages/auth/SuperAdminLogin';
import MaintenancePage from '../pages/error/MaintenancePage';
import ComplaintsList from '../pages/enquiry/ComplaintsList';
import TopInterests from '../pages/topInterests/TopInterests';
import SelectUserType from '../components/auth/SelectUserType';
import MySubscribers from '../pages/subscribers/MySubscribers';
import BillingHistory from '../pages/promotions/BillingHistory';
import SubscribersPage from '../pages/subscribers/SubscribersPage';
import SupportTicketList from '../pages/enquiry/SupportTicketList';
import ReviewsDetails from '../pages/reviewAndStar/ReviewsDetails';
import ManageEnquiryForms from '../pages/enquiry/ManageEnquiryForms';
import AdvertsBannerList from '../pages/advertises/AdvertsBannerList';
import CountryVisitors from '../pages/countryVisitors/CountryVisitors';
import NotificationPage from '../pages/notifications/NotificationPage';
import ReviewsWithStars from '../pages/reviewAndStar/ReviewsWithStars';
import AdvertisePricingTable from '../pages/advertises/AdvertisePricingTable';

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
        <Route
          path={APP_ROUTES.PROMOTIONS.PROMOTION}
          element={<Promotions />}
        />
        <Route
          path={APP_ROUTES.PROMOTIONS.BILLING_HISTORY}
          element={<BillingHistory />}
        />
        <Route
          path={APP_ROUTES.NOTIFICATION.NOTIFICATION_LIST}
          element={<NotificationPage />}
        />
        <Route
          path={APP_ROUTES.ADVERTISES.ADVERTISE_LIST}
          element={<AdvertsList />}
        />
        <Route
          path={APP_ROUTES.ADVERTISES.ADVERTISE_BANNER_LIST}
          element={<AdvertsBannerList />}
        />
        <Route
          path={APP_ROUTES.ADVERTISES.ADVERTISE_PAYMENT_AND_TIMING}
          element={<AdvertisePricingTable />}
        />
        <Route
          path={APP_ROUTES.ENQUIRY.MANAGE_ENQUIRY}
          element={<ManageEnquiryForms />}
        />
        <Route
          path={APP_ROUTES.ENQUIRY.CONTACT_US_LIST}
          element={<ContactUsList />}
        />
        <Route
          path={APP_ROUTES.ENQUIRY.DISPUTE_LIST}
          element={<DisputeList />}
        />
        <Route
          path={APP_ROUTES.ENQUIRY.COMPLAINTS_LIST}
          element={<ComplaintsList />}
        />
        <Route
          path={APP_ROUTES.ENQUIRY.SUPPORT_LIST}
          element={<SupportList />}
        />
        <Route
          path={APP_ROUTES.ENQUIRY.REPORT_ADS_LIST}
          element={<ReportAdList />}
        />
        <Route
          path={APP_ROUTES.ENQUIRY.SUPPORT_TICKET_LIST}
          element={<SupportTicketList />}
        />
        <Route
          path={APP_ROUTES.REVIEW_AND_STAR.REVIEW_AND_STAR_LIST}
          element={<ReviewsWithStars />}
        />
        <Route
          path={APP_ROUTES.REVIEW_AND_STAR.REVIEW_AND_STAR_DETAILS}
          element={<ReviewsDetails />}
        />
      </Route>

      {/* Catch-all */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
