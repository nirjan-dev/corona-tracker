import { RouteConfig } from 'vue-router';
import { Search } from 'pages/search/components/searchComponents';

export const SearchRoutes: RouteConfig[] = [
  {
    path: '/search/:countryCode',
    component: Search,
    name: 'Search'
  }
];
