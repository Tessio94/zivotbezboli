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
								src="/usluge/ikone/bijele/vrat-rame.svg"
								alt=""
								width={160}
								height={160}
							/>
							<p className="text-xl text-slate-100 flex flex-row items-start  gap-2">
								<BiChevronRight className="text-3xl shrink-0 " />
								Bol u vratu i ramenu često je povezana te može nastati zbog
								lošeg držanja, prenaprezanja ili kompenzacija nakon starih
								ozljeda.
							</p>
							<p className="text-xl text-slate-100 flex flex-row items-start   gap-2">
								<BiChevronRight className="text-3xl shrink-0" />
								Problemi u ovom području mogu uzrokovati smanjenu pokretljivost,
								širenje boli u ruku, trnce ili osjećaj ukočenosti
							</p>
						</div>
					</div>
					<div className="w-1/2 flex flex-col gap-10 px-6 py-15 sm:px-10 lg:px-18 lg:py-20">
						<h2 className="text-theme1 text-5xl font-semibold">
							Bol u vratu i ramenu
						</h2>
						<p className="text-xl text-theme4">
							Vrlo često ova dva problema idu ruku pod ruku, s bolovima u ramenu
							zbog vrata ili bolovima u vratu uzrokovanim iz ramena.
						</p>
						<p className="text-xl text-theme4">
							Cilj tretmana je pronaći stvarni uzrok boli i vratiti normalan,
							bezbolan pokret kroz individualnu procjenu cijelog tijela.
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
			<section className="bg-theme1/10">
				<div className="flex">
					<div className="w-1/2 flex flex-col gap-10 px-6 py-15 sm:px-10 lg:px-18 lg:py-20">
						<p className="text-xl text-theme4">
							Moj posao je doći do korijena{" "}
							<span className="font-semibold">ZAŠTO</span> uopće imate bol. To
							zahtijeva temeljit pregled kako bi se sagledali vaši:
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
						<p className="text-xl text-theme4">
							Uzroci boli u vratu i ramenima su vrlo široki i mogu biti
							posljedica prošlih trauma, kompenzacija, mikroozljede, napetosti
							povezane s naprezanjem očiju, prenesene boli iz čeljusti i drugih
							čimbenika.
						</p>
						<p className="text-xl text-theme4">
							Bol u ramenu može imati brojne uzroke, poput pritiska živaca,
							mišićne neravnoteže ili iritacije struktura tijekom vremena.
						</p>
					</div>
					<div className="w-1/2">
						<Image
							src="/slike/bez-boli-10-md.jpg"
							alt=""
							width={960}
							height={960}
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default page;
