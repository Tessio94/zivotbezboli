import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CiClock1, CiLocationOn, CiMail, CiMobile3 } from "react-icons/ci";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoWhatsapp,
  IoLogoYoutube,
} from "react-icons/io";
import { CgChevronRight } from "react-icons/cg";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-[url('/slike/bez-boli-9-xl.jpg')] bg-cover max-xl:bg-position-[50%]">
      <div className="bg-theme4/90 absolute inset-0 -z-10" />
      {/* <div className="px-6 pt-15 pb-7 sm:px-10 lg:px-18 lg:pt-20 lg:pb-10 2xl:px-28 flex items-start flex-wrap justify-between max-xl:gap-y-15"> */}
      <div className="flex flex-wrap items-start justify-between px-6 pt-16 pb-8 max-xl:gap-y-15 sm:px-10 sm:py-20 sm:pt-20 sm:pb-10 lg:px-18 lg:pt-26 lg:pb-13">
        <div className="flex flex-col items-start gap-10 max-xl:order-1 max-xl:w-1/2 max-sm:w-full max-sm:items-center">
          <a href="#">
            <Image
              className="rounded-full"
              src="/logo_transparent.png"
              alt="Život bez boli logo"
              width={220}
              height={220}
            />
          </a>
          <div className="bg-theme1 flex items-center gap-5 rounded-4xl px-5 py-2">
            <a
              href="https://wa.me/385989648532"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-slate-100"
            >
              <IoLogoWhatsapp className="h-9 w-9 rounded-xl p-1 transition-all duration-300 group-hover:scale-120 group-hover:bg-slate-100 group-hover:text-green-400" />
            </a>
            <a
              href="https://www.instagram.com/ivan_radicev/"
              target="_blank"
              className="group text-slate-100"
            >
              <IoLogoInstagram className="h-9 w-9 rounded-xl p-1 transition-all duration-300 group-hover:scale-120 group-hover:bg-slate-100 group-hover:text-pink-600" />
            </a>
            <a
              href="https://web.facebook.com/RadicevIvan/?locale=hr_HR&_rdc=1&_rdr#"
              target="_blank"
              className="group text-slate-100"
            >
              <IoLogoFacebook className="h-9 w-9 rounded-xl p-1 transition-all duration-300 group-hover:scale-120 group-hover:bg-slate-100 group-hover:text-blue-600" />
            </a>
            <a
              href="https://www.youtube.com/@ivanradicev7934"
              target="_blank"
              className="group text-slate-100"
            >
              <IoLogoYoutube className="h-9 w-9 rounded-xl p-1 transition-all duration-300 group-hover:scale-120 group-hover:bg-slate-100 group-hover:text-red-600" />
            </a>
          </div>
        </div>
        <div className="max-[500px]:w-full! max-xl:order-3 max-xl:w-1/2">
          <p className="text-theme1 mb-7 text-2xl font-semibold">
            Brze poveznice:
          </p>
          <ul className="flex flex-col gap-2 text-slate-100">
            <li className="flex items-center gap-4">
              <CgChevronRight className="text-theme1 shrink-0 text-3xl" />
              <Link
                href="/o-meni"
                className="relative text-2xl text-slate-100 after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:bg-slate-100 after:transition-all after:duration-300 after:content-[''] hover:after:right-0"
              >
                O meni
              </Link>
            </li>
            <li className="flex items-center gap-4">
              <CgChevronRight className="text-theme1 shrink-0 text-3xl" />
              <Link
                href="/rezervacije"
                className="relative text-2xl text-slate-100 after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:bg-slate-100 after:transition-all after:duration-300 after:content-[''] hover:after:right-0"
              >
                Rezervacija
              </Link>
            </li>
            <li className="flex items-center gap-4">
              <CgChevronRight className="text-theme1 shrink-0 text-3xl" />
              <Link
                href="/kontakt"
                className="relative text-2xl text-slate-100 after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:bg-slate-100 after:transition-all after:duration-300 after:content-[''] hover:after:right-0"
              >
                Konatkt
              </Link>
            </li>
          </ul>
        </div>
        <div className="max-xl:order-2 max-xl:w-1/2 max-sm:w-full">
          <p className="text-theme1 mb-7 text-2xl font-semibold">Konatkt:</p>
          <ul className="flex flex-col gap-3 text-slate-100">
            <li>
              <p className="flex items-center gap-4 text-2xl text-slate-100">
                <CiLocationOn className="text-theme1 shrink-0 text-3xl" />
                Ul. Charlesa Darwina 10, Zagreb
              </p>
            </li>
            <li className="flex items-center gap-4">
              <CiMobile3 className="text-theme1 shrink-0 text-3xl" />
              <a
                href="tel:+385 98 964 8532"
                className="relative flex items-center gap-4 text-2xl text-slate-100 after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:bg-slate-100 after:transition-all after:duration-300 after:content-[''] hover:after:right-0"
              >
                +385 98 964 8532
              </a>
            </li>
            <li className="flex items-center gap-4">
              <CiMail className="text-theme1 shrink-0 text-3xl" />
              <a
                href="mailto:info@zivotbezboli.com"
                className="relative flex items-center gap-4 text-2xl text-slate-100 after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:bg-slate-100 after:transition-all after:duration-300 after:content-[''] hover:after:right-0"
              >
                info@zivotbezboli.com
              </a>
            </li>
          </ul>
        </div>
        <div className="max-[500px]:w-full! max-xl:order-4 max-xl:w-1/2">
          <p className="text-theme1 mb-7 text-2xl font-semibold">
            Radno vrijeme:
          </p>
          <ul className="flex flex-col gap-3 text-slate-100">
            <li>
              <p className="font-regular flex items-center gap-2 text-lg text-slate-100">
                <CiClock1 className="text-theme1 shrink-0 text-xl" />
                Pon: 10-13h | 15-18h
              </p>
            </li>
            <li>
              <p className="font-regular flex items-center gap-2 text-lg text-slate-100">
                <CiClock1 className="text-theme1 shrink-0 text-xl" />
                Uto: 9-15h
              </p>
            </li>
            <li>
              <p className="font-regular flex items-center gap-2 text-lg text-slate-100">
                <CiClock1 className="text-theme1 shrink-0 text-xl" />
                Sri: 9-15h
              </p>
            </li>
            <li>
              <p className="font-regular flex items-center gap-2 text-lg text-slate-100">
                <CiClock1 className="text-theme1 shrink-0 text-xl" />
                Čet: 10-13h | 15-18h
              </p>
            </li>
            <li>
              <p className="font-regular flex items-center gap-2 text-lg text-slate-100">
                <CiClock1 className="text-theme1 shrink-0 text-xl" />
                Pet: 9-13h
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center px-6 py-8 sm:px-10 sm:py-10 lg:px-18 lg:py-13">
        <div className="w-[60%] border-t border-slate-100 max-xl:w-[80%] max-lg:w-full">
          <p className="p-10 text-center text-xl text-slate-100 max-lg:p-5 max-sm:p-2">
            Copyright © 2025 <i>Tessio94</i> - Sva prava pridržana.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
