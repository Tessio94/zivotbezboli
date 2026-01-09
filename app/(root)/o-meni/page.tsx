import React from "react";
import Image from "next/image";
import Banner from "@/components/Homepage/Banner";
import { CgChevronRight } from "react-icons/cg";

const Page = () => {
	return (
		<>
			<section>
				<div className="relative">
					<div className="bg-theme4/70 absolute inset-0" />
					<div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 flex flex-col gap-6 items-center ">
						<h1 className="text-8xl text-slate-100 font-bold after:content-[''] after:absolute after:bg-linear-to-r after:from-slate-100 after:to-theme1 after:top-[calc(100%+5px)] after:left-1/2 after:-translate-x-1/2 after:w-[50%] after:h-1 relative after:rounded-full text-center">
							O Meni
						</h1>
					</div>
					<div className="max-h-150 overflow-hidden">
						<Image
							className=""
							src="/slike/bez-boli-8-xl.jpg"
							alt="Život bez boli hero image"
							width={1920}
							height={300}
						/>
					</div>
				</div>
			</section>
			<section className="bg-theme1/10 px-6 py-26 sm:px-10 lg:px-18 lg:py-42">
				<div className="flex gap-10">
					<div className="flex flex-col gap-4 px-6 py-15  lg:py-20">
						<h2 className="text-theme1 text-5xl font-semibold mb-11">O meni</h2>
						<p className="text-2xl text-theme4">Kako je sve počelo..?</p>
						<p className="text-xl text-theme4">
							<strong className="underline">Ivan Radičev</strong>, rođen u
							Vinkovcima 13. 04. 1990.
						</p>
						<p className="text-xl text-theme4">
							Nakon završene Osnovne škole 2004.g. odlazim u Zagreb u Srednju
							medicinsku školu kao novi član Košarkaškog kluba Cibona i Hrvatske
							košarkaške reprezentacije. Tijekom završavanja juniorskog staža
							imao sam ozbiljniju ozljedu koja me usporila i udaljila sa trena
							na godinu dana.
						</p>
						<p className="text-xl text-theme4">
							Kroz taj period nisam baš uspio pronaći rješenje za svoje bolove,
							pronaći njen uzrok, a moja se karijera nije više razvijala u
							željenom smjeru.
						</p>
						<p className="text-xl text-theme4">
							Kada sada gledam unazad vidim da je to zapravo početak mog
							interesa sa ono s čime se danas bavim.
						</p>
						<p className="text-xl text-theme4">
							Svi nalazi su mi bili uredni, ali mene je i dalje boljelo i nisam
							mogao igrati, a doktori nisu znali što mi se događa.
						</p>
						<p className="text-xl text-theme4">
							U tom periodu u kojem nisam mogao igrati zbog ozljede, odlučujem
							se na odrađivanje pripravničkog staža godinu dana u Vinogradskoj
							bolnici kao medicinski tehničar na odjelu za intezivnog liječenje.
						</p>
						<p className="text-xl text-theme4">
							Osobno „negativno“ iskustvo te želja za boljim poznavanje ljudskog
							tijela, njegove anatomije, fiziologije usmjerile su me na studij
							<strong>fizioterapije</strong> na kojem sam htio naučiti više o
							<strong>
								zdravlju, rehabilitaciji, liječenju i pomaganju drugima.
							</strong>
						</p>
						<p className="text-xl text-theme4">
							Nakon završetka studija 2014.g.počinjem stažirati u{" "}
							<strong>Poliklinici Arithera</strong> i u istoj godini paralelno
							volontiram u ambulanti <strong>Nogometnog kluba Dinamo.</strong>
						</p>
						<p className="text-xl text-theme4">
							Od 2015. godine počinjem par puta godišnje odlaziti na okupljanja
							mlađih selekcija{" "}
							<strong>Hrvatske nogometne reprezentacije</strong> U14 - U19 te
							iste godine počinjem raditi u privatnom{" "}
							<strong>rehabilitacijskom centru Body Balance</strong> gdje
							primjenjujem sva stečena znanja iz područja{" "}
							<strong>manualne terapije i rehabilitacije</strong> kod{" "}
							<strong>
								opće populacije, vrhunskih sportaša i rekreativaca.
							</strong>
						</p>
						<p className="text-xl text-theme4">
							Paralelno uz rad u Body Balance - u na terenu pratim
							profesionalnog <strong>tenisača Bornu Čorića.</strong>{" "}
							<strong>U 6. mjesecu 2017.g.</strong> odlučujem se za pokretanje
							privatne prakse i stvaranje vlastite priče kroz brend i ordinaciju
							Život Bez Boli koja svakim danom napreduje i pomaže sve većem
							broju ljudi.
						</p>
						<p className="text-xl text-theme4">
							Od 2014. godine konstantno odlazim na razne edukacije iz{" "}
							<strong>Manualne terapije i Manualne medicine</strong>
						</p>
					</div>
					<div className="rounded-[38%_62%_77%_23%/30%_30%_70%_70%] overflow-hidden shrink-0 h-fit">
						<Image
							src="/slike/bez-boli-4-sm.jpg"
							alt=""
							width={600}
							height={1080}
						/>
					</div>
				</div>
			</section>
			<section className="px-6 py-26 sm:px-10 lg:px-18 lg:py-42">
				<h2 className="text-theme1 text-5xl font-semibold mb-15">Školovanje</h2>
				<ul className="flex flex-col gap-8">
					<li className="flex items-start gap-4">
						<CgChevronRight className="shrink-0 text-3xl text-theme1" />
						<p className="text-theme4 text-3xl font-semibold">
							2014 do 2016 Ortopedska manualna fizioterapija
							(Kalteborn/Evjenth–pristup)
						</p>
					</li>
					<li className="flex items-start gap-4">
						<CgChevronRight className="shrink-0 text-3xl text-theme1" />
						<p className="text-theme4 text-3xl font-semibold">
							2016 Akupresurna masaža
						</p>
					</li>
					<li className="flex items-start gap-4">
						<CgChevronRight className="shrink-0 text-3xl text-theme1" />
						<p className="text-theme4 text-3xl font-semibold">
							2016 do 2022 Osteopatija ( Diplomirani Osteopat)
						</p>
					</li>
					<li className="flex items-start gap-4">
						<CgChevronRight className="shrink-0 text-3xl text-theme1" />
						<p className="text-theme4 text-3xl font-semibold">
							2017 do 2019 Tečajevi manualne terapije dr. Aleksandar Stošić
						</p>
					</li>
					<li className="flex items-start gap-4">
						<CgChevronRight className="shrink-0 text-3xl text-theme1" />
						<p className="text-theme4 text-3xl font-semibold">
							2018 Miofoascijalno opuštanje (tečaj Miofascijal Release by
							Barnes)
						</p>
					</li>
					<li className="flex items-start gap-4">
						<CgChevronRight className="shrink-0 text-3xl text-theme1" />
						<p className="text-theme4 text-3xl font-semibold">
							2021-2023 P- DTR metoda (P- DTR terapeut)
						</p>
					</li>
					<li className="flex items-start gap-4">
						<CgChevronRight className="shrink-0 text-3xl text-theme1" />
						<p className="text-theme4 text-3xl font-semibold">
							2025 – Trening funkcionalne jakosti (trenerska edukacija Move Like
							Human - Bodysculpt by Roni Kovačić)
						</p>
					</li>
				</ul>
			</section>
			<Banner version="two" />
		</>
	);
};

export default Page;
