export const APP_ROUTES = {
  HOME: '/',
  LOGIN: {
    BASE: '/login',
    SUB_ADMIN: '/login/sub-admin',
    SUPER_ADMIN: '/login/super-admin',
    SELECT_USER_TYPE: '/login/select-user-type',
  },
  DASHBOARD: {
    HOME: '/',
    BASE: '/dashboard',
    CATEGORIES: '/categories',
    TOP_INTERESTED: '/top-interests',
    COUNTRY_VISITORS: '/country-visitors',
  },
  ERROR: {
    NOT_FOUND: '/404',
    SERVER_ERROR: '/500',
    MAINTENANCE: '/maintenance',
  },
};
