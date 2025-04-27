import { Welcome } from '~/components/welcome/welcome';
import React from 'react';

export function meta() {
	return [
		{ title: 'Stoplight' },
		{ name: 'description', content: 'The best way to track the foods you like and dislike!' },
	];
}

export default function Home() {
	return (
		<>
			<Welcome />
		</>
	);
}
