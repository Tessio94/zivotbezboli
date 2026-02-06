"use client";

import React from "react";
import { easeOut, motion } from "motion/react";
import { BiChevronRight } from "react-icons/bi";
import Image from "next/image";
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

const TerapijskiTrening = () => {
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
              Terapijski trening „Trening za život“
            </motion.h2>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Terapijski trening predstavlja sljedeći korak nakon terapijskih
              vježbi.
            </motion.p>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Kada se kroz terapiju i ciljane vježbe uspostavi{" "}
              <strong>
                bolja pokretljivost i kontrola tijela, terapijski trening služi
                za razvoj jakosti, izdržljivosti i funkcionalnosti potrebne za
                svakodnevni život.
              </strong>
            </motion.p>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Ovaj oblik treninga temelji se na principima prirodnog ljudskog
              kretanja te uključuje
            </motion.p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col lg:flex-row">
          <div className="2xl:bg-position-[0% 50%] overflow-hidden bg-none bg-cover bg-no-repeat max-2xl:bg-position-[20%] max-lg:order-2 lg:w-1/2 lg:bg-[url(/slike/bez-boli-21-md.jpg)]">
            <Image
              className="block h-auto w-full lg:hidden"
              src="/slike/bez-boli-21-md.jpg"
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
              Što je terapijski trening?
            </motion.h3>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Terapijski trening je funkcionalan, svjestan i kontroliran trening
              osmišljen da tijelo učini snažnijim, stabilnijim i otpornijim, uz
              zadržavanje kvalitete pokreta stečene tijekom terapije.
            </motion.p>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Naglasak nije na izgledu, već na:
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
                  boljem i prirodnijem kretanju
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  pravilnom disanju
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  razvoju funkcionalne jakosti stabilnosti i kontroli tijela
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  boljoj povezanosti tijela i uma
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  Zato se često naziva „treningom za život“
                </p>
              </motion.li>
            </motion.ul>
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
              Kako se razlikuje od klasičnog treninga?
            </motion.h3>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Za razliku od klasičnih fitness programa, terapijski trening:
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
                  poštuje biomehaniku ljudskog tijela
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  prilagođen je individualnim mogućnostima
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  razvija snagu kroz funkcionalne pokrete
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  povezuje disanje, stabilnost i pokret
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  smanjuje rizik od ozljeda
                </p>
              </motion.li>
            </motion.ul>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Svaki pokret ima svrhu i prenosi se na svakodnevne aktivnosti
              poput hodanja, saginjanja, podizanja, nošenja i održavanja
              posture.
            </motion.p>
          </div>
          <div className="2xl:bg-position-[0% 50%] overflow-hidden bg-none bg-cover bg-no-repeat max-2xl:bg-position-[20%] max-lg:order-2 lg:w-1/2 lg:bg-[url(/slike/bez-boli-25-md.jpg)]">
            <Image
              className="block h-auto w-full lg:hidden"
              src="/slike/bez-boli-25-md.jpg"
              alt=""
              width={960}
              height={1080}
              sizes="(min-width: 1280px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>
      <Banner version="two" />
      <section className="bg-theme1/10">
        <div className="mx-auto px-6 py-16 sm:px-10 sm:py-20 lg:px-18 lg:py-26 xl:w-3/4">
          <div className="flex flex-col gap-8 sm:gap-10">
            <motion.h2
              className="text-theme1 text-3xl font-semibold sm:text-4xl"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Ključni elementi terapijskog treninga
            </motion.h2>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Terapijski trening uključuje:
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
                  prirodne obrasce kretanja (čučanj, iskorak, rotacija, oslonci)
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  pravilno i svjesno disanje
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  razvoj jakosti (snage) bez preopterećenja
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  poboljšanje funkcionalnosti i izdržljivosti
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  kontrolu i stabilnost trupa
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  mentalnu prisutnost i fokus
                </p>
              </motion.li>
            </motion.ul>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Trening se provodi progresivno, uz stalnu prilagodbu potrebama
              klijenta.
            </motion.p>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Ovaj oblik treninga temelji se na principima prirodnog ljudskog
              kretanja te uključuje
            </motion.p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:w-1/2 lg:px-18 lg:py-26 xl:gap-8 2xl:gap-10">
            <motion.h3
              className="text-theme1 text-3xl font-semibold sm:text-4xl"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Za koga je terapijski trening?
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
                  osobe koje su završile terapijski proces
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  osobe koje žele sigurno jačati tijelo
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  osobe s poviješću bolova ili ozljeda
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  rekreativce i sportaše
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  osobe koje žele dugoročno kvalitetnije kretanje
                </p>
              </motion.li>
            </motion.ul>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Idealan je za one koji žele snažno, ali funkcionalno tijelo.
            </motion.p>
          </div>

          <div className="bg-theme1/10 flex flex-col gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:w-1/2 lg:px-18 lg:py-26 xl:gap-8 2xl:gap-10">
            <motion.h3
              className="text-theme1 text-3xl font-semibold sm:text-4xl"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Cilj terapijskog treninga je:
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
                  dugoročno održavanje zdravlja
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  veća otpornost tijela na svakodnevna opterećenja
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  bolja postura i kontrola pokreta
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  jače fizičke i mentalne sposobnosti
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  slobodnije i sigurnije kretanje
                </p>
              </motion.li>
            </motion.ul>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Terapijski trening povezuje terapiju i aktivan život, pomažući vam
              da se krećete snažno, stabilno i u skladu s prirodom ljudskog
              tijela.
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TerapijskiTrening;
