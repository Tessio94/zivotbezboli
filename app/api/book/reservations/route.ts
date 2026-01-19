// import { NextResponse } from "next/server";
// import { requireAuth } from "@/lib/auth/requireAuth";
// import { createReservation } from "@/lib/controllers/bookController";

// export async function POST(req) {
//   try {
//     const user = await requireAuth(req);

//     const body = await req.json();
//     const result = await createReservation(body, user);

//     return NextResponse.json(result, { status: 201 });
//   } catch (error) {
//     return NextResponse.json(
//       { error: error.message || "Unauthorized" },
//       { status: 401 }
//     );
//   }
// }
