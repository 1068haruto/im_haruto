import React from "react";

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="min-h-screen section-anchor-offset">
      <h2 className="text-3xl font-bold">ポートフォリオ</h2>
      <p>ここにポートフォリオを記述します。</p>
      <a href="https://github.com/1068haruto" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
        GitHubを見る →
      </a>
    </section>
  );
};

export default Portfolio;
