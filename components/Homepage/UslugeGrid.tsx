import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";

const UslugeGrid = () => {
  return (
    <section className="">
      <div className="px-6 py-16 sm:px-10 sm:py-20 lg:px-18 lg:py-26">
        <motion.h2
          className="text-theme1 mb-15 text-5xl font-semibold"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Usluge
        </motion.h2>
        <div className="grid items-stretch gap-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          <motion.div
            className="bg-theme1/20 border-theme1 hover:bg-theme1/30 flex flex-col items-center justify-between gap-4 rounded-2xl border-2 p-8 transition-all duration-300"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
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
              href="/usluge/kronicna-bol#kronicna-bol"
              scroll={true}
              className="bg-theme1 hover:bg-theme4 flex items-center gap-6 rounded-2xl px-4 py-2 text-center text-lg tracking-wider text-slate-100 transition-all duration-300"
            >
              Pogledaj više
            </Link>
          </motion.div>
          <motion.div
            className="bg-theme1/20 border-theme1 hover:bg-theme1/30 flex flex-col items-center justify-between gap-4 rounded-2xl border-2 p-8 transition-all duration-300"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
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
              href="/usluge/bol-u-vratu#bol-u-vratu"
              scroll={true}
              className="bg-theme1 hover:bg-theme4 flex items-center gap-6 rounded-2xl px-4 py-2 text-center text-lg tracking-wider text-slate-100 transition-all duration-300"
            >
              Pogledaj više
            </Link>
          </motion.div>
          <motion.div
            className="bg-theme1/20 border-theme1 hover:bg-theme1/30 flex flex-col items-center justify-between gap-4 rounded-2xl border-2 p-8 transition-all duration-300"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
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
              href="/usluge/bol-u-ledjima#bol-u-ledjima"
              scroll={true}
              className="bg-theme1 hover:bg-theme4 flex items-center gap-6 rounded-2xl px-4 py-2 text-center text-lg tracking-wider text-slate-100 transition-all duration-300"
            >
              Pogledaj više
            </Link>
          </motion.div>
          <motion.div
            className="bg-theme1/20 border-theme1 hover:bg-theme1/30 flex flex-col items-center justify-between gap-4 rounded-2xl border-2 p-8 transition-all duration-300"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
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
              href="/usluge/bol-u-kuku#bol-u-kuku"
              scroll={true}
              className="bg-theme1 hover:bg-theme4 flex items-center gap-6 rounded-2xl px-4 py-2 text-center text-lg tracking-wider text-slate-100 transition-all duration-300"
            >
              Pogledaj više
            </Link>
          </motion.div>
          <motion.div
            className="bg-theme1/20 border-theme1 hover:bg-theme1/30 flex flex-col items-center justify-between gap-4 rounded-2xl border-2 p-8 transition-all duration-300"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
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
              href="/usluge/bol-u-vratu-i-ramenu#bol-u-vratu-i-ramenu"
              scroll={true}
              className="bg-theme1 hover:bg-theme4 flex items-center gap-6 rounded-2xl px-4 py-2 text-center text-lg tracking-wider text-slate-100 transition-all duration-300"
            >
              Pogledaj više
            </Link>
          </motion.div>
          <motion.div
            className="bg-theme1/20 border-theme1 hover:bg-theme1/30 flex flex-col items-center justify-between gap-4 rounded-2xl border-2 p-8 transition-all duration-300"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
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
              href="/usluge/bol-u-laktu-i-ruci#bol-u-laktu-i-ruci"
              scroll={true}
              className="bg-theme1 hover:bg-theme4 flex items-center gap-6 rounded-2xl px-4 py-2 text-center text-lg tracking-wider text-slate-100 transition-all duration-300"
            >
              Pogledaj više
            </Link>
          </motion.div>
          <motion.div
            className="bg-theme1/20 border-theme1 hover:bg-theme1/30 flex flex-col items-center justify-between gap-4 rounded-2xl border-2 p-8 transition-all duration-300"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
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
              href="/usluge/bol-u-koljenima-i-stopalima#bol-u-koljenima-i-stopalima"
              scroll={true}
              className="bg-theme1 hover:bg-theme4 flex items-center gap-6 rounded-2xl px-4 py-2 text-center text-lg tracking-wider text-slate-100 transition-all duration-300"
            >
              Pogledaj više
            </Link>
          </motion.div>
          <motion.div
            className="bg-theme1/20 border-theme1 hover:bg-theme1/30 flex flex-col items-center justify-between gap-4 rounded-2xl border-2 p-8 transition-all duration-300"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
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
              href="/usluge/sportske-ozljede#sportske-ozljede"
              scroll={true}
              className="bg-theme1 hover:bg-theme4 flex items-center gap-6 rounded-2xl px-4 py-2 text-center text-lg tracking-wider text-slate-100 transition-all duration-300"
            >
              Pogledaj više
            </Link>
          </motion.div>
          <motion.div
            className="bg-theme1/20 border-theme1 hover:bg-theme1/30 flex flex-col items-center justify-between gap-4 rounded-2xl border-2 p-8 transition-all duration-300"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
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
              href="/usluge/tretmani-djece#tretmani-djece"
              scroll={true}
              className="bg-theme1 hover:bg-theme4 flex items-center gap-6 rounded-2xl px-4 py-2 text-center text-lg tracking-wider text-slate-100 transition-all duration-300"
            >
              Pogledaj više
            </Link>
          </motion.div>
          <motion.div
            className="bg-theme1/20 border-theme1 hover:bg-theme1/30 flex flex-col items-center justify-between gap-4 rounded-2xl border-2 p-8 transition-all duration-300"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
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
              href="/usluge/ostale-tegobe#ostale-tegobe"
              scroll={true}
              className="bg-theme1 hover:bg-theme4 flex items-center gap-6 rounded-2xl px-4 py-2 text-center text-lg tracking-wider text-slate-100 transition-all duration-300"
            >
              Pogledaj više
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UslugeGrid;
