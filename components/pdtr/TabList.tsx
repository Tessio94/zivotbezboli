"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { FaCircleChevronDown } from "react-icons/fa6";

const TabList = () => {
  const [dropdown, setDropdown] = useState("");

  return (
    <section className="bg-theme1/10 px-6 py-16 sm:px-10 sm:py-20 lg:px-18 lg:py-26">
      <h2 className="text-theme4 mb-11 text-center text-3xl font-semibold">
        P-DTR® koristim kod slijedećih simptoma i sindroma:
      </h2>

      <ul className="z-10 mx-auto rounded-t-2xl rounded-b-2xl md:max-w-[85%] xl:max-w-[70%]">
        <li
          className="border-theme1 to-theme2/40 hover:from-theme2/10 hover:to-theme2/60 group cursor-pointer rounded-t-2xl border-2 border-b-0 bg-linear-to-br from-transparent px-5 py-3 transition-colors duration-500 hover:bg-linear-to-br"
          onClick={() =>
            dropdown !== "d1" ? setDropdown("d1") : setDropdown("")
          }
        >
          <p className="text-theme4 flex flex-row items-center justify-between gap-5 text-2xl font-semibold">
            Mišićna bol i nelagoda
            <FaCircleChevronDown
              className={cn(
                "shrink-0 rotate-0 text-3xl transition-all duration-500",
                dropdown === "d1" && "rotate-180",
              )}
            />
          </p>
          <div
            className={cn(
              "transition-all duration-500",
              dropdown === "d1"
                ? "visible max-h-200 opacity-100"
                : "invisible max-h-0 opacity-0",
            )}
          >
            <p className="text-theme4 pt-2 text-lg">
              P-DTR® pomaže u otkrivanju neuroloških uzroka mišićne napetosti i
              boli te vraća pravilnu komunikaciju između mozga i mišića,
              omogućujući brzo olakšanje.
            </p>
          </div>
        </li>
        <li
          className="border-theme1 to-theme2/40 hover:from-theme2/10 hover:to-theme2/60 group cursor-pointer border-2 border-b-0 bg-linear-to-br from-transparent px-5 py-3 transition-colors duration-500 hover:bg-linear-to-br"
          onClick={() =>
            dropdown !== "d2" ? setDropdown("d2") : setDropdown("")
          }
        >
          <p className="text-theme4 flex flex-row items-center justify-between gap-5 text-2xl font-semibold">
            Bolovi u zglobovima
            <FaCircleChevronDown
              className={cn(
                "shrink-0 rotate-0 text-3xl transition-all duration-500",
                dropdown === "d2" && "rotate-180",
              )}
            />
          </p>
          <div
            className={cn(
              "transition-all duration-500",
              dropdown === "d2"
                ? "visible max-h-200 opacity-100"
                : "invisible max-h-0 opacity-0",
            )}
          >
            <p className="text-theme4 pt-2 text-lg">
              Kroz korekciju disfunkcionalnih senzornih receptora, P-DTR®
              smanjuje preopterećenje zglobova, poboljšava stabilnost i potiče
              prirodan, bezbolniji pokret.
            </p>
          </div>
        </li>
        <li
          className="border-theme1 to-theme2/40 hover:from-theme2/10 hover:to-theme2/60 group cursor-pointer border-2 border-b-0 bg-linear-to-br from-transparent px-5 py-3 transition-colors duration-500 hover:bg-linear-to-br"
          onClick={() =>
            dropdown !== "d3" ? setDropdown("d3") : setDropdown("")
          }
        >
          <p className="text-theme4 flex flex-row items-center justify-between gap-5 text-2xl font-semibold">
            Ograničen ili smanjen opseg pokreta
            <FaCircleChevronDown
              className={cn(
                "shrink-0 rotate-0 text-3xl transition-all duration-500",
                dropdown === "d3" && "rotate-180",
              )}
            />
          </p>
          <div
            className={cn(
              "transition-all duration-500",
              dropdown === "d3"
                ? "visible max-h-200 opacity-100"
                : "invisible max-h-0 opacity-0",
            )}
          >
            <p className="text-theme4 pt-2 text-lg">
              P-DTR® uklanja neurološke blokade koje ograničavaju pokret,
              omogućujući tijelu da ponovno koristi puni opseg pokreta bez
              forsiranja ili agresivnih tehnika.
            </p>
          </div>
        </li>
        <li
          className="border-theme1 to-theme2/40 hover:from-theme2/10 hover:to-theme2/60 group cursor-pointer border-2 border-b-0 bg-linear-to-br from-transparent px-5 py-3 transition-colors duration-500 hover:bg-linear-to-br"
          onClick={() =>
            dropdown !== "d4" ? setDropdown("d4") : setDropdown("")
          }
        >
          <p className="text-theme4 flex flex-row items-center justify-between gap-5 text-2xl font-semibold">
            Neurološka bol – trnci, gubitak osjeta, žarenje
            <FaCircleChevronDown
              className={cn(
                "shrink-0 rotate-0 text-3xl transition-all duration-500",
                dropdown === "d4" && "rotate-180",
              )}
            />
          </p>
          <div
            className={cn(
              "transition-all duration-500",
              dropdown === "d4"
                ? "visible max-h-200 opacity-100"
                : "invisible max-h-0 opacity-0",
            )}
          >
            <p className="text-theme4 pt-2 text-lg">
              Tehnika djeluje na poremećene živčane puteve koji uzrokuju
              neugodne senzacije, pomažući normalizaciji osjeta i smanjenju
              neurološke boli.
            </p>
          </div>
        </li>
        <li
          className="border-theme1 to-theme2/40 hover:from-theme2/10 hover:to-theme2/60 group cursor-pointer border-2 border-b-0 bg-linear-to-br from-transparent px-5 py-3 transition-colors duration-500 hover:bg-linear-to-br"
          onClick={() =>
            dropdown !== "d5" ? setDropdown("d5") : setDropdown("")
          }
        >
          <p className="text-theme4 flex flex-row items-center justify-between gap-5 text-2xl font-semibold">
            Glavobolje i vrtoglavice
            <FaCircleChevronDown
              className={cn(
                "shrink-0 rotate-0 text-3xl transition-all duration-500",
                dropdown === "d5" && "rotate-180",
              )}
            />
          </p>
          <div
            className={cn(
              "transition-all duration-500",
              dropdown === "d5"
                ? "visible max-h-200 opacity-100"
                : "invisible max-h-0 opacity-0",
            )}
          >
            <p className="text-theme4 pt-2 text-lg">
              P-DTR® pristupa uzroku glavobolja i vrtoglavica kroz regulaciju
              živčanog sustava, napetosti i senzornih informacija koje mozak
              pogrešno obrađuje.
            </p>
          </div>
        </li>
        <li
          className="border-theme1 to-theme2/40 hover:from-theme2/10 hover:to-theme2/60 group cursor-pointer border-2 border-b-0 bg-linear-to-br from-transparent px-5 py-3 transition-colors duration-500 hover:bg-linear-to-br"
          onClick={() =>
            dropdown !== "d6" ? setDropdown("d6") : setDropdown("")
          }
        >
          <p className="text-theme4 flex flex-row items-center justify-between gap-5 text-2xl font-semibold">
            Hiperosjetljivost na zvuk, svjetlost i druge podražaje
            <FaCircleChevronDown
              className={cn(
                "shrink-0 rotate-0 text-3xl transition-all duration-500",
                dropdown === "d6" && "rotate-180",
              )}
            />
          </p>
          <div
            className={cn(
              "transition-all duration-500",
              dropdown === "d6"
                ? "visible max-h-200 opacity-100"
                : "invisible max-h-0 opacity-0",
            )}
          >
            <p className="text-theme4 pt-2 text-lg">
              Korekcijom preosjetljivih receptora, P-DTR® smanjuje pretjerane
              reakcije živčanog sustava i pomaže tijelu da se bolje prilagodi
              vanjskim podražajima.
            </p>
          </div>
        </li>
        <li
          className="border-theme1 to-theme2/40 hover:from-theme2/10 hover:to-theme2/60 group cursor-pointer border-2 border-b-0 bg-linear-to-br from-transparent px-5 py-3 transition-colors duration-500 hover:bg-linear-to-br"
          onClick={() =>
            dropdown !== "d7" ? setDropdown("d7") : setDropdown("")
          }
        >
          <p className="text-theme4 flex flex-row items-center justify-between gap-5 text-2xl font-semibold">
            Postoperativna rehabilitacija
            <FaCircleChevronDown
              className={cn(
                "shrink-0 rotate-0 text-3xl transition-all duration-500",
                dropdown === "d7" && "rotate-180",
              )}
            />
          </p>
          <div
            className={cn(
              "transition-all duration-500",
              dropdown === "d7"
                ? "visible max-h-200 opacity-100"
                : "invisible max-h-0 opacity-0",
            )}
          >
            <p className="text-theme4 pt-2 text-lg">
              P-DTR® ubrzava oporavak nakon operacije vraćanjem neurološke
              kontrole, smanjenjem kompenzacija i omogućavanjem sigurnijeg
              povratka funkciji.
            </p>
          </div>
        </li>
        <li
          className="border-theme1 to-theme2/40 hover:from-theme2/10 hover:to-theme2/60 group cursor-pointer border-2 border-b-0 bg-linear-to-br from-transparent px-5 py-3 transition-colors duration-500 hover:bg-linear-to-br"
          onClick={() =>
            dropdown !== "d8" ? setDropdown("d8") : setDropdown("")
          }
        >
          <p className="text-theme4 flex flex-row items-center justify-between gap-5 text-2xl font-semibold">
            Ubrzavanje oporavka od akutnih ozljeda
            <FaCircleChevronDown
              className={cn(
                "shrink-0 rotate-0 text-3xl transition-all duration-500",
                dropdown === "d8" && "rotate-180",
              )}
            />
          </p>
          <div
            className={cn(
              "transition-all duration-500",
              dropdown === "d8"
                ? "visible max-h-200 opacity-100"
                : "invisible max-h-0 opacity-0",
            )}
          >
            <p className="text-theme4 pt-2 text-lg">
              Tehnika pomaže tijelu da brže izađe iz zaštitnih obrazaca nakon
              ozljede, smanjuje bol i podržava prirodne mehanizme oporavka.
            </p>
          </div>
        </li>
        <li
          className="border-theme1 to-theme2/40 hover:from-theme2/10 hover:to-theme2/60 group cursor-pointer border-2 border-b-0 bg-linear-to-br from-transparent px-5 py-3 transition-colors duration-500 hover:bg-linear-to-br"
          onClick={() =>
            dropdown !== "d9" ? setDropdown("d9") : setDropdown("")
          }
        >
          <p className="text-theme4 flex flex-row items-center justify-between gap-5 text-2xl font-semibold">
            Rehabilitacija sportskih ozljeda
            <FaCircleChevronDown
              className={cn(
                "shrink-0 rotate-0 text-3xl transition-all duration-500",
                dropdown === "d9" && "rotate-180",
              )}
            />
          </p>
          <div
            className={cn(
              "transition-all duration-500",
              dropdown === "d9"
                ? "visible max-h-200 opacity-100"
                : "invisible max-h-0 opacity-0",
            )}
          >
            <p className="text-theme4 pt-2 text-lg">
              P-DTR® identificira neurološke uzroke ozljeda i kompenzacija,
              pomažući sportašima da se brže i sigurnije vrate treninzima i
              natjecanjima.
            </p>
          </div>
        </li>
        <li
          className="border-theme1 to-theme2/40 hover:from-theme2/10 hover:to-theme2/60 group cursor-pointer border-2 border-b-0 bg-linear-to-br from-transparent px-5 py-3 transition-colors duration-500 hover:bg-linear-to-br"
          onClick={() =>
            dropdown !== "d10" ? setDropdown("d10") : setDropdown("")
          }
        >
          <p className="text-theme4 flex flex-row items-center justify-between gap-5 text-2xl font-semibold">
            Posttraumatski stres
            <FaCircleChevronDown
              className={cn(
                "shrink-0 rotate-0 text-3xl transition-all duration-500",
                dropdown === "d10" && "rotate-180",
              )}
            />
          </p>
          <div
            className={cn(
              "transition-all duration-500",
              dropdown === "d10"
                ? "visible max-h-200 opacity-100"
                : "invisible max-h-0 opacity-0",
            )}
          >
            <p className="text-theme4 pt-2 text-lg">
              Radom na živčanom sustavu, P-DTR® može pomoći u smanjenju fizičkih
              i neuroloških posljedica traume koje ostaju pohranjene u tijelu.
            </p>
          </div>
        </li>
        <li
          className="border-theme1 to-theme2/40 hover:from-theme2/10 hover:to-theme2/60 group cursor-pointer rounded-b-2xl border-2 bg-linear-to-br from-transparent px-5 py-3 transition-colors duration-500 hover:bg-linear-to-br"
          onClick={() =>
            dropdown !== "d11" ? setDropdown("d11") : setDropdown("")
          }
        >
          <p className="text-theme4 flex flex-row items-center justify-between gap-5 text-2xl font-semibold">
            Kronični i “neobjašnjivi” problemi
            <FaCircleChevronDown
              className={cn(
                "shrink-0 rotate-0 text-3xl transition-all duration-500",
                dropdown === "d11" && "rotate-180",
              )}
            />
          </p>
          <div
            className={cn(
              "transition-all duration-500",
              dropdown === "d11"
                ? "visible max-h-200 opacity-100"
                : "invisible max-h-0 opacity-0",
            )}
          >
            <p className="text-theme4 pt-2 text-lg">
              P-DTR® često pomaže kod tegoba za koje se smatra da nemaju
              rješenje, adresirajući duboke neurološke uzroke koje klasične
              metode zanemaruju.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default TabList;
