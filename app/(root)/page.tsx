import About from "@/components/Homepage/About";
import Banner from "@/components/Homepage/Banner";
import Carousel from "@/components/Homepage/Carousel";
import Cjenik from "@/components/Homepage/Cjenik";
import Contact from "@/components/Homepage/Contact";
import Intro from "@/components/Homepage/Intro";

import UslugeGrid from "@/components/Homepage/UslugeGrid";

export default function Home() {
  return (
    <div>
      <main>
        <Carousel />
        <Intro />
        <About />
        <Banner version="one" />
        <UslugeGrid />
        <Cjenik />
        <Contact />
      </main>
    </div>
  );
}
