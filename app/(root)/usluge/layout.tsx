"use client";

import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";

const TITLES: Record<string, string> = {
	"/usluge/kronicna-bol": "Kronična bol",
	"/usluge/bol-u-ledjima": "Bol u leđima",
	"/usluge/bol-u-kuku": "Bol u kuku",
	"/usluge/bol-u-koljenima-i-stopalima": "Bol u koljenima i stopalima",
	"/usluge/bol-u-vratu": "Bol u vratu",
	"/usluge/bol-u-vratu-i-ramenu": "Bol u vratu i ramenima",
	"/usluge/bol-u-laktu-i-ruci": "Bol u laktu i ruci",
	"/usluge/sportske-ozljede": "Sportske ozljede",
	"/usluge/tretmani-djece": "Tretmani djece",
	"/usluge/ostale-tegobe": "Ostale tegobe",
};

const IMAGES: Record<string, string> = {
	"/usluge/kronicna-bol": "/slike/bez-boli-8-xl.jpg",
	"/usluge/bol-u-ledjima": "/slike/bez-boli-9-xl.jpg",
	"/usluge/bol-u-kuku": "/slike/bez-boli-2-xl.jpg",
	"/usluge/bol-u-koljenima-i-stopalima": "/slike/bez-boli-8-xl.jpg",
	"/usluge/bol-u-vratu": "/slike/bez-boli-5-xl.jpg",
	"/usluge/bol-u-vratu-i-ramenu": "/slike/bez-boli-6-xl.jpg",
	"/usluge/bol-u-laktu-i-ruci": "/slike/bez-boli-6-xl.jpg",
	"/usluge/sportske-ozljede": "/slike/bez-boli-7-xl.jpg",
	"/usluge/tretmani-djece": "/slike/bez-boli-8-xl.jpg",
	"/usluge/ostale-tegobe": "/slike/bez-boli-9-xl.jpg",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
	const location = usePathname();
	return (
		<>
			<section>
				<div className="relative">
					<div className="bg-theme4/70 absolute inset-0" />
					<div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 flex flex-col gap-6 items-center ">
						<h1 className="text-8xl text-slate-100 font-bold after:content-[''] after:absolute after:bg-linear-to-r after:from-slate-100 after:to-theme1 after:top-[calc(100%+5px)] after:left-1/2 after:-translate-x-1/2 after:w-[50%] after:h-1 relative after:rounded-full text-center">
							{TITLES[location]}
						</h1>
					</div>
					<div className="max-h-150 overflow-hidden">
						<Image
							className=""
							src={IMAGES[location]}
							alt="Život bez boli hero image"
							width={1920}
							height={300}
						/>
					</div>
				</div>
			</section>
			{children}
		</>
	);
};

export default Layout;
