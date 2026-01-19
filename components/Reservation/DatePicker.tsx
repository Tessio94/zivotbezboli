"use client";

import React from "react";
import { useState } from "react";

import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/style.css";
import { hr } from "react-day-picker/locale";
import { CustomDayButton } from "./CustomDayButton";
import { toLocalDateKey } from "@/lib/utils";

type Props = {
  availability: Record<
    string,
    { date: string; morning: boolean; afternoon: boolean }
  >;
  setSelectedDate: React.Dispatch<React.SetStateAction<boolean>>;
};

const DatePicker = ({ availability, setSelectedDate }: Props) => {
  const [selected, setSelected] = useState<Date>();
  const defaultClassNames = getDefaultClassNames();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const endDate = new Date(today);
  endDate.setDate(endDate.getDate() + 60);

  return (
    <DayPicker
      animate
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={
        selected
          ? `Odabrano: ${selected.toLocaleDateString()}`
          : "Odaberite dan."
      }
      locale={hr}
      disabled={[{ before: today }, { after: endDate }, { dayOfWeek: [0, 6] }]}
      components={{
        DayButton: (props) => {
          {
            const dateKey = toLocalDateKey(props.day.date);

            return (
              <CustomDayButton
                {...props}
                availability={availability[dateKey]}
              />
            );
          }
        },
      }}
      classNames={{
        root: `${defaultClassNames.root} shadow-lg max-[435px]:px-2 max-[435px]:py-3 p-5 bg-slate-100 rounded-2xl  flex flex-col justify-between w-full`,
        chevron: `${defaultClassNames.chevron} fill-theme4!  hover:fill-theme4/40! transition-all duration-300`,
        month_caption: `${defaultClassNames.month_caption} text-theme4 font-semibold`,
        footer: `${defaultClassNames.footer} text-theme4 font-semibold`,
        month_grid: `${defaultClassNames.month_grid} text-theme4 mt-2 w-full border-separate! border-spacing-x-2! border-spacing-y-3! max-[560px]:border-spacing-x-1!`,
        months: `${defaultClassNames.months} w-full  max-w-full!`,
        month: `${defaultClassNames.month} w-full`,
        disabled: `${defaultClassNames.disabled} cursor-none pointer-events-none`,
      }}
    />
  );
};

export default DatePicker;
