import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BiChevronRight } from "react-icons/bi";
import Banner from "@/components/Homepage/Banner";

const page = () => {
  return (
    <>
      <section>
        <div className="flex flex-col md:flex-row">
          <div className="relative z-10 bg-[url(/zivotbezboli-background-nostroke-1920.png)] max-md:order-1 max-md:order-2 md:w-1/2">
            <div className="from-theme3/90 to-theme3/30 absolute inset-0 -z-10 bg-linear-to-r" />

            <div className="flex flex-col items-start gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:px-18 lg:py-26">
              <Image
                className="mx-auto inline-block"
                src="/usluge/ikone/bijele/tegobe.svg"
                alt=""
                width={160}
                height={160}
              />
              <p className="flex flex-row items-start gap-2 text-xl text-slate-100">
                <BiChevronRight className="shrink-0 text-3xl" />
                Ako patite od bilo kojeg oblika bolova u zglobovima ili
                mišićima, zarobljenih živaca, glavobolje ili slično,
                najvjerovatnije ću vam moći pomoći.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-10 px-6 py-16 max-md:order-1 sm:px-10 sm:py-20 md:w-1/2 lg:px-18 lg:py-26">
            <h2 className="text-theme1 text-5xl font-semibold">
              Ostale tegobe
            </h2>
            <p className="text-theme4 text-xl">
              Pomažemo kod širokog spektra stanja, od bolova u leđima i vratu,
              do glavobolja, migrena i drugih...
            </p>
            <p className="text-theme4 text-xl">
              Ako niste sigurni mogu li vam točno pomoći, slobodno me
              kontaktirajte, rado ću porazgovarati s vama o vašim točnim
              potrebama i odlučiti jeste li pravi izbor za mene.
            </p>
            <Link
              href="/usluge/rezervacija"
              className="bg-theme1 hover:bg-theme4 flex w-fit items-center gap-6 rounded-2xl px-4 py-2 text-lg tracking-wider text-slate-100 transition-all duration-300"
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
