import React from "react";
import Image from "next/image";
import * as motion from "motion/react-client";

const page = () => {
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
              Što je osteopatija?
            </motion.h2>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <strong>
                Osteopatija je cjelovit, holistički pristup zdravlju
              </strong>{" "}
              koji se temelji na razumijevanju međusobne povezanosti strukture i
              funkcije ljudskog tijela.
            </motion.p>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Polazi od ideje da tijelo posjeduje prirodnu sposobnost
              samoizlječenja te da pravilna ravnoteža mišićno-koštanog,
              živčanog, krvožilnog i visceralnog sustava omogućuje{" "}
              <strong>optimalno zdravlje.</strong>
            </motion.p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col lg:flex-row">
          <div className="2xl:bg-position-[0% 50%] overflow-hidden bg-none bg-cover bg-no-repeat max-2xl:bg-position-[20%] max-lg:order-2 lg:w-1/2 lg:bg-[url(/slike/bez-boli-2-md.jpg)]">
            <Image
              className="block h-auto w-full lg:hidden"
              src="/slike/bez-boli-2-md.jpg"
              alt=""
              width={960}
              height={1080}
              sizes="(min-width: 1280px) 50vw, 100vw"
            />
          </div>

          <div className="bg-theme1/10 flex flex-col gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:w-1/2 lg:px-18 lg:py-26 xl:min-h-186 xl:gap-8 2xl:gap-10">
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Osteopatija se koristi manualnim tehnikama za procjenu i tretman
              funkcionalnih poremećaja u tijelu, s ciljem poticanja prirodnih
              mehanizama ozdravljenja, poboljšanja pokretljivosti tkiva i
              normalizacije tjelesnih funkcija. Povijesni razvoj osteopatije.
            </motion.p>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Osteopatiju je krajem 19. stoljeća utemeljio Andrew Taylor Still,
              američki liječnik koji je tražio učinkovitiji i prirodniji pristup
              liječenju bolesti. Smatrao je da se mnogi zdravstveni problemi
              razvijaju zbog poremećaja u strukturi tijela, što dovodi do
              smanjene cirkulacije, iritacije živčanog sustava i slabije
              funkcije organa.
            </motion.p>

            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Njegova filozofija postavila je temelje suvremene osteopatije,
              koja se danas primjenjuje diljem svijeta kao priznata zdravstvena
              disciplina.
            </motion.p>
          </div>
        </div>
      </section>
      <section>
        <div className="px-6 py-16 sm:px-10 sm:py-20 lg:px-18 lg:py-26">
          <motion.h2
            className="text-theme1 mb-15 text-5xl font-semibold"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Temeljni principi osteopatije
          </motion.h2>
          <motion.p
            className="text-theme4 mb-15 text-2xl font-semibold"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Osteopatija se zasniva na četiri osnovna principa:
          </motion.p>
          <div className="grid items-stretch gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            <motion.div
              className="bg-theme1/20 border-theme1 hover:bg-theme1/30 shadow-theme4/30 flex flex-col items-center gap-4 rounded-2xl border-2 p-8 shadow-lg transition-all duration-300 max-[400px]:p-4"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="text-theme4 text-center text-2xl font-semibold">
                Tijelo je jedinstvena cjelina
              </p>
              <p className="text-theme4 text-xl">
                Ljudsko tijelo funkcionira kao nerazdvojiva cjelina u kojoj su
                tijelo, um i emocije međusobno povezani. Poremećaj u jednom
                dijelu može imati posljedice na cijeli organizam.
              </p>
            </motion.div>
            <motion.div
              className="bg-theme1/20 border-theme1 hover:bg-theme1/30 shadow-theme4/30 flex flex-col items-center gap-4 rounded-2xl border-2 p-8 shadow-lg transition-all duration-300 max-[400px]:p-4"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="text-theme4 text-center text-2xl font-semibold">
                Struktura i funkcija su međusobno povezane
              </p>
              <p className="text-theme4 text-xl">
                Način na koji su kosti, mišići, fascije i organi organizirani
                izravno utječe na njihovu funkciju. Kada je struktura narušena
                (npr. smanjena pokretljivost zgloba ili tkiva), funkcija tog
                područja i povezanih sustava može biti ograničena.
              </p>
            </motion.div>
            <motion.div
              className="bg-theme1/20 border-theme1 hover:bg-theme1/30 shadow-theme4/30 flex flex-col items-center gap-4 rounded-2xl border-2 p-8 shadow-lg transition-all duration-300 max-[400px]:p-4"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="text-theme4 text-center text-2xl font-semibold">
                Tijelo posjeduje sposobnost samoizlječenja
              </p>
              <p className="text-theme4 text-xl">
                Osteopatija ne „liječi“ bolest, već uklanja prepreke koje
                sprječavaju tijelo da se samo regulira i oporavi. Kada se
                poboljša cirkulacija, živčana komunikacija i pokretljivost
                tkiva, tijelo aktivira vlastite mehanizme ozdravljenja.
              </p>
            </motion.div>
            <motion.div
              className="bg-theme1/20 border-theme1 hover:bg-theme1/30 shadow-theme4/30 flex flex-col items-center gap-4 rounded-2xl border-2 p-8 shadow-lg transition-all duration-300 max-[400px]:p-4"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="text-theme4 text-center text-2xl font-semibold">
                Racionalan tretman temelji se na razumijevanju ovih principa
              </p>
              <p className="text-theme4 text-xl">
                Osteopatski tretman prilagođen je svakoj osobi individualno,
                uzimajući u obzir njezinu povijest, držanje, način života i opće
                zdravstveno stanje.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="bg-theme1/10">
        <div className="mx-auto px-6 py-16 sm:px-10 sm:py-20 lg:px-18 lg:py-26 xl:w-3/4">
          <div className="flex flex-col gap-8 sm:gap-10">
            <motion.h2
              className="text-theme1 text-3xl font-semibold sm:text-4xl"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Osteopatski pristup tijelu
            </motion.h2>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <strong>
                Osteopatija je cjelovit, holistički pristup zdravlju
              </strong>{" "}
              koji se temelji na razumijevanju međusobne povezanosti strukture i
              funkcije ljudskog tijela.
            </motion.p>
            <div className="grid items-stretch gap-10 md:grid-cols-2 xl:grid-cols-3">
              <motion.div
                className="bg-theme1/20 border-theme1 hover:bg-theme1/30 shadow-theme4/30 flex flex-col gap-4 rounded-2xl border-2 p-8 shadow-lg transition-all duration-300 max-[400px]:p-4"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <p className="text-theme4 text-center text-2xl font-semibold">
                  Parijetalni sustav
                </p>

                <ul className="ml-5 list-disc">
                  <li>
                    <p className="text-theme4 text-xl">mišići</p>
                  </li>
                  <li>
                    <p className="text-theme4 text-xl">kosti</p>
                  </li>
                  <li>
                    <p className="text-theme4 text-xl">zglobovi</p>
                  </li>
                  <li>
                    <p className="text-theme4 text-xl">fascija</p>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                className="bg-theme1/20 border-theme1 hover:bg-theme1/30 shadow-theme4/30 flex flex-col gap-4 rounded-2xl border-2 p-8 shadow-lg transition-all duration-300 max-[400px]:p-4"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <p className="text-theme4 text-center text-2xl font-semibold">
                  Visceralni sustav
                </p>

                <ul className="ml-5 list-disc">
                  <li>
                    <p className="text-theme4 text-xl">
                      unutarnji organi i njihove veze
                    </p>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                className="bg-theme1/20 border-theme1 hover:bg-theme1/30 shadow-theme4/30 flex flex-col gap-4 rounded-2xl border-2 p-8 shadow-lg transition-all duration-300 max-[400px]:p-4"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <p className="text-theme4 text-center text-2xl font-semibold">
                  Kranijalni sustav
                </p>

                <ul className="ml-5 list-disc">
                  <li>
                    <p className="text-theme4 text-xl">lubanja,</p>
                  </li>
                  <li>
                    <p className="text-theme4 text-xl">kralježnica,</p>
                  </li>
                  <li>
                    <p className="text-theme4 text-xl">
                      cerebrospinalna tekućina
                    </p>
                  </li>
                  <li>
                    <p className="text-theme4 text-xl">živčani sustav</p>
                  </li>
                </ul>
              </motion.div>
            </div>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 1, delay: 1 },
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Disbalans u bilo kojem od ovih sustava može se odraziti na cijelo
              tijelo, zbog čega osteopat traži uzrok problema, a ne samo
              simptome.
            </motion.p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:w-1/2 lg:px-18 lg:py-26 xl:gap-8 2xl:gap-10">
            <motion.h2
              className="text-theme1 text-3xl font-semibold sm:text-4xl"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Cilj osteopatije
            </motion.h2>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Cilj osteopatije je uspostaviti optimalnu ravnotežu u tijelu,
              poboljšati kvalitetu pokreta, smanjiti napetosti i potaknuti
              prirodno zdravlje.
            </motion.p>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Osteopatija se često koristi kao preventivni pristup, ali i kao
              podrška kod akutnih i kroničnih stanja.
            </motion.p>

            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Njegova filozofija postavila je temelje suvremene osteopatije,
              koja se danas primjenjuje diljem svijeta kao priznata zdravstvena
              disciplina.
            </motion.p>
          </div>

          <div className="bg-theme1/10 flex flex-col gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:w-1/2 lg:px-18 lg:py-26 xl:gap-8 2xl:gap-10">
            <motion.h2
              className="text-theme1 text-3xl font-semibold sm:text-4xl"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Za koga je osteopatija?
            </motion.h2>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Osteopatija je prikladna za:
            </motion.p>
            <ul className="ml-5 list-disc">
              <li>
                <p className="text-theme4 text-xl">
                  osobe s bolovima u leđima, vratu i zglobovima
                </p>
              </li>
              <li>
                <p className="text-theme4 text-xl">
                  osobe pod stresom i napetošću
                </p>
              </li>
              <li>
                <p className="text-theme4 text-xl">
                  osobe s kroničnim tegobama
                </p>
              </li>
              <li>
                <p className="text-theme4 text-xl">sportaše i rekreativce</p>
              </li>
              <li>
                <p className="text-theme4 text-xl">
                  osobe koje žele preventivno brinuti o svom zdravlju
                </p>
              </li>
            </ul>
            <motion.p
              className="text-theme4 text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Tretmani su sigurni i prilagođeni svim dobnim skupinama.
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
