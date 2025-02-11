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
  },
  ADS: {
    BASE: '/manage-ads',
    AD_LIST: '/manage-ads/list',
    NEW_AD: '/manage-ads/new',
    EDIT_AD: '/manage-ads/edit',
    AD_DETAILS: '/manage-ads/:id',
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
