import React from "react";
import Image from "next/image";

const UslugeGrid = () => {
	return (
		<section className="">
			<div className="px-30 py-20">
				<h2 className="text-theme1 text-5xl font-semibold mb-15">Usluge</h2>
				<div className="grid grid-cols-5 items-stretch gap-10">
					<div className="p-8 rounded-2xl flex items-center flex-col gap-10  bg-theme1/20 border-2 border-theme1 hover:bg-theme1/30 transition-all duration-300">
						<Image
							src="/usluge/ikone/kronicne.svg"
							alt=""
							width={140}
							height={140}
						/>
						<p className="text-2xl text-theme4 font-semibold text-center">
							Kronična bol
						</p>
					</div>
					<div className="p-8 rounded-2xl flex items-center flex-col gap-10  bg-theme1/20 border-2 border-theme1 hover:bg-theme1/30 transition-all duration-300">
						<Image
							src="/usluge/ikone/vrat.svg"
							alt=""
							width={140}
							height={140}
						/>
						<p className="text-2xl text-theme4 font-semibold text-center">
							Bol u vratu
						</p>
					</div>
					<div className="p-8 rounded-2xl flex items-center flex-col gap-10  bg-theme1/20 border-2 border-theme1 hover:bg-theme1/30 transition-all duration-300">
						<Image
							src="/usluge/ikone/leda.svg"
							alt=""
							width={140}
							height={140}
						/>
						<p className="text-2xl text-theme4 font-semibold text-center">
							Bol u leđima
						</p>
					</div>
					<div className="p-8 rounded-2xl flex items-center flex-col gap-10  bg-theme1/20 border-2 border-theme1 hover:bg-theme1/30 transition-all duration-300">
						<Image
							src="/usluge/ikone/kukovi.svg"
							alt=""
							width={140}
							height={140}
						/>
						<p className="text-2xl text-theme4 font-semibold text-center">
							Bol u kuku
						</p>
					</div>
					<div className="p-8 rounded-2xl flex items-center flex-col gap-10  bg-theme1/20 border-2 border-theme1 hover:bg-theme1/30 transition-all duration-300">
						<Image
							src="/usluge/ikone/vrat-rame.svg"
							alt=""
							width={140}
							height={140}
						/>
						<p className="text-2xl text-theme4 font-semibold text-center">
							Bol u vratu i ramenu
						</p>
					</div>
					<div className="p-8 rounded-2xl flex items-center flex-col gap-10  bg-theme1/20 border-2 border-theme1 hover:bg-theme1/30 transition-all duration-300">
						<Image
							src="/usluge/ikone/lakat.svg"
							alt=""
							width={140}
							height={140}
						/>
						<p className="text-2xl text-theme4 font-semibold text-center">
							Bol u laktu i ruci
						</p>
					</div>
					<div className="p-8 rounded-2xl flex items-center flex-col gap-10  bg-theme1/20 border-2 border-theme1 hover:bg-theme1/30 transition-all duration-300">
						<Image
							src="/usluge/ikone/koljeno-stopalo.svg"
							alt=""
							width={140}
							height={140}
						/>
						<p className="text-2xl text-theme4 font-semibold text-center">
							Bol u koljenima i stopalima
						</p>
					</div>
					<div className="p-8 rounded-2xl flex items-center flex-col gap-10  bg-theme1/20 border-2 border-theme1 hover:bg-theme1/30 transition-all duration-300">
						<Image
							src="/usluge/ikone/sportske-ozljede.svg"
							alt=""
							width={140}
							height={140}
						/>
						<p className="text-2xl text-theme4 font-semibold text-center">
							Sportske ozljede
						</p>
					</div>
					<div className="p-8 rounded-2xl flex items-center flex-col gap-10  bg-theme1/20 border-2 border-theme1 hover:bg-theme1/30 transition-all duration-300">
						<Image
							src="/usluge/ikone/djeca.svg"
							alt=""
							width={140}
							height={140}
						/>
						<p className="text-2xl text-theme4 font-semibold text-center">
							Tretmani djece
						</p>
					</div>
					<div className="p-8 rounded-2xl flex items-center flex-col gap-10  bg-theme1/20 border-2 border-theme1 hover:bg-theme1/30 transition-all duration-300">
						<Image
							src="/usluge/ikone/kronicne.svg"
							alt=""
							width={140}
							height={140}
						/>
						<p className="text-2xl text-theme4 font-semibold text-center">
							Ostale tegobe
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default UslugeGrid;
