import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section className="bg-theme1/10">
      <div className="flex">
        <div className="w-1/2 flex flex-col gap-10 px-6 py-15 sm:px-10 lg:px-18 lg:py-20">
          <h2 className="text-theme1 text-5xl font-semibold">O nama</h2>
          <p className="text-xl text-theme4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
            quod?
          </p>
          <p className="text-xl text-theme4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            consectetur unde nostrum neque iure porro repudiandae? Numquam
            facilis ut, quisquam minima similique, tempore, reprehenderit illum
            officiis tenetur veniam suscipit cumque recusandae inventore?
            Dolorem recusandae ea perferendis explicabo iure corrupti aliquam
            soluta similique. Molestiae incidunt culpa dolores unde dicta. Quos,
            minus.
          </p>
          <p className="text-xl text-theme4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            consectetur unde nostrum neque iure porro repudiandae? Numquam
            facilis ut, quisquam minima similique, tempore, reprehenderit illum
            officiis tenetur veniam suscipit cumque recusandae inventore?
            Dolorem recusandae ea perferendis explicabo iure corrupti aliquam
            soluta similique. Molestiae incidunt culpa dolores unde dicta. Quos,
            minus.
          </p>
          <Link
            href="/usluge/o-nama"
            className="flex items-center gap-6 bg-theme1 px-4 py-2 rounded-2xl text-lg text-slate-100 tracking-wider hover:bg-theme4 transition-all duration-300 w-fit"
          >
            Saznaj više
          </Link>
        </div>
        <div className="w-1/2">
          <Image
            src="/slike/bez-boli-5-md.jpg"
            alt=""
            width={960}
            height={960}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
