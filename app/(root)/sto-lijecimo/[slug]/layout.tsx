import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import * as motion from "motion/react-client";
import { STO_LIJECIMO } from "@/data/sto-lijecimo";

const Layout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: keyof typeof STO_LIJECIMO }>;
}) => {
  const { slug } = await params;

  const data = STO_LIJECIMO[slug];

  if (!data) notFound();

  return (
    <>
      <section id={slug}>
        <div className="relative">
          <div className="bg-theme4/70 absolute inset-0" />
          <div className="absolute top-1/2 right-1/2 flex translate-x-1/2 -translate-y-1/2 flex-col items-center gap-6">
            <motion.h1
              className="after:to-theme1 relative w-[90vw] text-center text-5xl font-bold text-slate-100 after:absolute after:top-[calc(100%+5px)] after:left-1/2 after:h-1 after:w-[20%] after:-translate-x-1/2 after:rounded-full after:bg-linear-to-r after:from-slate-100 after:content-[''] sm:text-6xl md:text-7xl lg:text-8xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {data.title}
            </motion.h1>
          </div>
          <div
            className="h-140 max-h-150 overflow-hidden bg-cover md:h-fit md:bg-none!"
            style={{
              background: `url(${data.image}) center / cover no-repeat`,
            }}
          >
            <Image
              className="hidden min-[1920px]:w-full md:block"
              src={data.image}
              alt={data.title}
              width={1920}
              height={300}
              preload={true}
            />
          </div>
        </div>
      </section>
      {children}
    </>
  );
};

export default Layout;
