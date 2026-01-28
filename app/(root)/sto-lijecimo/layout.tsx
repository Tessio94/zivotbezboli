"use client";

import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

const TITLES: Record<string, string> = {
  "/sto-lijecimo/kronicna-bol": "Kronična bol",
  "/sto-lijecimo/bol-u-ledjima": "Bol u leđima",
  "/sto-lijecimo/bol-u-kuku": "Bol u kuku",
  "/sto-lijecimo/bol-u-koljenima-i-stopalima": "Bol u koljenima i stopalima",
  "/sto-lijecimo/bol-u-vratu": "Bol u vratu",
  "/sto-lijecimo/bol-u-vratu-i-ramenu": "Bol u vratu i ramenima",
  "/sto-lijecimo/bol-u-laktu-i-ruci": "Bol u laktu i ruci",
  "/sto-lijecimo/sportske-ozljede": "Sportske ozljede",
  "/sto-lijecimo/tretmani-djece": "Tretmani djece",
  "/sto-lijecimo/ostale-tegobe": "Ostale tegobe",
};

const IMAGES: Record<string, string> = {
  "/sto-lijecimo/kronicna-bol": "/slike/bez-boli-19-xl.jpg",
  "/sto-lijecimo/bol-u-ledjima": "/slike/bez-boli-9-xl.jpg",
  "/sto-lijecimo/bol-u-kuku": "/slike/bez-boli-2-xl.jpg",
  "/sto-lijecimo/bol-u-koljenima-i-stopalima": "/slike/bez-boli-8-xl.jpg",
  "/sto-lijecimo/bol-u-vratu": "/slike/bez-boli-17-xl.jpg",
  "/sto-lijecimo/bol-u-vratu-i-ramenu": "/slike/bez-boli-19-xl.jpg",
  "/sto-lijecimo/bol-u-laktu-i-ruci": "/slike/bez-boli-6-xl.jpg",
  "/sto-lijecimo/sportske-ozljede": "/slike/bez-boli-13-xl.jpg",
  "/sto-lijecimo/tretmani-djece": "/slike/bez-boli-14-xl.jpg",
  "/sto-lijecimo/ostale-tegobe": "/slike/bez-boli-9-xl.jpg",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = usePathname();

  const locationId = location.split("/")[2];
  console.log(locationId);
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
