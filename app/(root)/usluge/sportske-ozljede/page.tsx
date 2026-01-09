import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BiChevronRight } from "react-icons/bi";
import Banner from "@/components/Homepage/Banner";

const page = () => {
	return (
		<>
			<section>
				<div className="flex">
					<div className="relative w-1/2 bg-[url(/zivotbezboli-background-nostroke-1920.png)] z-10">
						<div className="absolute inset-0 bg-linear-to-r from-theme3/90 to-theme3/30 -z-10" />

						<div className="flex flex-col gap-10 px-6 py-15 sm:px-10 lg:px-18 lg:py-20 items-start">
							<Image
								className="inline-block mx-auto"
								src="/usluge/ikone/bijele/sportske-ozljede.svg"
								alt=""
								width={160}
								height={160}
							/>

							<p className="text-xl text-slate-100 flex flex-row items-start   gap-2">
								<BiChevronRight className="text-3xl shrink-0" />
								sa sportskim ozljedama što kao bivši sportaš što kroz praksu
								imam jako puno iskustva i jako dobro znam kako vam pomoći.
							</p>
						</div>
					</div>
					<div className="w-1/2 flex flex-col gap-10 px-6 py-15 sm:px-10 lg:px-18 lg:py-20">
						<h2 className="text-theme1 text-5xl font-semibold">
							Sportske ozljede
						</h2>
						<p className="text-xl text-theme4">
							Ako ste nedavno zadobili sportsku ozljedu ili ako već neko vrijeme
							patite od ozljede – može biti vrlo primamljivo to pripisati kao
							&quot;ništa ozbiljno&quot; i jednostavno &quot;trpjeti&quot; i
							nastaviti najbolje što možete.
						</p>
						<p className="text-xl text-theme4">
							Ili je vrlo lako obeshrabriti se i na kraju se osjećati
							&quot;zaglavljeno&quot;, pitajući se hoćete li se ikada moći
							vratiti sportu ili ostati aktivni kao prije...
						</p>
					</div>
				</div>
			</section>
			<section className="bg-theme1/10">
				<div className="flex">
					<div className="w-1/2 flex flex-col gap-10 px-6 py-15 sm:px-10 lg:px-18 lg:py-20">
						<p className="text-xl text-theme4">
							U ordinaciji Život Bez Boli imamo iskustva u pomaganju svima, od
							rekreativnih sportaša do vrhunskih sportaša
						</p>
						<ul className="flex flex-col gap-4">
							<li className="flex flex-row items-start gap-2">
								<BiChevronRight className="text-3xl text-theme4" />
								<p className="text-xl text-theme4 flex flex-row items-center gap-2 font-semibold">
									Tendinitis
								</p>
							</li>
							<li className="flex flex-row items-start gap-2">
								<BiChevronRight className="text-3xl text-theme4" />
								<p className="text-xl text-theme4 flex flex-row items-center gap-2 font-semibold">
									Ozljede od trčanja i biciklizma
								</p>
							</li>
							<li className="flex flex-row items-start gap-2">
								<BiChevronRight className="text-3xl text-theme4" />
								<p className="text-xl text-theme4 flex flex-row items-center gap-2 font-semibold">
									Burzitis
								</p>
							</li>
							<li className="flex flex-row items-start gap-2">
								<BiChevronRight className="text-3xl text-theme4" />
								<p className="text-xl text-theme4 flex flex-row items-center gap-2 font-semibold">
									Istegnuća i uganuća
								</p>
							</li>
							<li className="flex flex-row items-start gap-2">
								<BiChevronRight className="text-3xl text-theme4" />
								<p className="text-xl text-theme4 flex flex-row items-center gap-2 font-semibold">
									Rehabilitacija nakon operacije
								</p>
							</li>
							<li className="flex flex-row items-start gap-2">
								<BiChevronRight className="text-3xl text-theme4" />
								<p className="text-xl text-theme4 flex flex-row items-center gap-2 font-semibold">
									Oštećenje ligamenata
								</p>
							</li>
							<li className="flex flex-row items-start gap-2">
								<BiChevronRight className="text-3xl text-theme4" />
								<p className="text-xl text-theme4 flex flex-row items-center gap-2 font-semibold">
									Bol u gležnju i koljenu
								</p>
							</li>
							<li className="flex flex-row items-start gap-2">
								<BiChevronRight className="text-3xl text-theme4" />
								<p className="text-xl text-theme4 flex flex-row items-center gap-2 font-semibold">
									Rehabilitacija nakon potresa mozga
								</p>
							</li>
						</ul>
					</div>
					<div className="w-1/2">
						<Image
							src="/slike/bez-boli-8-md.jpg"
							alt=""
							width={960}
							height={1080}
						/>
					</div>
				</div>
			</section>
			<Banner version="one" />
		</>
	);
};

export default page;
