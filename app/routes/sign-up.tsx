import React from 'react';
import { SignUp as ClerkSignUp } from '@clerk/clerk-react';

export function meta() {
	return [
		{ title: 'Stoplight - Get Started' },
		{ name: 'description', content: 'Get started tracking the foods you like and dislike!' },
	];
}

export default function SignUp() {
	return (
		<div className="flex flex-col items-center justify-center gap-4 mt-16">
			<ClerkSignUp
				appearance={{
					elements: {
						formButtonPrimary: 'bg-blue-500 hover:bg-blue-600 text-white',
						rootBox: 'bg-green/95 shadow-lg rounded-lg',
						cardBox: 'bg-black/5',
						card: 'bg-black/5',
						logoBox: 'bg-black/10',
						header: 'bg-black/10 text-white',
						headerTitle: 'text-2xl font-bold text-center',
						headerSubtitle: 'text-gray-600 text-center',
					},
				}}
			/>
		</div>
	);
}
