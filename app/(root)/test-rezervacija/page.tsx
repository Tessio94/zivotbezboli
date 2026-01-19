import ReservationClient from "@/components/Reservation/ReservationClient";

const fetchUrl = process.env.NEXT_PUBLIC_FETCH_URL;

async function getAvailableSlots() {
  const res = await fetch(`${fetchUrl}/api/book/appointments`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch slots");
  }

  return res.json();
}

const Page = async () => {
  const data = await getAvailableSlots();

  return <ReservationClient availability={data.appointments} />;
};

export default Page;
