// import Image from "next/image";
// Imageコンポーネントを使って画像を表示するまでコメントアウトとする

import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <main className="text-gray-600 text-center">

        <section id="top" className="min-h-screen">
          <h1 className="text-4xl font-bold mb-4">こんにちは、im_harutoです！</h1>
          <p className="text-lg mb-4">
            Webエンジニアとして成長中のim_harutoです。<br />
            Next.jsやTypeScript、Dockerを使った開発に取り組んでいます。
          </p>
        </section>

        <section id="self_intro" className="min-h-screen section-anchor-offset">
          <h2 className="text-3xl font-bold">自己紹介</h2>
          <p>ここに経歴を記述します。</p>
        </section>

        <section id="about" className="min-h-screen section-anchor-offset">
          <h2 className="text-3xl font-bold">経歴</h2>
          <p>ここに経歴を記述します。</p>
        </section>

        <section id="portfolio" className="min-h-screen section-anchor-offset">
          <h2 className="text-3xl font-bold">ポートフォリオ</h2>
          <p>ここにポートフォリオを記述します。</p>
          <a href="https://github.com/1068haruto" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
            GitHubを見る →
          </a>
        </section>

        <section id="contact" className="min-h-screen section-anchor-offset">
          <h2 className="text-3xl font-bold">お問い合わせ</h2>
          <p>ここに連絡先などを記述します。</p>
        </section>
      </main>
    </>
  );
};

export default Home;