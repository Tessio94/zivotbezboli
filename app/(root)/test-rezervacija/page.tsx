"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import DatePicker from "@/components/DatePicker";
import { CiCalendar, CiClock1, CiLocationOn } from "react-icons/ci";
import { BiCalendar } from "react-icons/bi";
import { BsFillClockFill } from "react-icons/bs";

const page = () => {
  return (
    <section className="relative z-10 h-fit min-h-screen w-full bg-[url(/slike/bez-boli-2-xl.jpg)] max-lg:bg-position-[20%] max-md:bg-position-[30%] max-sm:bg-position-[55%] min-[1920px]:bg-cover">
      <div className="from-theme4/90 to-theme4/20 absolute inset-0 -z-10 bg-linear-to-r" />
      <div className="w-full px-6 py-16 max-sm:px-0 sm:px-10 sm:py-20 lg:px-18 lg:py-26">
        <div className="from-theme1/60 z-20 mx-auto mt-44 flex flex-col items-start gap-10 rounded-4xl bg-linear-to-br to-slate-100/60 p-10 max-[700px]:px-6 max-[400px]:px-3 sm:mt-40 lg:mt-34 2xl:w-[83%]">
          <motion.h1
            className="text-center text-5xl font-bold text-slate-100 max-[1500px]:text-4xl max-[750px]:text-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Rezervirajte svoj termin
          </motion.h1>
          <div className="flex w-full flex-col flex-wrap items-stretch justify-between gap-10 xl:flex-row">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-3 rounded-2xl bg-slate-100 p-3 max-[435px]:px-2 max-[435px]:py-3">
                <p className="text-theme4 flex flex-row items-center gap-2 text-2xl font-semibold max-[750px]:text-xl">
                  <BiCalendar className="text-theme4 shrink-0 text-2xl" />
                  Odaberite datum termina
                </p>
                <div className="flex flex-row items-center gap-3">
                  <div className="flex grow flex-row items-center gap-3">
                    <p className="text-theme4 flex flex-row items-center gap-1 text-lg">
                      Jutro{" "}
                      <span className="bg-theme1 block h-3 w-3 shrink-0 rounded-full" />
                    </p>
                    <p className="text-theme4 flex flex-row items-center gap-1 text-lg">
                      Popodne
                      <span className="border-b-theme3 block shrink-0 border-r-[6px] border-b-[10px] border-l-[6px] border-r-transparent border-l-transparent" />
                    </p>
                    <p className="text-theme4 flex flex-row items-center gap-1 text-lg">
                      Večer
                      <span className="bg-theme4 block h-3 w-3 shrink-0" />
                    </p>
                  </div>
                </div>
              </div>
              <DatePicker />
            </div>
            <div className="flex flex-col gap-5 min-[560px]:min-w-[510px]">
              <div className="max-max-[435px]:px-2 flex flex-col gap-3 rounded-2xl bg-slate-100 p-3 max-[435px]:py-3">
                <p className="text-theme4 flex flex-row items-center gap-2 text-2xl font-semibold max-[750px]:text-xl">
                  <BsFillClockFill className="text-theme4 shrink-0 text-xl" />
                  Odaberite termin
                </p>
              </div>
              <div className="flex w-full flex-col rounded-2xl bg-slate-100 pb-2.5 xl:mt-10">
                <p className="border-theme4 bg-theme4 max-max-[435px]:px-2 rounded-t-2xl border-b px-5 pt-5 pb-3.5 text-lg font-semibold text-slate-100 max-[435px]:px-2 max-[435px]:py-3">
                  15 siječnja 2026
                </p>

                <table className="mx-auto w-[95%] border-separate border-spacing-x-2 border-spacing-y-3">
                  <thead>
                    <tr>
                      <th>
                        <p className="bg-theme1 border-theme4 rounded-lg border-2 px-1 py-2.5 text-slate-100">
                          Jutro
                        </p>
                      </th>
                      <th>
                        <p className="bg-theme3 border-theme4 rounded-lg border-2 px-1 py-2.5 text-slate-100">
                          Popodne
                        </p>
                      </th>
                      <th>
                        <p className="bg-theme4 border-theme4 rounded-lg border-2 px-1 py-2.5 text-slate-100">
                          Večer
                        </p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <button className="bg-theme1 hover:bg-theme4 w-full cursor-pointer rounded-lg p-1 py-2 text-slate-100 transition-all duration-300">
                          9:00am
                        </button>
                      </td>
                      <td>
                        <button className="bg-theme1 hover:bg-theme4 w-full cursor-pointer rounded-lg p-1 py-2 text-slate-100 transition-all duration-300">
                          12:00am
                        </button>
                      </td>
                      <td>
                        <button className="bg-theme1 hover:bg-theme4 w-full cursor-pointer rounded-lg p-1 py-2 text-slate-100 transition-all duration-300">
                          5:00am
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <button className="bg-theme1 hover:bg-theme4 w-full cursor-pointer rounded-lg p-1 py-2 text-slate-100 transition-all duration-300">
                          9:00am
                        </button>
                      </td>
                      <td>
                        <button className="bg-theme1 hover:bg-theme4 w-full cursor-pointer rounded-lg p-1 py-2 text-slate-100 transition-all duration-300">
                          12:00am
                        </button>
                      </td>
                      <td>
                        <button className="bg-theme1 hover:bg-theme4 w-full cursor-pointer rounded-lg p-1 py-2 text-slate-100 transition-all duration-300">
                          5:00am
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <button className="bg-theme1 hover:bg-theme4 w-full cursor-pointer rounded-lg p-1 py-2 text-slate-100 transition-all duration-300">
                          9:00am
                        </button>
                      </td>
                      <td>
                        <button className="bg-theme1 hover:bg-theme4 w-full cursor-pointer rounded-lg p-1 py-2 text-slate-100 transition-all duration-300">
                          12:00am
                        </button>
                      </td>
                      <td>
                        <button className="bg-theme1 hover:bg-theme4 w-full cursor-pointer rounded-lg p-1 py-2 text-slate-100 transition-all duration-300">
                          5:00am
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <button className="bg-theme1 hover:bg-theme4 w-full cursor-pointer rounded-lg p-1 py-2 text-slate-100 transition-all duration-300">
                          9:00am
                        </button>
                      </td>
                      <td>
                        <button className="bg-theme1 hover:bg-theme4 w-full cursor-pointer rounded-lg p-1 py-2 text-slate-100 transition-all duration-300">
                          12:00am
                        </button>
                      </td>
                      <td>
                        <button className="bg-theme1 hover:bg-theme4 w-full cursor-pointer rounded-lg p-1 py-2 text-slate-100 transition-all duration-300">
                          5:00am
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <button className="bg-theme1 hover:bg-theme4 w-full cursor-pointer rounded-lg p-1 py-2 text-slate-100 transition-all duration-300">
                          9:00am
                        </button>
                      </td>
                      <td>
                        <button className="bg-theme1 hover:bg-theme4 w-full cursor-pointer rounded-lg p-1 py-2 text-slate-100 transition-all duration-300">
                          12:00am
                        </button>
                      </td>
                      <td>
                        <button className="bg-theme1 hover:bg-theme4 w-full cursor-pointer rounded-lg p-1 py-2 text-slate-100 transition-all duration-300">
                          5:00am
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <button className="bg-theme1 hover:bg-theme4 w-full cursor-pointer rounded-lg p-1 py-2 text-slate-100 transition-all duration-300">
                          9:00am
                        </button>
                      </td>
                      <td>
                        <button className="bg-theme1 hover:bg-theme4 w-full cursor-pointer rounded-lg p-1 py-2 text-slate-100 transition-all duration-300">
                          12:00am
                        </button>
                      </td>
                      <td>
                        <button className="bg-theme1 hover:bg-theme4 w-full cursor-pointer rounded-lg p-1 py-2 text-slate-100 transition-all duration-300">
                          5:00am
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <button className="bg-theme1 hover:bg-theme4 w-full cursor-pointer rounded-lg p-1 py-2 text-slate-100 transition-all duration-300">
                          9:00am
                        </button>
                      </td>
                      <td>
                        <button className="bg-theme1 hover:bg-theme4 w-full cursor-pointer rounded-lg p-1 py-2 text-slate-100 transition-all duration-300">
                          12:00am
                        </button>
                      </td>
                      <td>
                        <button className="bg-theme1 hover:bg-theme4 w-full cursor-pointer rounded-lg p-1 py-2 text-slate-100 transition-all duration-300">
                          5:00am
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <button className="bg-theme1 hover:bg-theme4 w-full cursor-pointer rounded-lg p-1 py-2 text-slate-100 transition-all duration-300">
                          9:00am
                        </button>
                      </td>
                      <td>
                        <button className="bg-theme1 hover:bg-theme4 w-full cursor-pointer rounded-lg p-1 py-2 text-slate-100 transition-all duration-300">
                          12:00am
                        </button>
                      </td>
                      <td>
                        <button className="bg-theme1 hover:bg-theme4 w-full cursor-pointer rounded-lg p-1 py-2 text-slate-100 transition-all duration-300">
                          5:00am
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <button className="bg-theme1 hover:bg-theme4 w-full cursor-pointer rounded-lg p-1 py-2 text-slate-100 transition-all duration-300">
                          9:00am
                        </button>
                      </td>
                      <td>
                        <button className="bg-theme1 hover:bg-theme4 w-full cursor-pointer rounded-lg p-1 py-2 text-slate-100 transition-all duration-300">
                          12:00am
                        </button>
                      </td>
                      <td>
                        <button className="bg-theme1 hover:bg-theme4 w-full cursor-pointer rounded-lg p-1 py-2 text-slate-100 transition-all duration-300">
                          5:00am
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <button className="bg-theme1 hover:bg-theme4 w-full cursor-pointer rounded-lg p-1 py-2 text-slate-100 transition-all duration-300">
                          9:00am
                        </button>
                      </td>
                      <td>
                        <button className="bg-theme1 hover:bg-theme4 w-full cursor-pointer rounded-lg p-1 py-2 text-slate-100 transition-all duration-300">
                          12:00am
                        </button>
                      </td>
                      <td>
                        <button className="bg-theme1 hover:bg-theme4 w-full cursor-pointer rounded-lg p-1 py-2 text-slate-100 transition-all duration-300">
                          5:00am
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <button className="bg-theme1 hover:bg-theme4 w-full cursor-pointer rounded-lg p-1 py-2 text-slate-100 transition-all duration-300">
                          9:00am
                        </button>
                      </td>
                      <td>
                        <button className="bg-theme1 hover:bg-theme4 w-full cursor-pointer rounded-lg p-1 py-2 text-slate-100 transition-all duration-300">
                          12:00am
                        </button>
                      </td>
                      <td>
                        <button className="bg-theme1 hover:bg-theme4 w-full cursor-pointer rounded-lg p-1 py-2 text-slate-100 transition-all duration-300">
                          5:00am
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <button className="bg-theme1 hover:bg-theme4 w-full cursor-pointer rounded-lg p-1 text-slate-100 transition-all duration-300">
                          9:00am
                        </button>
                      </td>
                      <td>
                        <button className="bg-theme1 hover:bg-theme4 w-full cursor-pointer rounded-lg p-1 text-slate-100 transition-all duration-300">
                          12:00am
                        </button>
                      </td>
                      <td>
                        <button className="bg-theme1 hover:bg-theme4 w-full cursor-pointer rounded-lg p-1 text-slate-100 transition-all duration-300">
                          5:00am
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <button className="bg-theme1 hover:bg-theme4 w-full cursor-pointer rounded-lg p-1 py-2 text-slate-100 transition-all duration-300">
                          9:00am
                        </button>
                      </td>
                      <td>
                        <button className="bg-theme1 hover:bg-theme4 w-full cursor-pointer rounded-lg p-1 py-2 text-slate-100 transition-all duration-300">
                          12:00am
                        </button>
                      </td>
                      <td>
                        <button className="bg-theme1 hover:bg-theme4 w-full cursor-pointer rounded-lg p-1 py-2 text-slate-100 transition-all duration-300">
                          5:00am
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* <div className="mt-29 flex flex-col place-self-start rounded-2xl bg-slate-100">
              <p className="text-theme4 border-theme4 bg-theme1/10 border-b px-5 pt-5 pb-3.5 text-lg font-semibold">
                Informacije o rezervaciji:
              </p>
              <p className="text-theme4 flex items-center gap-4 px-5 py-3.5 text-lg">
                <CiLocationOn className="text-theme4 shrink-0 text-2xl" />
                Ul. Charlesa Darwina 10, Zagreb
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
