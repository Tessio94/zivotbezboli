"use client";

import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Toaster, toast } from "sonner";
import * as motion from "motion/react-client";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const location = usePathname();

  const onFormSubmitted = async (e: React.SubmitEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const form = e.currentTarget;
      const formData = new FormData(e.currentTarget);
      console.log(form);
      setLoading(true);
      const res = await fetch("/api/send-email", {
        method: "POST",
        cache: "no-cache",
        body: formData,
      });
      if (!res.ok) {
        if (res.status === 400) {
          const data = await res.json();
          const stringErr = data.error
            .flat()
            .map((err: string) => `• ${err}`)
            .join("<br>");
          throw new Error(stringErr);
        }

        throw new Error("Pogreška prilikom slanja zahtjeva!");
      }

      const result = await res.json();
      console.log("data", result);

      form.reset();
      setSuccess(true);
      setLoading(false);
      toast.success(result.message);
    } catch (err) {
      if (err instanceof Error) {
        setSuccess(false);
        setLoading(false);
        toast.error(<div dangerouslySetInnerHTML={{ __html: err.message }} />);
      }
    }
  };

  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            color: success ? "#22c55e" : "#ef4444",
            border: success ? "2px solid #22c55e" : "2px solid #ef4444",
          },
        }}
      />
      <section className="bg-theme1/10">
        <div className="px-6 py-16 sm:px-10 sm:py-20 lg:px-18 lg:py-26">
          {location === "/" && (
            <motion.h2
              className="text-theme1 mb-15 text-5xl font-semibold"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Kontakt
            </motion.h2>
          )}
          <div className="flex w-full flex-col items-center justify-between gap-15 lg:h-160 lg:flex-row lg:gap-0">
            <div className="shadow-theme1/60 relative z-10 order-1 h-full rounded-2xl bg-[url(/zivotbezboli-background-nostroke-1920.jpg)] bg-cover bg-no-repeat p-5 shadow-lg sm:rounded-4xl sm:p-10 lg:order-2 lg:h-fit lg:w-[750px]">
              <div className="from-theme3/90 to-theme3/30 absolute inset-0 -z-10 rounded-2xl bg-linear-to-r sm:rounded-4xl" />
              <h2 className="font-playfair relative mb-15 text-4xl font-bold text-slate-100 after:absolute after:top-[105%] after:left-0 after:h-[5px] after:w-25 after:rounded-full after:bg-slate-100 after:content-['']">
                Pošaljite upit
              </h2>
              <form
                className="flex w-full flex-col gap-7 lg:gap-10"
                onSubmit={onFormSubmitted}
              >
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  style={{ display: "none" }}
                />
                <div className="flex w-full items-center gap-4">
                  <div className="flex basis-1/2 flex-col items-start">
                    <label
                      htmlFor="name"
                      className="font-inter pb-1 pl-3 font-semibold text-slate-100"
                    >
                      Ime
                    </label>
                    <input
                      className="border-theme3 w-full rounded-xl border-2 bg-white px-3 py-2"
                      type="text"
                      id="name"
                      name="name"
                      required
                    />
                  </div>
                  <div className="flex basis-1/2 flex-col items-start">
                    <label
                      htmlFor="lastname"
                      className="font-inter pb-1 pl-3 font-semibold text-slate-100"
                    >
                      Prezime
                    </label>
                    <input
                      className="border-theme3 w-full rounded-xl border-2 bg-white px-3 py-2"
                      type="text"
                      id="lastname"
                      name="lastname"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <label
                    htmlFor="phone"
                    className="font-inter pb-1 pl-3 font-semibold text-slate-100"
                  >
                    Broj mobitela
                  </label>
                  <input
                    className="border-theme3 w-full rounded-xl border-2 bg-white px-3 py-2"
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                  />
                </div>
                <div className="flex flex-col items-start">
                  <label
                    htmlFor="email"
                    className="font-inter pb-1 pl-3 font-semibold text-slate-100"
                  >
                    Email
                  </label>
                  <input
                    className="border-theme3 w-full rounded-xl border-2 bg-white px-3 py-2"
                    type="email"
                    id="email"
                    name="email"
                    required
                  />
                </div>
                <div className="flex flex-col items-start">
                  <label
                    htmlFor="message"
                    className="font-inter pb-1 pl-3 font-semibold text-slate-100"
                  >
                    Poruka
                  </label>
                  <textarea
                    className="border-theme3 w-full rounded-xl border-2 bg-white px-3 py-2"
                    id="message"
                    name="message"
                    rows={4}
                    cols={50}
                    placeholder="Napišite vaš zahtjev ovdje..."
                    required
                  ></textarea>
                </div>
                <button
                  className="hover:bg-theme4 active:bg-theme1 focus:bg-theme1 border-theme1 bg-theme1 hover:shadow-theme3/40 mx-auto flex min-h-[68px] w-fit min-w-[247px] cursor-pointer flex-row items-center justify-center rounded-xl border-2 text-2xl font-bold text-slate-100 transition-all duration-500 hover:border-slate-100 hover:shadow-lg focus:shadow-lg active:shadow-lg"
                  type="submit"
                >
                  {loading ? (
                    <svg
                      className="size-6 animate-spin text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    "Pošalji"
                  )}
                </button>
              </form>
            </div>
            <div className="order-2 h-140 w-full grow overflow-hidden rounded-l-2xl rounded-r-2xl lg:order-1 lg:h-full lg:rounded-r-none">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.291771879492!2d16.009558876621167!3d45.805414710607224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d6343c76b6df%3A0xe34fcb9bf81f4897!2sUl.%20Charlesa%20Darwina%2010%2C%2010000%2C%20Zagreb!5e0!3m2!1shr!2shr!4v1767906124029!5m2!1shr!2shr"
                width="100%"
                height="100%"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
