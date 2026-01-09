import Link from "next/link";
import React from "react";

const Intro = () => {
  return (
    <section>
      <div className="mx-auto px-6 py-16 sm:px-10 sm:py-20 lg:px-18 lg:py-26 xl:w-3/4">
        <div className="flex flex-col gap-8 sm:gap-10">
          <h2 className="text-theme1 text-3xl font-semibold sm:text-4xl">
            Život bez boli – mjesto gdje počinje promjena
          </h2>
          <p className="text-theme4 text-xl">
            <strong>Život Bez Boli</strong> je privatna ordinacija
            specijalizirana za dijagnostiku i tretman boli, disfunkcija pokreta
            i kroničnih tegoba koje često nemaju jasan uzrok na klasičnim
            nalazima. minus.
          </p>
          <p className="text-theme4 text-xl">
            Radimo s osobama koje se već dugo bore s bolovima, sportašima u
            rehabilitaciji, ali i svima koji žele bolje razumjeti svoje tijelo i
            ponovno se kretati bez straha i ograničenja.
          </p>
          <p className="text-theme4 text-xl">
            Naš pristup temelji se na{" "}
            <strong>
              suvremenim znanjima iz fizioterapije, osteopatije i neuroloških
              metoda poput P-DTR® terapije,
            </strong>{" "}
            s ciljem rješavanja uzroka, a ne samo simptoma.
          </p>
          <Link
            href="/kontakt"
            className="bg-theme1 hover:bg-theme4 flex w-fit items-center gap-6 rounded-2xl px-4 py-2 text-lg tracking-wider text-slate-100 transition-all duration-300"
          >
            Kontaktiraj nas
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Intro;
