import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function editAvailability(appointments) {
  return appointments.map(({ available }) => {
    const fixed = available.replace(/\)$/, "]");
    const [start, end] = JSON.parse(fixed);

    const startHour = new Date(start).getHours();
    const endHour = new Date(end).getHours();

    return {
      date: start.split(" ")[0],
      morning: startHour < 12,
      afternoon: endHour > 12,
    };
  });
}

export function toLocalDateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
