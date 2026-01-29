"use client";

import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { FcGoogle } from "react-icons/fc";
import { AiFillStar } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { cn } from "@/lib/utils";

const Recenzije = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [
    Autoplay({
      delay: 3000,
    }),
  ]);
  // const [emblaRef] = useEmblaCarousel({ loop: false });

  const [closeModal, setCloseModal] = useState<boolean>(false);

  return (
    <div
      className={cn(
        "fixed bottom-3 left-3 z-900 max-w-[95%] sm:max-w-110",
        closeModal ? "hidden" : "block",
      )}
    >
      <div className="embla pt-3.5" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide group border-theme4/30 relative rounded-2xl border">
            <button
              type="button"
              onClick={() => setCloseModal((prev) => !prev)}
              className="border-theme4/30 hover:bg-theme4 group/close-btn absolute -top-3.5 right-1 z-1000 h-7 w-7 cursor-pointer rounded-full border bg-slate-100 p-0.5 transition-all duration-300"
              aria-label="Close"
            >
              <CgClose className="text-theme4 h-full w-full transition-all duration-300 group-hover/close-btn:text-slate-100" />
            </button>
            <div className="flex flex-row items-center gap-1.5 rounded-2xl bg-slate-100">
              <div className="shrink-0 p-2">
                <Image
                  src="/recenzija-m-1.jpg"
                  alt="Google recenzija ikona"
                  width={60}
                  height={60}
                  className="border-theme4/30 rounded-full border"
                />
              </div>
              <div className="flex flex-col gap-1 px-2">
                <p className="text-theme4 rounded-tr-2xl pt-2 text-sm font-semibold">
                  Ivan Horvat
                </p>
                <p className="text-theme4 line-clamp-2 max-h-10 overflow-hidden text-sm transition-all duration-300 group-hover:line-clamp-none group-hover:max-h-100">
                  Poliklinika “Život bez boli” mi je doslovno promijenila život!
                  Ivan Radičev je izuzetno stručan, empatičan i uvijek spreman
                  na individualan pristup. Nakon dugogodišnjih problema s
                  leđima, napokon mogu spavati bez boli. Topla preporuka svima!
                </p>
                <div className="flex items-center gap-4 rounded-br-2xl bg-slate-100 pb-2">
                  <p className="flex flex-row items-center gap-1">
                    <FcGoogle className="text-lg" />
                    <span className="text-theme4 text-sm font-semibold">
                      Google
                    </span>
                  </p>
                  <div className="gap-0-5 flex flex-row items-center">
                    <AiFillStar className="text-lg text-yellow-500" />
                    <AiFillStar className="text-lg text-yellow-500" />
                    <AiFillStar className="text-lg text-yellow-500" />
                    <AiFillStar className="text-lg text-yellow-500" />
                    <AiFillStar className="text-lg text-yellow-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="embla__slide group border-theme4/30 relative rounded-2xl border">
            <button
              type="button"
              onClick={() => setCloseModal((prev) => !prev)}
              className="border-theme4/30 hover:bg-theme4 group/close-btn absolute -top-3.5 right-1 z-1000 h-7 w-7 cursor-pointer rounded-full border bg-slate-100 p-0.5 transition-all duration-300"
              aria-label="Close"
            >
              <CgClose className="text-theme4 h-full w-full transition-all duration-300 group-hover/close-btn:text-slate-100" />
            </button>
            <div className="flex flex-row items-center gap-1.5 rounded-2xl bg-slate-100">
              <div className="shrink-0 p-2">
                <Image
                  src="/recenzija-f-1.jpg"
                  alt="Google recenzija ikona"
                  width={60}
                  height={60}
                  className="border-theme4/30 rounded-full border"
                />
              </div>
              <div className="flex flex-col gap-1 px-2">
                <p className="text-theme4 rounded-tr-2xl pt-2 text-sm font-semibold">
                  Mia Josipović
                </p>
                <p className="text-theme4 line-clamp-2 max-h-10 overflow-hidden text-sm transition-all duration-300 group-hover:line-clamp-none group-hover:max-h-100">
                  Najbolje iskustvo s fizioterapijom ikad! Ivan zna točno što
                  radi i objašnjava svaku vježbu jasno i strpljivo. Atmosfera je
                  opuštena, a tretmani djelotvorni. Hvala cijelom timu – osjećam
                  se puno bolje!
                </p>
                <div className="flex items-center gap-4 rounded-br-2xl bg-slate-100 pb-2">
                  <p className="flex flex-row items-center gap-1">
                    <FcGoogle className="text-lg" />
                    <span className="text-theme4 text-sm font-semibold">
                      Google
                    </span>
                  </p>
                  <div className="gap-0-5 flex flex-row items-center">
                    <AiFillStar className="text-lg text-yellow-500" />
                    <AiFillStar className="text-lg text-yellow-500" />
                    <AiFillStar className="text-lg text-yellow-500" />
                    <AiFillStar className="text-lg text-yellow-500" />
                    <AiFillStar className="text-lg text-yellow-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="embla__slide group border-theme4/30 relative rounded-2xl border">
            <button
              type="button"
              onClick={() => setCloseModal((prev) => !prev)}
              className="border-theme4/30 hover:bg-theme4 group/close-btn absolute -top-3.5 right-1 z-1000 h-7 w-7 cursor-pointer rounded-full border bg-slate-100 p-0.5 transition-all duration-300"
              aria-label="Close"
            >
              <CgClose className="text-theme4 h-full w-full transition-all duration-300 group-hover/close-btn:text-slate-100" />
            </button>
            <div className="flex flex-row items-center gap-1.5 rounded-2xl bg-slate-100">
              <div className="shrink-0 p-2">
                <Image
                  src="/recenzija-m-2.jpg"
                  alt="Google recenzija ikona"
                  width={60}
                  height={60}
                  className="border-theme4/30 rounded-full border"
                />
              </div>
              <div className="flex flex-col gap-1 px-2">
                <p className="text-theme4 rounded-tr-2xl pt-2 text-sm font-semibold">
                  Josip Jerković
                </p>
                <p className="text-theme4 line-clamp-2 max-h-10 overflow-hidden text-sm transition-all duration-300 group-hover:line-clamp-none group-hover:max-h-100">
                  “Život bez boli” je pravo ime za ovu polikliniku! Nakon
                  ozljede koljena mislila sam da ću dugo biti nezadovoljna, ali
                  uz Ivana i plan koji mi je napravio, oporavak je brži nego sam
                  očekivala. Profesonalno, humano i učinkovito.
                </p>
                <div className="flex items-center gap-4 rounded-br-2xl bg-slate-100 pb-2">
                  <p className="flex flex-row items-center gap-1">
                    <FcGoogle className="text-lg" />
                    <span className="text-theme4 text-sm font-semibold">
                      Google
                    </span>
                  </p>
                  <div className="gap-0-5 flex flex-row items-center">
                    <AiFillStar className="text-lg text-yellow-500" />
                    <AiFillStar className="text-lg text-yellow-500" />
                    <AiFillStar className="text-lg text-yellow-500" />
                    <AiFillStar className="text-lg text-yellow-500" />
                    <AiFillStar className="text-lg text-yellow-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="embla__slide group border-theme4/30 relative rounded-2xl border">
            <button
              type="button"
              onClick={() => setCloseModal((prev) => !prev)}
              className="border-theme4/30 hover:bg-theme4 group/close-btn absolute -top-3.5 right-1 z-1000 h-7 w-7 cursor-pointer rounded-full border bg-slate-100 p-0.5 transition-all duration-300"
              aria-label="Close"
            >
              <CgClose className="text-theme4 h-full w-full transition-all duration-300 group-hover/close-btn:text-slate-100" />
            </button>
            <div className="flex flex-row items-center gap-1.5 rounded-2xl bg-slate-100">
              <div className="shrink-0 p-2">
                <p className="bg-theme4/20 text-theme4 border-theme4/30 flex h-15 w-15 items-center justify-center rounded-full border text-3xl uppercase">
                  M
                </p>
              </div>
              <div className="flex flex-col gap-1 px-2">
                <p className="text-theme4 rounded-tr-2xl pt-2 text-sm font-semibold">
                  Marin Vlašić
                </p>
                <p className="text-theme4 line-clamp-2 max-h-10 overflow-hidden text-sm transition-all duration-300 group-hover:line-clamp-none group-hover:max-h-100">
                  Topla preporuka! Ivan Radičev je stručnjak s velikim srcem –
                  ne samo da mi je vratio pokretljivost, nego me naučio
                  pravilnom držanju i vježbama koje sada radim kod kuće. Svaka
                  fizioterapija je ovdje bila korak naprijed.
                </p>
                <div className="flex items-center gap-4 rounded-br-2xl bg-slate-100 pb-2">
                  <p className="flex flex-row items-center gap-1">
                    <FcGoogle className="text-lg" />
                    <span className="text-theme4 text-sm font-semibold">
                      Google
                    </span>
                  </p>
                  <div className="gap-0-5 flex flex-row items-center">
                    <AiFillStar className="text-lg text-yellow-500" />
                    <AiFillStar className="text-lg text-yellow-500" />
                    <AiFillStar className="text-lg text-yellow-500" />
                    <AiFillStar className="text-lg text-yellow-500" />
                    <AiFillStar className="text-lg text-yellow-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="embla__slide group border-theme4/30 relative rounded-2xl border">
            <button
              type="button"
              onClick={() => setCloseModal((prev) => !prev)}
              className="border-theme4/30 hover:bg-theme4 group/close-btn absolute -top-3.5 right-1 z-1000 h-7 w-7 cursor-pointer rounded-full border bg-slate-100 p-0.5 transition-all duration-300"
              aria-label="Close"
            >
              <CgClose className="text-theme4 h-full w-full transition-all duration-300 group-hover/close-btn:text-slate-100" />
            </button>
            <div className="flex flex-row items-center gap-1.5 rounded-2xl bg-slate-100">
              <div className="shrink-0 p-2">
                <p className="bg-theme4/20 text-theme4 border-theme4/30 flex h-15 w-15 items-center justify-center rounded-full border text-3xl uppercase">
                  A
                </p>
              </div>
              <div className="flex flex-col gap-1 px-2">
                <p className="text-theme4 rounded-tr-2xl pt-2 text-sm font-semibold">
                  Ante Marković
                </p>
                <p className="text-theme4 line-clamp-2 max-h-10 overflow-hidden text-sm transition-all duration-300 group-hover:line-clamp-none group-hover:max-h-100">
                  Presretan/na sam što sam otkrio/la ovu polikliniku. Svi
                  tretmani su bili personalizirani i prilagođeni mojim
                  potrebama. Ivan je iznimno profesionalan i motivirajući – bol
                  koju sam osjećao/la gotovo je nestala. Hvala!
                </p>
                <div className="flex items-center gap-4 rounded-br-2xl bg-slate-100 pb-2">
                  <p className="flex flex-row items-center gap-1">
                    <FcGoogle className="text-lg" />
                    <span className="text-theme4 text-sm font-semibold">
                      Google
                    </span>
                  </p>
                  <div className="gap-0-5 flex flex-row items-center">
                    <AiFillStar className="text-lg text-yellow-500" />
                    <AiFillStar className="text-lg text-yellow-500" />
                    <AiFillStar className="text-lg text-yellow-500" />
                    <AiFillStar className="text-lg text-yellow-500" />
                    <AiFillStar className="text-lg text-yellow-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="embla__slide group border-theme4/30 relative rounded-2xl border">
            <button
              type="button"
              onClick={() => setCloseModal((prev) => !prev)}
              className="border-theme4/30 hover:bg-theme4 group/close-btn absolute -top-3.5 right-1 z-1000 h-7 w-7 cursor-pointer rounded-full border bg-slate-100 p-0.5 transition-all duration-300"
              aria-label="Close"
            >
              <CgClose className="text-theme4 h-full w-full transition-all duration-300 group-hover/close-btn:text-slate-100" />
            </button>
            <div className="flex flex-row items-center gap-1.5 rounded-2xl bg-slate-100">
              <div className="shrink-0 p-2">
                <p className="bg-theme4/20 text-theme4 border-theme4/30 flex h-15 w-15 items-center justify-center rounded-full border text-3xl uppercase">
                  M
                </p>
              </div>
              <div className="flex flex-col gap-1 px-2">
                <p className="text-theme4 rounded-tr-2xl pt-2 text-sm font-semibold">
                  Marko Ivanić
                </p>
                <p className="text-theme4 line-clamp-2 max-h-10 overflow-hidden text-sm transition-all duration-300 group-hover:line-clamp-none group-hover:max-h-100">
                  Odlična usluga, vrhunski pristup! Ionako visoki standard rada
                  dodatno poboljšava prijateljski i podržavajući pristup Ivana.
                  Svakome tko se bori s kroničnom boli ili ozljedama toplo
                  preporučujem “Život bez boli”!
                </p>
                <div className="flex items-center gap-4 rounded-br-2xl bg-slate-100 pb-2">
                  <p className="flex flex-row items-center gap-1">
                    <FcGoogle className="text-lg" />
                    <span className="text-theme4 text-sm font-semibold">
                      Google
                    </span>
                  </p>
                  <div className="gap-0-5 flex flex-row items-center">
                    <AiFillStar className="text-lg text-yellow-500" />
                    <AiFillStar className="text-lg text-yellow-500" />
                    <AiFillStar className="text-lg text-yellow-500" />
                    <AiFillStar className="text-lg text-yellow-500" />
                    <AiFillStar className="text-lg text-yellow-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recenzije;
