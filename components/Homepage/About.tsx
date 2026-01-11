import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import * as motion from "motion/react-client";

const About = () => {
  return (
    <section className="bg-theme1/10">
      <div className="flex flex-col xl:flex-row">
        <div className="flex flex-col px-6 py-16 max-xl:gap-10 max-sm:gap-8 sm:px-10 sm:py-20 lg:px-18 lg:py-26 xl:w-1/2 xl:justify-between 2xl:gap-10">
          <motion.h2
            className="text-theme1 text-5xl font-semibold"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            O meni
          </motion.h2>
          <motion.p
            className="text-theme4 text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Moje ime je <strong>Ivan Radičev</strong>, diplomirani
            fizioterapeut, osteopat i P-DTR terapeut. Kroz vlastito iskustvo
            ozljede i dugotrajnog oporavka započeo je moj profesionalni put.
          </motion.p>
          <motion.p
            className="text-theme4 text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Godinama radim s osobama koje osjećaju bol unatoč „urednim“
            nalazima, sportašima svih razina te ljudima koji su izgubili
            povjerenje u svoje tijelo i pokret.
          </motion.p>
          <motion.p
            className="text-theme4 text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            U svom radu spajam znanja iz fizioterapije, osteopatije i
            neuroloških metoda kako bih svakom klijentu pristupio individualno,
            s fokusom na uzrok problema, a ne samo na simptome.
          </motion.p>
          <motion.p
            className="text-theme4 text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Moj cilj je pomoći vam razumjeti zašto vas boli i pokazati da
            promjena jest moguća.
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Link
              href="/o-meni"
              className="bg-theme1 hover:bg-theme4 group flex w-fit items-center gap-3 rounded-2xl px-4 py-2 text-lg tracking-wider text-slate-100 transition-all duration-300"
            >
              Više o meni{" "}
              <BsArrowRight className="text-2xl text-slate-100 transition-all duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        <div className="max-h-212.5 overflow-hidden xl:w-1/2">
          <Image
            className="h-auto w-full"
            src="/slike/bez-boli-5-md.jpg"
            alt=""
            width={960}
            height={960}
            sizes="(min-width: 1280px) 50vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
