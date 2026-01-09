import React from "react";
import Image from "next/image";
import Link from "next/link";

const UslugeGrid = () => {
	return (
		<section className="">
			<div className="px-6 py-26 sm:px-10 lg:px-18 lg:py-42">
				<h2 className="text-theme1 text-5xl font-semibold mb-15">Usluge</h2>
				<div className="grid grid-cols-5 items-stretch gap-10">
					<div className="p-8 rounded-2xl flex items-center flex-col gap-4  bg-theme1/20 border-2 border-theme1 hover:bg-theme1/30 transition-all duration-300 justify-between">
						<Image
							src="/usluge/ikone/kronicne.svg"
							alt=""
							width={140}
							height={140}
						/>
						<p className="text-2xl text-theme4 font-semibold text-center">
							Kronična bol
						</p>
						<Link
							href="/usluge/kronicna-bol"
							className="flex items-center gap-6 bg-theme1 px-4 py-2 rounded-2xl text-lg text-slate-100 tracking-wider hover:bg-theme4 transition-all duration-300"
						>
							Pogledaj više
						</Link>
					</div>
					<div className="p-8 rounded-2xl flex items-center flex-col gap-4  bg-theme1/20 border-2 border-theme1 hover:bg-theme1/30 transition-all duration-300 justify-between">
						<Image
							src="/usluge/ikone/vrat.svg"
							alt=""
							width={140}
							height={140}
						/>
						<p className="text-2xl text-theme4 font-semibold text-center">
							Bol u vratu
						</p>
						<Link
							href="/usluge/bol-u-vratu"
							className="flex items-center gap-6 bg-theme1 px-4 py-2 rounded-2xl text-lg text-slate-100 tracking-wider hover:bg-theme4 transition-all duration-300"
						>
							Pogledaj više
						</Link>
					</div>
					<div className="p-8 rounded-2xl flex items-center flex-col gap-4  bg-theme1/20 border-2 border-theme1 hover:bg-theme1/30 transition-all duration-300 justify-between">
						<Image
							src="/usluge/ikone/leda.svg"
							alt=""
							width={140}
							height={140}
						/>
						<p className="text-2xl text-theme4 font-semibold text-center">
							Bol u leđima
						</p>
						<Link
							href="/usluge/bol-u-ledjima"
							className="flex items-center gap-6 bg-theme1 px-4 py-2 rounded-2xl text-lg text-slate-100 tracking-wider hover:bg-theme4 transition-all duration-300"
						>
							Pogledaj više
						</Link>
					</div>
					<div className="p-8 rounded-2xl flex items-center flex-col gap-4  bg-theme1/20 border-2 border-theme1 hover:bg-theme1/30 transition-all duration-300 justify-between">
						<Image
							src="/usluge/ikone/kukovi.svg"
							alt=""
							width={140}
							height={140}
						/>
						<p className="text-2xl text-theme4 font-semibold text-center">
							Bol u kuku
						</p>
						<Link
							href="/usluge/bol-u-kuku"
							className="flex items-center gap-6 bg-theme1 px-4 py-2 rounded-2xl text-lg text-slate-100 tracking-wider hover:bg-theme4 transition-all duration-300"
						>
							Pogledaj više
						</Link>
					</div>
					<div className="p-8 rounded-2xl flex items-center flex-col gap-4  bg-theme1/20 border-2 border-theme1 hover:bg-theme1/30 transition-all duration-300 justify-between">
						<Image
							src="/usluge/ikone/vrat-rame.svg"
							alt=""
							width={140}
							height={140}
						/>
						<p className="text-2xl text-theme4 font-semibold text-center">
							Bol u vratu i ramenu
						</p>
						<Link
							href="/usluge/bol-u-vratu-i-ramenu"
							className="flex items-center gap-6 bg-theme1 px-4 py-2 rounded-2xl text-lg text-slate-100 tracking-wider hover:bg-theme4 transition-all duration-300"
						>
							Pogledaj više
						</Link>
					</div>
					<div className="p-8 rounded-2xl flex items-center flex-col gap-4  bg-theme1/20 border-2 border-theme1 hover:bg-theme1/30 transition-all duration-300 justify-between">
						<Image
							src="/usluge/ikone/lakat.svg"
							alt=""
							width={140}
							height={140}
						/>
						<p className="text-2xl text-theme4 font-semibold text-center">
							Bol u laktu i ruci
						</p>
						<Link
							href="/usluge/bol-u-laktu-i-ruci"
							className="flex items-center gap-6 bg-theme1 px-4 py-2 rounded-2xl text-lg text-slate-100 tracking-wider hover:bg-theme4 transition-all duration-300"
						>
							Pogledaj više
						</Link>
					</div>
					<div className="p-8 rounded-2xl flex items-center flex-col gap-4  bg-theme1/20 border-2 border-theme1 hover:bg-theme1/30 transition-all duration-300 justify-between">
						<Image
							src="/usluge/ikone/koljeno-stopalo.svg"
							alt=""
							width={140}
							height={140}
						/>
						<p className="text-2xl text-theme4 font-semibold text-center">
							Bol u koljenima i stopalima
						</p>
						<Link
							href="/usluge/bol-u-koljenima-i-stopalima"
							className="flex items-center gap-6 bg-theme1 px-4 py-2 rounded-2xl text-lg text-slate-100 tracking-wider hover:bg-theme4 transition-all duration-300"
						>
							Pogledaj više
						</Link>
					</div>
					<div className="p-8 rounded-2xl flex items-center flex-col gap-4  bg-theme1/20 border-2 border-theme1 hover:bg-theme1/30 transition-all duration-300 justify-between">
						<Image
							src="/usluge/ikone/sportske-ozljede.svg"
							alt=""
							width={140}
							height={140}
						/>
						<p className="text-2xl text-theme4 font-semibold text-center">
							Sportske ozljede
						</p>
						<Link
							href="/usluge/sportske-ozljede"
							className="flex items-center gap-6 bg-theme1 px-4 py-2 rounded-2xl text-lg text-slate-100 tracking-wider hover:bg-theme4 transition-all duration-300"
						>
							Pogledaj više
						</Link>
					</div>
					<div className="p-8 rounded-2xl flex items-center flex-col gap-4  bg-theme1/20 border-2 border-theme1 hover:bg-theme1/30 transition-all duration-300 justify-between">
						<Image
							src="/usluge/ikone/djeca.svg"
							alt=""
							width={140}
							height={140}
						/>
						<p className="text-2xl text-theme4 font-semibold text-center">
							Tretmani djece
						</p>
						<Link
							href="/usluge/tretmani-djece"
							className="flex items-center gap-6 bg-theme1 px-4 py-2 rounded-2xl text-lg text-slate-100 tracking-wider hover:bg-theme4 transition-all duration-300"
						>
							Pogledaj više
						</Link>
					</div>
					<div className="p-8 rounded-2xl flex items-center flex-col gap-4  bg-theme1/20 border-2 border-theme1 hover:bg-theme1/30 transition-all duration-300 justify-between">
						<Image
							src="/usluge/ikone/tegobe.svg"
							alt=""
							width={140}
							height={140}
						/>
						<p className="text-2xl text-theme4 font-semibold text-center">
							Ostale tegobe
						</p>
						<Link
							href="/usluge/ostale-tegobe"
							className="flex items-center gap-6 bg-theme1 px-4 py-2 rounded-2xl text-lg text-slate-100 tracking-wider hover:bg-theme4 transition-all duration-300"
						>
							Pogledaj više
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default UslugeGrid;
