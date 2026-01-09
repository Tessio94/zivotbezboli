"use client";

import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const location = usePathname();

  return (
    <section className="bg-theme1/10">
      <div className="px-6 py-16 sm:px-10 sm:py-20 lg:px-18 lg:py-26">
        {location === "/" && (
          <h2 className="text-theme1 mb-15 text-5xl font-semibold">Kontakt</h2>
        )}
        <div className="flex w-full flex-col items-center justify-between gap-15 lg:h-160 lg:flex-row lg:gap-0">
          <div className="shadow-theme1/60 relative z-10 order-1 h-full rounded-2xl bg-[url(/zivotbezboli-background-nostroke-1920.png)] bg-cover bg-no-repeat p-5 shadow-lg sm:rounded-4xl sm:p-10 lg:order-2 lg:h-fit lg:w-[750px]">
            <div className="from-theme3/90 to-theme3/30 absolute inset-0 -z-10 rounded-2xl bg-linear-to-r sm:rounded-4xl" />
            <h2 className="font-playfair relative mb-15 text-4xl font-bold text-slate-100 after:absolute after:top-[105%] after:left-0 after:h-[5px] after:w-25 after:rounded-full after:bg-slate-100 after:content-['']">
              Pošaljite upit
            </h2>
            <form
              className="flex w-full flex-col gap-7 lg:gap-10"
              // onSubmit={onFormSubmitted}
            >
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
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
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
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
  );
};

export default Contact;
