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

const TerapijskeVjezbe = () => {
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
              Terapijske vježbe
            </motion.h2>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Terapijske vježbe predstavljaju važan dio terapijskog procesa i
              nastavak manualnog tretmana.
            </motion.p>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Njihov cilj je{" "}
              <strong>
                učvrstiti postignute rezultate, poboljšati pokretljivost i
                omogućiti dugoročno kvalitetnije kretanje.
              </strong>
            </motion.p>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Nakon individualne procjene i provedenog tretmana, izrađuje se
              personalizirani program ciljano odabranih vježbi, prilagođen vašem
              tijelu, mogućnostima i svakodnevnim aktivnostima.
            </motion.p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col lg:flex-row">
          <div className="overflow-hidden bg-none bg-cover bg-no-repeat max-lg:order-2 lg:w-1/2 lg:bg-[url(/slike/bez-boli-7-md.jpg)]">
            <Image
              className="block h-auto w-full lg:hidden"
              src="/slike/bez-boli-7-md.jpg"
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
              Cilj terapijskih vježbi je pomoći tijelu da:
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
                  poveća pokretljivost i stabilnost
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  razvije kvalitetnije i sigurnije gibanje
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  poboljša posturu (držanje tijela)
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  poveća jakost, izdržljivost i koordinaciju
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  smanji rizik od ponovnih tegoba
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  unaprijedi fizičke i mentalne kapacitete
                </p>
              </motion.li>
            </motion.ul>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Vježbe ne služe samo rehabilitaciji, već i svjesnijem i
              učinkovitijem korištenju tijela.
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
              Individualan pristup
            </motion.h3>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Svaka osoba je drugačija, zato terapijske vježbe:
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
                  nisu univerzalne
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  ne opterećuju tijelo nepotrebno
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  prilagođene su vašem trenutnom stanju
                </p>
              </motion.li>
            </motion.ul>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Program se može sastojati od vježbi za mobilnost, stabilnost,
              kontrolu pokreta, disanje i opuštanje, uz jasno objašnjenje
              pravilnog izvođenja.
            </motion.p>
          </div>
          <div className="2xl:bg-position-[0% 50%] overflow-hidden bg-none bg-cover bg-no-repeat max-2xl:bg-position-[20%] max-lg:order-2 lg:w-1/2 lg:bg-[url(/slike/bez-boli-4-md.jpg)]">
            <Image
              className="block h-auto w-full lg:hidden"
              src="/slike/bez-boli-4-md.jpg"
              alt=""
              width={960}
              height={1080}
              sizes="(min-width: 1280px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>
      <Banner version="two" />
      <section>
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:w-1/2 lg:px-18 lg:py-26 xl:gap-8 2xl:gap-10">
            <motion.h3
              className="text-theme1 text-3xl font-semibold sm:text-4xl"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Aktivna uloga klijenta
            </motion.h3>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Terapijske vježbe potiču aktivno sudjelovanje klijenta u vlastitom
              oporavku.
            </motion.p>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Kroz pravilno vođene vježbe razvija se:
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
                  bolja svjesnost tijela
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  kontrola pokreta
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  osjećaj sigurnosti u kretanju
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  mentalna prisutnost i fokus
                </p>
              </motion.li>
            </motion.ul>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Ovakav pristup pozitivno utječe ne samo na tijelo, već i na opće
              psihofizičko stanje.
            </motion.p>
          </div>

          <div className="bg-theme1/10 flex flex-col gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:w-1/2 lg:px-18 lg:py-26 xl:gap-8 2xl:gap-10">
            <motion.h3
              className="text-theme1 text-3xl font-semibold sm:text-4xl"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Dugoročna korist
            </motion.h3>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Redovitim provođenjem terapijskih vježbi postiže se:
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
                  trajnije olakšanje tegoba
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  bolja funkcionalnost u svakodnevnom životu
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  veća otpornost tijela na stres i opterećenja
                </p>
              </motion.li>
              <motion.li
                className="flex flex-row items-start gap-2"
                variants={itemVariants}
              >
                <BiChevronRight className="text-theme4 text-3xl" />
                <p className="text-theme4 flex flex-row items-center gap-2 text-xl font-semibold">
                  bolja kvaliteta života
                </p>
              </motion.li>
            </motion.ul>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Terapijske vježbe osmišljene su kako bi vas podržale u kretanju
              bez boli, s više lakoće i sigurnosti.
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TerapijskeVjezbe;
