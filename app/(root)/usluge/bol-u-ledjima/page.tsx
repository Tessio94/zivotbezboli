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
                src="/usluge/ikone/bijele/leda.svg"
                alt=""
                width={160}
                height={160}
              />
              <p className="flex flex-row items-start gap-2 text-xl text-slate-100">
                <BiChevronRight className="shrink-0 text-3xl" />
                Bol je ovdje zaštitni odgovor koji je pošao po zlu.
              </p>
              <p className="flex flex-row items-start gap-2 text-xl text-slate-100">
                <BiChevronRight className="shrink-0 text-3xl" />
                To ima puno više veze sa vašim mozgom, a puno manje sa dijelom
                tijela koji vas boli
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-10 px-6 py-16 max-md:order-1 sm:px-10 sm:py-20 md:w-1/2 lg:px-18 lg:py-26">
            <h2 className="text-theme1 text-5xl font-semibold">Bol u leđima</h2>
            <p className="text-theme4 text-xl">
              Bol u leđima je najčešća tegoba koju vidimo u svojoj ordinaciji.
            </p>
            <p className="text-theme4 text-xl">
              Prvi dio procesa je utvrditi postoji li stvarna šteta na
              zglobovima, mišićima ili drugim hardverskim strukturama.
            </p>
            <p className="text-theme4 text-xl">
              Bez prisutnosti bilo kakvog &quot;oštećenja&quot;, bol je
              posljedica zaštite mozga i živčanog sustava (često od prošlih
              ozljeda).
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
      <section className="bg-theme1/10">
        <div className="flex flex-col xl:flex-row">
          <div className="flex flex-col gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:px-18 lg:py-26 xl:w-1/2 xl:gap-8 2xl:gap-10">
            <p className="text-theme4 text-xl">
              Bol je ovdje zaštitni odgovor koji je pošao po zlu. Moj posao je
              otkriti zašto i usmjeriti vas na put oporavka
            </p>
            <p className="text-theme4 text-xl">
              Bol u donjem dijelu leđa često je bezopasna, a čak i ako su vam
              rekli da imate:
            </p>
            <ul className="flex flex-col gap-4">
              <li className="flex flex-row items-start gap-2">
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  Hernija
                </p>
              </li>
              <li className="flex flex-row items-start gap-2">
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  Protruzija
                </p>
              </li>
              <li className="flex flex-row items-start gap-2">
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  Artritis
                </p>
              </li>
              <li className="flex flex-row items-start gap-2">
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  Degeneracija
                </p>
              </li>
              <li className="flex flex-row items-start gap-2">
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  Stenoza
                </p>
              </li>
              <li className="flex flex-row items-start gap-2">
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  Prolaps diska
                </p>
              </li>
            </ul>
            <p className="text-theme4 text-xl">
              Postoji mnogo toga što se može učiniti da se pomogne. Zapravo,
              mnogi ljudi će imati sve te nalaze u odsutnosti boli.
            </p>
          </div>
          <div className="max-h-230 overflow-hidden xl:w-1/2">
            <Image
              className="h-auto w-full"
              src="/slike/bez-boli-6-md.jpg"
              alt=""
              width={960}
              height={1080}
              sizes="(min-width: 1280px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>
      <Banner version="one" />
    </>
  );
};

export default page;
