import { RouteConfig } from 'vue-router';
import { HomeRoutes } from 'src/pages/home/homeRoutes';
import MainLayout from 'layouts/MainLayout.vue'
import { GlobalRoutes } from 'src/pages/global/globalRoutes';
import { SearchRoutes } from 'src/pages/search/searchRoutes';
const routes: RouteConfig[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/',
    component: MainLayout,
    children: [
      ...HomeRoutes,
      ...GlobalRoutes,
      ...SearchRoutes,
    ]
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  });
}

export default routes;
