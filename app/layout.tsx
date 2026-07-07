import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Recenzije from "@/components/Recenzije";
import Rezervacija from "@/components/Rezervacija";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
        <Rezervacija/>
        <Recenzije />
        <GoogleTagManager gtmId="GTM-KSJGNXFN" />
        {children}
      </body>
    </html>
  );
}
