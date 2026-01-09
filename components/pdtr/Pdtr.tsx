import React from "react";
import Image from "next/image";
import Link from "next/link";

const Pdtr = () => {
  return (
    <section className="bg-theme1/10">
      <div className="flex">
        <div className="w-1/2 bg-[url(/ikona.png)]">
          {/* <Image src="/ikona.png" alt="" width={960} height={1112} /> */}
          {/* <div className="rounded-[38%_62%_50%_50%/30%_30%_70%_70%] overflow-hidden shrink-0 h-fit">
            <Image src="/ikona.png" alt="" width={960} height={1112} />
          </div> */}
        </div>
        <div className="w-1/2 flex flex-col gap-10 px-6 py-15 sm:px-10 lg:px-18 lg:py-20">
          <h2 className="text-theme1 text-5xl font-semibold">P-DTR</h2>
          <p className="text-2xl text-theme4">
            P-DTR® ( PROPROCEPTIVE DEEP TENDON REFLEX)
          </p>
          <p className="text-xl text-theme4">
            P-DTR® je jedinstvena neurološka terapija bazirana na neurologiji,
            biomehanici, neurofiziologiji i anatomiji. P-DTR® radi direktno na
            centralnom živčanom sustavu i ima svoju logičku i znanstvenu podlogu
            za svaku od svojih procedura.  Tehniku je osmislio i usavršio Dr.
            Jose Palomar i konstantno se dorađuje novim istraživanjima i
            saznanjima.
          </p>
          <p className="text-xl text-theme4">
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
          </p>
          <Link
            href="/usluge/rezervacija"
            className="flex items-center gap-6 bg-theme1 px-4 py-2 rounded-2xl text-lg text-slate-100 tracking-wider hover:bg-theme4 transition-all duration-300 w-fit"
          >
            Rezerviraj termin
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pdtr;
