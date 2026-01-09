import React from "react";
import Image from "next/image";
import Pdtr from "@/components/pdtr/Pdtr";
import Banner from "@/components/Homepage/Banner";
import TabList from "@/components/pdtr/TabList";

const page = () => {
  return (
    <>
      <section>
        <div className="relative">
          <div className="bg-theme4/70 absolute inset-0" />
          <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 flex flex-col gap-6 items-center ">
            <h1 className="text-8xl text-slate-100 font-bold after:content-[''] after:absolute after:bg-linear-to-r after:from-slate-100 after:to-theme1 after:top-[calc(100%+5px)] after:left-1/2 after:-translate-x-1/2 after:w-[50%] after:h-1 relative after:rounded-full text-center">
              P-DTR
            </h1>
          </div>
          <div className="max-h-150 overflow-hidden">
            <Image
              className=""
              src="/slike/bez-boli-8-xl.jpg"
              alt="Život bez boli hero image"
              width={1920}
              height={300}
            />
          </div>
        </div>
      </section>
      <Pdtr />
      <section>
        <div className="mx-auto max-w-[70%] flex flex-col items-center px-20 py-15 gap-8 z-10">
          <p className="text-xl text-theme4">
            Većina terapeutskih tehnika se bazira na{" "}
            <span className="font-bold">“hardware” </span>sustavu tijela
            uglavnom ignorirajući činjenicu da je većina boli i disfunkcija koje
            osjećamo rezultat neadekvatnog funkcioniranja{" "}
            <span className="font-bold">“software”</span> sustava tijela. 
            P-DTR® ne radi samo na receptorima. Između ostalog radi na
            problemima uzrokovanim neurološkim putevima, energetskim sustavima
            tijela, metabolizmu, emocijama i na samom mozgu!
          </p>
          <p className="text-3xl font-semibold text-theme3 text-center">
            P-DTR® tretman je brz, nježan i nevjerojatno učinkovit u rješavanju
            &quot;softverskih&quot; problema.
          </p>
        </div>
      </section>
      <Banner />
      <TabList />
    </>
  );
};

export default page;
