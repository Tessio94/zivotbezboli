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
						{/* <Image src="/ikona.png" alt="" width={960} height={1112} /> */}
						{/* <div className="rounded-[38%_62%_50%_50%/30%_30%_70%_70%] overflow-hidden shrink-0 h-fit">
            <Image src="/ikona.png" alt="" width={960} height={1112} />
          </div> */}
						<div className="flex flex-col gap-10 px-6 py-15 sm:px-10 lg:px-18 lg:py-20 items-start">
							<Image
								className="inline-block mx-auto"
								src="/usluge/ikone/bijele/kronicne.svg"
								alt=""
								width={160}
								height={160}
							/>
							<p className="text-xl text-slate-100 flex flex-row items-start gap-2">
								<BiChevronRight className="text-3xl shrink-0" />
								Bol koju osjećate duže od 6 mjeseci se klasificira kao kronična
								bol
							</p>
							<p className="text-xl text-slate-100 flex flex-row items-start gap-2">
								<BiChevronRight className="text-3xl shrink-0" />
								To ima puno više veze sa vašim mozgom, a puno manje sa dijelom
								tijela koji vas boli
							</p>
						</div>
					</div>
					<div className="w-1/2 flex flex-col gap-10 px-6 py-15 sm:px-10 lg:px-18 lg:py-20">
						<h2 className="text-theme1 text-5xl font-semibold">Kronična bol</h2>
						<p className="text-xl text-theme4">
							Specijaliziran sam za bolove koji traju duže od 6 mjeseci, ako vas
							boli duže od toga to znači da je neizbježno nešto pošlo po zlu.
						</p>
						<p className="text-xl text-theme4">
							Ako ste oštetili neko područje, to je sigurno zacijelilo.
						</p>
						<p className="text-xl text-theme4">
							Bol koju sada osjećate više je povezana s zaštitom živčanog
							sustava nego s samom ozljedom.
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
