"use client";

import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { AiFillStar } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { cn } from "@/lib/utils";

const Recenzije = () => {
  // const [emblaRef] = useEmblaCarousel({ loop: false }, [
  //   Autoplay({
  //     delay: 3000,
  //   }),
  // ]);
  const [emblaRef] = useEmblaCarousel({ loop: false });

  const [closeModal, setCloseModal] = useState<boolean>(false);

  return (
    <div
      className={cn(
        "fixed bottom-3 left-3 z-100 max-w-[95%] sm:max-w-110",
        closeModal ? "hidden" : "block",
      )}
    >
      <div className="embla pt-3.5" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide group border-theme4/30 relative rounded-2xl border">
            <div>
              <button
                type="button"
                onClick={() => setCloseModal((prev) => !prev)}
                className="border-theme4/30 hover:bg-theme4 group/close-btn absolute -top-3.5 right-1 z-1000 h-7 w-7 cursor-pointer rounded-full border bg-slate-100 p-0.5 transition-all duration-300"
                aria-label="Close"
              >
                <CgClose className="text-theme4 h-full w-full transition-all duration-300 group-hover/close-btn:text-slate-100" />
              </button>
              <a
                href="https://maps.app.goo.gl/DSSReSbctzP5qoUL7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center gap-1.5 rounded-2xl bg-slate-100"
              >
                <div className="shrink-0 p-2">
                  <p className="bg-theme4/20 text-theme4 border-theme4/30 flex h-15 w-15 items-center justify-center rounded-full border text-3xl uppercase">
                    T
                  </p>
                </div>
                <div className="flex flex-col gap-1 px-2">
                  <p className="text-theme4 rounded-tr-2xl pt-2 text-sm font-semibold">
                    Tin
                  </p>
                  <p className="text-theme4 line-clamp-2 max-h-10 overflow-hidden text-sm transition-all duration-300 group-hover:line-clamp-none group-hover:max-h-100">
                    Došao sam Ivanu sa dugogodišnjim i velikim tegobama sa
                    vratom i disbalansom cijelog tijela. Nakon par dolazaka Ivan
                    je otklonio blokade u vratu i trupu, pojačao mi mišiće i
                    njihovu funkciju.
                  </p>
                  <div className="flex items-center gap-4 rounded-br-2xl bg-slate-100 pb-2">
                    <div className="gap-0-5 flex flex-row items-center">
                      <AiFillStar className="text-lg text-yellow-500" />
                      <AiFillStar className="text-lg text-yellow-500" />
                      <AiFillStar className="text-lg text-yellow-500" />
                      <AiFillStar className="text-lg text-yellow-500" />
                      <AiFillStar className="text-lg text-yellow-500" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="embla__slide group border-theme4/30 relative rounded-2xl border">
            <a
              href="https://maps.app.goo.gl/DSSReSbctzP5qoUL7"
              target="_blank"
              rel="noopener noreferrer"
            >
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
                    D
                  </p>
                </div>
                <div className="flex flex-col gap-1 px-2">
                  <p className="text-theme4 rounded-tr-2xl pt-2 text-sm font-semibold">
                    Domagoj V.
                  </p>
                  <p className="text-theme4 line-clamp-2 max-h-10 overflow-hidden text-sm transition-all duration-300 group-hover:line-clamp-none group-hover:max-h-100">
                    Stručna terapija, Ivanov profesionalni pristup s učinkovitim
                    metodama pomogao mi je izliječiti dugogodišnje bolove u
                    leđima! Svakako preporučujem svima!
                  </p>
                  <div className="flex items-center gap-4 rounded-br-2xl bg-slate-100 pb-2">
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
            </a>
          </div>
          <div className="embla__slide group border-theme4/30 relative rounded-2xl border">
            <a
              href="https://maps.app.goo.gl/DSSReSbctzP5qoUL7"
              target="_blank"
              rel="noopener noreferrer"
            >
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
                    N
                  </p>
                </div>
                <div className="flex flex-col gap-1 px-2">
                  <p className="text-theme4 rounded-tr-2xl pt-2 text-sm font-semibold">
                    Nataša M.
                  </p>
                  <p className="text-theme4 line-clamp-2 max-h-10 overflow-hidden text-sm transition-all duration-300 group-hover:line-clamp-none group-hover:max-h-100">
                    Ivanu sam se obratila zbog stalnog osjećaja ukočenosti u
                    donjem dijelu leđa, u području SI zgloba. Bol i ukočenost
                    posebno su se pojačavale nakon duljeg stajanja ili hodanja,
                    unatoč tome što sam redovito jačala mišiće trbuha i donjih
                    leđa. Ivan je brzo prepoznao stvarni uzrok problema te
                    pristupio ciljanom tretmanu. Već nakon dva tretmana tegobe
                    su se znatno smanjile, a osjećaj stabilnosti i čvrstoće
                    trupa vidljivo se poboljšao. Preporučujem svima koji se
                    suočavaju sa sličnim problemima.
                  </p>
                  <div className="flex items-center gap-4 rounded-br-2xl bg-slate-100 pb-2">
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
            </a>
          </div>
          <div className="embla__slide group border-theme4/30 relative rounded-2xl border">
            <a
              href="https://maps.app.goo.gl/DSSReSbctzP5qoUL7"
              target="_blank"
              rel="noopener noreferrer"
            >
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
                    I
                  </p>
                </div>
                <div className="flex flex-col gap-1 px-2">
                  <p className="text-theme4 rounded-tr-2xl pt-2 text-sm font-semibold">
                    Ivan R.
                  </p>
                  <p className="text-theme4 line-clamp-2 max-h-10 overflow-hidden text-sm transition-all duration-300 group-hover:line-clamp-none group-hover:max-h-100">
                    Kod Ivana sam bio već nekoliko puta zbog raznih kroničnih
                    tegoba za koje sam iskreno mislio da su jednostavno došle s
                    godinama i da tu nema neke pomoći. Nakon svega par tretmana
                    počeo sam primjećivati da se stvari koje su me mučile
                    godinama polako ili u potpunosti povlače, a pokretljivost i
                    opće stanje su mi se poboljšali. Sviđa mi se što ne gleda
                    samo gdje boli, nego pokušava razumjeti zašto je do problema
                    uopće došlo. Pristup mu je smiren, temeljit i stvarno se
                    posveti svakom tretmanu. Ako imate neke dugotrajne bolove
                    ili tegobe koje ste već počeli smatrati “normalnima”,
                    svakako bih preporučio da se javite Ivanu. Meni je pomogao
                    više puta.
                  </p>
                  <div className="flex items-center gap-4 rounded-br-2xl bg-slate-100 pb-2">
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
            </a>
          </div>
          <div className="embla__slide group border-theme4/30 relative rounded-2xl border">
            <a
              href="https://maps.app.goo.gl/DSSReSbctzP5qoUL7"
              target="_blank"
              rel="noopener noreferrer"
            >
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
                    I
                  </p>
                </div>
                <div className="flex flex-col gap-1 px-2">
                  <p className="text-theme4 rounded-tr-2xl pt-2 text-sm font-semibold">
                    Igor P.
                  </p>
                  <p className="text-theme4 line-clamp-2 max-h-10 overflow-hidden text-sm transition-all duration-300 group-hover:line-clamp-none group-hover:max-h-100">
                    Izuzetno sam zadovoljan terapijom kod Ivana. Dugo sam se
                    mučio s bolovima u leđima, ali Ivan je točno locirao problem
                    i pristupio mu na pravi način. Već nakon prvog tretmana
                    razlika je bila velika, a dodatna dva tretmana su potpuno
                    otklonila smetnje i bol. Osim što je odličan stručnjak, jako
                    je ugodna osoba. Javite mu se za brze i učinkovite
                    rezultate!
                  </p>
                  <div className="flex items-center gap-4 rounded-br-2xl bg-slate-100 pb-2">
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
            </a>
          </div>
          <div className="embla__slide group border-theme4/30 relative rounded-2xl border">
            <a
              href="https://maps.app.goo.gl/DSSReSbctzP5qoUL7"
              target="_blank"
              rel="noopener noreferrer"
            >
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
                    T
                  </p>
                </div>
                <div className="flex flex-col gap-1 px-2">
                  <p className="text-theme4 rounded-tr-2xl pt-2 text-sm font-semibold">
                    Tomislav Z.
                  </p>
                  <p className="text-theme4 line-clamp-2 max-h-10 overflow-hidden text-sm transition-all duration-300 group-hover:line-clamp-none group-hover:max-h-100">
                    Ivan je izuzetno stručan, pažljiv i predan osteopat, za
                    svaku preporuku. Odlazim na redovite provjere općeg stanja i
                    izuzetno sam zadovoljan.
                  </p>
                  <div className="flex items-center gap-4 rounded-br-2xl bg-slate-100 pb-2">
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
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recenzije;
