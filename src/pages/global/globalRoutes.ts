import { RouteConfig } from 'vue-router';
import { Global } from './components/globalComponents';

export const GlobalRoutes: RouteConfig[] = [
  {
    path: '/global',
    component: Global,
    name: 'Global'
  }
];
