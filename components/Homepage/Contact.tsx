"use client";

import React, { useState } from "react";

const Contact = () => {
	const [success, setSuccess] = useState(false);
	const [loading, setLoading] = useState(false);
	const [name, setName] = useState("");
	const [lastName, setLastName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	return (
		<section className="">
			<div className="px-30 py-20">
				<h2 className="text-theme1 text-5xl font-semibold mb-15">Kontakt</h2>
				<div>
					<div>
						<div className="shadow-theme1/60 order-1 h-full rounded-2xl bg-[url(/zivotbezboli-background-nostroke-1920.png)] bg-cover bg-no-repeat p-5 shadow-lg sm:rounded-4xl sm:p-10 lg:order-2 lg:h-fit lg:w-[750px]">
							<h2 className="font-playfair after:bg-slate-100 before:bg-slate-100 relative mb-15 text-4xl font-bold text-slate-100 before:absolute before:top-[calc(105%-4px)] before:left-25 before:h-3 before:w-3 before:rotate-45 before:content-[''] after:absolute after:top-[105%] after:left-0 after:h-[5px] after:w-25 after:content-['']">
								Pošaljite upit
							</h2>
							<form
								className="flex w-full flex-col gap-7 lg:gap-10"
								// onSubmit={onFormSubmitted}
							>
								<div className="flex w-full items-center gap-4">
									<div className="flex basis-1/2 flex-col items-start">
										<label
											htmlFor="name"
											className="font-inter text-theme3 pb-1 pl-3 font-semibold"
										>
											Ime
										</label>
										<input
											className="border-theme3 w-full rounded-xl border-2 bg-white px-3 py-2"
											type="text"
											id="name"
											name="name"
											value={name}
											onChange={(e) => setName(e.target.value)}
											required
										/>
									</div>
									<div className="flex basis-1/2 flex-col items-start">
										<label
											htmlFor="lastname"
											className="font-inter text-theme3 pb-1 pl-3 font-semibold"
										>
											Prezime
										</label>
										<input
											className="border-theme3 w-full rounded-xl border-2 bg-white px-3 py-2"
											type="text"
											id="lastname"
											name="lastname"
											value={lastName}
											onChange={(e) => setLastName(e.target.value)}
											required
										/>
									</div>
								</div>
								<div className="flex flex-col items-start">
									<label
										htmlFor="phone"
										className="font-inter text-theme3 pb-1 pl-3 font-semibold"
									>
										Broj mobitela
									</label>
									<input
										className="border-theme3 w-full rounded-xl border-2 bg-white px-3 py-2"
										type="tel"
										id="phone"
										name="phone"
										value={phone}
										onChange={(e) => setPhone(e.target.value)}
										required
									/>
								</div>
								<div className="flex flex-col items-start">
									<label
										htmlFor="email"
										className="font-inter text-theme3 pb-1 pl-3 font-semibold"
									>
										Email
									</label>
									<input
										className="border-theme3 w-full rounded-xl border-2 bg-white px-3 py-2"
										type="email"
										id="email"
										name="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										required
									/>
								</div>
								<div className="flex flex-col items-start">
									<label
										htmlFor="message"
										className="font-inter text-theme3 pb-1 pl-3 font-semibold"
									>
										Poruka
									</label>
									<textarea
										className="border-theme3 w-full rounded-xl border-2 bg-white px-3 py-2"
										id="message"
										name="message"
										rows={4}
										cols={50}
										placeholder="Napišite vaš zahtjev ovdje..."
										value={message}
										onChange={(e) => setMessage(e.target.value)}
										required
									></textarea>
								</div>
								<button
									className="hover:bg-theme2 active:bg-theme1 focus:bg-theme1 text-theme3 border-theme3 bg-theme1 hover:shadow-theme3/40 mx-auto flex min-h-[68px] w-fit min-w-[247px] cursor-pointer flex-row items-center justify-center rounded-xl border-2 text-2xl font-bold transition-all duration-500 hover:shadow-lg focus:shadow-lg active:shadow-lg"
									type="submit"
								>
									{loading ? (
										<svg
											className="size-6 animate-spin text-white"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
										>
											<circle
												className="opacity-25"
												cx="12"
												cy="12"
												r="10"
												stroke="currentColor"
												strokeWidth="4"
											></circle>
											<path
												className="opacity-75"
												fill="currentColor"
												d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
											></path>
										</svg>
									) : (
										"Pošalji"
									)}
								</button>
							</form>
						</div>
					</div>
					<div></div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
