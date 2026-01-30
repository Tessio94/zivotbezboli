import React from "react";
import Link from "next/link";
import * as motion from "motion/react-client";

const Intro = () => {
  return (
    <section>
      <div className="mx-auto px-6 py-16 sm:px-10 sm:py-20 lg:px-18 lg:py-26 xl:w-3/4">
        <div className="flex flex-col gap-8 sm:gap-10">
          <motion.h2
            className="text-theme1 text-3xl font-semibold sm:text-4xl"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Život bez boli – mjesto gdje počinje promjena
          </motion.h2>
          <motion.p
            className="text-theme4 text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <strong>Život Bez Boli</strong> je privatna ordinacija
            specijalizirana za dijagnostiku i tretman boli, disfunkcija pokreta
            i kroničnih tegoba koje često nemaju jasan uzrok na klasičnim
            nalazima.
          </motion.p>
          <motion.p
            className="text-theme4 text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Radimo s osobama koje se već dugo bore s bolovima, sportašima u
            rehabilitaciji, ali i svima koji žele bolje razumjeti svoje tijelo i
            ponovno se kretati bez straha i ograničenja.
          </motion.p>
          <motion.p
            className="text-theme4 text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Naš pristup temelji se na{" "}
            <strong>
              suvremenim znanjima iz fizioterapije, osteopatije i neuroloških
              metoda poput P-DTR® terapije,
            </strong>{" "}
            s ciljem rješavanja uzroka, a ne samo simptoma.
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Link
              href="/kontakt"
              className="bg-theme1 hover:bg-theme4 flex w-fit items-center gap-6 rounded-2xl px-4 py-2 text-lg tracking-wider text-slate-100 transition-all duration-300"
            >
              Kontaktiraj nas
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
