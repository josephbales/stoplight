/** @format */

import type { Route } from './+types/home';
import { Welcome } from '~/components/welcome/welcome';
import React from 'react';

export function meta() {
	return [{ title: 'New React Router App' }, { name: 'description', content: 'Welcome to React Router!' }];
}

export function loader() {
	return { message: 'Hello from Vercel' };
}

export default function Home({ loaderData }: Route.ComponentProps) {
	return <Welcome message={loaderData.message} />;
}
