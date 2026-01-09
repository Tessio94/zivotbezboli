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
								src="/usluge/ikone/bijele/koljeno-stopalo.svg"
								alt=""
								width={160}
								height={160}
							/>
							<p className="text-xl text-slate-100 flex flex-row items-start  gap-2">
								<BiChevronRight className="text-3xl shrink-0 " />
								bol u koljenu je često kompenzacija za kuk ili gležanj.
							</p>
							<p className="text-xl text-slate-100 flex flex-row items-start   gap-2">
								<BiChevronRight className="text-3xl shrink-0" />
								mišići koljena onda postaju preopterećeni
							</p>
						</div>
					</div>
					<div className="w-1/2 flex flex-col gap-10 px-6 py-15 sm:px-10 lg:px-18 lg:py-20">
						<h2 className="text-theme1 text-5xl font-semibold">
							Bol u koljima i stopalima
						</h2>
						<p className="text-xl text-theme4">
							Bol u koljenu jedan je od najčešćih problema s kojima se susrećem
							u ordinaciji
						</p>
						<p className="text-xl text-theme4">
							Prema iskustvu, postoje dvije vrste boli u koljenu.
						</p>
						<p className="text-xl text-theme4">
							To može biti oštećenje tetiva, ligamenata ili hrskavice, na
							primjer. Moramo procijeniti opseg bilo kakvih artritičnih promjena
							i vidjeti koliko koljeno ima kapaciteta za promjene.
						</p>
					</div>
				</div>
			</section>
			<section className="bg-theme1/10">
				<div className="flex">
					<div className="w-1/2 flex flex-col gap-10 px-6 py-15 sm:px-10 lg:px-18 lg:py-20">
						<p className="text-xl text-theme4">
							Dobra vijest je da se u većini slučajeva, čak i kada dođe do
							trošenja, bol u koljenu koju osjećate može promijeniti. 80%
							vremena utvrdimo da je bol u koljenu zapravo kompenzacija za kuk
							ili gležanj.
						</p>
						<p className="text-xl text-theme4">
							To znači da mišići oko koljena često previše rade kako bi pomogli
							negdje drugdje. Moj posao je saznati{" "}
							<span className="font-semibold">GDJE</span> i{" "}
							<span className="font-semibold">ZAŠTO</span>.
						</p>
						<p className="text-xl text-theme4">
							To znači da ću vas podvrgnuti temeljitoj procjeni:
						</p>
						<ul className="flex flex-col gap-4">
							<li className="flex flex-row items-start gap-2">
								<BiChevronRight className="text-3xl text-theme4" />
								<p className="text-xl text-theme4 flex flex-row items-center gap-2 font-semibold">
									Statički položaj
								</p>
							</li>
							<li className="flex flex-row items-start gap-2">
								<BiChevronRight className="text-3xl text-theme4" />
								<p className="text-xl text-theme4 flex flex-row items-center gap-2 font-semibold">
									Opseg pokreta
								</p>
							</li>
							<li className="flex flex-row items-start gap-2">
								<BiChevronRight className="text-3xl text-theme4" />
								<p className="text-xl text-theme4 flex flex-row items-center gap-2 font-semibold">
									Neurološka testiranja
								</p>
							</li>
							<li className="flex flex-row items-start gap-2">
								<BiChevronRight className="text-3xl text-theme4" />
								<p className="text-xl text-theme4 flex flex-row items-center gap-2 font-semibold">
									Ortopedsko testiranje
								</p>
							</li>
							<li className="flex flex-row items-start gap-2">
								<BiChevronRight className="text-3xl text-theme4" />
								<p className="text-xl text-theme4 flex flex-row items-center gap-2 font-semibold">
									Testiranje manualnih mišića
								</p>
							</li>
						</ul>
						<Link
							href="/usluge/rezervacija"
							className="flex items-center gap-6 bg-theme1 px-4 py-2 rounded-2xl text-lg text-slate-100 tracking-wider hover:bg-theme4 transition-all duration-300 w-fit"
						>
							Rezerviraj termin
						</Link>
					</div>
					<div className="w-1/2">
						<Image
							src="/slike/bez-boli-8-md.jpg"
							alt=""
							width={960}
							height={960}
						/>
					</div>
				</div>
			</section>
			<Banner version="one" />
		</>
	);
};

export default page;
