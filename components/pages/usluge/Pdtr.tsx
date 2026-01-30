import React from "react";
import Pdtr from "@/components/pdtr/Pdtr";
import Banner from "@/components/Homepage/Banner";
import TabList from "@/components/pdtr/TabList";
import * as motion from "motion/react-client";
import Image from "next/image";

const PdtrUsluga = () => {
  return (
    <>
      <Pdtr />
      <section>
        <div className="z-10 mx-auto flex flex-col items-center gap-8 px-6 py-16 sm:px-10 sm:py-20 lg:px-18 lg:py-26 xl:max-w-[70%]">
          <motion.p
            className="text-theme4 text-xl"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Većina terapeutskih tehnika se bazira na{" "}
            <span className="font-bold">“hardware” </span>sustavu tijela
            uglavnom ignorirajući činjenicu da je većina boli i disfunkcija koje
            osjećamo rezultat neadekvatnog funkcioniranja{" "}
            <span className="font-bold">“software”</span> sustava tijela. 
            P-DTR® ne radi samo na receptorima. Između ostalog radi na
            problemima uzrokovanim neurološkim putevima, energetskim sustavima
            tijela, metabolizmu, emocijama i na samom mozgu!
          </motion.p>
          <motion.p
            className="text-theme3 text-center text-3xl font-semibold"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            P-DTR® tretman je brz, nježan i nevjerojatno učinkovit u rješavanju
            &quot;softverskih&quot; problema.
          </motion.p>
        </div>
      </section>
      <Banner version="three" />
      <div className="flex flex-col lg:flex-row">
        <TabList />
        <div className="w-full overflow-hidden bg-none bg-cover bg-no-repeat max-2xl:bg-position-[50%] max-xl:bg-position-[70%] max-lg:order-2 lg:w-1/2 lg:bg-[url(/slike/bez-boli-23-md.jpg)]">
          <Image
            className="block h-auto w-full lg:hidden"
            src="/slike/bez-boli-23-md.jpg"
            alt=""
            width={960}
            height={1080}
            sizes="(min-width: 1280px) 50vw, 100vw"
          />
        </div>
      </div>
    </>
  );
};

export default PdtrUsluga;
