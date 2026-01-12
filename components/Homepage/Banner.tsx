import React from "react";
import Link from "next/link";
import * as motion from "motion/react-client";

const Banner = ({ version }: { version: string }) => {
  return (
    <section className="relative z-10 bg-[url(/zivotbezboli-background-nostroke-1920.png)]">
      <div className="from-theme3/90 to-theme3/30 absolute inset-0 -z-10 bg-linear-to-r" />
      {version === "one" && (
        <div className="z-10 mx-auto flex max-w-[60%] flex-col items-center gap-8 px-6 py-16 max-[1600px]:max-w-[80%] max-[1200px]:max-w-full sm:px-10 sm:py-20 lg:px-18 lg:py-26">
          <motion.p
            className="after:to-theme1 relative text-center text-4xl font-semibold text-slate-100 after:absolute after:top-[calc(100%+5px)] after:left-1/2 after:h-1 after:w-[40%] after:-translate-x-1/2 after:rounded-full after:bg-linear-to-r after:from-slate-100 after:content-['']"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Bol nije nešto s čime se morate naučiti živjeti.
          </motion.p>

          <motion.p
            className="font-regular text-center text-xl text-slate-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Ako vas bol, nelagoda ili ograničen pokret prate već neko vrijeme,
            vrijeme je da otkrijemo pravi uzrok i napravimo prvi korak prema
            trajnom olakšanju.
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Link
              href="/rezervacija"
              className="bg-theme1 hover:bg-theme4 flex items-center gap-6 rounded-4xl px-8 py-3 text-center text-3xl tracking-wider text-slate-100 transition-all duration-300 max-[400px]:text-2xl"
            >
              Rezervirajte termin
            </Link>
          </motion.div>
        </div>
      )}
      {version === "two" && (
        <div className="z-10 mx-auto flex max-w-[60%] flex-col items-center gap-8 px-6 py-16 max-[1600px]:max-w-[80%] max-[1200px]:max-w-full sm:px-10 sm:py-20 lg:px-18 lg:py-26">
          <motion.p
            className="after:to-theme1 relative text-center text-4xl font-semibold text-slate-100 after:absolute after:top-[calc(100%+5px)] after:left-1/2 after:h-1 after:w-[40%] after:-translate-x-1/2 after:rounded-full after:bg-linear-to-r after:from-slate-100 after:content-['']"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Bol je signal, a ne sudbina.
          </motion.p>

          <motion.p
            className="font-regular text-center text-xl text-slate-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Kada tijelo stalno šalje isti signal, vrijeme je da poslušamo zašto.
            Pravilnom procjenom i individualnim pristupom moguće je ponovno
            živjeti bez boli.
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Link
              href="/kontakt"
              className="bg-theme1 hover:bg-theme4 flex items-center gap-6 rounded-4xl px-8 py-3 text-center text-3xl tracking-wider text-slate-100 transition-all duration-300"
            >
              Kontaktirajte nas
            </Link>
          </motion.div>
        </div>
      )}
      {version === "three" && (
        <div className="z-10 mx-auto flex max-w-[60%] flex-col items-center gap-8 px-6 py-16 max-[1600px]:max-w-[80%] max-[1200px]:max-w-full sm:px-10 sm:py-20 lg:px-18 lg:py-26">
          <motion.p
            className="after:to-theme1 relative text-center text-4xl font-semibold text-slate-100 after:absolute after:top-[calc(100%+5px)] after:left-1/2 after:h-1 after:w-[40%] after:-translate-x-1/2 after:rounded-full after:bg-linear-to-r after:from-slate-100 after:content-['']"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Bol ne mora biti vaša svakodnevica.
          </motion.p>

          <motion.p
            className="font-regular text-center text-xl text-slate-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Ako se bol vraća unatoč terapijama ili “urednim” nalazima, moguće je
            da uzrok nije tamo gdje ste dosad tražili. Vrijeme je za drugačiji
            pristup.
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Link
              href="/rezervacija"
              className="bg-theme1 hover:bg-theme4 flex items-center gap-6 rounded-4xl px-8 py-3 text-center text-3xl tracking-wider text-slate-100 transition-all duration-300"
            >
              Rezervirajte termin
            </Link>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Banner;
