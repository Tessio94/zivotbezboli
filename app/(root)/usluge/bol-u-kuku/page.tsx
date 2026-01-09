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
          <div className="relative z-10 bg-[url(/zivotbezboli-background-nostroke-1920.png)] max-md:order-1 max-md:order-2 md:md:w-1/2">
            <div className="from-theme3/90 to-theme3/30 absolute inset-0 -z-10 bg-linear-to-r" />

            <div className="flex flex-col items-start gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:px-18 lg:py-26">
              <Image
                className="mx-auto inline-block"
                src="/usluge/ikone/bijele/kukovi.svg"
                alt=""
                width={160}
                height={160}
              />

              <p className="flex flex-row items-start gap-2 text-xl text-slate-100">
                <BiChevronRight className="shrink-0 text-3xl" />
                Bolovi u kuku, leđima i koljenu idu ruku pod ruku.
              </p>
              <p className="flex flex-row items-start gap-2 text-xl text-slate-100">
                <BiChevronRight className="shrink-0 text-3xl" />
                Uzroci vaše boli u kuku mogu biti povezani s tendinitisom,
                burzitisom, pritiskom živaca ili kompenzacijom od prošlih
                ozljeda na drugim područjima.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-10 px-6 py-16 max-md:order-1 sm:px-10 sm:py-20 md:w-1/2 lg:px-18 lg:py-26">
            <h2 className="text-theme1 text-5xl font-semibold">Bol u kuku</h2>
            <p className="text-theme4 text-xl">
              Bol u kuku je česta pojava u mojoj ordinaciji.
            </p>
            <p className="text-theme4 text-xl">
              Pacijenti mi često govore da imaju artritis, trošenje,
              degeneraciju i druge tegobe. Međutim, češće se može učiniti mnogo
              toga kako bi se pomoglo.
            </p>
            <p className="text-theme4 text-xl">
              Promjena na strukturi ne znači i bol, vrlo često možete imati
              artritis, a ipak nemati bol.
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
          <div className="flex flex-col gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:px-18 lg:py-26 xl:w-1/2">
            <p className="text-theme4 text-xl">
              Moj posao je napraviti vam procjenu cijelog tijela kako bismo
              otkrili <span className="font-semibold">ZAŠTO</span> vas boli.
            </p>
            <p className="text-theme4 text-xl">
              To zahtijeva temeljit pregled kako bi se sagledali vaši:
            </p>
            <ul className="flex flex-col gap-4">
              <li className="flex flex-row items-start gap-2">
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  Statički položaj
                </p>
              </li>
              <li className="flex flex-row items-start gap-2">
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  Opseg pokreta
                </p>
              </li>
              <li className="flex flex-row items-start gap-2">
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  Neurološka testiranja
                </p>
              </li>
              <li className="flex flex-row items-start gap-2">
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  Ortopedsko testiranje
                </p>
              </li>
              <li className="flex flex-row items-start gap-2">
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  Testiranje manualnih mišića
                </p>
              </li>
            </ul>
            <p className="text-theme4 text-xl">
              Postoji mnogo toga što se može učiniti da se pomogne. Zapravo,
              mnogi ljudi će imati sve te nalaze u odsutnosti boli.
            </p>
          </div>
          <div className="max-h-212.5 overflow-hidden xl:w-1/2">
            <Image
              className="h-auto w-full"
              src="/slike/bez-boli-2-md.jpg"
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
