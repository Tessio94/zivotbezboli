import { getAvailableSlots } from "@/lib/db/queries/appointments";
import { NextResponse } from "next/server";

type SlotRow = {
  start_time: Date;
  end_time: Date;
};

type Params = {
  date: string;
};

function editSlotsAvailability(slots: SlotRow[]): string[] {
  const now = new Date(); // current time
  const result: string[] = [];

  for (const { start_time, end_time } of slots) {
    let current = new Date(start_time);
    const end = new Date(end_time);

    while (current < end) {
      // ✅ only include slots strictly in the future
      if (current > now) {
        result.push(
          current.toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
          }),
        );
      }

      current = new Date(current.getTime() + 60 * 60 * 1000);
    }
  }

  return result;
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<Params> },
) {
  try {
    const { date } = await params;

    const slots = await getAvailableSlots(date);

    const editedSlots = editSlotsAvailability(slots.rows);

    return NextResponse.json({
      slots: slots.rows,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

function formatDateFix(ts: Date) {
  return ts.toISOString().slice(0, 10);
}
