import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const About = () => {
	return (
		<section className="bg-theme1/10">
			<div className="flex">
				<div className="w-1/2 flex flex-col gap-10 px-6 py-15 sm:px-10 lg:px-18 lg:py-20">
					<h2 className="text-theme1 text-5xl font-semibold">O meni</h2>
					<p className="text-xl text-theme4">
						Moje ime je <strong>Ivan Radičev</strong>, diplomirani
						fizioterapeut, osteopat i P-DTR terapeut. Kroz vlastito iskustvo
						ozljede i dugotrajnog oporavka započeo je moj profesionalni put.
					</p>
					<p className="text-xl text-theme4">
						Godinama radim s osobama koje osjećaju bol unatoč „urednim“
						nalazima, sportašima svih razina te ljudima koji su izgubili
						povjerenje u svoje tijelo i pokret.
					</p>
					<p className="text-xl text-theme4">
						U svom radu spajam znanja iz fizioterapije, osteopatije i
						neuroloških metoda kako bih svakom klijentu pristupio individualno,
						s fokusom na uzrok problema, a ne samo na simptome.
					</p>
					<p className="text-xl text-theme4">
						Moj cilj je pomoći vam razumjeti zašto vas boli i pokazati da
						promjena jest moguća.
					</p>
					<Link
						href="/o-meni"
						className="flex items-center gap-3 bg-theme1 px-4 py-2 rounded-2xl text-lg text-slate-100 tracking-wider hover:bg-theme4 transition-all duration-300 w-fit group"
					>
						Više o meni{" "}
						<BsArrowRight className="text-slate-100 text-2xl group-hover:translate-x-1 transition-all duration-300" />
					</Link>
				</div>
				{/* <div className="w-1/2 bg-[url(/slike/novo/bez-boli-5-md.jpg)] min-h-[800px] bg-right bg-top-right"> */}
				<div className="w-1/2 bg-[url(/slike/novo/bez-boli-5-md.jpg)]">
					<Image
						src="/slike/bez-boli-5-md.jpg"
						alt=""
						width={960}
						height={960}
					/>
				</div>
			</div>
		</section>
	);
};

export default About;
