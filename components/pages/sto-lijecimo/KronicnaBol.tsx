import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BiChevronRight } from "react-icons/bi";
import * as motion from "motion/react-client";

const KronicnaBol = () => {
  return (
    <>
      <section>
        <div className="flex flex-col md:flex-row">
          <div className="relative z-10 bg-[url(/zivotbezboli-background-nostroke-1920.png)] max-md:order-2 md:w-1/2">
            <div className="from-theme3/90 to-theme3/30 absolute inset-0 -z-10 bg-linear-to-r" />

            <motion.div
              className="flex flex-col items-start gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:px-18 lg:py-26"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                className="mx-auto inline-block"
                src="/usluge/ikone/bijele/kronicne.svg"
                alt=""
                width={160}
                height={160}
              />
              <p className="flex flex-row items-start gap-2 text-xl text-slate-100">
                <BiChevronRight className="shrink-0 text-3xl" />
                Bol koju osjećate duže od 6 mjeseci se klasificira kao kronična
                bol
              </p>
              <p className="flex flex-row items-start gap-2 text-xl text-slate-100">
                <BiChevronRight className="shrink-0 text-3xl" />
                To ima puno više veze sa vašim mozgom, a puno manje sa dijelom
                tijela koji vas boli
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
              Kronična bol
            </motion.h2>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Specijaliziran sam za bolove koji traju duže od 6 mjeseci, ako vas
              boli duže od toga to znači da je neizbježno nešto pošlo po zlu.
            </motion.p>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Ako ste oštetili neko područje, to je sigurno zacijelilo.
            </motion.p>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Bol koju sada osjećate više je povezana s zaštitom živčanog
              sustava nego s samom ozljedom.
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
    </>
  );
};

export default KronicnaBol;
