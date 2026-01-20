import { NextResponse } from "next/server";
import { getAvailableDays } from "@/lib/db/queries/appointments";
import { toLocalDateKey } from "@/lib/utils";

type AppointmentRow = {
  start_time: Date;
  end_time: Date;
  available: string;
};

type AvailabilityDTO = {
  date: string;
  morning: boolean;
  afternoon: boolean;
};

function editAvailability(appointments: AppointmentRow[]): AvailabilityDTO[] {
  const byDate: Record<string, AvailabilityDTO> = {};

  for (const { start_time, end_time } of appointments) {
    const date = toLocalDateKey(start_time);

    const hasMorning = start_time.getHours() < 12;
    const hasAfternoon = end_time.getHours() > 12;

    if (!byDate[date]) {
      byDate[date] = {
        date,
        morning: false,
        afternoon: false,
      };
    }

    // Aggregate (OR-merge)
    byDate[date].morning ||= hasMorning;
    byDate[date].afternoon ||= hasAfternoon;
  }

  return Object.values(byDate);
}

export async function GET() {
  try {
    const appointments = await getAvailableDays<AppointmentRow>();

    const editAppointments = editAvailability(appointments.rows);

    return NextResponse.json({
      appointments: editAppointments,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
