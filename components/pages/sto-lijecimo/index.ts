import { STO_LIJECIMO } from "@/data/sto-lijecimo";
import BolUKoljenimaIStopalima from "./BolUKoljenimaIStopalima";
import BolUKuku from "./BolUKuku";
import BolULaktuiRuci from "./BolULaktuiRuci";
import BolULedjima from "./BolULedjima";
import BolUVratu from "./BolUVratu";
import BolUVratuIRamenu from "./BolUVratuIRamenu";
import KronicnaBol from "./KronicnaBol";
import OstaleTegobe from "./OstaleTegobe";
import SportskeOzljede from "./SportskeOzljede";
import TretmaniDjece from "./TretmaniDjece";

export const PAGES = {
  "bol-u-koljenima-i-stopalima": BolUKoljenimaIStopalima,
  "bol-u-kuku": BolUKuku,
  "bol-u-laktu-i-ruci": BolULaktuiRuci,
  "bol-u-ledjima": BolULedjima,
  "bol-u-vratu": BolUVratu,
  "bol-u-vratu-i-ramenu": BolUVratuIRamenu,
  "kronicna-bol": KronicnaBol,
  "ostale-tegobe": OstaleTegobe,
  "tretmani-djece": TretmaniDjece,
  "sportske-ozljede": SportskeOzljede,
} satisfies Record<keyof typeof STO_LIJECIMO, React.FC>;
