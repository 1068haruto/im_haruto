import React from "react";
import Top from "@/components/sections/Top";
import SelfIntro from "@/components/sections/SelfIntro";
import Timeline from "@/components/sections/Timeline";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";

const Home: React.FC = () => {
  return (
    <main>
      <Top />
      <SelfIntro />
      <Timeline />
      <Portfolio />
      <Contact />
    </main>
  );
};

export default Home;
