import React from "react";
import { BsFillClockFill } from "react-icons/bs";

const SlotDropdown = ({
  setSelectedSlot,
  availability,
}: {
  setSelectedSlot: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex flex-col gap-5">
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
      </div>

      <div className="flex flex-col gap-2 rounded-xl bg-slate-100 p-2">
        <div className="bg-theme1 hover:text-theme4 hover:border-theme4 cursor-pointer rounded-xl border-2 border-transparent p-2 text-center text-slate-100 transition-all duration-300 hover:bg-slate-100">
          09:00am
        </div>
        <div className="bg-theme1 hover:text-theme4 hover:border-theme4 cursor-pointer rounded-xl border-2 border-transparent p-2 text-center text-slate-100 transition-all duration-300 hover:bg-slate-100">
          10:00am
        </div>
        <div className="bg-theme1 hover:text-theme4 hover:border-theme4 cursor-pointer rounded-xl border-2 border-transparent p-2 text-center text-slate-100 transition-all duration-300 hover:bg-slate-100">
          11:00am
        </div>
        <div className="bg-theme4 hover:text-theme4 hover:border-theme4 cursor-pointer rounded-xl border-2 border-transparent p-2 text-center text-slate-100 transition-all duration-300 hover:bg-slate-100">
          15:00am
        </div>
        <div className="bg-theme4 hover:text-theme4 hover:border-theme4 cursor-pointer rounded-xl border-2 border-transparent p-2 text-center text-slate-100 transition-all duration-300 hover:bg-slate-100">
          16:00am
        </div>
        <div className="bg-theme4 hover:text-theme4 hover:border-theme4 cursor-pointer rounded-xl border-2 border-transparent p-2 text-center text-slate-100 transition-all duration-300 hover:bg-slate-100">
          17:00am
        </div>
        <div className="bg-theme4 hover:text-theme4 hover:border-theme4 cursor-pointer rounded-xl border-2 border-transparent p-2 text-center text-slate-100 transition-all duration-300 hover:bg-slate-100">
          18:00am
        </div>
      </div>
    </div>
  );
};

export default SlotDropdown;
