import { RouteConfig } from 'vue-router';
import { HomeRoutes } from 'src/pages/home/homeRoutes';
import MainLayout from 'layouts/MainLayout.vue'
const routes: RouteConfig[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/',
    component: MainLayout,
    children: [
      ...HomeRoutes
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
