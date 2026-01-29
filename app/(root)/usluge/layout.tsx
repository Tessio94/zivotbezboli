"use client";

import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

const TITLES: Record<string, string> = {
  "/usluge/p-dtr": "P-DTR",
  "/usluge/manualna-fizioterapija": "Manualna fizioterapija",
  "/usluge/osteopatija": "Osteopatija",
  "/usluge/pregled": "Pregled",
  "/usluge/terapijske-vjezbe": "Terapijske vježbe",
  "/usluge/terapijski-trening": "Terapijski trening",
};

const IMAGES: Record<string, string> = {
  "/usluge/p-dtr": "/slike/bez-boli-22-xl.jpg",
  "/usluge/manualna-fizioterapija": "/slike/bez-boli-9-xl.jpg",
  "/usluge/osteopatija": "/slike/bez-boli-2-xl.jpg",
  "/usluge/pregled": "/slike/bez-boli-1-xl.jpg",
  "/usluge/terapijske-vjezbe": "/slike/bez-boli-10-xl.jpg",
  "/usluge/terapijski-trening": "/slike/bez-boli-21-xl.jpg",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = usePathname();

  const locationId = location.split("/")[2];

  return (
    <>
      <section id={locationId}>
        <div className="relative">
          <div className="bg-theme4/70 absolute inset-0" />
          <div className="absolute top-1/2 right-1/2 flex translate-x-1/2 -translate-y-1/2 flex-col items-center gap-6">
            <motion.h1
              className="after:to-theme1 relative w-[90vw] text-center text-5xl font-bold text-slate-100 after:absolute after:top-[calc(100%+5px)] after:left-1/2 after:h-1 after:w-[20%] after:-translate-x-1/2 after:rounded-full after:bg-linear-to-r after:from-slate-100 after:content-[''] sm:text-6xl md:text-7xl lg:text-8xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {TITLES[location]}
            </motion.h1>
          </div>
          <div
            className="h-140 max-h-150 overflow-hidden bg-cover md:h-fit md:bg-none!"
            style={{
              background: `url(${IMAGES[location]}) center / cover no-repeat`,
            }}
          >
            <Image
              className="hidden min-[1920px]:w-full md:block"
              src={IMAGES[location]}
              alt="Život bez boli hero image"
              width={1920}
              height={300}
              preload={true}
            />
          </div>
        </div>
      </section>
      {children}
    </>
  );
};

export default Layout;
