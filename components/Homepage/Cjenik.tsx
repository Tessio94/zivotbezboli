import React from "react";
import * as motion from "motion/react-client";

const Cjenik = () => {
  return (
    <section>
      <div className="px-6 py-16 sm:px-10 sm:py-20 lg:px-18 lg:py-26">
        <motion.h2
          className="text-theme1 mb-15 text-5xl font-semibold"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Cjenik
        </motion.h2>
        <div className="grid items-stretch gap-10 lg:grid-cols-2 2xl:grid-cols-3">
          <div className="bg-theme1/10 border-theme1 rounded-2xl border-2 p-5 sm:p-8">
            <div className="bg-theme4/90 overflow-hidden rounded-2xl">
              <p className="bg-theme2 px-3 py-3 text-2xl font-semibold text-slate-100 sm:px-5 sm:py-5 lg:px-3 lg:py-3 2xl:px-5 2xl:py-5">
                Pregled/tretman
              </p>
              <div>
                <div className="flex flex-row">
                  <p className="border-theme2 grow border-b-2 px-3 py-3 text-xl text-slate-100 sm:px-5 sm:py-5 lg:px-3 lg:py-3 2xl:px-5 2xl:py-5">
                    Prvi pregled i tretman
                  </p>
                  <p className="border-theme2 flex min-w-23 shrink-0 items-center justify-center border-b-2 border-l-2 px-3 py-3 text-xl text-slate-100 sm:px-5 sm:py-5 lg:px-3 lg:py-3 2xl:px-5 2xl:py-5">
                    80 €
                  </p>
                </div>
                <div className="flex flex-row">
                  <p className="grow px-3 py-3 text-xl text-slate-100 sm:px-5 sm:py-5 lg:px-3 lg:py-3 2xl:px-5 2xl:py-5">
                    Paket pregled + 3 tretmana
                  </p>
                  <p className="border-theme2 flex min-w-23 shrink-0 items-center justify-center border-l-2 px-3 py-3 text-xl text-slate-100 sm:px-5 sm:py-5 lg:px-3 lg:py-3 2xl:px-5 2xl:py-5">
                    210 €
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-theme1/10 border-theme1 rounded-2xl border-2 p-5 sm:p-8">
            <div className="bg-theme4/90 overflow-hidden rounded-2xl">
              <p className="bg-theme2 px-3 py-3 text-2xl font-semibold text-slate-100 sm:px-5 sm:py-5 lg:px-3 lg:py-3 2xl:px-5 2xl:py-5">
                Terapijske vježbe
              </p>
              <div>
                <div className="flex flex-row">
                  <p className="border-theme2 grow border-b-2 px-3 py-3 text-xl text-slate-100 sm:px-5 sm:py-5 lg:px-3 lg:py-3 2xl:px-5 2xl:py-5">
                    Ciljane terapijske vježbe + podrška 1 mj
                  </p>
                  <p className="border-theme2 flex min-w-23 shrink-0 items-center justify-center border-b-2 border-l-2 px-3 py-3 text-xl text-slate-100 sm:px-5 sm:py-5 lg:px-3 lg:py-3 2xl:px-5 2xl:py-5">
                    100 €
                  </p>
                </div>
                <div className="flex flex-row">
                  <p className="grow px-3 py-3 text-xl text-slate-100 sm:px-5 sm:py-5 lg:px-3 lg:py-3 2xl:px-5 2xl:py-5">
                    Terapijske vježbe + pregled i 3 tretmana
                  </p>
                  <p className="border-theme2 flex min-w-23 shrink-0 items-center justify-center border-l-2 px-3 py-3 text-xl text-slate-100 sm:px-5 sm:py-5 lg:px-3 lg:py-3 2xl:px-5 2xl:py-5">
                    300 €
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-theme1/10 border-theme1 rounded-2xl border-2 p-5 sm:p-8">
            <div className="bg-theme4/90 overflow-hidden rounded-2xl">
              <p className="bg-theme2 px-3 py-3 text-2xl font-semibold text-slate-100 sm:px-5 sm:py-5 lg:px-3 lg:py-3 2xl:px-5 2xl:py-5">
                Terapijski trening
              </p>
              <div>
                <div className="flex flex-row">
                  <p className="border-theme2 grow border-b-2 px-3 py-3 text-xl text-slate-100 sm:px-5 sm:py-5 lg:px-3 lg:py-3 2xl:px-5 2xl:py-5">
                    8 treninga + plan prehrane + video materijal + skripta +
                    podrška
                  </p>
                  <p className="border-theme2 flex min-w-23 shrink-0 items-center justify-center border-b-2 border-l-2 px-3 py-3 text-xl text-slate-100 sm:px-5 sm:py-5 lg:px-3 lg:py-3 2xl:px-5 2xl:py-5">
                    40 €
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-theme4 mt-15 text-xl">
          *Za umirovljenike, studente, djecu do 18 godina cijena je za sve
          usluge <span className="font-semibold">10 € </span>manja.
        </p>
      </div>
    </section>
  );
};

export default Cjenik;
