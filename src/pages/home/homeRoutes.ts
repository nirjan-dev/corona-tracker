import { RouteConfig } from 'vue-router';
import { Home } from './components/homeComponents';

export const HomeRoutes: RouteConfig[] = [
  {
    path: '/home',
    component: Home,
    name: 'Home'
  }
];
