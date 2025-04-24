import React from "react";
import "@/styles/top.scss";

const Top: React.FC = () => {
  return (
    <section id="top" className="top">
      <h1 className="text-4xl font-bold mb-20">こんにちは！</h1>
      <p className="text-lg mb-10">
        春日晴都と申します。<br />
        自己紹介ページをご覧いただき、ありがとうございます。<br />
        現在、Webエンジニアリングの学習をしながら、SE転職を目指しています。<br />
      </p>
      <p className="text-lg mb-10">
        「下へスクロール」or「ヘッダーのリンク」より各紹介をご確認ください。<br />
      </p>
    </section>
  );
};

export default Top;
