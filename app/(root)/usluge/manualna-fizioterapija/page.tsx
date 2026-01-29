"use client";

import React from "react";
import Image from "next/image";
import { easeOut, motion } from "motion/react";
import { BiChevronRight } from "react-icons/bi";
import Banner from "@/components/Homepage/Banner";

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
        <div className="mx-auto px-6 py-16 sm:px-10 sm:py-20 lg:px-18 lg:py-26 xl:w-3/4">
          <div className="flex flex-col gap-8 sm:gap-10">
            <motion.h2
              className="text-theme1 text-3xl font-semibold sm:text-4xl"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Manualna fizioterapija – Kaltenborn–Evjenth pristup
            </motion.h2>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Manualna fizioterapija je oblik terapije koji koristi precizne,
              kontrolirane ručne tehnike kako bi se smanjila bol, poboljšala
              pokretljivost zglobova i vratila normalna funkcija tijela.
            </motion.p>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Jedan od najpoznatijih i najpriznatijih pristupa u manualnoj
              terapiji je <strong>Kaltenborn–Evjenth koncept</strong>.
            </motion.p>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Ovaj pristup temelji se na jasnoj procjeni, individualnom planu
              terapije i sigurnim, znanstveno utemeljenim tehnikama.
            </motion.p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col lg:flex-row">
          <div className="2xl:bg-position-[0% 50%] overflow-hidden bg-none bg-cover bg-no-repeat max-2xl:bg-position-[20%] max-lg:order-2 lg:w-1/2 lg:bg-[url(/slike/bez-boli-10-md.jpg)]">
            <Image
              className="block h-auto w-full lg:hidden"
              src="/slike/bez-boli-10-md.jpg"
              alt=""
              width={960}
              height={1080}
              sizes="(min-width: 1280px) 50vw, 100vw"
            />
          </div>

          <div className="bg-theme1/10 flex flex-col gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:w-1/2 lg:px-18 lg:py-26 xl:min-h-186 xl:gap-8 2xl:gap-10">
            <motion.h3
              className="text-theme1 text-3xl font-semibold sm:text-4xl"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Što je Kaltenborn–Evjenth pristup?
            </motion.h3>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Kaltenborn–Evjenth pristup je specijalizirani oblik manualne
              terapije usmjeren na funkciju zglobova, mišića i vezivnog tkiva.
            </motion.p>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Njegov cilj je vratiti normalan opseg pokreta, smanjiti bol i
              omogućiti tijelu da se kreće lakše i bez ograničenja. Terapija se
              temelji na razumijevanju biomehanike tijela – kako se zglobovi
              kreću, kako su opterećeni i kako se mogu sigurno mobilizirati.
            </motion.p>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Tijekom tretmana koriste se:
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
                  nježne i precizne mobilizacije zglobova
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  istezanje skraćenih struktura
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  manualne tehnike za smanjenje boli
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  aktivno sudjelovanje pacijenta, kada je to potrebno
                </p>
              </motion.li>
            </motion.ul>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Sve tehnike izvode se kontrolirano, bez naglih pokreta, s
              naglaskom na sigurnost i ugodu pacijenta.
            </motion.p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col lg:flex-row">
          <div className="bg-theme1/10 flex flex-col gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:w-1/2 lg:px-18 lg:py-26 xl:min-h-186 xl:gap-8 2xl:gap-10">
            <motion.h3
              className="text-theme1 text-3xl font-semibold sm:text-4xl"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Osnovni principi Kaltenborn–Evjenth pristupa
            </motion.h3>
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
                  Individualna procjena – svaki pacijent je drugačiji
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  Preciznost pokreta – terapija je ciljana i usmjerena
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  Bezbolan ili minimalno neugodan tretman
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  Aktivna suradnja pacijenta
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  Postupno vraćanje funkcije i pokreta
                </p>
              </motion.li>
            </motion.ul>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Cilj nije samo trenutno olakšanje, već dugoročno poboljšanje
              funkcije.
            </motion.p>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Terapija je prikladna za različite dobne skupine i razine fizičke
              aktivnosti.
            </motion.p>
          </div>
          <div className="2xl:bg-position-[0% 50%] overflow-hidden bg-none bg-cover bg-no-repeat max-2xl:bg-position-[20%] max-lg:order-2 lg:w-1/2 lg:bg-[url(/slike/bez-boli-3-md.jpg)]">
            <Image
              className="block h-auto w-full lg:hidden"
              src="/slike/bez-boli-3-md.jpg"
              alt=""
              width={960}
              height={1080}
              sizes="(min-width: 1280px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>
      <Banner version="one" />

      <section>
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:w-1/2 lg:px-18 lg:py-26 xl:gap-8 2xl:gap-10">
            <motion.h3
              className="text-theme1 text-3xl font-semibold sm:text-4xl"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Kod kojih tegoba se primjenjuje?
            </motion.h3>
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
                  bolova u vratu, leđima i križima
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  smanjene pokretljivosti zglobova
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  tegoba ramena, kuka i koljena
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  oporavka nakon ozljeda
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  kroničnih mišićno-koštanih problema
                </p>
              </motion.li>
            </motion.ul>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Terapija je prikladna za različite dobne skupine i razine fizičke
              aktivnosti.
            </motion.p>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Jedan od najpoznatijih i najpriznatijih pristupa u manualnoj
              terapiji je <strong>Kaltenborn–Evjenth koncept</strong>.
            </motion.p>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Ovaj pristup temelji se na jasnoj procjeni, individualnom planu
              terapije i sigurnim, znanstveno utemeljenim tehnikama.
            </motion.p>
          </div>

          <div className="bg-theme1/10 flex flex-col gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:w-1/2 lg:px-18 lg:py-26 xl:gap-8 2xl:gap-10">
            <motion.h3
              className="text-theme1 text-3xl font-semibold sm:text-4xl"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Zašto odabrati ovaj pristup?
            </motion.h3>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Kaltenborn–Evjenth pristup poznat je po:
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
                  sigurnosti i preciznosti
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  znanstveno utemeljenim tehnikama
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  individualnom pristupu svakom pacijentu
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  kombinaciji pasivne i aktivne terapije
                </p>
              </motion.li>
            </motion.ul>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Cilj je pomoći vam da se krećete lakše, bez boli i s više
              sigurnosti u vlastito tijelo.
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
