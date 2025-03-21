export const APP_ROUTES = {
  HOME: '/',
  CATEGORIES: '/categories',
  TOP_INTERESTED: '/top-interests',
  COUNTRY_VISITORS: '/country-visitors',
  CHAT: {
    BASE: '/chat',
    CHAT_DETAILS: '/chat-details',
  },
  USER: {
    USER_LIST: '/user-list',
    USER_DETAILS: '/user-details',
  },
  SUBSCRIBERS: {
    BASE: '/subscribers',
    ALL: '/subscribers/all',
    MY_SUBSCRIBERS: '/subscribers/my',
  },
  ADS: {
    BASE: '/ads',
    NEW_AD: '/ads/new',
    AD_LIST: '/ads/list',
    EDIT_AD: '/ads/edit',
    AD_DETAILS: '/ads/:id',
    CATEGORIES: '/ads/categories',
    PROMOTIONS: '/ads/promotions',
  },
  PROMOTIONS: {
    PROMOTION: '/promotions',
    BILLING_HISTORY: '/promotions/billing-history',
  },
  NOTIFICATION: {
    NOTIFICATION_LIST: '/notification',
    NOTIFICATION_DETAILS: '/notification/details',
  },
  ADVERTISES: {
    ADVERTISE_LIST: '/advertise',
    ADVERTISE_BANNER_LIST: '/advertise/banner',
    ADVERTISE_PAYMENT_AND_TIMING: '/advertise/payment-timing',
  },
  DEALS: {
    BASE: '/deals',
    LIST: '/deals/list',
    DETAILS: '/deals/:id',
    CREATE: '/deals/create',
    EDIT: '/deals/edit/:id',
  },
  LOGIN: {
    BASE: '/login',
    SUB_ADMIN: '/login/sub-admin',
    SUPER_ADMIN: '/login/super-admin',
    SELECT_USER_TYPE: '/login/select-user-type',
  },
  DASHBOARD: {
    BASE: '/dashboard',
  },
  ERROR: {
    NOT_FOUND: '/404',
    SERVER_ERROR: '/500',
    MAINTENANCE: '/maintenance',
  },
  ENQUIRY: {
    SUPPORT_LIST: '/enquiry/support-list',
    DISPUTE_LIST: '/enquiry/dispute-list',
    CONTACT_US_LIST: '/enquiry/contact-list',
    MANAGE_ENQUIRY: '/enquiry/manage-enquiry',
    REPORT_ADS_LIST: '/enquiry/report-ads-list',
    COMPLAINTS_LIST: '/enquiry/complaints-list',
    SUPPORT_TICKET_LIST: '/enquiry/support-ticket-list',
  },
  REVIEW_AND_STAR: {
    REVIEW_AND_STAR_LIST: '/review-and-star-list',
    REVIEW_AND_STAR_DETAILS: '/review-and-star-details',
  },
};
