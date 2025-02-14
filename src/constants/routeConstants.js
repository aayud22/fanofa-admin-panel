export const APP_ROUTES = {
  HOME: '/',
  CATEGORIES: '/categories',
  TOP_INTERESTED: '/top-interests',
  COUNTRY_VISITORS: '/country-visitors',
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
    AD_LIST: '/ads/list',
    NEW_AD: '/ads/new',
    EDIT_AD: '/ads/edit',
    AD_DETAILS: '/ads/:id',
    CATEGORIES: '/ads/categories',
    PROMOTIONS: '/ads/promotions',
  },
  DEALS: {
    BASE: '/deals',
    LIST: '/deals/list',
    CREATE: '/deals/create',
    EDIT: '/deals/edit/:id',
    DETAILS: '/deals/:id',
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
};
