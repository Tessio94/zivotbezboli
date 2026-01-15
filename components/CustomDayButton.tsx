import { DayButtonProps } from "react-day-picker";

type Props = DayButtonProps & {
  availability?: {
    morning: boolean;
    afternoon: boolean;
    evening: boolean;
  };
};

export function CustomDayButton(props: Props) {
  const { day, modifiers, availability, ...buttonProps } = props;

  return (
    <button
      {...buttonProps}
      className="hover:bg-theme1/20 border-theme1/30 relative mx-auto flex h-14 w-14 flex-col items-center justify-between gap-0.5 rounded-full border p-1 max-[560px]:h-11 max-[560px]:w-11 max-[400px]:h-10 max-[400px]:w-10"
    >
      {/* Day number */}
      <span className="text-sm font-medium">{day.date.getDate()}</span>

      {/* Icons row */}
      <div className="flex grow flex-row items-center gap-0.5 max-[560px]:gap-[1px]">
        <div className="bg-theme1 h-3 w-3 shrink-0 rounded-full max-[560px]:h-2 max-[560px]:w-2" />
        <div className="border-b-theme3 shrink-0 border-r-[6px] border-b-[10px] border-l-[6px] border-r-transparent border-l-transparent max-[560px]:border-r-[4px] max-[560px]:border-b-[8px] max-[560px]:border-l-[4px]" />
        <div className="bg-theme4 h-3 w-3 shrink-0 max-[560px]:h-2 max-[560px]:w-2" />
      </div>

      {/* {availability && (
        <div className="mt-0.5 flex gap-0.5">
          <div
            className={`h-3 w-3 ${
              availability.morning ? "text-green-500" : "text-gray-300"
            }`}
          />
          <div
            className={`h-3 w-3 ${
              availability.afternoon ? "text-green-500" : "text-gray-300"
            }`}
          />
          <div
            className={`h-3 w-3 ${
              availability.evening ? "text-green-500" : "text-gray-300"
            }`}
          />
        </div>
      )} */}
    </button>
  );
}
