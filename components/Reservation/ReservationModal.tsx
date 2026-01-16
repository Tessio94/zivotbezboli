"use client";

import React, { useEffect, useState } from "react";
import { BsCalendarFill, BsFillClockFill } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { HiInformationCircle } from "react-icons/hi";
import { MdLocationPin } from "react-icons/md";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ReCAPTCHA from "react-google-recaptcha";

const ReservationModal = ({ onClose }: { onClose: () => void }) => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [open, setOpen] = React.useState(false);

  const isDesktop =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover)").matches;

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <div
      className="bg-theme4/70 fixed inset-0 z-1000 overflow-hidden backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="mx-auto my-12 flex max-h-[calc(100vh-6rem)] max-w-[95%] flex-col rounded-xl bg-slate-100 sm:max-w-[90%] sm:rounded-2xl md:max-w-[85%] xl:max-w-[70%]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border-theme4/30 flex flex-row justify-between border-b p-3 sm:p-5 md:p-10 md:pb-5">
          <h3 className="text-theme4 text-2xl">Vaša rezervacija:</h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="text-theme4 border-theme4/30 hover:bg-theme4 cursor-pointer rounded-xl border p-1 transition-all duration-300 hover:text-slate-100"
          >
            <CgClose className="text-2xl" />
          </button>
        </div>
        <div className="overflow-y-auto p-3 sm:px-10 sm:py-5 md:px-20 md:pt-5 md:pb-10">
          <form
            className="flex w-full flex-col gap-7 lg:gap-10"
            // onSubmit={onFormSubmitted}
          >
            <div className="flex w-full flex-row items-center gap-4 max-[500px]:flex-col max-[500px]:items-start max-[500px]:gap-7">
              <div className="flex basis-1/2 flex-col items-start max-[500px]:w-full max-[500px]:basis-full">
                <label
                  htmlFor="name"
                  className="text-theme4 pb-1 pl-3 font-semibold"
                >
                  Ime
                </label>
                <input
                  className="border-theme4/30 text-theme4 outline-theme4 w-full rounded-xl border-2 bg-white px-3 py-2"
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="flex basis-1/2 flex-col items-start max-[500px]:w-full max-[500px]:basis-full">
                <label
                  htmlFor="lastname"
                  className="text-theme4 pb-1 pl-3 font-semibold"
                >
                  Prezime
                </label>
                <input
                  className="border-theme4/30 text-theme4 outline-theme4 w-full rounded-xl border-2 bg-white px-3 py-2"
                  type="text"
                  id="lastname"
                  name="lastname"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="flex flex-col items-start">
              <label
                htmlFor="phone"
                className="text-theme4 pb-1 pl-3 font-semibold"
              >
                Broj mobitela
              </label>
              <input
                className="border-theme4/30 text-theme4 outline-theme4 w-full rounded-xl border-2 bg-white px-3 py-2"
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col items-start">
              <label
                htmlFor="email"
                className="text-theme4 pb-1 pl-3 font-semibold"
              >
                Email
              </label>
              <input
                className="border-theme4/30 text-theme4 outline-theme4 w-full rounded-xl border-2 bg-white px-3 py-2"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col items-start">
              <label
                htmlFor="message"
                className="text-theme4 pb-1 pl-3 font-semibold"
              >
                Poruka
              </label>
              <textarea
                className="border-theme4/30 text-theme4 outline-theme4 w-full rounded-xl border-2 bg-white px-3 py-2"
                id="message"
                name="message"
                rows={4}
                cols={50}
                placeholder="Napišite vaš zahtjev ovdje..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <hr className="text-theme4/30" />
            <div className="flex flex-col gap-7 max-[500px]:gap-3.5">
              <p className="text-theme4 mb-2 text-2xl">
                Informacije o rezervaciji:
              </p>
              <div className="flex flex-row flex-wrap justify-between gap-4">
                <p className="text-theme4 flex items-center gap-1 text-xl">
                  <span className="flex flex-row items-center gap-1.5 font-semibold">
                    <BsCalendarFill className="text-theme4 shrink-0 text-xl" />
                    Datum:
                  </span>
                  16 siječnja 2026
                </p>
                <p className="text-theme4 flex items-center gap-1 text-xl">
                  <span className="flex flex-row items-center gap-1.5 font-semibold">
                    <BsFillClockFill className="text-theme4 shrink-0 text-xl" />
                    Vrijeme:
                  </span>
                  10:30am
                </p>
              </div>
              <p className="text-theme4 flex flex-row flex-wrap items-center gap-1 text-xl">
                <span className="flex flex-row items-center gap-1.5 font-semibold">
                  <MdLocationPin className="text-theme4 -ml-[2px] shrink-0 text-2xl" />
                  Lokacija:
                </span>
                Ul. Charlesa Darwina 10, Zagreb
              </p>
            </div>
            <hr className="text-theme4/30" />
            <div className="flex flex-col gap-7">
              <div className="flex items-center gap-3 max-[370px]:gap-2">
                <input
                  name="terms"
                  type="checkbox"
                  className="h-5 w-5 cursor-pointer max-[480px]:h-4 max-[480px]:w-4"
                  id="terms"
                  //   checked={formData.terms}
                  //   onChange={handleChange}
                />
                <label
                  className="text-theme4 flex cursor-pointer flex-row items-center gap-1.5 text-xl max-[480px]:text-[15px] max-[370px]:text-[14px]"
                  htmlFor="terms"
                >
                  Slažem se s uvjetima o zaštiti podataka
                </label>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <button
                      className="text-theme4 focus-visible:ring-theme4 cursor-pointer rounded focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                      type="button"
                      aria-label="More information"
                      onMouseEnter={() => isDesktop && setOpen(true)}
                      onMouseLeave={() => isDesktop && setOpen(false)}
                      onClick={() => !isDesktop && setOpen((v) => !v)}
                    >
                      <HiInformationCircle className="text-theme4 shrink-0 text-xl" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="bg-theme4/90 z-1000 w-80 text-slate-100"
                    onMouseEnter={() => isDesktop && setOpen(true)}
                    onMouseLeave={() => isDesktop && setOpen(false)}
                  >
                    <div className="space-y-2">
                      <p className="text-sm text-slate-100">
                        Ovim putem potvrđujem da sam ispunjavanjem kontakt
                        obrasca suglasan/a da se moji osobni podaci prikupe i
                        obrađuju isključivo u svrhu kontakta za koju su i
                        prikupljeni.
                      </p>{" "}
                      <p className="text-sm text-slate-100">
                        IVAN, OBRT ZA MASAŽU I NJEGU TIJELA, VL. IVAN RADIČEV,
                        posluje sukladno zahtjevima Opće uredbe o zaštiti
                        podataka 2016/679 (GDPR) koja propisuje da dani osobni
                        podaci neće biti proslijeđeni trećim osobama bez vaše
                        daljnje privole i da će biti čuvani na siguran način
                        sukladno zahtjevima Uredbe sve dok za tim postoji
                        potreba ili ne postavite zahtjev za povlačenje
                        suglasnosti: brisanjem, ograničenjem ili ispravkom
                        podataka.
                      </p>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <ReCAPTCHA
                  sitekey="Your client site key"
                  // onChange={onChange}
                />
              </div>
            </div>
            <button
              className="hover:bg-theme4 active:bg-theme1 focus:bg-theme1 border-theme1 bg-theme1 hover:shadow-theme3/40 mx-auto flex min-h-[68px] w-fit min-w-[247px] cursor-pointer flex-row items-center justify-center rounded-xl border-2 text-2xl font-bold text-slate-100 transition-all duration-500 hover:border-slate-100 hover:shadow-lg focus:shadow-lg active:shadow-lg"
              type="submit"
            >
              {loading ? (
                <svg
                  className="size-6 animate-spin text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                "Pošalji"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReservationModal;
