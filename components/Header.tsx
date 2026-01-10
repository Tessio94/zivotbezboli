"use client";

import React, { useEffect, useEffectEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiChevronDown, BiDownArrow } from "react-icons/bi";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoWhatsapp,
  IoLogoYoutube,
} from "react-icons/io";
import { CiMail, CiMobile3 } from "react-icons/ci";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Header = () => {
  const [hambActive, setHambActive] = useState<boolean>(false);
  const [uslugeDrodown, setUslugeDropdown] = useState<boolean>(false);

  const path = usePathname();

  const removeSidebar = useEffectEvent(() => {
    setHambActive(false);
  });

  useEffect(() => {
    removeSidebar();
  }, [path]);

  return (
    <header className="absolute right-0 left-0 z-100 flex max-w-screen flex-row items-center justify-between bg-transparent px-6 py-3 sm:px-10 lg:px-18">
      <Link href="/">
        <Image
          className="rounded-full"
          src="/logo_transparent.png"
          alt="Život bez boli logo"
          width={140}
          height={140}
        />
      </Link>
      <nav className="hidden lg:block">
        <ul className="flex items-center lg:gap-6.5 xl:gap-14 2xl:gap-22">
          <li>
            <Link
              href="/"
              className="text-md relative inline-block cursor-pointer font-semibold text-slate-100 uppercase before:absolute before:top-full before:right-0 before:left-full before:h-0.5 before:bg-slate-100 before:transition-all before:duration-300 after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:bg-slate-100 after:transition-all after:duration-300 after:content-[''] hover:before:left-1/2 hover:after:right-1/2"
            >
              Naslovnica
            </Link>
          </li>
          <li>
            <Link
              href="/o-meni"
              className="text-md relative inline-block cursor-pointer font-semibold text-slate-100 uppercase before:absolute before:top-full before:right-0 before:left-full before:h-0.5 before:bg-slate-100 before:transition-all before:duration-300 after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:bg-slate-100 after:transition-all after:duration-300 after:content-[''] hover:before:left-1/2 hover:after:right-1/2"
            >
              O meni
            </Link>
          </li>
          <li>
            <div className="text-md group relative flex cursor-pointer items-center gap-2 font-semibold text-slate-100">
              USLUGE
              <BiChevronDown className="text-3xl transition-all duration-300 group-hover:rotate-x-180" />
              <div className="invisible absolute top-[130%] max-h-0 opacity-0 transition-all duration-300 group-hover:visible group-hover:max-h-250 group-hover:opacity-100">
                <ul className="flex flex-col">
                  <li>
                    <Link
                      href="/usluge/kronicna-bol"
                      className="text-theme4 hover:bg-theme4 block rounded-t-xl bg-slate-100 px-3 py-2 text-nowrap transition-all duration-300 hover:text-slate-100"
                    >
                      Kronična bol
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/usluge/bol-u-vratu"
                      className="block border-t border-slate-100 px-3 py-2 text-nowrap text-slate-100"
                    >
                      Bol u vratu
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/usluge/bol-u-ledjima"
                      className="block border-t border-slate-100 px-3 py-2 text-nowrap text-slate-100"
                    >
                      Bol u leđima
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/usluge/bol-u-kuku"
                      className="block border-t border-slate-100 px-3 py-2 text-nowrap text-slate-100"
                    >
                      Bol u kuku
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/usluge/bol-u-vratu-i-ramenu"
                      className="block border-t border-slate-100 px-3 py-2 text-nowrap text-slate-100"
                    >
                      Bol u vratu i ramenima
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/usluge/bol-u-laktu-i-ruci"
                      className="block border-t border-slate-100 px-3 py-2 text-nowrap text-slate-100"
                    >
                      Bol u laktu i ruci
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/usluge/bol-u-koljenima-i-stopalima"
                      className="block border-t border-slate-100 px-3 py-2 text-nowrap text-slate-100"
                    >
                      Bol u koljenima i stopalima
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/usluge/sportske-ozljede"
                      className="block border-t border-slate-100 px-3 py-2 text-nowrap text-slate-100"
                    >
                      Sportske ozljede
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/usluge/tretmani-djece"
                      className="block border-t border-slate-100 px-3 py-2 text-nowrap text-slate-100"
                    >
                      Tretmani djece
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/usluge/ostale-tegobe"
                      className="text-theme4 hover:bg-theme4 border-theme4 block rounded-b-xl border-t bg-slate-100 px-3 py-2 text-nowrap transition-all duration-300 hover:text-slate-100"
                    >
                      Ostale tegobe
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <Link
              href="/p-dtr"
              className="text-md relative inline-block cursor-pointer font-semibold text-slate-100 uppercase before:absolute before:top-full before:right-0 before:left-full before:h-0.5 before:bg-slate-100 before:transition-all before:duration-300 after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:bg-slate-100 after:transition-all after:duration-300 after:content-[''] hover:before:left-1/2 hover:after:right-1/2"
            >
              P-DTR
            </Link>
          </li>
          <li>
            <Link
              href="/kontakt"
              className="text-md relative inline-block cursor-pointer font-semibold text-slate-100 uppercase before:absolute before:top-full before:right-0 before:left-full before:h-0.5 before:bg-slate-100 before:transition-all before:duration-300 after:absolute after:top-full after:right-full after:left-0 after:h-0.5 after:bg-slate-100 after:transition-all after:duration-300 after:content-[''] hover:before:left-1/2 hover:after:right-1/2"
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>

      <div className="bg-theme1 hidden items-center gap-2 rounded-4xl px-5 py-2 lg:flex">
        <a href="" className="group text-2xl text-slate-100">
          <IoLogoWhatsapp className="transition-all duration-300 group-hover:scale-120" />
        </a>
        <a href="" className="group text-2xl text-slate-100">
          <IoLogoInstagram className="transition-all duration-300 group-hover:scale-120" />
        </a>
        <a href="" className="group text-2xl text-slate-100">
          <IoLogoFacebook className="transition-all duration-300 group-hover:scale-120" />
        </a>
        <a href="" className="group text-2xl text-slate-100">
          <IoLogoYoutube className="transition-all duration-300 group-hover:scale-120" />
        </a>
      </div>

      {/* ------------------mobile navigation---------------------------- */}
      <div className="ml-auto block lg:hidden">
        <div
          className="relative z-50 h-[35px] w-12.5 rotate-0 cursor-pointer transition-all duration-300 ease-in-out"
          onClick={() => setHambActive((prev) => !prev)}
        >
          <span
            className={cn(
              "bg-theme3 transition-300 absolute left-0 block h-[5px] w-full rounded-[9px] transition-all ease-in-out",
              hambActive ? "top-[16px] rotate-135" : "top-0 rotate-0",
            )}
          ></span>
          <span
            className={cn(
              "bg-theme3 transition-300 absolute top-[15px] block h-[5px] w-full rotate-0 rounded-[9px] transition-all ease-in-out",
              hambActive ? "-left-[60px] opacity-0" : "left-0 opacity-100",
            )}
          ></span>
          <span
            className={cn(
              "bg-theme3 transition-300 absolute left-0 block h-[5px] w-full rounded-[9px] transition-all ease-in-out",
              hambActive ? "top-[16px] -rotate-135" : "top-[30px] rotate-0",
            )}
          ></span>
        </div>
      </div>
      <nav
        className={cn(
          "xxsm:w-[260px] border-theme3 bg-theme4 fixed top-0 bottom-0 left-0 z-9999 w-[300px] border-r-2 bg-[url(/logo_transparent.png)] bg-contain bg-repeat shadow-[inset_-50px_0_50px_-50px_var(--theme3)] transition-all duration-300 sm:w-[330px] lg:hidden",
          hambActive ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="from-theme3 to-theme3/80 absolute inset-0 -z-10 bg-linear-to-r" />
        <div className="scrollbar-slate flex h-full max-h-screen flex-col justify-between gap-25 overflow-y-auto py-12">
          <ul className="flex flex-col gap-6 text-2xl">
            <li className="w-full">
              <Link
                href="/"
                className="relative block w-full cursor-pointer px-3 py-1 text-2xl font-bold tracking-widest text-slate-100 capitalize"
              >
                Naslovnica
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="/o-meni"
                className="relative block w-full cursor-pointer px-3 py-1 text-2xl font-bold tracking-widest text-slate-100 capitalize"
              >
                O meni
              </Link>
            </li>
            <li>
              <div>
                <p
                  className="text-md group relative flex w-full cursor-pointer items-center gap-2 px-3 py-1 text-2xl font-bold tracking-widest text-slate-100 capitalize"
                  onClick={() => setUslugeDropdown((prev) => !prev)}
                >
                  Usluge
                  <BiChevronDown className="text-3xl transition-all duration-300 group-hover:rotate-x-180" />
                </p>

                <div
                  className={cn(
                    "transition-all duration-300",
                    uslugeDrodown
                      ? "visible max-h-250 opacity-100"
                      : "invisible max-h-0 opacity-0",
                  )}
                >
                  <ul className="flex flex-col">
                    <li>
                      <Link
                        href="/usluge/kronicna-bol"
                        className="block px-3 py-2 text-nowrap text-slate-100"
                      >
                        Kronična bol
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/usluge/bol-u-vratu"
                        className="block border-t border-slate-100 px-3 py-2 text-nowrap text-slate-100"
                      >
                        Bol u vratu
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/usluge/bol-u-ledjima"
                        className="block border-t border-slate-100 px-3 py-2 text-nowrap text-slate-100"
                      >
                        Bol u leđima
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/usluge/bol-u-kuku"
                        className="block border-t border-slate-100 px-3 py-2 text-nowrap text-slate-100"
                      >
                        Bol u kuku
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/usluge/bol-u-vratu-i-ramenu"
                        className="block border-t border-slate-100 px-3 py-2 text-nowrap text-slate-100"
                      >
                        Bol u vratu i ramenima
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/usluge/bol-u-laktu-i-ruci"
                        className="block border-t border-slate-100 px-3 py-2 text-nowrap text-slate-100"
                      >
                        Bol u laktu i ruci
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/usluge/bol-u-koljenima-i-stopalima"
                        className="block border-t border-slate-100 px-3 py-2 text-nowrap text-slate-100"
                      >
                        Bol u koljenima i stopalima
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/usluge/sportske-ozljede"
                        className="block border-t border-slate-100 px-3 py-2 text-nowrap text-slate-100"
                      >
                        Sportske ozljede
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/usluge/tretmani-djece"
                        className="block border-t border-slate-100 px-3 py-2 text-nowrap text-slate-100"
                      >
                        Tretmani djece
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/usluge/ostale-tegobe"
                        className="block border-t border-slate-100 px-3 py-2 text-nowrap text-slate-100"
                      >
                        Ostale tegobe
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="w-full">
              <Link
                href="/p-dtr"
                className="relative block w-full cursor-pointer px-3 py-1 text-2xl font-bold tracking-widest text-slate-100 capitalize"
              >
                P-DTR
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="/kontakt"
                className="relative block w-full cursor-pointer px-3 py-1 text-2xl font-bold tracking-widest text-slate-100 capitalize"
              >
                Kontakt
              </Link>
            </li>
          </ul>

          <div className="flex flex-col gap-5">
            <div className="px-3 py-1 transition-all duration-500">
              <a
                href="tel:+385957269444"
                className="flex cursor-pointer items-center gap-2 text-xl tracking-wider text-slate-100 capitalize"
              >
                <CiMobile3 className="text-3xl text-slate-100" />
                095 726 94 44
              </a>
            </div>
            <div className="px-3 py-1 transition-all duration-500">
              <a
                href="mailto:info@plan41.hr"
                className="flex cursor-pointer items-center gap-2 text-xl tracking-wider text-slate-100"
              >
                <CiMail className="text-3xl text-slate-100" />
                info@plan41.hr
              </a>
            </div>

            <div className="ml-3 flex w-fit items-center gap-2 rounded-4xl bg-slate-100 px-5 py-2">
              <a href="" className="group text-2xl text-green-400">
                <IoLogoWhatsapp className="transition-all duration-300 group-hover:scale-120" />
              </a>
              <a href="" className="group text-2xl text-pink-600">
                <IoLogoInstagram className="transition-all duration-300 group-hover:scale-120" />
              </a>
              <a href="" className="group text-2xl text-blue-600">
                <IoLogoFacebook className="transition-all duration-300 group-hover:scale-120" />
              </a>
              <a href="" className="group text-2xl text-red-600">
                <IoLogoYoutube className="transition-all duration-300 group-hover:scale-120" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
