import React from "react";
import Link from "next/link";

const Banner = ({ version }: { version: string }) => {
	return (
		<section className="relative bg-[url(/zivotbezboli-background-nostroke-1920.png)] z-10">
			<div className="absolute inset-0 bg-linear-to-r from-theme3/90 to-theme3/30 -z-10" />
			{version === "one" && (
				<div className="mx-auto max-w-[60%] flex flex-col items-center px-20 py-15 gap-8 z-10">
					<p className="text-4xl text-slate-100 font-semibold text-center after:content-[''] after:absolute after:bg-linear-to-r after:from-slate-100 after:to-theme1 after:top-[calc(100%+5px)] after:left-1/2 after:-translate-x-1/2 after:w-[40%] after:h-1 relative after:rounded-full">
						Bol nije nešto s čime se morate naučiti živjeti.
					</p>

					<p className="text-xl text-slate-100 font-regular text-center">
						Ako vas bol, nelagoda ili ograničen pokret prate već neko vrijeme,
						vrijeme je da otkrijemo pravi uzrok i napravimo prvi korak prema
						trajnom olakšanju.
					</p>
					<Link
						href="/rezervacije"
						className="flex items-center gap-6 bg-theme1 px-8 py-3 rounded-4xl text-3xl text-slate-100 tracking-wider hover:bg-theme4 transition-all duration-300"
					>
						Rezervirajte termin
					</Link>
				</div>
			)}
			{version === "two" && (
				<div className="mx-auto max-w-[60%] flex flex-col items-center px-20 py-15 gap-8 z-10">
					<p className="text-4xl text-slate-100 font-semibold text-center after:content-[''] after:absolute after:bg-linear-to-r after:from-slate-100 after:to-theme1 after:top-[calc(100%+5px)] after:left-1/2 after:-translate-x-1/2 after:w-[40%] after:h-1 relative after:rounded-full">
						Bol je signal, a ne sudbina.
					</p>

					<p className="text-xl text-slate-100 font-regular text-center">
						Kada tijelo stalno šalje isti signal, vrijeme je da poslušamo zašto.
						Pravilnom procjenom i individualnim pristupom moguće je ponovno
						živjeti bez boli.
					</p>
					<Link
						href="/konatkt"
						className="flex items-center gap-6 bg-theme1 px-8 py-3 rounded-4xl text-3xl text-slate-100 tracking-wider hover:bg-theme4 transition-all duration-300"
					>
						Kontaktirajte nas
					</Link>
				</div>
			)}
			{version === "three" && (
				<div className="mx-auto max-w-[60%] flex flex-col items-center px-20 py-15 gap-8 z-10">
					<p className="text-4xl text-slate-100 font-semibold text-center after:content-[''] after:absolute after:bg-linear-to-r after:from-slate-100 after:to-theme1 after:top-[calc(100%+5px)] after:left-1/2 after:-translate-x-1/2 after:w-[40%] after:h-1 relative after:rounded-full">
						Bol ne mora biti vaša svakodnevica.
					</p>

					<p className="text-xl text-slate-100 font-regular text-center">
						Ako se bol vraća unatoč terapijama ili “urednim” nalazima, moguće je
						da uzrok nije tamo gdje ste dosad tražili. Vrijeme je za drugačiji
						pristup.
					</p>
					<Link
						href="/rezervacija"
						className="flex items-center gap-6 bg-theme1 px-8 py-3 rounded-4xl text-3xl text-slate-100 tracking-wider hover:bg-theme4 transition-all duration-300"
					>
						Rezervirajte termin
					</Link>
				</div>
			)}
		</section>
	);
};

export default Banner;
