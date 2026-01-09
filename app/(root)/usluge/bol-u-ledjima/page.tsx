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
								src="/usluge/ikone/bijele/leda.svg"
								alt=""
								width={160}
								height={160}
							/>
							<p className="text-xl text-slate-100 flex flex-row items-start  gap-2">
								<BiChevronRight className="text-3xl shrink-0 " />
								Bol je ovdje zaštitni odgovor koji je pošao po zlu.
							</p>
							<p className="text-xl text-slate-100 flex flex-row items-start   gap-2">
								<BiChevronRight className="text-3xl shrink-0" />
								To ima puno više veze sa vašim mozgom, a puno manje sa dijelom
								tijela koji vas boli
							</p>
						</div>
					</div>
					<div className="w-1/2 flex flex-col gap-10 px-6 py-15 sm:px-10 lg:px-18 lg:py-20">
						<h2 className="text-theme1 text-5xl font-semibold">Bol u leđima</h2>
						<p className="text-xl text-theme4">
							Bol u leđima je najčešća tegoba koju vidimo u svojoj ordinaciji.
						</p>
						<p className="text-xl text-theme4">
							Prvi dio procesa je utvrditi postoji li stvarna šteta na
							zglobovima, mišićima ili drugim hardverskim strukturama.
						</p>
						<p className="text-xl text-theme4">
							Bez prisutnosti bilo kakvog &quot;oštećenja&quot;, bol je
							posljedica zaštite mozga i živčanog sustava (često od prošlih
							ozljeda).
						</p>
					</div>
				</div>
			</section>
			<section className="bg-theme1/10">
				<div className="flex">
					<div className="w-1/2 flex flex-col gap-10 px-6 py-15 sm:px-10 lg:px-18 lg:py-20">
						<p className="text-xl text-theme4">
							Bol je ovdje zaštitni odgovor koji je pošao po zlu. Moj posao je
							otkriti zašto i usmjeriti vas na put oporavka
						</p>
						<p className="text-xl text-theme4">
							Bol u donjem dijelu leđa često je bezopasna, a čak i ako su vam
							rekli da imate:
						</p>
						<ul className="flex flex-col gap-4">
							<li className="flex flex-row items-start gap-2">
								<BiChevronRight className="text-3xl text-theme4" />
								<p className="text-xl text-theme4 flex flex-row items-center gap-2 font-semibold">
									Hernija
								</p>
							</li>
							<li className="flex flex-row items-start gap-2">
								<BiChevronRight className="text-3xl text-theme4" />
								<p className="text-xl text-theme4 flex flex-row items-center gap-2 font-semibold">
									Protruzija
								</p>
							</li>
							<li className="flex flex-row items-start gap-2">
								<BiChevronRight className="text-3xl text-theme4" />
								<p className="text-xl text-theme4 flex flex-row items-center gap-2 font-semibold">
									Artritis
								</p>
							</li>
							<li className="flex flex-row items-start gap-2">
								<BiChevronRight className="text-3xl text-theme4" />
								<p className="text-xl text-theme4 flex flex-row items-center gap-2 font-semibold">
									Degeneracija
								</p>
							</li>
							<li className="flex flex-row items-start gap-2">
								<BiChevronRight className="text-3xl text-theme4" />
								<p className="text-xl text-theme4 flex flex-row items-center gap-2 font-semibold">
									Stenoza
								</p>
							</li>
							<li className="flex flex-row items-start gap-2">
								<BiChevronRight className="text-3xl text-theme4" />
								<p className="text-xl text-theme4 flex flex-row items-center gap-2 font-semibold">
									Prolaps diska
								</p>
							</li>
						</ul>
						<p className="text-xl text-theme4">
							Postoji mnogo toga što se može učiniti da se pomogne. Zapravo,
							mnogi ljudi će imati sve te nalaze u odsutnosti boli.
						</p>
						<Link
							href="/usluge/rezervacija"
							className="flex items-center gap-6 bg-theme1 px-4 py-2 rounded-2xl text-lg text-slate-100 tracking-wider hover:bg-theme4 transition-all duration-300 w-fit"
						>
							Rezerviraj termin
						</Link>
					</div>
					<div className="w-1/2">
						<Image
							src="/slike/bez-boli-5-md.jpg"
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
