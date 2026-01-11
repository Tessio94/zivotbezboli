import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";

const Pdtr = () => {
  return (
    <section className="bg-theme1/10">
      <div className="flex flex-col gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:flex-row lg:px-18 lg:py-26">
        {/* <div className="w-1/2 bg-[url(/ikona.png)]"> */}
        <div className="w-full max-lg:order-2 lg:w-1/2">
          {/* <Image src="/ikona.png" alt="" width={960} height={1080} /> */}
          <motion.div
            className="h-fit shrink-0 overflow-hidden rounded-[38%_62%_50%_50%/30%_30%_70%_70%]"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image src="/ikona.png" alt="" width={960} height={1112} />
          </motion.div>
        </div>
        <div className="flex w-full flex-col gap-10 lg:w-1/2 xl:py-20">
          <motion.h2
            className="text-theme1 text-5xl font-semibold"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            P-DTR
          </motion.h2>
          <motion.p
            className="text-theme4 text-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            P-DTR® ( PROPROCEPTIVE DEEP TENDON REFLEX)
          </motion.p>
          <motion.p
            className="text-theme4 text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            P-DTR® je jedinstvena neurološka terapija bazirana na neurologiji,
            biomehanici, neurofiziologiji i anatomiji. P-DTR® radi direktno na
            centralnom živčanom sustavu i ima svoju logičku i znanstvenu podlogu
            za svaku od svojih procedura.  Tehniku je osmislio i usavršio Dr.
            Jose Palomar i konstantno se dorađuje novim istraživanjima i
            saznanjima.
          </motion.p>
          <motion.p
            className="text-theme4 text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            P-DTR® uzima u obzir informacije iz senzornih receptora (istezanje,
            aktivacija, pritisak, dodir, toplo, hladno, vibracija…) i način na
            koji mozak organizira i analizira ove informacije kako bi stvorio
            neuromišićne odgovore u cijelom organizmu. Ako je “ulaz” iz
            receptora iz nekog razloga narušen, i “izlaz”, odnosno motorička
            kontrola, je također narušena, što dovodi do pojave disfunkcija i
            boli. Kako bi se locirale i utvrdile ove disfunkcije koristi se
            precizan sustav mišićnog testiranja i neuroloških stimulusa. 
            Korekcije disfunkcionalnih senzornih receptora dovode do brze
            adaptacije živčanog sustava što dovodi do normalizacije funkcije i
            brzog nestanka boli.
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
  );
};

export default Pdtr;
