import React from "react";
import Image from "next/image";
import * as motion from "motion/react-client";

const Pregled = () => {
  return (
    <>
      <section>
        <div className="mx-auto px-6 py-16 sm:px-10 sm:py-20 lg:px-18 lg:py-26 xl:w-3/4">
          <div className="flex flex-col gap-8 sm:gap-10">
            <motion.h2
              className="text-theme1 text-3xl font-semibold sm:text-4xl"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Pregled – prvi dolazak- što vas očekuje
            </motion.h2>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Prvi pregled je{" "}
              <strong>prvi i najvažniji korak terapijskog procesa.</strong>
              Njegov cilj je razumjeti vaše tegobe, način na koji se vaše tijelo
              kreće i pronaći uzrok problema, a ne samo mjesto boli.
            </motion.p>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Već na prvom dolasku, osim procjene, provodi se i kraći terapijski
              tretman.
            </motion.p>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Kako izgleda prvi pregled?
            </motion.p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col lg:flex-row">
          <div className="overflow-hidden bg-none bg-cover bg-no-repeat max-lg:order-2 lg:w-1/2 lg:bg-[url(/slike/bez-boli-3-md.jpg)]">
            <Image
              className="block h-auto w-full lg:hidden"
              src="/slike/bez-boli-3-md.jpg"
              alt=""
              width={960}
              height={1080}
              sizes="(min-width: 1280px) 50vw, 100vw"
            />
          </div>
          <div className="bg-theme1/10 w-full px-6 py-16 sm:px-10 sm:py-20 lg:w-1/2 lg:px-18 lg:py-26">
            <motion.h2
              className="text-theme1 mb-15 text-5xl font-semibold"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Proces prvog pregleda
            </motion.h2>
            <div className="flex flex-col">
              <div className="flex flex-row items-start gap-3 pb-5">
                <div className="bg-theme4 after:bg-theme4 relative z-10 flex h-10 min-w-10 items-center justify-center rounded-full text-2xl font-semibold text-slate-100 after:absolute after:top-full after:left-1/2 after:h-80 after:w-1 after:-translate-x-1/2 after:content-[''] max-[550px]:after:h-105">
                  1
                </div>
                <div className="flex flex-col items-start gap-2">
                  <p className="text-theme4 text-2xl font-semibold">
                    Anamneza – razgovor
                  </p>
                  <p className="text-theme4 font-regular text-xl">
                    Pregled započinje razgovorom o:
                  </p>
                  <ul className="ml-5 list-disc">
                    <li>
                      <p className="text-theme4 font-regular text-xl">
                        vašim tegobama i simptomima
                      </p>
                    </li>
                    <li>
                      <p className="text-theme4 font-regular text-xl">
                        trajanju i razvoju problema
                      </p>
                    </li>
                    <li>
                      <p className="text-theme4 font-regular text-xl">
                        prijašnjim ozljedama ili operacijama
                      </p>
                    </li>
                    <li>
                      <p className="text-theme4 font-regular text-xl">
                        načinu života i tjelesnoj aktivnosti
                      </p>
                    </li>
                    <li>
                      <p className="text-theme4 font-regular text-xl">
                        postojećim medicinskim nalazima (ako ih imate)
                      </p>
                    </li>
                  </ul>
                  <p className="text-theme4 font-regular text-xl">
                    Ovaj dio pomaže stvoriti cjelovitu sliku vašeg stanja.
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden pb-5">
                <div className="flex flex-row items-start gap-3">
                  <div className="bg-theme4 after:bg-theme4 max- relative z-10 flex h-10 min-w-10 items-center justify-center rounded-full text-2xl font-semibold text-slate-100 after:absolute after:top-full after:left-1/2 after:h-95 after:w-1 after:-translate-x-1/2 after:content-[''] max-[450px]:after:h-135">
                    2
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <p className="text-theme4 text-2xl font-semibold">
                      Sveobuhvatna procjena tijela
                    </p>
                    <p className="text-theme4 font-regular text-xl">
                      Nakon anamneze slijedi detaljna procjena koja uključuje:
                    </p>
                    <ul className="ml-5 list-disc">
                      <li>
                        <p className="text-theme4 font-regular text-xl">
                          ortopedsku procjenu
                        </p>
                      </li>
                      <li>
                        <p className="text-theme4 font-regular text-xl">
                          osteopatsku procjenu
                        </p>
                      </li>
                      <li>
                        <p className="text-theme4 font-regular text-xl">
                          neurološku procjenu, uključujući PDTR procjenu
                        </p>
                      </li>
                    </ul>
                    <p className="text-theme4 font-regular text-xl">
                      Procjenjuje se pokretljivost, stabilnost, postura i
                      funkcija tijela u cjelini.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden">
                <div className="flex flex-row items-start gap-3">
                  <div className="bg-theme4 relative z-20 flex h-10 min-w-10 items-center justify-center rounded-full text-2xl font-semibold text-slate-100">
                    3
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <p className="text-theme4 text-2xl font-semibold">
                      Kraći tretman na prvom pregledu
                    </p>
                    <p className="text-theme4 font-regular text-xl">
                      Na temelju nalaza, procjene i testova, već na prvom
                      pregledu provodi se:
                    </p>
                    <ul className="ml-5 list-disc">
                      <li>
                        <p className="text-theme4 font-regular text-xl">
                          kraći manualni ili neurološki tretman
                        </p>
                      </li>
                      <li>
                        <p className="text-theme4 font-regular text-xl">
                          smanjenje napetosti i nelagode
                        </p>
                      </li>
                      <li>
                        <p className="text-theme4 font-regular text-xl">
                          poticanje boljeg i lakšeg kretanja
                        </p>
                      </li>
                    </ul>
                    <p className="text-theme4 font-regular text-xl">
                      Cilj je da s prvog pregleda odete s osjećajem olakšanja i
                      jasnog plana.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto px-6 py-16 sm:px-10 sm:py-20 lg:px-18 lg:py-26 xl:w-3/4">
          <div className="flex flex-col gap-8 sm:gap-10">
            <motion.h2
              className="text-theme1 text-3xl font-semibold sm:text-4xl"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Što obući za prvi pregled?
            </motion.h2>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Preporučuje se: udobna odjeća koja omogućuje slobodno kretanje
              trenirka, tajice, kratke hlače, majica
            </motion.p>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Udobnost pomaže kvalitetnijoj procjeni i tretmanu.
            </motion.p>
            <motion.p
              className="text-theme4 text-xl font-semibold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Prvi pregled – prvi korak prema rješenju
            </motion.p>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Prvi pregled osmišljen je kako biste se osjećali sigurno,
              informirano i zbrinuto.
            </motion.p>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              To je početak individualnog terapijskog procesa usmjerenog na
              bolje kretanje, manje boli i dugoročnu funkcionalnost.
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pregled;
