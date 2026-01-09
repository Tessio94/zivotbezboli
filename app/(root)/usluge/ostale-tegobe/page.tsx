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
								src="/usluge/ikone/bijele/tegobe.svg"
								alt=""
								width={160}
								height={160}
							/>
							<p className="text-xl text-slate-100 flex flex-row items-start gap-2">
								<BiChevronRight className="text-3xl shrink-0" />
								Ako patite od bilo kojeg oblika bolova u zglobovima ili
								mišićima, zarobljenih živaca, glavobolje ili slično,
								najvjerovatnije ću vam moći pomoći.
							</p>
						</div>
					</div>
					<div className="w-1/2 flex flex-col gap-10 px-6 py-15 sm:px-10 lg:px-18 lg:py-20">
						<h2 className="text-theme1 text-5xl font-semibold">
							Ostale tegobe
						</h2>
						<p className="text-xl text-theme4">
							Pomažemo kod širokog spektra stanja, od bolova u leđima i vratu,
							do glavobolja, migrena i drugih...
						</p>
						<p className="text-xl text-theme4">
							Ako niste sigurni mogu li vam točno pomoći, slobodno me
							kontaktirajte, rado ću porazgovarati s vama o vašim točnim
							potrebama i odlučiti jeste li pravi izbor za mene.
						</p>
						<Link
							href="/usluge/rezervacija"
							className="flex items-center gap-6 bg-theme1 px-4 py-2 rounded-2xl text-lg text-slate-100 tracking-wider hover:bg-theme4 transition-all duration-300 w-fit"
						>
							Rezerviraj termin
						</Link>
					</div>
				</div>
			</section>
		</>
	);
};

export default page;
