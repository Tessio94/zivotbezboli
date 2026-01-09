"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { CiLocationOn, CiMail, CiMobile3 } from "react-icons/ci";
import {
	IoLogoFacebook,
	IoLogoInstagram,
	IoLogoWhatsapp,
	IoLogoYoutube,
} from "react-icons/io";

const Carousel = () => {
	//   const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
	const [emblaRef] = useEmblaCarousel({ loop: false });

	return (
		<section>
			<div className="embla" ref={emblaRef}>
				<div className="embla__container">
					<div className="embla__slide">
						<div className="relative">
							<div className="bg-linear-to-l from-theme4/90 to-theme4/20 absolute inset-0" />
							<div className="absolute top-1/2 right-30 -translate-y-1/2 flex flex-col gap-6 items-center ">
								<h1 className="text-9xl text-slate-100 font-bold">
									Život <span className="text-theme1">bez boli</span>
								</h1>
								<h3 className="text-3xl text-slate-100">
									<strong className="text-theme1 text-shadow-slate-100">
										Ivan Radičev
									</strong>
									, fizioterapeut, osteopat, p-dtr terapeut
								</h3>
								<h3 className="text-3xl text-slate-100 italic">
									Život bez boli i stresa – holistički pristup zdravlju
								</h3>
								<Link
									href="/rezervacija"
									className="px-10 py-5 rounded-4xl bg-theme1 text-slate-100 text-3xl font-semibold mt-5 hover:bg-theme4 transition-all duration-300 border-2 border-transparent hover:border-slate-100"
								>
									Rezervirajte termin
								</Link>
							</div>
							<Image
								className=""
								src="/slike/bez-boli-4-xl.jpg"
								alt="Život bez boli hero image"
								width={1920}
								height={1080}
							/>
						</div>
					</div>
					<div className="embla__slide">
						<div className="relative">
							<div className="bg-linear-to-l from-theme4/90 to-theme4/20 absolute inset-0" />
							<div className="absolute top-1/2 right-30 -translate-y-1/2 flex flex-col gap-6 items-start">
								<p className="text-7xl text-slate-100 font-bold">
									Naši kontakt podaci:
								</p>
								<ul className="flex flex-col gap-5 items-start text-slate-100">
									<li className="flex items-center gap-4">
										<CiLocationOn className="text-3xl" />
										<p className="text-2xl  text-slate-100">
											Ul. Charlesa Darwina 10, 10000, Zagreb, Hrvatska
										</p>
									</li>
									<li className="flex items-center gap-4">
										<CiMobile3 className="text-3xl" />
										<a
											href="tel:+385 98 964 8532"
											className="relative text-2xl flex items-center gap-4 text-slate-100 after:content-[''] after:top-full after:h-0.5 after:bg-slate-100 hover:after:right-0 after:right-full after:absolute after:left-0 after:transition-all after:duration-300"
										>
											+385 98 964 8532
										</a>
									</li>
									<li className="flex items-center gap-4">
										<CiMail className="text-3xl" />
										<a
											href="mail:ivan@ivanradicev.com "
											className="relative text-2xl flex items-center gap-4 text-slate-100 after:content-[''] after:top-full after:h-0.5 after:bg-slate-100 hover:after:right-0 after:right-full after:absolute after:left-0 after:transition-all after:duration-300"
										>
											ivan@ivanradicev.com
										</a>
									</li>
								</ul>

								<p className="text-2xl  text-slate-100">
									Radno vrijeme:{" "}
									<span className="font-semibold">
										Pon - Pet: 9-12h | 15-19h
									</span>
								</p>

								<div className="flex items-center gap-6 bg-theme1 px-10 py-5 rounded-4xl">
									<a href="" className="text-4xl text-slate-100 group">
										<IoLogoWhatsapp className="group-hover:scale-120 transition-all duration-300" />
									</a>
									<a href="" className="text-4xl text-slate-100 group">
										<IoLogoInstagram className="group-hover:scale-120 transition-all duration-300" />
									</a>
									<a href="" className="text-4xl text-slate-100 group">
										<IoLogoFacebook className="group-hover:scale-120 transition-all duration-300" />
									</a>
									<a href="" className="text-4xl text-slate-100 group">
										<IoLogoYoutube className="group-hover:scale-120 transition-all duration-300" />
									</a>
								</div>
							</div>
							<Image
								src="/slike/bez-boli-10-xl.jpg"
								alt="Život bez boli hero image"
								width={1920}
								height={1080}
							/>
						</div>
					</div>
					<div className="embla__slide">
						<div className="relative">
							<div className="bg-linear-to-l from-theme4/20 via-theme4/90 to-theme4/20 absolute inset-0" />
							<div className="absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 flex flex-col gap-6 items-center ">
								<h1 className="text-7xl text-slate-100 font-bold">
									<span className="text-theme1">Bol </span>nije problem.
								</h1>
								<h3 className="text-3xl text-slate-100">
									Ako su nalazi uredni, a bol i dalje traje, vrijeme je za
									drugačiji pristup liječenju.
								</h3>
								<h3 className="text-3xl text-slate-100 italic">
									Ne liječimo simptome – tražimo zašto vas boli.
								</h3>
								<Link
									href="/rezervacija"
									className="px-10 py-5 rounded-4xl bg-theme1 text-slate-100 text-3xl font-semibold mt-5"
								>
									Rezervirajte termin
								</Link>
							</div>
							<Image
								src="/slike/bez-boli-3-xl.jpg"
								alt="Život bez boli hero image"
								width={1920}
								height={1080}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Carousel;
