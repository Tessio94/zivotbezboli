"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BiChevronRight } from "react-icons/bi";
import Banner from "@/components/Homepage/Banner";
import { easeOut, motion } from "motion/react";

const listVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      easingIn: easeOut,
    },
  },
};

const page = () => {
  return (
    <>
      <section>
        <div className="flex flex-col md:flex-row">
          <div className="relative z-10 bg-[url(/zivotbezboli-background-nostroke-1920.png)] max-md:order-1 max-md:order-2 md:w-1/2">
            <div className="from-theme3/90 to-theme3/30 absolute inset-0 -z-10 bg-linear-to-r" />

            <motion.div
              className="flex flex-col items-start gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:px-18 lg:py-26"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                className="mx-auto inline-block"
                src="/usluge/ikone/bijele/sportske-ozljede.svg"
                alt=""
                width={160}
                height={160}
              />

              <p className="flex flex-row items-start gap-2 text-xl text-slate-100">
                <BiChevronRight className="shrink-0 text-3xl" />
                sa sportskim ozljedama što kao bivši sportaš što kroz praksu
                imam jako puno iskustva i jako dobro znam kako vam pomoći.
              </p>
            </motion.div>
          </div>
          <div className="flex flex-col gap-10 px-6 py-16 max-md:order-1 sm:px-10 sm:py-20 md:w-1/2 lg:px-18 lg:py-26">
            <motion.h2
              className="text-theme1 text-5xl font-semibold"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Sportske ozljede
            </motion.h2>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Ako ste nedavno zadobili sportsku ozljedu ili ako već neko vrijeme
              patite od ozljede – može biti vrlo primamljivo to pripisati kao
              &quot;ništa ozbiljno&quot; i jednostavno &quot;trpjeti&quot; i
              nastaviti najbolje što možete.
            </motion.p>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Ili je vrlo lako obeshrabriti se i na kraju se osjećati
              &quot;zaglavljeno&quot;, pitajući se hoćete li se ikada moći
              vratiti sportu ili ostati aktivni kao prije...
            </motion.p>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Link
                href="/usluge/rezervacija"
                className="bg-theme1 hover:bg-theme4 flex w-fit items-center gap-6 rounded-2xl px-4 py-2 text-lg tracking-wider text-slate-100 transition-all duration-300"
              >
                Rezerviraj termin
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="bg-theme1/10">
        <div className="flex flex-col xl:flex-row">
          <div className="flex flex-col gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:px-18 lg:py-26 xl:w-1/2">
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              U ordinaciji Život Bez Boli imamo iskustva u pomaganju svima, od
              rekreativnih sportaša do vrhunskih sportaša
            </motion.p>
            <motion.ul
              className="flex flex-col gap-4"
              variants={listVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  Tendinitis
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  Ozljede od trčanja i biciklizma
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  Burzitis
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  Istegnuća i uganuća
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  Rehabilitacija nakon operacije
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  Oštećenje ligamenata
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  Bol u gležnju i koljenu
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  Rehabilitacija nakon potresa mozga
                </p>
              </motion.li>
            </motion.ul>
          </div>
          <div className="max-h-212.5 overflow-hidden xl:w-1/2">
            <Image
              className="h-auto w-full"
              src="/slike/bez-boli-15-md.jpg"
              alt=""
              width={960}
              height={960}
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
