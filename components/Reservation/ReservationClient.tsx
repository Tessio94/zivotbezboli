"use client";

import React, { useCallback, useEffect, useState } from "react";
import { motion } from "motion/react";
import { BiCalendar } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaHandPointLeft, FaHandPointUp } from "react-icons/fa6";
import DatePicker from "@/components/Reservation/DatePicker";
import SlotDropdown from "@/components/Reservation/SlotDropdown";
import ReservationModal from "@/components/Reservation/ReservationModal";
import { BsClock } from "react-icons/bs";
import { useQuery } from "@tanstack/react-query";

const fetchUrl = process.env.NEXT_PUBLIC_FETCH_URL;

type Availability = {
  date: string;
  morning: boolean;
  afternoon: boolean;
};

type Props = {
  availability: Availability[];
};

type AvailabilityMap = Record<string, Availability>;

async function fetchAvailableSlots(date: string | null) {
  const res = await fetch(`${fetchUrl}/api/book/appointments/slots/${date}`);

  if (!res.ok) {
    throw new Error("Failed fetching slots");
  }

  const data = await res.json();

  return data;
}

const ReservationClient = ({ availability }: Props) => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  console.log(selectedDate);
  const onClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const availabilityMap: AvailabilityMap = Object.fromEntries(
    availability.map((a) => [a.date, a]),
  );

  const date = new Date(selectedDate as string);

  const dateTitle = new Intl.DateTimeFormat("hr-HR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["availableSlots", selectedDate],
    queryFn: () => fetchAvailableSlots(selectedDate),
    enabled: !!selectedDate,
  });

  let timeSlots;
  if (data) {
    timeSlots = { timeSlots };
  }
  console.log("dejtona", data);

  return (
    <>
      <section className="relative z-10 h-fit min-h-screen w-full bg-[url(/slike/bez-boli-2-xl.jpg)] max-lg:bg-position-[20%] max-md:bg-position-[30%] max-sm:bg-position-[55%] min-[1920px]:bg-cover">
        <div className="from-theme4/90 to-theme4/20 absolute inset-0 -z-10 bg-linear-to-r" />
        <div className="w-full px-6 py-16 max-sm:px-0 sm:px-10 sm:py-20 lg:px-18 lg:py-26">
          <div className="from-theme1/60 z-20 mx-auto mt-44 flex flex-col items-start gap-10 rounded-4xl bg-linear-to-br to-slate-100/60 p-10 max-[700px]:px-6 max-[400px]:px-3 sm:mt-40 lg:mt-34 2xl:w-[87%]">
            <motion.h1
              className="text-center text-5xl font-bold text-slate-100 max-[1500px]:text-4xl max-[750px]:text-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Rezervirajte svoj termin
            </motion.h1>
            <div className="flex w-full flex-col flex-wrap items-stretch justify-between gap-13 lg:flex-row lg:gap-6">
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
                        <span className="bg-theme1 -mb-1 block h-3 w-3 shrink-0" />
                      </p>
                      <p className="text-theme4 flex flex-row items-center gap-1 text-lg">
                        Popodne
                        <span className="bg-theme4 -mb-1 block h-3 w-3 shrink-0" />
                      </p>
                    </div>
                  </div>
                </div>
                <DatePicker
                  availability={availabilityMap}
                  setSelectedDate={setSelectedDate}
                />
              </div>
              {selectedDate ? (
                <SlotDropdown
                  //   availability={availability}
                  timeSlots={timeSlots}
                  dateTitle={dateTitle}
                  onSelect={setSelectedSlot}
                />
              ) : (
                <div className="flex grow flex-col place-self-start rounded-2xl bg-slate-100 lg:mt-29 lg:max-w-1/3">
                  <p className="text-theme4 flex items-center gap-4 px-5 py-3.5 text-lg">
                    <FaHandPointLeft className="text-theme4 hidden shrink-0 text-2xl lg:block" />
                    <FaHandPointUp className="text-theme4 block shrink-0 text-2xl lg:hidden" />
                    Odaberite datum
                  </p>
                </div>
              )}

              <div className="flex flex-col place-self-start rounded-2xl bg-slate-100 lg:mt-29">
                <p className="text-theme4 border-theme4 bg-theme1/10 border-b px-5 pt-5 pb-3.5 text-lg font-semibold">
                  Informacije o rezervaciji:
                </p>
                <p className="text-theme4 flex items-center gap-4 px-5 py-3.5 text-lg">
                  <CiLocationOn className="text-theme4 shrink-0 text-2xl" />
                  Ul. Charlesa Darwina 10, Zagreb
                </p>
                {selectedDate && (
                  <p className="text-theme4 flex items-center gap-4 px-5 py-3.5 text-lg">
                    <BiCalendar className="text-theme4 shrink-0 text-2xl" />
                    {dateTitle}
                  </p>
                )}
                {selectedSlot && (
                  <p className="text-theme4 flex items-center gap-4 px-5 py-3.5 text-lg">
                    <BsClock className="text-theme4 shrink-0 text-2xl" />
                    {/* {slotTitle} */}
                  </p>
                )}
              </div>
            </div>
            <button
              className="bg-theme1 hover:border-theme4 hover:text-theme4 w-full cursor-pointer rounded-2xl border-2 border-transparent p-2 font-semibold text-slate-100 transition-all duration-300 hover:bg-slate-100"
              onClick={() => setIsModalOpen(true)}
            >
              Rezerviraj
            </button>
          </div>
        </div>
      </section>
      {isModalOpen && (
        <ReservationModal
          onClose={onClose}
          selectedDate={selectedDate}
          selectedSlot={selectedSlot}
        />
      )}
      {/* <button onClick={() => setIsModalOpen(true)}>open</button> */}
    </>
  );
};

export default ReservationClient;
