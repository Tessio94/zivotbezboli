import Link from "next/link";
import React from "react";

const Banner = () => {
	return (
		<section className="bg-[url(/zivotbezboli-background-nostroke-1920.png)]">
			<div className="mx-auto max-w-[50%] flex flex-col items-center px-20 py-10 gap-8">
				<p className="text-4xl text-slate-100 font-semibold text-center after:content-[''] after:absolute after:bg-linear-to-r after:from-slate-100 after:to-theme1 after:top-[calc(100%+5px)] after:left-1/2 after:-translate-x-1/2 after:w-[40%] after:h-1 relative after:rounded-full">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ipsa?
				</p>
				<p className="text-xl text-slate-100 font-regular text-center">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
					doloribus sapiente ullam voluptates porro corrupti consequuntur. Vero
					illum itaque repellat provident quos iure ad dolores quisquam error,
					incidunt non quidem?
				</p>
				<Link
					href="/rezervacije"
					className="flex items-center gap-6 bg-theme1 px-8 py-3 rounded-4xl text-3xl text-slate-100 tracking-wider"
				>
					Rezerviraj
				</Link>
			</div>
		</section>
	);
};

export default Banner;
