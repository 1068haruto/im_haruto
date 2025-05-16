import React from "react";
import SectionHeading from "@/components/SectionHeading";
import styles from "@/styles/sections/selfintro.module.scss";
import Image from "next/image";

const SelfIntro: React.FC = () => {
  return (
    <section id="selfintro" className={`section-anchor-offset ${styles.selfintro}`}>
      <SectionHeading className={styles["selfintro-heading"]}>自己紹介</SectionHeading>
      <div className={styles["selfintro-container"]}>
        <div className={styles["selfintro-icon-wrapper"]}>
          <Image
            src="/icons/me.jpg"
            alt="自分のアイコン"
            className={styles["selfintro-icon"]}
            width={200}
            height={200}
            priority  // 優先的にロード
          />
        </div>
        <p className={styles["selfintro-name"]}>春日 晴都（かすが はると・28歳）</p>
        <div className={styles["selfintro-text"]}>
          <div className={styles["selfintro-item"]}>
            <h3>移住地</h3>
            <ul>
              <li>
                <p>島根（地元）▶︎大阪（大学）▶︎千葉（社会人）▶︎愛知（社会人）▶︎島根（現在）</p>
              </li>
            </ul>
          </div>
          <div className={styles["selfintro-item"]}>
            <h3>趣味</h3>
            <ul>
              <li>
                <strong>映画鑑賞</strong><br />
                ストーリー構成や撮り方、表情や言葉を深く考察することが好きです。
              </li>
              <li>
                <strong>散歩</strong><br />
                季節の変化や街の様子を感じながら、歩くことが好きです。
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelfIntro;
