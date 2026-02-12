import { WithContext, LocalBusiness } from "schema-dts";

export const localBusinessSchema: WithContext<LocalBusiness> = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://zivotbezboli.com/#localbusiness",
  name: "Život Bez Boli",
  url: "https://zivotbezboli.com",
  logo: "https://zivotbezboli.com/logo_transparent.png",
  image: "https://zivotbezboli.com/slike/bez-boli-1-xl.jpg",
  telephone: "+385989648532",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ul. Charlesa Darwina 10",
    addressLocality: "Zagreb",
    postalCode: "10000",
    addressCountry: "HR",
  },
  sameAs: [
    "https://www.google.com/maps?cid=4476762995236628164",
    "https://web.facebook.com/RadicevIvan/?locale=hr_HR&_rdc=1&_rdr",
    "https://www.instagram.com/ivan_radicev",
  ],
};
