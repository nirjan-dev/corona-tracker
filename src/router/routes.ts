import { RouteConfig } from 'vue-router';
import { HomeRoutes } from 'src/pages/home/homeRoutes';

const routes: RouteConfig[] = [
  {
    path: '/',
    redirect: '/home'
  },
  ...HomeRoutes
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  });
}

export default routes;
