import { NextResponse } from "next/server";
import { getAvailableSlotsQuery } from "@/lib/db/queries/appointments";
import { editAvailability } from "@/lib/utils";

export async function GET() {
  try {
    const appointments = await getAvailableSlotsQuery();
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
