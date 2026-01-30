import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Recenzije from "@/components/Recenzije";
import seoData from "@/data/metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type Params = {
  slug?: string[] | string;
};

export const metadata: Metadata = {
  title: "Privatna fizioterapija Zagreb |  Život bez boli",
  description:
    "Privatna ordinacija u Zagrebu za liječenje boli, disfunkcija pokreta i kroničnih tegoba. Fizioterapija, osteopatija i P-DTR® terapija.",
  openGraph: {
    title: "Život bez boli – privatna fizioterapija i osteopatija",
    description:
      "Specijalizirana privatna ordinacija za dijagnostiku i tretman boli, kroničnih tegoba i ozljeda. Individualan pristup i suvremene metode.",
    url: "https://www.zivotbezboli.com",
    images: [
      {
        url: "https://www.zivotbezboli.com/slike/bez-boli-1-xl.jpg",
        width: 1920,
        height: 1080,
        alt: "Život bez boli – privatna fizioterapija",
      },
    ],
    type: "website",
    locale: "hr_HR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>
          <Link
            href="/rezervacija"
            className="text-md bg-theme1 hover:text-theme1 border-theme1 fixed top-1/2 right-0 z-20 hidden -translate-y-1/2 rounded-4xl border-2 px-5 py-1 font-semibold text-slate-100 uppercase transition-all duration-300 [text-orientation:upright] [writing-mode:vertical-rl] hover:bg-slate-100 sm:inline-block lg:py-2"
          >
            Rezervacija
          </Link>
        </div>
        <Recenzije />
        {children}
      </body>
    </html>
  );
}
