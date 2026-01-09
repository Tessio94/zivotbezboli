import React from "react";
import Image from "next/image";
import Pdtr from "@/components/pdtr/Pdtr";
import Banner from "@/components/Homepage/Banner";
import TabList from "@/components/pdtr/TabList";

const Page = () => {
  return (
    <>
      <section>
        <div className="relative">
          <div className="bg-theme4/70 absolute inset-0" />
          <div className="absolute top-1/2 right-1/2 flex translate-x-1/2 -translate-y-1/2 flex-col items-center gap-6">
            <h1 className="after:to-theme1 relative text-center text-5xl font-bold text-slate-100 after:absolute after:top-[calc(100%+5px)] after:left-1/2 after:h-1 after:w-[50%] after:-translate-x-1/2 after:rounded-full after:bg-linear-to-r after:from-slate-100 after:content-[''] sm:text-6xl md:text-7xl lg:text-8xl">
              P-DTR
            </h1>
          </div>
          <div className="md:h-unset h-140 max-h-150 overflow-hidden bg-[url(/slike/bez-boli-8-xl.jpg)] bg-cover md:bg-none">
            <Image
              className="hidden md:block"
              src="/slike/bez-boli-10-xl.jpg"
              alt="Život bez boli hero image"
              width={1920}
              height={300}
            />
          </div>
        </div>
      </section>
      <Pdtr />
      <section>
        <div className="z-10 mx-auto flex flex-col items-center gap-8 px-6 py-16 sm:px-10 sm:py-20 lg:px-18 lg:py-26 xl:max-w-[70%]">
          <p className="text-theme4 text-xl">
            Većina terapeutskih tehnika se bazira na{" "}
            <span className="font-bold">“hardware” </span>sustavu tijela
            uglavnom ignorirajući činjenicu da je većina boli i disfunkcija koje
            osjećamo rezultat neadekvatnog funkcioniranja{" "}
            <span className="font-bold">“software”</span> sustava tijela. 
            P-DTR® ne radi samo na receptorima. Između ostalog radi na
            problemima uzrokovanim neurološkim putevima, energetskim sustavima
            tijela, metabolizmu, emocijama i na samom mozgu!
          </p>
          <p className="text-theme3 text-center text-3xl font-semibold">
            P-DTR® tretman je brz, nježan i nevjerojatno učinkovit u rješavanju
            &quot;softverskih&quot; problema.
          </p>
        </div>
      </section>
      <Banner version="three" />
      <TabList />
    </>
  );
};

export default Page;
