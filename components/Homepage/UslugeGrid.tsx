import React from "react";
import Image from "next/image";
import Link from "next/link";

const UslugeGrid = () => {
  return (
    <section className="">
      <div className="px-6 py-16 sm:px-10 sm:py-20 lg:px-18 lg:py-26">
        <h2 className="text-theme1 mb-15 text-5xl font-semibold">Usluge</h2>
        <div className="grid items-stretch gap-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          <div className="bg-theme1/20 border-theme1 hover:bg-theme1/30 flex flex-col items-center justify-between gap-4 rounded-2xl border-2 p-8 transition-all duration-300">
            <Image
              src="/usluge/ikone/kronicne.svg"
              alt=""
              width={140}
              height={140}
            />
            <p className="text-theme4 text-center text-2xl font-semibold">
              Kronična bol
            </p>
            <Link
              href="/usluge/kronicna-bol"
              className="bg-theme1 hover:bg-theme4 flex items-center gap-6 rounded-2xl px-4 py-2 text-center text-lg tracking-wider text-slate-100 transition-all duration-300"
            >
              Pogledaj više
            </Link>
          </div>
          <div className="bg-theme1/20 border-theme1 hover:bg-theme1/30 flex flex-col items-center justify-between gap-4 rounded-2xl border-2 p-8 transition-all duration-300">
            <Image
              src="/usluge/ikone/vrat.svg"
              alt=""
              width={140}
              height={140}
            />
            <p className="text-theme4 text-center text-2xl font-semibold">
              Bol u vratu
            </p>
            <Link
              href="/usluge/bol-u-vratu"
              className="bg-theme1 hover:bg-theme4 flex items-center gap-6 rounded-2xl px-4 py-2 text-center text-lg tracking-wider text-slate-100 transition-all duration-300"
            >
              Pogledaj više
            </Link>
          </div>
          <div className="bg-theme1/20 border-theme1 hover:bg-theme1/30 flex flex-col items-center justify-between gap-4 rounded-2xl border-2 p-8 transition-all duration-300">
            <Image
              src="/usluge/ikone/leda.svg"
              alt=""
              width={140}
              height={140}
            />
            <p className="text-theme4 text-center text-2xl font-semibold">
              Bol u leđima
            </p>
            <Link
              href="/usluge/bol-u-ledjima"
              className="bg-theme1 hover:bg-theme4 flex items-center gap-6 rounded-2xl px-4 py-2 text-center text-lg tracking-wider text-slate-100 transition-all duration-300"
            >
              Pogledaj više
            </Link>
          </div>
          <div className="bg-theme1/20 border-theme1 hover:bg-theme1/30 flex flex-col items-center justify-between gap-4 rounded-2xl border-2 p-8 transition-all duration-300">
            <Image
              src="/usluge/ikone/kukovi.svg"
              alt=""
              width={140}
              height={140}
            />
            <p className="text-theme4 text-center text-2xl font-semibold">
              Bol u kuku
            </p>
            <Link
              href="/usluge/bol-u-kuku"
              className="bg-theme1 hover:bg-theme4 flex items-center gap-6 rounded-2xl px-4 py-2 text-center text-lg tracking-wider text-slate-100 transition-all duration-300"
            >
              Pogledaj više
            </Link>
          </div>
          <div className="bg-theme1/20 border-theme1 hover:bg-theme1/30 flex flex-col items-center justify-between gap-4 rounded-2xl border-2 p-8 transition-all duration-300">
            <Image
              src="/usluge/ikone/vrat-rame.svg"
              alt=""
              width={140}
              height={140}
            />
            <p className="text-theme4 text-center text-2xl font-semibold">
              Bol u vratu i ramenu
            </p>
            <Link
              href="/usluge/bol-u-vratu-i-ramenu"
              className="bg-theme1 hover:bg-theme4 flex items-center gap-6 rounded-2xl px-4 py-2 text-center text-lg tracking-wider text-slate-100 transition-all duration-300"
            >
              Pogledaj više
            </Link>
          </div>
          <div className="bg-theme1/20 border-theme1 hover:bg-theme1/30 flex flex-col items-center justify-between gap-4 rounded-2xl border-2 p-8 transition-all duration-300">
            <Image
              src="/usluge/ikone/lakat.svg"
              alt=""
              width={140}
              height={140}
            />
            <p className="text-theme4 text-center text-2xl font-semibold">
              Bol u laktu i ruci
            </p>
            <Link
              href="/usluge/bol-u-laktu-i-ruci"
              className="bg-theme1 hover:bg-theme4 flex items-center gap-6 rounded-2xl px-4 py-2 text-center text-lg tracking-wider text-slate-100 transition-all duration-300"
            >
              Pogledaj više
            </Link>
          </div>
          <div className="bg-theme1/20 border-theme1 hover:bg-theme1/30 flex flex-col items-center justify-between gap-4 rounded-2xl border-2 p-8 transition-all duration-300">
            <Image
              src="/usluge/ikone/koljeno-stopalo.svg"
              alt=""
              width={140}
              height={140}
            />
            <p className="text-theme4 text-center text-2xl font-semibold">
              Bol u koljenima i stopalima
            </p>
            <Link
              href="/usluge/bol-u-koljenima-i-stopalima"
              className="bg-theme1 hover:bg-theme4 flex items-center gap-6 rounded-2xl px-4 py-2 text-center text-lg tracking-wider text-slate-100 transition-all duration-300"
            >
              Pogledaj više
            </Link>
          </div>
          <div className="bg-theme1/20 border-theme1 hover:bg-theme1/30 flex flex-col items-center justify-between gap-4 rounded-2xl border-2 p-8 transition-all duration-300">
            <Image
              src="/usluge/ikone/sportske-ozljede.svg"
              alt=""
              width={140}
              height={140}
            />
            <p className="text-theme4 text-center text-2xl font-semibold">
              Sportske ozljede
            </p>
            <Link
              href="/usluge/sportske-ozljede"
              className="bg-theme1 hover:bg-theme4 flex items-center gap-6 rounded-2xl px-4 py-2 text-center text-lg tracking-wider text-slate-100 transition-all duration-300"
            >
              Pogledaj više
            </Link>
          </div>
          <div className="bg-theme1/20 border-theme1 hover:bg-theme1/30 flex flex-col items-center justify-between gap-4 rounded-2xl border-2 p-8 transition-all duration-300">
            <Image
              src="/usluge/ikone/djeca.svg"
              alt=""
              width={140}
              height={140}
            />
            <p className="text-theme4 text-center text-2xl font-semibold">
              Tretmani djece
            </p>
            <Link
              href="/usluge/tretmani-djece"
              className="bg-theme1 hover:bg-theme4 flex items-center gap-6 rounded-2xl px-4 py-2 text-center text-lg tracking-wider text-slate-100 transition-all duration-300"
            >
              Pogledaj više
            </Link>
          </div>
          <div className="bg-theme1/20 border-theme1 hover:bg-theme1/30 flex flex-col items-center justify-between gap-4 rounded-2xl border-2 p-8 transition-all duration-300">
            <Image
              src="/usluge/ikone/tegobe.svg"
              alt=""
              width={140}
              height={140}
            />
            <p className="text-theme4 text-center text-2xl font-semibold">
              Ostale tegobe
            </p>
            <Link
              href="/usluge/ostale-tegobe"
              className="bg-theme1 hover:bg-theme4 flex items-center gap-6 rounded-2xl px-4 py-2 text-center text-lg tracking-wider text-slate-100 transition-all duration-300"
            >
              Pogledaj više
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UslugeGrid;
