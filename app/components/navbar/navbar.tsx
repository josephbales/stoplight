import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/react-router';
import logo from './logo-horizontal.svg';
import React from 'react';
import { Link } from 'react-router';

export default function NavBar() {
	return (
		<nav className="w-full h-14 flex items-center shadow-lg shadow-black bg-black/15 rounded-xl">
			<div className="w-full h-full flex items-center justify-between">
				<Link to={'/'} viewTransition>
					<div className="flex items-center justify-start gap-4 ml-4 drop-shadow-lg drop-shadow-black">
						<img src={logo} alt="Stoplight" className="h-8" />
						<h1 className="text-3xl font-bold">
							<span className="text-rose-600">S</span>
							<span className="text-rose-600">t</span>
							<span className="text-rose-600">o</span>
							<span className="text-yellow-300">p</span>
							<span className="text-yellow-300">l</span>
							<span className="text-yellow-300">i</span>
							<span className="text-green-400">g</span>
							<span className="text-green-400">h</span>
							<span className="text-green-400">t</span>
						</h1>
					</div>
				</Link>
				<div className="flex items-center justify-end gap-4 mr-8 text-green-900 dark:text-yellow-300">
					<SignedOut>
						<SignInButton />
					</SignedOut>
					<SignedIn>
						<UserButton />
					</SignedIn>
				</div>
			</div>
		</nav>
	);
}
