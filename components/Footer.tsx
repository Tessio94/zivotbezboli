import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CiClock1, CiLocationOn, CiMail, CiMobile3 } from "react-icons/ci";
import {
	IoLogoFacebook,
	IoLogoInstagram,
	IoLogoWhatsapp,
	IoLogoYoutube,
} from "react-icons/io";
import { CgChevronRight } from "react-icons/cg";

const Footer = () => {
	return (
		<footer className="relative bg-[url('/slike/bez-boli-9-xl.jpg')] z-10">
			<div className="absolute inset-0  bg-theme4/90  -z-10" />
			<div className="px-6 pt-15 pb-7 sm:px-10 lg:px-18 lg:pt-20 lg:pb-10 2xl:px-28 flex items-start flex-wrap justify-between max-xl:gap-y-15">
				<div className="max-xl:w-1/2 max-sm:w-full max-sm:items-center flex flex-col  gap-10 items-start max-xl:order-1">
					<Link href="/">
						<Image
							className="rounded-full"
							src="/logo_transparent.png"
							alt="Život bez boli logo"
							width={220}
							height={220}
						/>
					</Link>
					<div className="flex items-center gap-6 bg-theme1 px-5 py-2 rounded-4xl">
						<a href="" className="text-3xl text-slate-100 group">
							<IoLogoWhatsapp className="group-hover:scale-120 transition-all duration-300" />
						</a>
						<a href="" className="text-3xl text-slate-100 group">
							<IoLogoInstagram className="group-hover:scale-120 transition-all duration-300" />
						</a>
						<a href="" className="text-3xl text-slate-100 group">
							<IoLogoFacebook className="group-hover:scale-120 transition-all duration-300" />
						</a>
						<a href="" className="text-3xl text-slate-100 group">
							<IoLogoYoutube className="group-hover:scale-120 transition-all duration-300" />
						</a>
					</div>
				</div>
				<div className="max-xl:w-1/2 max-[500px]:w-full!  max-xl:order-3">
					<p className="text-theme1 text-2xl font-semibold mb-7">
						Brze poveznice:
					</p>
					<ul className="text-slate-100 flex-col flex gap-2">
						<li className="flex items-center gap-4">
							<CgChevronRight className="text-3xl text-theme1" />
							<a className="relative text-2xl  text-slate-100 after:content-[''] after:top-full after:h-0.5 after:bg-slate-100 hover:after:right-0 after:right-full after:absolute after:left-0 after:transition-all after:duration-300">
								O nama
							</a>
						</li>
						<li className="flex items-center gap-4">
							<CgChevronRight className="text-3xl text-theme1" />
							<Link
								href="/rezervacije"
								className="relative text-2xl  text-slate-100 after:content-[''] after:top-full after:h-0.5 after:bg-slate-100 hover:after:right-0 after:right-full after:absolute after:left-0 after:transition-all after:duration-300"
							>
								Rezervacija
							</Link>
						</li>
						<li className="flex items-center gap-4">
							<CgChevronRight className="text-3xl text-theme1" />
							<Link
								href="/kontakt"
								className="relative text-2xl  text-slate-100 after:content-[''] after:top-full after:h-0.5 after:bg-slate-100 hover:after:right-0 after:right-full after:absolute after:left-0 after:transition-all after:duration-300"
							>
								Konatkt
							</Link>
						</li>
					</ul>
				</div>
				<div className="max-xl:w-1/2 max-sm:w-full max-xl:order-2">
					<p className="text-theme1 text-2xl font-semibold mb-7">Konatkt:</p>
					<ul className="text-slate-100 flex-col flex gap-3">
						<li>
							<p className="text-2xl flex items-center gap-4 text-slate-100">
								<CiLocationOn className="text-3xl text-theme1" />
								Ul. Charlesa Darwina 10, Zagreb
							</p>
						</li>
						<li className="flex items-center gap-4">
							<CiMobile3 className="text-3xl text-theme1" />
							<a
								href="tel:+385 98 964 8532"
								className="text-2xl relative flex items-center gap-4 text-slate-100 after:content-[''] after:top-full after:h-0.5 after:bg-slate-100 hover:after:right-0 after:right-full after:absolute after:left-0 after:transition-all after:duration-300"
							>
								+385 98 964 8532
							</a>
						</li>
						<li className="flex items-center gap-4">
							<CiMail className="text-3xl text-theme1" />
							<a
								href="mail:ivan@ivanradicev.com "
								className="text-2xl  relative flex items-center gap-4 text-slate-100 after:content-[''] after:top-full after:h-0.5 after:bg-slate-100 hover:after:right-0 after:right-full after:absolute after:left-0 after:transition-all after:duration-300"
							>
								ivan@ivanradicev.com
							</a>
						</li>
					</ul>
				</div>
				<div className="max-xl:w-1/2 max-[500px]:w-full! max-xl:order-4">
					<p className="text-theme1 text-2xl font-semibold mb-7">
						Radno vrijeme:
					</p>
					<ul className="text-slate-100 flex-col flex gap-3">
						<li>
							<p className="text-slate-100 text-lg font-regular flex items-center gap-2">
								<CiClock1 className="text-xl text-theme1" />
								Pon: 9-12h | 15-19h
							</p>
						</li>
						<li>
							<p className="text-slate-100 text-lg font-regular flex items-center gap-2">
								<CiClock1 className="text-xl text-theme1" />
								Uto: 9-12h | 15-19h
							</p>
						</li>
						<li>
							<p className="text-slate-100 text-lg font-regular flex items-center gap-2">
								<CiClock1 className="text-xl text-theme1" />
								Sri: 9-12h | 15-19h
							</p>
						</li>
						<li>
							<p className="text-slate-100 text-lg font-regular flex items-center gap-2">
								<CiClock1 className="text-xl text-theme1" />
								Čet: 9-12h | 15-19h
							</p>
						</li>
						<li>
							<p className="text-slate-100 text-lg font-regular flex items-center gap-2">
								<CiClock1 className="text-xl text-theme1" />
								Pet: 9-12h | 15-19h
							</p>
						</li>
					</ul>
				</div>
			</div>
			<div className="max-sm:px-2 max-lg:px-5 max-lg:px-10 px-30 pt-20 lg:pb-10 pb-7 flex justify-center">
				<div className="max-lg:w-full max-xl:w-[80%] w-[60%] border-t border-slate-100">
					<p className="text-center max-sm:p-2  max-lg:p-5 p-10 text-slate-100 text-xl">
						Copyright © 2025 <i>Tessio94</i> - Sva prava pridržana.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
