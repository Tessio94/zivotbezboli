"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { CiLocationOn, CiMail, CiMobile3 } from "react-icons/ci";
import { motion } from "motion/react";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoWhatsapp,
  IoLogoYoutube,
} from "react-icons/io";

const Carousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  // const [emblaRef] = useEmblaCarousel({ loop: false });

  return (
    <section>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <div className="relative">
              <div className="from-theme4/90 to-theme4/20 absolute inset-0 z-10 bg-linear-to-r" />
              <div className="absolute top-1/2 left-1/2 z-20 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-6 px-6 max-[1400px]:gap-4 max-[1024px]:gap-6 sm:px-10 lg:left-18 lg:w-auto lg:translate-x-0 lg:px-0">
                <motion.h1
                  className="text-center text-9xl font-bold text-slate-100 max-[1700px]:text-8xl max-[1500px]:text-7xl max-[640px]:text-5xl max-[400px]:text-4xl"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  Život <span className="text-theme1">bez boli</span>
                </motion.h1>
                <motion.h3
                  className="text-center text-3xl text-slate-100 max-[400px]:text-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <strong className="text-theme1 text-shadow-slate-100">
                    Ivan Radičev
                  </strong>
                  , fizioterapeut, osteopat, p-dtr terapeut
                </motion.h3>
                <motion.h3
                  className="text-center text-3xl text-slate-100 italic max-[400px]:text-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  Život bez boli i stresa – holistički pristup zdravlju
                </motion.h3>
                <motion.div
                  className="mt-5"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <Link
                    href="/rezervacija"
                    className="bg-theme1 hover:bg-theme4 rounded-4xl border-2 border-transparent px-10 py-5 text-3xl font-semibold text-slate-100 transition-all duration-300 hover:border-slate-100 max-[1400px]:px-7 max-[1400px]:py-3 max-[640px]:text-2xl"
                  >
                    Rezervirajte termin
                  </Link>
                </motion.div>
              </div>
              <Image
                className="z-0 rotate-y-180 max-[930px]:object-[30%] max-xl:min-h-[1080px] max-xl:object-cover"
                src="/slike/bez-boli-4-xl.jpg"
                alt="Život bez boli hero image"
                width={1920}
                height={1080}
              />
            </div>
          </div>
          <div className="embla__slide">
            <div className="relative">
              <div className="from-theme4/90 to-theme4/20 absolute inset-0 z-10 bg-linear-to-r" />
              <div className="absolute top-1/2 left-1/2 z-20 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-start gap-6 px-6 max-[1500px]:top-[60%] max-[1400px]:gap-4 max-[1280px]:top-1/2 max-[1024px]:gap-6 sm:px-10 lg:left-18 lg:w-auto lg:translate-x-0 lg:px-0">
                <p className="text-center text-7xl font-bold text-slate-100 max-[1700px]:text-6xl max-[800px]:text-5xl max-[550px]:text-4xl max-[410px]:text-3xl">
                  Naši kontakt podaci:
                </p>
                <ul className="flex flex-col items-start gap-5 text-slate-100">
                  <li className="flex items-center gap-2 sm:gap-4">
                    <CiLocationOn className="shrink-0 text-3xl" />
                    <p className="text-2xl text-slate-100">
                      Ul. Charlesa Darwina 10, 10000, Zagreb, Hrvatska
                    </p>
                  </li>
                  <li className="flex items-center gap-2 sm:gap-4">
                    <CiMobile3 className="shrink-0 text-3xl" />
                    <a
                      href="tel:+385 98 964 8532"
                      className="relative flex items-center gap-4 text-2xl text-slate-100 after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:bg-slate-100 after:transition-all after:duration-300 after:content-[''] hover:after:right-0"
                    >
                      +385 98 964 8532
                    </a>
                  </li>
                  <li className="flex items-center gap-2 sm:gap-4">
                    <CiMail className="shrink-0 text-3xl" />
                    <a
                      href="mail:ivan@ivanradicev.com "
                      className="relative flex items-center gap-4 text-2xl text-slate-100 after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:bg-slate-100 after:transition-all after:duration-300 after:content-[''] hover:after:right-0"
                    >
                      ivan@ivanradicev.com
                    </a>
                  </li>
                </ul>

                <p className="text-2xl text-slate-100">
                  Radno vrijeme:{" "}
                  <span className="font-semibold">
                    Pon - Pet: 9-12h | 15-19h
                  </span>
                </p>

                <div className="bg-theme1 flex items-center gap-3 rounded-4xl px-5 py-2.5 sm:gap-5 sm:px-10">
                  <a
                    href="https://wa.me/385989648532"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-4xl text-slate-100"
                  >
                    <IoLogoWhatsapp className="h-10 w-10 rounded-xl p-1 transition-all duration-300 group-hover:scale-120 group-hover:bg-slate-100 group-hover:text-green-400" />
                  </a>
                  <a
                    href="https://www.instagram.com/ivan_radicev/"
                    target="_blank"
                    className="group text-4xl text-slate-100"
                  >
                    <IoLogoInstagram className="h-10 w-10 rounded-xl p-1 transition-all duration-300 group-hover:scale-120 group-hover:bg-slate-100 group-hover:text-pink-600" />
                  </a>
                  <a
                    href="https://web.facebook.com/RadicevIvan/?locale=hr_HR&_rdc=1&_rdr#"
                    target="_blank"
                    className="group text-4xl text-slate-100"
                  >
                    <IoLogoFacebook className="h-10 w-10 rounded-xl p-1 transition-all duration-300 group-hover:scale-120 group-hover:bg-slate-100 group-hover:text-blue-600" />
                  </a>
                  <a
                    href="https://www.youtube.com/@ivanradicev7934"
                    target="_blank"
                    className="group text-slate-100"
                  >
                    <IoLogoYoutube className="h-10 w-10 rounded-xl p-1 transition-all duration-300 group-hover:scale-120 group-hover:bg-slate-100 group-hover:text-red-600" />
                  </a>
                </div>
              </div>
              <Image
                className="z-0 rotate-y-180 max-[930px]:object-[30%] max-xl:min-h-[1080px] max-xl:object-cover"
                src="/slike/bez-boli-10-xl.jpg"
                alt="Život bez boli hero image"
                width={1920}
                height={1080}
              />
            </div>
          </div>
          <div className="embla__slide">
            <div className="relative">
              <div className="from-theme4/20 via-theme4/90 to-theme4/20 max-[930px]:from-theme4/90 absolute inset-0 bg-linear-to-l max-[930px]:bg-linear-to-r max-[930px]:via-none" />
              <div className="absolute top-1/2 right-1/2 flex w-full translate-x-1/2 -translate-y-1/2 flex-col items-center gap-6 px-6 sm:px-10 xl:w-auto xl:px-0">
                <h1 className="text-center text-9xl font-bold text-slate-100 max-[1700px]:text-8xl max-[1500px]:text-7xl max-[750px]:text-6xl max-[640px]:text-5xl max-[450px]:text-4xl xl:text-nowrap">
                  <span className="text-theme1">Bol </span>nije problem.
                </h1>
                <h3 className="text-center text-3xl text-slate-100 max-[400px]:text-2xl">
                  Ako su nalazi uredni, a bol i dalje traje, vrijeme je za
                  drugačiji pristup liječenju.
                </h3>
                <h3 className="text-center text-3xl text-slate-100 italic max-[400px]:text-2xl">
                  Ne liječimo simptome – tražimo zašto vas boli.
                </h3>
                <Link
                  href="/rezervacija"
                  className="bg-theme1 hover:bg-theme4 mt-5 rounded-4xl border-2 border-transparent px-10 py-5 text-3xl font-semibold text-slate-100 transition-all duration-300 hover:border-slate-100 max-[1400px]:px-7 max-[1400px]:py-3 max-[640px]:text-2xl"
                >
                  Rezervirajte termin
                </Link>
              </div>
              <Image
                className="z-0 max-[930px]:object-[30%] max-xl:min-h-[1080px] max-xl:object-cover"
                src="/slike/bez-boli-3-xl.jpg"
                alt="Život bez boli hero image"
                width={1920}
                height={1080}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
