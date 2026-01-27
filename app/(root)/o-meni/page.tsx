import React from "react";
import Image from "next/image";
import Banner from "@/components/Homepage/Banner";
import { CgChevronRight } from "react-icons/cg";
import * as motion from "motion/react-client";

const Page = () => {
  return (
    <>
      <section>
        <div className="relative">
          <div className="bg-theme4/70 absolute inset-0" />
          <div className="absolute top-1/2 right-1/2 flex translate-x-1/2 -translate-y-1/2 flex-col items-center gap-6">
            <motion.h1
              className="after:to-theme1 relative text-center text-5xl font-bold text-slate-100 after:absolute after:top-[calc(100%+5px)] after:left-1/2 after:h-1 after:w-[50%] after:-translate-x-1/2 after:rounded-full after:bg-linear-to-r after:from-slate-100 after:content-[''] sm:text-6xl md:text-7xl lg:text-8xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              O Meni
            </motion.h1>
          </div>

          <div
            className="h-140 max-h-150 overflow-hidden bg-cover bg-no-repeat max-[550px]:bg-position-[30%]! md:h-fit md:bg-none!"
            style={{
              background: `url(/slike/bez-boli-11-xl.jpg) center / cover no-repeat`,
            }}
          >
            <Image
              className="hidden min-[1920px]:w-full md:block"
              src="/slike/bez-boli-11-xl.jpg"
              alt="Život bez boli hero image"
              width={1920}
              height={300}
              preload={true}
            />
          </div>
        </div>
      </section>
      <section className="bg-theme1/10 px-6 py-16 sm:px-10 sm:py-20 lg:px-18 lg:py-26">
        <div className="flex flex-col gap-10 xl:flex-row">
          <div className="flex flex-col gap-4 xl:py-20">
            <motion.h2
              className="text-theme1 mb-11 text-5xl font-semibold"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              O meni
            </motion.h2>
            <motion.p
              className="text-theme4 text-2xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Kako je sve počelo..?
            </motion.p>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <strong className="underline">Ivan Radičev</strong>, rođen u
              Vinkovcima 13. 04. 1990.
            </motion.p>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Nakon završene Osnovne škole 2004.g. odlazim u Zagreb u Srednju
              medicinsku školu kao novi član Košarkaškog kluba Cibona i Hrvatske
              košarkaške reprezentacije. Tijekom završavanja juniorskog staža
              imao sam ozbiljniju ozljedu koja me usporila i udaljila sa trena
              na godinu dana.
            </motion.p>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Kroz taj period nisam baš uspio pronaći rješenje za svoje bolove,
              pronaći njen uzrok, a moja se karijera nije više razvijala u
              željenom smjeru.
            </motion.p>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Kada sada gledam unazad vidim da je to zapravo početak mog
              interesa sa ono s čime se danas bavim.
            </motion.p>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Svi nalazi su mi bili uredni, ali mene je i dalje boljelo i nisam
              mogao igrati, a doktori nisu znali što mi se događa.
            </motion.p>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              U tom periodu u kojem nisam mogao igrati zbog ozljede, odlučujem
              se na odrađivanje pripravničkog staža godinu dana u Vinogradskoj
              bolnici kao medicinski tehničar na odjelu za intezivnog liječenje.
            </motion.p>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Osobno „negativno“ iskustvo te želja za boljim poznavanje ljudskog
              tijela, njegove anatomije, fiziologije usmjerile su me na studij{" "}
              <strong>fizioterapije</strong> na kojem sam htio naučiti više o{" "}
              <strong>
                zdravlju, rehabilitaciji, liječenju i pomaganju drugima.
              </strong>
            </motion.p>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Nakon završetka studija 2014.g.počinjem stažirati u{" "}
              <strong>Poliklinici Arithera</strong> i u istoj godini paralelno
              volontiram u ambulanti <strong>Nogometnog kluba Dinamo.</strong>
            </motion.p>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Od 2015. godine počinjem par puta godišnje odlaziti na okupljanja
              mlađih selekcija{" "}
              <strong>Hrvatske nogometne reprezentacije</strong> U14 - U19 te
              iste godine počinjem raditi u privatnom{" "}
              <strong>rehabilitacijskom centru Body Balance</strong> gdje
              primjenjujem sva stečena znanja iz područja{" "}
              <strong>manualne terapije i rehabilitacije</strong> kod{" "}
              <strong>
                opće populacije, vrhunskih sportaša i rekreativaca.
              </strong>
            </motion.p>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Paralelno uz rad u Body Balance - u na terenu pratim
              profesionalnog <strong>tenisača Bornu Čorića.</strong>{" "}
              <strong>U 6. mjesecu 2017.g.</strong> odlučujem se za pokretanje
              privatne prakse i stvaranje vlastite priče kroz brend i ordinaciju
              Život Bez Boli koja svakim danom napreduje i pomaže sve većem
              broju ljudi.
            </motion.p>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Od 2014. godine konstantno odlazim na razne edukacije iz{" "}
              <strong>Manualne terapije i Manualne medicine</strong>
            </motion.p>
          </div>
          <motion.div
            className="h-fit shrink-0 overflow-hidden max-xl:flex max-xl:gap-10"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              className="rounded-[38%_62%_77%_23%/30%_30%_70%_70%]"
              src="/slike/bez-boli-4-sm.jpg"
              alt=""
              width={600}
              height={1080}
            />
            <Image
              className="block scale-x-[-1] rounded-[38%_62%_77%_23%/30%_30%_70%_70%] max-md:hidden xl:hidden"
              src="/slike/bez-boli-9-sm.jpg"
              alt=""
              width={600}
              height={1080}
            />
          </motion.div>
        </div>
      </section>
      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-18 lg:py-26">
        <motion.h2
          className="text-theme1 mb-15 text-5xl font-semibold"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Školovanje
        </motion.h2>
        <ul className="flex flex-col gap-8">
          <motion.li
            className="flex items-start gap-2 sm:gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <CgChevronRight className="text-theme1 shrink-0 text-3xl" />
            <p className="text-theme4 text-2xl font-semibold sm:text-3xl">
              2014 do 2016 Ortopedska manualna fizioterapija
              (Kalteborn/Evjenth–pristup)
            </p>
          </motion.li>
          <motion.li
            className="flex items-start gap-2 sm:gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <CgChevronRight className="text-theme1 shrink-0 text-3xl" />
            <p className="text-theme4 text-2xl font-semibold sm:text-3xl">
              2016 Akupresurna masaža
            </p>
          </motion.li>
          <motion.li
            className="flex items-start gap-2 sm:gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <CgChevronRight className="text-theme1 shrink-0 text-3xl" />
            <p className="text-theme4 text-2xl font-semibold sm:text-3xl">
              2016 do 2022 Osteopatija ( Diplomirani Osteopat)
            </p>
          </motion.li>
          <motion.li
            className="flex items-start gap-2 sm:gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <CgChevronRight className="text-theme1 shrink-0 text-3xl" />
            <p className="text-theme4 text-2xl font-semibold sm:text-3xl">
              2017 do 2019 Tečajevi manualne terapije dr. Aleksandar Stošić
            </p>
          </motion.li>
          <motion.li
            className="flex items-start gap-2 sm:gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <CgChevronRight className="text-theme1 shrink-0 text-3xl" />
            <p className="text-theme4 text-2xl font-semibold sm:text-3xl">
              2018 Miofoascijalno opuštanje (tečaj Miofascijal Release by
              Barnes)
            </p>
          </motion.li>
          <motion.li
            className="flex items-start gap-2 sm:gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <CgChevronRight className="text-theme1 shrink-0 text-3xl" />
            <p className="text-theme4 text-2xl font-semibold sm:text-3xl">
              2021-2023 P- DTR metoda (P- DTR terapeut)
            </p>
          </motion.li>
          <motion.li
            className="flex items-start gap-2 sm:gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <CgChevronRight className="text-theme1 shrink-0 text-3xl" />
            <p className="text-theme4 text-2xl font-semibold sm:text-3xl">
              2025 – Trening funkcionalne jakosti (trenerska edukacija Move Like
              Human - Bodysculpt by Roni Kovačić)
            </p>
          </motion.li>
        </ul>
      </section>
      <Banner version="two" />
    </>
  );
};

export default Page;
