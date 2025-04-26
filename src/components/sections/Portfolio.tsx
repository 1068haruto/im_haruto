"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import "@/styles/portfolio.scss";

const apps = [
  {
    id: "scenapla",
    name: "Scenapla（シナプラ）",
    image: "/portfolio_scenapla.png",
    description: "経済シミュレーションとライフプランニングを支援するwebアプリケーションです。シンプルな情報入力から、現状や将来の経済状態を可視化し、今後の計画を記録することができます。",
    tech: {
      バックエンド: ["Ruby", "Ruby on Rails"],
      フロントエンド: ["HTML", "SCSS", "JavaScript", "Bootstrap"],
      データベース: ["PostgreSQL"],
      インフラ: ["Heroku"],
      開発環境: ["Docker"],
      バージョン管理: ["Git"],
      CI_CD: ["GitHub Actions"],
      外部API: ["GNews API", "OpenAI API"],
    },
    github: "https://github.com/1068haruto/scenapla",
    site: "https://scenapla.com/",
    icon: "/icons/scenapla.png",
  },
  {
    id: "imharuto",
    name: "自己紹介ページ",
    image: "/portfolio_imharuto.png",
    description: "今、ご確認いただいている、私の自己紹介ページです。",
    tech: {
      フロントエンド: ["TypeScript", "React", "Next.js", "SCSS", "Tailwind CSS"],
      バックエンド: ["Next.js（API Routes）"],
      インフラ: ["Vercel"],
      開発環境: ["Docker"],
      バージョン管理: ["Git"],
    },
    github: "https://github.com/1068haruto/im_haruto",
    site: "https://im-haruto.vercel.app/",
    icon: "/icons/im_haruto.png",
  },
];

const Portfolio: React.FC = () => {
  const [hoveredAppId, setHoveredAppId] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (id: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredAppId(id);
    setVisible(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setVisible(false);
    }, 7000);
  };

  const handleDetailEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setVisible(true);
  };

  const handleDetailLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setVisible(false);
    }, 7000);
  };

  const hoveredApp = apps.find((app) => app.id === hoveredAppId);

  return (
    <section id="portfolio" className="section-anchor-offset portfolio">
      <h2 className="portfolio-heading">ポートフォリオ</h2>

      <div className="app-container">
        {apps.map((app) => (
          <div key={app.id} onMouseEnter={() => handleMouseEnter(app.id)} onMouseLeave={handleMouseLeave}>
            <Image src={app.image} alt={app.name} width={400} height={300} className="app-image" />
          </div>
        ))}
      </div>

      <div
        className={`app-detail-wrapper ${visible ? "show" : "hide"}`}
        onMouseEnter={handleDetailEnter}
        onMouseLeave={handleDetailLeave}
      >
        {hoveredApp && (
          <div className="app-detail">
            <h3 className="app-detail-title">{hoveredApp.name}</h3>
            <p className="app-detail-description">{hoveredApp.description}</p>
            <div className="link-icons">
              {hoveredApp.site && (
                <a href={hoveredApp.site} target="_blank" rel="noopener noreferrer" className="link-icon">
                  <img src={hoveredApp.icon} alt="App Link" width={20} height={20} />
                  <span>アプリを見る</span>
                </a>
              )}
              {hoveredApp.github && (
                <a href={hoveredApp.github} target="_blank" rel="noopener noreferrer" className="link-icon">
                  <img src="/icons/github.svg" alt="GitHub Link" width={20} height={20} />
                  <span>GitHub</span>
                </a>
              )}
            </div>

            <table className="tech-table">
              <thead>
                <tr>
                  <th>カテゴリ</th>
                  <th>内容</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(hoveredApp.tech).map(([category, items]) => (
                  <tr key={category}>
                    <td>{category}</td>
                    <td>{(items as string[]).join(", ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
