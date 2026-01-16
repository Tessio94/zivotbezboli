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
      className="hover:bg-theme1/20 border-theme1/30 relative mx-auto flex h-14 w-14 flex-col items-center justify-between gap-0.5 rounded-full border max-[560px]:h-11 max-[560px]:w-11 max-[400px]:h-10 max-[400px]:w-10"
    >
      {/* Day number */}
      <span className="mt-2.5 flex grow items-center justify-center text-sm leading-2.5 font-medium max-[560px]:mt-2">
        {day.date.getDate()}
      </span>

      {/* Icons row */}
      <div className="flex w-full grow flex-row items-stretch overflow-hidden rounded-b-full">
        <div className="bg-theme1 aspect-square w-[34%] shrink-0" />
        <div className="bg-theme3 aspect-square w-[34%] shrink-0" />
        <div className="bg-theme4 aspect-square w-[34%] shrink-0" />
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
