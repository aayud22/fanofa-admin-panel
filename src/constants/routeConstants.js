export const APP_ROUTES = {
  HOME: '/',
  LOGIN: {
    BASE: '/login',
    SUB_ADMIN: '/login/sub-admin',
    SUPER_ADMIN: '/login/super-admin',
    SELECT_USER_TYPE: '/login/select-user-type',
  },
  DASHBOARD: {
    BASE: '/dashboard',
    HOME: '/dashboard',
    ANALYTICS: '/dashboard/analytics',
    REPORTS: '/dashboard/reports',
    SETTINGS: '/dashboard/settings',
  },
  ERROR: {
    NOT_FOUND: '/404',
    SERVER_ERROR: '/500',
    MAINTENANCE: '/maintenance',
  },
};
