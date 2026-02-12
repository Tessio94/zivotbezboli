import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://zivotbezboli.com";

  return [
    // main pages
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/kontakt`, lastModified: new Date() },
    { url: `${baseUrl}/o-meni`, lastModified: new Date() },
    { url: `${baseUrl}/rezervacija`, lastModified: new Date() },

    // sto-lijecimo
    { url: `${baseUrl}/sto-lijecimo`, lastModified: new Date() },
    {
      url: `${baseUrl}/sto-lijecimo/bol-u-koljenima-i-stopalima`,
      lastModified: new Date(),
    },
    { url: `${baseUrl}/sto-lijecimo/bol-u-kuku`, lastModified: new Date() },
    {
      url: `${baseUrl}/sto-lijecimo/bol-u-laktu-i-ruci`,
      lastModified: new Date(),
    },
    { url: `${baseUrl}/sto-lijecimo/bol-u-ledjima`, lastModified: new Date() },
    { url: `${baseUrl}/sto-lijecimo/bol-u-vratu`, lastModified: new Date() },
    {
      url: `${baseUrl}/sto-lijecimo/bol-u-vratu-i-ramenu`,
      lastModified: new Date(),
    },
    { url: `${baseUrl}/sto-lijecimo/kronicna-bol`, lastModified: new Date() },
    { url: `${baseUrl}/sto-lijecimo/ostale-tegobe`, lastModified: new Date() },
    { url: `${baseUrl}/sto-lijecimo/tretmani-djece`, lastModified: new Date() },
    {
      url: `${baseUrl}/sto-lijecimo/sportske-ozljede`,
      lastModified: new Date(),
    },

    // usluge
    { url: `${baseUrl}/usluge`, lastModified: new Date() },
    { url: `${baseUrl}/usluge/pregled`, lastModified: new Date() },
    { url: `${baseUrl}/usluge/osteopatija`, lastModified: new Date() },
    { url: `${baseUrl}/usluge/p-dtr`, lastModified: new Date() },
    {
      url: `${baseUrl}/usluge/manualna-fizioterapija`,
      lastModified: new Date(),
    },
    { url: `${baseUrl}/usluge/terapijske-vjezbe`, lastModified: new Date() },
    { url: `${baseUrl}/usluge/terapijski-trening`, lastModified: new Date() },
  ];
}
