import React from "react";
import Image from "next/image";
import Link from "next/link";
import Contact from "@/components/Homepage/Contact";
import { CiLocationOn, CiMail, CiMobile3 } from "react-icons/ci";

const Page = () => {
	return (
		<>
			<section>
				<div className="relative">
					<div className="bg-theme4/70 absolute inset-0" />
					<div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 flex flex-col gap-6 items-center ">
						<h1 className="text-8xl text-slate-100 font-bold after:content-[''] after:absolute after:bg-linear-to-r after:from-slate-100 after:to-theme1 after:top-[calc(100%+5px)] after:left-1/2 after:-translate-x-1/2 after:w-[50%] after:h-1 relative after:rounded-full text-center">
							Kontakt
						</h1>
					</div>
					<div className="max-h-150 overflow-hidden">
						<Image
							className=""
							src="/slike/bez-boli-2-xl.jpg"
							alt="Život bez boli hero image"
							width={1920}
							height={300}
						/>
					</div>
				</div>
			</section>
			<section className="px-6 py-26 sm:px-10 lg:px-18 lg:py-42">
				<div className="flex flex-col gap-4">
					<h2 className="text-theme1 text-5xl font-semibold mb-11">Kontakt</h2>
					<p className="text-xl text-theme4">
						Imate pitanje, dvojbu ili želite rezervirati termin?
					</p>

					<p className="text-xl text-theme4">
						Slobodno se javite putem telefona, e-maila ili kontakt forme. Rado
						ću odgovoriti na vaša pitanja i pomoći vam procijeniti je li moj
						pristup pravi izbor za vas.
					</p>

					<p className="text-xl text-theme4">
						Svaki tretman započinje razgovorom i individualnom procjenom, kako
						bismo zajedno pronašli najbolji put prema životu bez boli.
					</p>
					<Link
						href="/rezervacija"
						className="flex items-center gap-6 bg-theme1 px-4 py-2 rounded-2xl text-lg text-slate-100 tracking-wider hover:bg-theme4 transition-all duration-300 w-fit"
					>
						Rezervirajte termin
					</Link>
				</div>
				<div className="flex w-full flex-row justify-center max-[1180px]:mx-auto max-[1180px]:max-w-[80%] max-[1180px]:flex-col max-[630px]:max-w-[100%] mt-25">
					<div className="border-theme3 after:bg-theme3 before:bg-theme3 relative border-r-[3px] px-20 py-10 before:absolute before:top-0 before:-right-[8px] before:h-3 before:w-3 before:rotate-45 before:content-[''] after:absolute after:-right-2 after:bottom-0 after:h-3 after:w-3 after:rotate-45 after:content-[''] max-[1710px]:px-10 max-[1400px]:px-6 max-[1400px]:py-6 max-[1180px]:border-r-0 max-[1180px]:border-b-2 max-[1180px]:px-0 max-[1180px]:py-0 max-[1180px]:pb-18 max-[1180px]:before:top-[unset] max-[1180px]:before:right-0 max-[1180px]:before:-bottom-2 max-[1180px]:after:-bottom-2 max-[1180px]:after:left-0">
						<div className="from-background2 to-theme3/20 border-theme3 shadow-theme4/50 hover:shadow-theme4/60 flex flex-col items-center justify-center gap-8 rounded-2xl border-2 bg-linear-to-bl p-8 shadow-lg transition-all duration-300 hover:shadow-xl max-[1400px]:px-3 max-[1400px]:py-6">
							<CiMobile3 className="text-theme3 text-5xl" />
							<p className="text-theme4 text-4xl font-semibold">Mobitel</p>
							<a
								href="tel:+385989648532"
								className="after:bg-theme4 text-theme4 relative inline-block text-3xl after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:transition-all after:duration-500 after:content-[''] hover:after:right-0 focus:after:right-0 active:after:right-0"
							>
								+385 98 964 8532
							</a>
						</div>
					</div>
					<div className="border-theme3 max-[1710px]: flex border-x px-20 py-10 max-[1710px]:px-10 max-[1400px]:border-x-0 max-[1400px]:px-6 max-[1400px]:py-6 max-[1180px]:border-y-1 max-[1180px]:px-0 max-[1180px]:py-18">
						<div className="from-background2 to-theme3/20 border-theme3 shadow-theme4/50 hover:shadow-theme4/60 flex flex-col items-center justify-center gap-8 rounded-2xl border-2 bg-linear-to-bl p-8 shadow-lg transition-all duration-300 hover:shadow-xl max-[1400px]:px-3 max-[1400px]:py-6 max-[1180px]:w-full">
							<CiLocationOn className="text-theme3 text-5xl" />
							<p className="text-theme4 text-4xl font-semibold">Adresa</p>
							<p className="text-theme4 text-center text-3xl">
								Ul. Charlesa Darwina 10, Zagreb
							</p>
						</div>
					</div>
					<div className="border-theme3 after:bg-theme3 before:bg-theme3 relative border-l-[3px] px-20 py-10 before:absolute before:top-0 before:-left-2 before:h-3 before:w-3 before:rotate-45 before:content-[''] after:absolute after:bottom-0 after:-left-2 after:h-3 after:w-3 after:rotate-45 after:content-[''] max-[1710px]:px-10 max-[1400px]:px-6 max-[1400px]:py-6 max-[1180px]:border-t-2 max-[1180px]:border-l-0 max-[1180px]:px-0 max-[1180px]:py-0 max-[1180px]:pt-18 max-[1180px]:before:-top-2 max-[1180px]:before:right-0 max-[1180px]:before:left-[unset] max-[1180px]:after:-top-2 max-[1180px]:after:bottom-[unset]">
						<div className="from-background2 to-theme3/20 border-theme3 shadow-theme4/50 hover:shadow-theme4/60 flex flex-col items-center justify-center gap-8 rounded-2xl border-2 bg-linear-to-bl p-8 shadow-lg transition-all duration-300 hover:shadow-xl max-[1400px]:px-3 max-[1400px]:py-6">
							<CiMail className="text-theme3 text-5xl" />
							<p className="text-theme4 text-4xl font-semibold">E-mail</p>
							<a
								href="mailto:ivan@ivanradicev.com"
								className="after:bg-theme4 text-theme4 relative inline-block text-3xl after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:transition-all after:duration-500 after:content-[''] hover:after:right-0 focus:after:right-0 active:after:right-0"
							>
								ivan@ivanradicev.com
							</a>
						</div>
					</div>
				</div>
			</section>
			<Contact />
		</>
	);
};

export default Page;
