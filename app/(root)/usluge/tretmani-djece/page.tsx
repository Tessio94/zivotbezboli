import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BiChevronRight } from "react-icons/bi";

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
                src="/usluge/ikone/bijele/djeca.svg"
                alt=""
                width={160}
                height={160}
              />
              <p className="flex flex-row items-start gap-2 text-xl text-slate-100">
                <BiChevronRight className="shrink-0 text-3xl" />
                Kod djece se tegobe često manifestiraju kroz bol, napetost,
                poteškoće s pažnjom, spavanjem ili učenjem, a pravilnom
                procjenom i terapijskim pristupom moguće je podržati njihov
                zdrav razvoj i funkcioniranje.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-10 px-6 py-16 max-md:order-1 sm:px-10 sm:py-20 md:w-1/2 lg:px-18 lg:py-26">
            <h2 className="text-theme1 text-5xl font-semibold">
              Tretmani djece
            </h2>
            <p className="text-theme4 text-xl">
              Pomažemo kod širokog spektra problema kod djece:
            </p>
            <ul className="flex flex-col gap-4">
              <li className="flex flex-row items-start gap-2">
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  Poremećaj pažnje
                </p>
              </li>
              <li className="flex flex-row items-start gap-2">
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  Poremećaj koncetracije
                </p>
              </li>
              <li className="flex flex-row items-start gap-2">
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  Poremećaj u učenju
                </p>
              </li>
              <li className="flex flex-row items-start gap-2">
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  Glavobolje i Migrene
                </p>
              </li>
              <li className="flex flex-row items-start gap-2">
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  Poremećaji spavanja
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
