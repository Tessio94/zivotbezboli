"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Rezervacija = () => {
  const pathname = usePathname();

  if (pathname === "/rezervacija") {
    return null;
  }

  return (
    <div>
        <Link
            href="/rezervacija"
            className="text-md bg-theme1 hover:text-theme1 border-theme1 fixed top-1/2 right-0 z-150 hidden -translate-y-1/2 rounded-4xl border-2 px-5 py-1 font-semibold text-slate-100 uppercase transition-all duration-300 [text-orientation:upright] [writing-mode:vertical-rl] hover:bg-slate-100 sm:inline-block lg:py-2"
        >
            Rezervacija
        </Link>
    </div>
  );
};

export default Rezervacija;
