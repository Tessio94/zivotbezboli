import { cn } from "@/lib/utils";
import { DayButtonProps } from "react-day-picker";

// type Props = DayButtonProps & {
//   availability?: {
//     morning: boolean;
//     afternoon: boolean;
//     evening: boolean;
//   };
// };

type Props = DayButtonProps & {
  availability?: {
    morning: boolean;
    afternoon: boolean;
  };
};

export function CustomDayButton({ day, availability, ...buttonProps }: Props) {
  console.log(availability);
  const hasMorning = availability?.morning;
  const hasAfternoon = availability?.afternoon;

  const disabled = !hasMorning && !hasAfternoon;

  return (
    <button
      {...buttonProps}
      disabled={disabled}
      className="hover:bg-theme1/20 border-theme1/30 relative mx-auto flex h-14 w-14 flex-col items-center justify-between gap-0.5 overflow-hidden rounded-full border max-[560px]:h-11 max-[560px]:w-11 max-[400px]:h-10 max-[400px]:w-10"
    >
      {/* Day number */}
      <span className="mt-2.5 flex grow items-center justify-center text-[16px] leading-2.5 font-medium max-[560px]:mt-2">
        {day.date.getDate()}
      </span>

      {/* Icons row */}
      <div className="-mb-3 flex w-full grow flex-row items-stretch overflow-hidden rounded-b-full">
        {hasMorning && (
          <div className="bg-theme1 aspect-square w-[51%] shrink-0" />
        )}
        {hasAfternoon && (
          <div className="bg-theme4 aspect-square w-[51%] shrink-0" />
        )}
      </div>
    </button>
  );
}
