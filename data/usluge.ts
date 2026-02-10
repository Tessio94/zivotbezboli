import pregledImg from "@/public/slike/bez-boli-1-xl.jpg";
import pDtrImg from "@/public/slike/bez-boli-22-xl.jpg";
import osteopatijaImg from "@/public/slike/bez-boli-2-xl.jpg";
import manualnaImg from "@/public/slike/bez-boli-9-xl.jpg";
import vjezbeImg from "@/public/slike/bez-boli-10-xl.jpg";
import treningImg from "@/public/slike/bez-boli-21-xl.jpg";

export const USLUGE = {
  pregled: {
    title: "Pregled",
    image: pregledImg,
    seoTitle: "Pregled i dijagnostika | Život bez boli",
    description:
      "Detaljan pregled i funkcionalna dijagnostika kako bismo otkrili pravi uzrok boli i tegoba.",
    openGraph: {
      seoTitle: "Pregled i dijagnostika | Život bez boli",
      images: [
        {
          url: "https://www.zivotbezboli.com/slike/bez-boli-1-xl.jpg",
          width: 1920,
          height: 1080,
          alt: "Pregled i dijagnostika",
        },
      ],
    },
  },

  "p-dtr": {
    title: "P-DTR®",
    image: pDtrImg,
    seoTitle: "P-DTR® terapija | Život bez boli",
    description:
      "P-DTR® terapija koristi neurološke principe za uklanjanje uzroka boli i disfunkcija pokreta.",
    openGraph: {
      seoTitle: "P-DTR® terapija | Život bez boli",
      images: [
        {
          url: "https://www.zivotbezboli.com/slike/bez-boli-22-xl.jpg",
          width: 1920,
          height: 1080,
          alt: "P-DTR terapija",
        },
      ],
    },
  },

  osteopatija: {
    title: "Osteopatija",
    image: osteopatijaImg,
    seoTitle: "Osteopatija – cjelovit pristup tijelu | Život bez boli",
    description:
      "Osteopatski tretman usmjeren na ravnotežu tijela, živčanog sustava i pokreta.",
    openGraph: {
      seoTitle: "Osteopatija – cjelovit pristup tijelu | Život bez boli",
      images: [
        {
          url: "https://www.zivotbezboli.com/slike/bez-boli-2-xl.jpg",
          width: 1920,
          height: 1080,
          alt: "Osteopatija život bez boli",
        },
      ],
    },
  },

  "manualna-fizioterapija": {
    title: "Manualna fizioterapija",
    image: manualnaImg,
    seoTitle: "Manualna fizioterapija | Život bez boli",
    description:
      "Individualni manualni tretmani za smanjenje boli, poboljšanje pokreta i funkcije tijela.",
    openGraph: {
      seoTitle: "Manualna fizioterapija | Život bez boli",
      images: [
        {
          url: "https://www.zivotbezboli.com/slike/bez-boli-9-xl.jpg",
          width: 1920,
          height: 1080,
          alt: "Manualna fizioterapija",
        },
      ],
    },
  },

  "terapijske-vjezbe": {
    title: "Terapijske vježbe",
    image: vjezbeImg,
    seoTitle: "Terapijske vježbe | Život bez boli",
    description:
      "Ciljane terapijske vježbe prilagođene vašem stanju, mogućnostima i ciljevima oporavka.",
    openGraph: {
      seoTitle: "Terapijske vježbe | Život bez boli",
      images: [
        {
          url: "https://www.zivotbezboli.com/slike/bez-boli-10-xl.jpg",
          width: 1920,
          height: 1080,
          alt: "Terapijske vježbe",
        },
      ],
    },
  },

  "terapijski-trening": {
    title: "Terapijski trening",
    image: treningImg,
    seoTitle: "Terapijski trening | Život bez boli",
    description:
      "Siguran i kontroliran povratak snazi, stabilnosti i pokretu kroz terapijski trening.",
    openGraph: {
      seoTitle: "Terapijski trening | Život bez boli",
      images: [
        {
          url: "https://www.zivotbezboli.com/slike/bez-boli-21-xl.jpg",
          width: 1920,
          height: 1080,
          alt: "Terapijski trening",
        },
      ],
    },
  },
} as const;
