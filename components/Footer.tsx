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
import { BiHourglass } from "react-icons/bi";
import { CgChevronRight, CgLock } from "react-icons/cg";

const Footer = () => {
	return (
		<footer className="relative bg-[url('/slike/bez-boli-9-xl.jpg')] z-10">
			<div className="absolute inset-0  bg-theme4/90  -z-10" />
			<div className="px-30 pt-20 pb-10 flex items-start justify-between">
				<div className="flex flex-col gap-10 items-center">
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
						<a href="" className="text-3xl text-slate-100">
							<IoLogoWhatsapp />
						</a>
						<a href="" className="text-3xl text-slate-100">
							<IoLogoInstagram />
						</a>
						<a href="" className="text-3xl text-slate-100">
							<IoLogoFacebook />
						</a>
						<a href="" className="text-3xl text-slate-100">
							<IoLogoYoutube />
						</a>
					</div>
				</div>
				<div>
					<p className="text-theme1 text-2xl font-semibold mb-7">
						Brze poveznice:
					</p>
					<ul className="text-slate-100 flex-col flex gap-2">
						<li>
							<p className="text-2xl flex items-center gap-4 text-slate-100">
								<CgChevronRight className="text-3xl text-theme1" /> O nama
							</p>
						</li>
						<li>
							<a
								href="tel:+385 98 964 8532"
								className="text-2xl flex items-center gap-4 text-slate-100"
							>
								<CgChevronRight className="text-3xl text-theme1" />
								Usluge
							</a>
						</li>
						<li>
							<a
								href="mail:ivan@ivanradicev.com "
								className="text-2xl flex items-center gap-4 text-slate-100"
							>
								<CgChevronRight className="text-3xl text-theme1" />
								Konatkt
							</a>
						</li>
					</ul>
				</div>
				<div>
					<p className="text-theme1 text-2xl font-semibold mb-7">Konatkt:</p>
					<ul className="text-slate-100 flex-col flex gap-3">
						<li>
							<p className="text-2xl flex items-center gap-4 text-slate-100">
								<CiLocationOn className="text-3xl text-theme1" />
								Ul. Charlesa Darwina 10, Zagreb
							</p>
						</li>
						<li>
							<a
								href="tel:+385 98 964 8532"
								className="text-2xl flex items-center gap-4 text-slate-100"
							>
								<CiMobile3 className="text-3xl text-theme1" />
								+385 98 964 8532
							</a>
						</li>
						<li>
							<a
								href="mail:ivan@ivanradicev.com "
								className="text-2xl flex items-center gap-4 text-slate-100"
							>
								<CiMail className="text-3xl text-theme1" />
								ivan@ivanradicev.com
							</a>
						</li>
					</ul>
				</div>
				<div>
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
			<div className="px-30 py-20 flex justify-center">
				<div className="w-[60%] border-t border-slate-100">
					<p className="text-center p-10 text-slate-100 text-xl">
						Copyright © 2025 <i>Tessio94</i> - Sva prava pridržana.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
