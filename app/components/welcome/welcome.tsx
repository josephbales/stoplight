import React from 'react';
import { Button } from '~/components/ui/button';
import { Link } from 'react-router';

export function Welcome() {
	return (
		<section className="flex items-start justify-center pt-16 pb-4 h-full">
			<div className="flex-1 flex flex-col items-center gap-16 min-h-0">
				<div className="max-w-md px-4 sm:max-w-2xl sm:px-6 md:max-w-3xl lg:max-w-4xl lg:px-0 xl:max-w-5xl 2xl:max-w-6xl">
					<div className="flex flex-col items-center justify-center gap-4 text-shadow-md text-shadow-black">
						<div className="text-center text-4xl font-bold tracking-tight text-white sm:text-6xl sm:tracking-tight lg:text-[4rem] xl:text-[6rem] xl:tracking-tight 2xl:text-[6.5rem]">
							<span className="text-cyan-500 hover:drop-shadow-xl hover:drop-shadow-black">The</span>
							<span className="text-purple-400 hover:drop-shadow-xl hover:drop-shadow-black"> best</span>
							<span className="text-cyan-500 hover:drop-shadow-xl hover:drop-shadow-black"> way</span>
							<span className="text-cyan-500 hover:drop-shadow-xl hover:drop-shadow-black"> to</span>
							<span className="text-orange-400 hover:drop-shadow-xl hover:drop-shadow-black"> track</span>
							<span className="text-cyan-500 hover:drop-shadow-xl hover:drop-shadow-black"> the</span>
							<span className="text-yellow-300 hover:drop-shadow-xl hover:drop-shadow-black"> foods</span>
							<span className="text-cyan-500 hover:drop-shadow-xl hover:drop-shadow-black"> you</span>
							<span className="text-green-400 hover:drop-shadow-xl hover:drop-shadow-black"> like</span>
							<span className="text-cyan-500 hover:drop-shadow-xl hover:drop-shadow-black"> and</span>
							<span className="text-rose-600 hover:drop-shadow-xl hover:drop-shadow-black"> dislike</span>
						</div>
					</div>
				</div>
				<div className="flex flex-row items-center justify-center gap-12">
					<Button
						asChild
						variant="default"
						size="lg"
						className="mt-8 text-xl hover:bg-yellow-200 hover:text-green-900 bg-yellow-300 text-green-950 cursor-pointer drop-shadow-xl drop-shadow-black active:drop-shadow-none">
						<Link to={'/learn-more'} viewTransition>
							Learn More
						</Link>
					</Button>
					<Button
						asChild
						variant="default"
						size="lg"
						className="mt-8 text-xl hover:bg-yellow-200 hover:text-green-900 bg-yellow-300 text-green-950 cursor-pointer drop-shadow-xl drop-shadow-black active:drop-shadow-none">
						<Link to={'/sign-up'} viewTransition>
							Get Started! --&gt;
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
