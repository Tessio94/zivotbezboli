import Link from "next/link";
import React from "react";

const Intro = () => {
	return (
		<section>
			<div className="px-6 py-26 sm:px-10 lg:px-18 lg:py-42 flex flex-col items-center gap-5">
				<div className="flex flex-col gap-10  w-3/4">
					<h2 className="text-theme1 text-4xl font-semibold">
						Život bez boli – mjesto gdje počinje promjena
					</h2>

					<p className="text-xl text-theme4">
						<strong>Život Bez Boli</strong> je privatna ordinacija
						specijalizirana za dijagnostiku i tretman boli, disfunkcija pokreta
						i kroničnih tegoba koje često nemaju jasan uzrok na klasičnim
						nalazima. minus.
					</p>
					<p className="text-xl text-theme4">
						Radimo s osobama koje se već dugo bore s bolovima, sportašima u
						rehabilitaciji, ali i svima koji žele bolje razumjeti svoje tijelo i
						ponovno se kretati bez straha i ograničenja.
					</p>
					<p className="text-xl text-theme4">
						Naš pristup temelji se na{" "}
						<strong>
							suvremenim znanjima iz fizioterapije, osteopatije i neuroloških
							metoda poput P-DTR® terapije,
						</strong>{" "}
						s ciljem rješavanja uzroka, a ne samo simptoma.
					</p>
					<Link
						href="/kontakt"
						className="flex items-center gap-6 bg-theme1 px-4 py-2 rounded-2xl text-lg text-slate-100 tracking-wider hover:bg-theme4 transition-all duration-300 w-fit"
					>
						Kontaktiraj nas
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Intro;
