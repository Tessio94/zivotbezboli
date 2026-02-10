import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import * as motion from "motion/react-client";
import { CgChevronRight } from "react-icons/cg";
import Banner from "@/components/Homepage/Banner";
import CarouselReal from "@/components/omeni/CarouselReal";
import heroImg from "@/public/slike/bez-boli-11-xl.jpg";

const Page = () => {
  return (
    <>
      <section>
        <div className="relative">
          <div className="bg-theme4/70 absolute inset-0 z-50" />
          <div className="absolute top-1/2 right-1/2 z-50 flex translate-x-1/2 -translate-y-1/2 flex-col items-center gap-6">
            <motion.h1
              className="after:to-theme1 relative text-center text-5xl font-bold text-slate-100 after:absolute after:top-[calc(100%+5px)] after:left-1/2 after:h-1 after:w-[50%] after:-translate-x-1/2 after:rounded-full after:bg-linear-to-r after:from-slate-100 after:content-[''] sm:text-6xl md:text-7xl lg:text-8xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              O Meni
            </motion.h1>
          </div>

          <div className="-z-10 h-140 max-h-150 overflow-hidden xl:h-150">
            <Image
              className="block object-cover max-[550px]:object-[30%] min-[1920px]:w-full 2xl:object-top"
              src={heroImg}
              alt="Život bez boli hero image"
              fill
              placeholder="blur"
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
              interesa sa čime se i danas bavim.
            </motion.p>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Nalazi su mi bili uredni, ali mene je i dalje boljelo, danas zbog
              svog iskustva svoje pacijente puno bolje razumijem.
            </motion.p>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              U tom periodu u kojem nisam mogao igrati zbog ozljede, odlučujem
              se na odrađivanje pripravničkog staža godinu dana u Vinogradskoj
              bolnici kao medicinski tehničar na odjelu za intezivno liječenje.
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
            className="h-fit shrink-0 overflow-hidden max-xl:flex max-xl:w-full"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              className="rounded-[38%_62%_77%_23%/30%_30%_70%_70%] max-xl:w-1/2 max-xl:pr-5 max-md:w-full max-md:pr-0"
              src="/slike/bez-boli-30-sm.jpg"
              alt=""
              width={600}
              height={1080}
            />
            <Image
              className="block scale-x-[-1] rounded-[38%_62%_77%_23%/30%_30%_70%_70%] max-xl:w-1/2 max-xl:pl-5 max-md:hidden xl:hidden"
              src="/slike/bez-boli-31-sm.jpg"
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
              2018 Miofoascijalno opuštanje (tečaj Miofascial Release by Barnes)
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
      <div className="overflow-hidden xl:max-h-212.5">
        <Image
          className="h-auto w-full"
          src="/slike/bez-boli-32-xl.jpg"
          alt=""
          width={1920}
          height={1080}
        />
      </div>
      <Banner version="two" />
      <section>
        <div className="flex flex-col xl:flex-row">
          <div className="bg-theme1/10 flex flex-col gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:px-18 lg:py-26 xl:w-1/2">
            <motion.h2
              className="text-theme1 text-5xl font-semibold"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Često postavljena pitanja
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
                  Nakon 3-6 mjeseci sve ozljede bi trebale zacijeliti
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
                  Nakon zacjeljivanja: Bol bi trebala popustiti (zglobovi/mišići
                  se opuštaju)
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
                  Ako bol potraje, ozljeda više nije glavni problem
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
                  Mozak održava bol kako bi te zaštitio
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
                  Ako je to slučaj onda znam da je nešto krenulo u krivom smjeru
                </p>
              </motion.li>
            </ul>
          </div>
          <div className="h-auto w-full overflow-hidden bg-none bg-cover bg-no-repeat xl:w-1/2 xl:bg-[url(/slike/bez-boli-11-md.jpg)]">
            <Image
              className="block h-auto w-full xl:hidden"
              src="/slike/bez-boli-11-md.jpg"
              alt=""
              width={960}
              height={960}
              sizes="(min-width: 1280px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col xl:flex-row">
          <div className="w-full px-6 py-16 sm:px-10 sm:py-20 lg:px-18 lg:py-26 xl:w-1/2">
            <motion.h2
              className="text-theme1 mb-15 text-5xl font-semibold"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Zašto je ovaj pristup drugačiji
            </motion.h2>
            {/* <Carousel /> */}
            <CarouselReal />
          </div>
          <div className="bg-theme1/10 w-full px-6 py-16 sm:px-10 sm:py-20 lg:px-18 lg:py-26 xl:w-1/2">
            <motion.h2
              className="text-theme1 mb-15 text-5xl font-semibold"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Proces od 4 koraka
            </motion.h2>
            <div className="flex flex-col">
              <div className="relative flex flex-row items-start gap-3 overflow-hidden pb-5">
                <div className="bg-theme4 after:bg-theme4 relative z-10 flex h-10 min-w-10 items-center justify-center rounded-full text-2xl font-semibold text-slate-100 after:absolute after:top-full after:left-1/2 after:h-40 after:w-1 after:-translate-x-1/2 after:content-[''] max-[500px]:after:h-65">
                  1
                </div>
                <div className="flex flex-col items-start gap-2">
                  <p className="text-theme4 text-2xl font-semibold">
                    Dijagnoza
                  </p>
                  <p className="text-theme4 font-regular text-xl">
                    Najvažnije je utvrdite imate li strukturni problem,
                    oštećenja mišića, diska ili zgloba, ili imate funkcionalni
                    problem, pri čemu su slike čiste i nema oštećenja, nego se
                    radi o zaštiti živčanog sustava.
                  </p>
                </div>
              </div>

              <div className="relative flex flex-row items-start gap-3 overflow-hidden pb-5">
                <div className="bg-theme4 after:bg-theme4 relative z-10 flex h-10 min-w-10 items-center justify-center rounded-full text-2xl font-semibold text-slate-100 after:absolute after:top-full after:left-1/2 after:h-75 after:w-1 after:-translate-x-1/2 after:content-[''] max-[500px]:after:h-135">
                  2
                </div>
                <div className="flex flex-col items-start gap-2">
                  <p className="text-theme4 text-2xl font-semibold">
                    Desibilizacija živčanog sustava i terapija
                  </p>
                  <p className="text-theme4 font-regular text-xl">
                    Ovo je glavni dio procesa u kojem tražim razloge zašto
                    osjećate bol u nekom području i koji je razlog za to.
                    <br />
                    Bilo da se radi o starim traumama, zbog prekomjerne upotrebe
                    ili različitih kompenzacija. Popravljamo ulaznu informaciju
                    preko vašeg tijela da vas mozak i živčani sustav prestanu
                    štiti i da prestane osjećati bol i ukočenost.
                  </p>
                </div>
              </div>
              <div className="relative flex flex-row items-start gap-3 overflow-hidden pb-5">
                <div className="bg-theme4 after:bg-theme4 relative z-20 flex h-10 min-w-10 items-center justify-center rounded-full text-2xl font-semibold text-slate-100 after:absolute after:top-full after:left-1/2 after:h-75 after:w-1 after:-translate-x-1/2 after:content-[''] max-[380px]:after:h-105">
                  3
                </div>
                <div className="flex flex-col items-start gap-2">
                  <p className="text-theme4 text-2xl font-semibold">Pokret</p>
                  <p className="text-theme4 font-regular text-xl">
                    Naučiti ću vas kako se kretati na siguran i učinkovit način
                    bez kompenzacija i novih bolova i to ciljano za svakog što
                    mu je u tom trenutku potrebno.
                  </p>
                </div>
              </div>

              <div className="flex flex-row items-start gap-3">
                <div className="bg-theme4 relative z-10 flex h-10 min-w-10 items-center justify-center rounded-full text-2xl font-semibold text-slate-100">
                  4
                </div>
                <div className="flex flex-col items-start gap-2">
                  <p className="text-theme4 text-2xl font-semibold">
                    Trening jakosti
                  </p>
                  <p className="text-theme4 font-regular text-xl">
                    Naučit ću vas kako da ojačate slaba područja, poboljšate
                    kvalitetu života i zaštite se od budućih ozljeda i bolova
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;

export const metadata: Metadata = {
  title: "O meni |  Život bez boli",
  description:
    "Ivan Radičev, bacc. fizioterapije, diplomirani osteopat i P-DTR terapeut. Individualan pristup i fokus na uzrok boli.",
  openGraph: {
    title: "Ivan Radičev – fizioterapeut, osteopat i P-DTR terapeut",
    description:
      "Saznajte više o mom profesionalnom putu, iskustvu i pristupu liječenju boli, pokreta i kroničnih tegoba.",
    url: "https://www.zivotbezboli.com/o-meni",
    images: [
      {
        url: "https://www.zivotbezboli.com/slike/bez-boli-11-xl.jpg",
        width: 1920,
        height: 1080,
        alt: "O meni | Život bez boli",
      },
    ],
    type: "website",
    locale: "hr_HR",
  },
};
