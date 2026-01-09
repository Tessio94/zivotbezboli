import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BiChevronRight } from "react-icons/bi";

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
								src="/usluge/ikone/bijele/djeca.svg"
								alt=""
								width={160}
								height={160}
							/>
							<p className="text-xl text-slate-100 flex flex-row items-start gap-2">
								<BiChevronRight className="text-3xl shrink-0" />
								Kod djece se tegobe često manifestiraju kroz bol, napetost,
								poteškoće s pažnjom, spavanjem ili učenjem, a pravilnom
								procjenom i terapijskim pristupom moguće je podržati njihov
								zdrav razvoj i funkcioniranje.
							</p>
						</div>
					</div>
					<div className="w-1/2 flex flex-col gap-10 px-6 py-15 sm:px-10 lg:px-18 lg:py-20">
						<h2 className="text-theme1 text-5xl font-semibold">
							Tretmani djece
						</h2>
						<p className="text-xl text-theme4">
							Pomažemo kod širokog spektra problema kod djece:
						</p>
						<ul className="flex flex-col gap-4">
							<li className="flex flex-row items-start gap-2">
								<BiChevronRight className="text-3xl text-theme4" />
								<p className="text-xl text-theme4 flex flex-row items-center gap-2 font-semibold">
									Poremećaj pažnje
								</p>
							</li>
							<li className="flex flex-row items-start gap-2">
								<BiChevronRight className="text-3xl text-theme4" />
								<p className="text-xl text-theme4 flex flex-row items-center gap-2 font-semibold">
									Poremećaj koncetracije
								</p>
							</li>
							<li className="flex flex-row items-start gap-2">
								<BiChevronRight className="text-3xl text-theme4" />
								<p className="text-xl text-theme4 flex flex-row items-center gap-2 font-semibold">
									Poremećaj u učenju
								</p>
							</li>
							<li className="flex flex-row items-start gap-2">
								<BiChevronRight className="text-3xl text-theme4" />
								<p className="text-xl text-theme4 flex flex-row items-center gap-2 font-semibold">
									Glavobolje i Migrene
								</p>
							</li>
							<li className="flex flex-row items-start gap-2">
								<BiChevronRight className="text-3xl text-theme4" />
								<p className="text-xl text-theme4 flex flex-row items-center gap-2 font-semibold">
									Poremećaji spavanja
								</p>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	);
};

export default page;
