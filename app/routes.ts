import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
	index('routes/home.tsx'),
	route('learn-more', 'routes/learn-more.tsx'),
	route('sign-up', 'routes/sign-up.tsx'),
	route('dashboard', 'routes/dashboard.tsx'),
] satisfies RouteConfig;
