// import Image from "next/image";
// Imageコンポーネントを使って画像を表示するまでコメントアウトとする

import React from "react";
import Top from "@/components/sections/Top";
import SelfIntro from "@/components/sections/SelfIntro";
import Timeline from "@/components/sections/Timeline";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";

const Home: React.FC = () => {
  return (
    <main className="text-gray-600 text-center">
      <Top />
      <SelfIntro />
      <Timeline />
      <Portfolio />
      <Contact />
    </main>
  );
};

export default Home;
