import Link from "next/link";
import React from "react";

const Intro = () => {
  return (
    <section>
      <div className="px-6 py-26 sm:px-10 lg:px-18 lg:py-42 flex flex-col items-center gap-5">
        <div className="flex flex-col gap-10  w-3/4">
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
      </div>
    </section>
  );
};

export default Intro;
