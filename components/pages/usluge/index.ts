import { USLUGE } from "@/data/usluge";
import Pregled from "./Pregled";
import Osteopatija from "./Osteopatija";
import Pdtr from "./Pdtr";
import ManualnaFizioterapija from "./ManualnaFizioterapija";
import TerapijskeVjezbe from "./TerapijskeVjezbe";
import TerapijskiTrening from "./TerapijskiTrening";

export const PAGES = {
  pregled: Pregled,
  osteopatija: Osteopatija,
  "p-dtr": Pdtr,
  "manualna-fizioterapija": ManualnaFizioterapija,
  "terapijske-vjezbe": TerapijskeVjezbe,
  "terapijski-trening": TerapijskiTrening,
} satisfies Record<keyof typeof USLUGE, React.FC>;
