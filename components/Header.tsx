import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BiChevronDown, BiDownArrow } from "react-icons/bi";

const Header = () => {
	return (
		<header className="z-100 flex max-w-screen flex-row items-center justify-between bg-transparent px-8 py-3 lg:px-12 xl:px-30 absolute left-0 right-0">
			<Link href="/">
				<Image
					className="rounded-full"
					src="/logo_transparent.png"
					alt="Život bez boli logo"
					width={140}
					height={140}
				/>
			</Link>
			<nav className="hidden lg:block">
				<ul className="flex items-center lg:gap-8 xl:gap-14 2xl:gap-22">
					<li>
						<Link
							href="/"
							className="after:bg-slate-100 before:bg-slate-100 relative inline-block cursor-pointer text-md font-semibold text-slate-100 before:absolute before:top-full before:right-0 before:left-full before:h-0.5 before:transition-all before:duration-300 after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:transition-all after:duration-300 after:content-[''] hover:before:left-1/2 hover:after:right-1/2 uppercase"
						>
							Naslovnica
						</Link>
					</li>
					<li>
						<Link
							href="/o-nama"
							className="after:bg-slate-100 before:bg-slate-100 relative inline-block cursor-pointer text-md font-semibold text-slate-100 before:absolute before:top-full before:right-0 before:left-full before:h-0.5 before:transition-all before:duration-300 after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:transition-all after:duration-300 after:content-[''] hover:before:left-1/2 hover:after:right-1/2 uppercase"
						>
							O nama
						</Link>
					</li>
					<li>
						<Link
							href="/usluge"
							className="relative  cursor-pointer text-md font-semibold text-slate-100 flex gap-2 items-center group"
						>
							USLUGE
							<BiChevronDown className="text-3xl group-hover:rotate-x-180 transition-all duration-300" />
							<div className="absolute top-[130%] opacity-0 invisible max-h-0 group-hover:opacity-100 group-hover:visible group-hover:max-h-250 transition-all duration-300">
								<ul className="flex flex-col">
									<li>
										<p className="px-3 py-2 bg-slate-100 text-theme4 text-nowrap hover:text-slate-100 hover:bg-theme4 transition-all duration-300 rounded-t-xl">
											Kronična bol
										</p>
									</li>
									<li>
										<p className="px-3 py-2 bg-slate-100 text-theme4 text-nowrap hover:text-slate-100 hover:bg-theme4 transition-all duration-300 border-t border-theme4">
											Bol u vratu
										</p>
									</li>
									<li>
										<p className="px-3 py-2 bg-slate-100 text-theme4 text-nowrap hover:text-slate-100 hover:bg-theme4 transition-all duration-300 border-t border-theme4">
											Bol u leđima
										</p>
									</li>
									<li>
										<p className="px-3 py-2 bg-slate-100 text-theme4 text-nowrap hover:text-slate-100 hover:bg-theme4 transition-all duration-300 border-t border-theme4">
											Bol u kuku
										</p>
									</li>
									<li>
										<p className="px-3 py-2 bg-slate-100 text-theme4 text-nowrap hover:text-slate-100 hover:bg-theme4 transition-all duration-300 border-t border-theme4">
											Bol u vratu i ramenima
										</p>
									</li>
									<li>
										<p className="px-3 py-2 bg-slate-100 text-theme4 text-nowrap hover:text-slate-100 hover:bg-theme4 transition-all duration-300 border-t border-theme4">
											Bol u laktu i ruci
										</p>
									</li>
									<li>
										<p className="px-3 py-2 bg-slate-100 text-theme4 text-nowrap hover:text-slate-100 hover:bg-theme4 transition-all duration-300 border-t border-theme4">
											Bol u koljenima i stopalima
										</p>
									</li>
									<li>
										<p className="px-3 py-2 bg-slate-100 text-theme4 text-nowrap hover:text-slate-100 hover:bg-theme4 transition-all duration-300 border-t border-theme4">
											Sportske ozljede
										</p>
									</li>
									<li>
										<p className="px-3 py-2 bg-slate-100 text-theme4 text-nowrap hover:text-slate-100 hover:bg-theme4 transition-all duration-300 border-t border-theme4">
											Tretmani djece
										</p>
									</li>
									<li>
										<p className="px-3 py-2 bg-slate-100 text-theme4 text-nowrap hover:text-slate-100 hover:bg-theme4 transition-all duration-300 border-t border-theme4 rounded-b-xl">
											Ostale tegobe
										</p>
									</li>
								</ul>
							</div>
						</Link>
					</li>
					<li>
						<Link
							href="/p-dtr"
							className="after:bg-slate-100 before:bg-slate-100 relative inline-block cursor-pointer text-md font-semibold text-slate-100 before:absolute before:top-full before:right-0 before:left-full before:h-0.5 before:transition-all before:duration-300 after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:transition-all after:duration-300 after:content-[''] hover:before:left-1/2 hover:after:right-1/2 uppercase"
						>
							P-DTR
						</Link>
					</li>
					<li>
						<Link
							href="/kontakt"
							className="after:bg-slate-100 before:bg-slate-100 relative inline-block cursor-pointer text-md font-semibold text-slate-100 before:absolute before:top-full before:right-0 before:left-full before:h-0.5 before:transition-all before:duration-300 after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:transition-all after:duration-300 after:content-[''] hover:before:left-1/2 hover:after:right-1/2 uppercase"
						>
							Kontakt
						</Link>
					</li>
					<li>
						<Link
							href="/rezervacija"
							className="after:bg-slate-100 before:bg-slate-100 relative inline-block cursor-pointer text-md font-semibold text-slate-100 before:absolute before:top-full before:right-0 before:left-full before:h-0.5 before:transition-all before:duration-300 after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:transition-all after:duration-300 after:content-[''] hover:before:left-1/2 hover:after:right-1/2 uppercase"
						>
							Rezervacija
						</Link>
					</li>
				</ul>
			</nav>
			<p>Rezerviraj</p>
		</header>
	);
};

export default Header;
