"use client";

import React from "react";
// import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import { usePrevNextButtons, PrevButton, NextButton } from "./CarouselArrows";
import { useDotButton, DotButton } from "./CarouselButton";
import { cn } from "@/lib/utils";

const CarouselReal = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Fade()]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide border-theme4/40 bg-theme4/90 relative rounded-2xl border bg-[url(/logo_transparent.png)] bg-size-[180px_180px] px-10 py-10">
            <div className="bg-theme4/85 absolute inset-0 rounded-2xl"></div>
            <div className="relative">
              <div className="flex flex-col gap-8">
                <p className="text-2xl font-semibold text-slate-100 sm:text-3xl">
                  Zbog vlastitog iskustva i toga što viđam svaki dan u
                  ordinaciji i kakve poruke dobivam od svojih klijenata, ponosan
                  sam što danas radim drugačije od konvecionalnih metoda na koje
                  ste možda naviknuli.
                </p>
                <p className="text-2xl font-semibold text-slate-100 sm:text-3xl">
                  Često mi neki klijenti znaju reći Ivane to je magija, vi ste
                  čarobnjak, dok su neki ponekad zbunjeni.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="embla__slide border-theme4/40 bg-theme4/90 relative rounded-2xl border bg-[url(/logo_transparent.png)] bg-size-[180px_180px] px-10 py-10">
            <div className="bg-theme4/85 absolute inset-0 rounded-2xl"></div>
            <div className="relative">
              <div className="flex flex-col gap-8">
                <p className="text-2xl font-semibold text-slate-100 sm:text-3xl">
                  Umjesto tradicionalnih metoda (masaže, manipulacije,
                  istezanja) koje ste već vjerovatno probali do sada, ( a osobno
                  sam kao terapeut, vjerujte prošao mnogo toga), danas koristim
                  neurološke tehnike koje daju puno precizniji odgovor zašto vas
                  boli i gdje su pravi uzroci vašeg stanja.
                </p>
                <p className="text-2xl font-semibold text-slate-100 sm:text-3xl">
                  Kao fizioterapeut i diplomirani osteopat otkrio sam da postoje
                  još bolji načini kako pomoć svojim pacijentima.
                </p>
              </div>
            </div>
          </div>
          <div className="embla__slide border-theme4/40 bg-theme4/90 relative rounded-2xl border bg-[url(/logo_transparent.png)] bg-size-[180px_180px] px-10 py-10">
            <div className="bg-theme4/85 absolute inset-0 rounded-2xl"></div>
            <div className="relative">
              <div className="flex flex-col gap-8">
                <p className="text-2xl font-semibold text-slate-100 sm:text-3xl">
                  To me je odvelo na učenje od najboljih svjetskih stručnjaka za
                  ortopediju,neurologiju, razumijevanje boli, pokreta i
                  zdravlja.
                </p>
                <p className="text-2xl font-semibold text-slate-100 sm:text-3xl">
                  Danas više ne napadam simptome i mjesto bola nego tražim prave
                  uzroke.
                </p>
                <p className="text-2xl font-semibold text-slate-100 sm:text-3xl">
                  Zbog svega toga razvio sam jedinstven pristup za rješavanje
                  kronične boli i ozljeda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              //   className={"embla__dot".concat(
              //     index === selectedIndex ? "embla__dot--selected" : "",
              //   )}
              className={cn(
                "embla__dot",
                index === selectedIndex && "embla__dot--selected",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselReal;
