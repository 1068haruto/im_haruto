import React from "react";
import Image from "next/image";
import "@/styles/selfintro.scss";

const SelfIntro: React.FC = () => {
  return (
    <section id="selfintro" className="min-h-screen section-anchor-offset selfintro">
      <h2 className="selfintro-heading">自己紹介</h2>
      <div className="selfintro-content">
        <div className="selfintro-image-wrapper">
          <Image src="/selfintro_sample.png" alt="プロフィール写真" width={400} height={500} className="selfintro-image"/>
        </div>
        <div className="selfintro-text">
          <div className="selfintro-item">
            <h3>名前</h3>
            <p>春日 晴都（かすが はると・28歳）</p>
          </div>
          <div className="selfintro-item">
            <h3>移住地</h3>
            <p>島根（地元）→ 大阪（大学）→ 千葉（社会人）→ 愛知（社会人）→ 島根（現在）</p>
          </div>
          <div className="selfintro-item">
            <h3>趣味</h3>
            <ul>
              <li>
                <strong>映画鑑賞</strong><br />
                ストーリー構成や撮り方、キャストの表情や言葉を深く考察することが好きです。
              </li>
              <li>
                <strong>散歩</strong><br />
                季節の移り変わりや街の様子を感じながら、ウォーキングをしています。
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelfIntro;