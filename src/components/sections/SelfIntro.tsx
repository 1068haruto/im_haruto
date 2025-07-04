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
        <p className={styles["selfintro-name"]}>春日 晴都</p>
        <div className={styles["selfintro-text"]}>
          <div className={styles["selfintro-item"]}>
            <h3>移住地</h3>
            <ul>
              <li>
                <p>島根 ▶︎ 大阪 ▶︎ 千葉 ▶︎ 愛知 ▶︎ 島根 ▶︎ 東京</p>
              </li>
            </ul>
          </div>
          <div className={styles["selfintro-item"]}>
            <h3>趣味</h3>
            <ul>
              <li>
                <span className={styles["hobby-title"]}>映画鑑賞</span><br />
                ストーリー構成、撮り方、表情、言葉を深く考察することが好きです。
              </li>
              <li>
                <span className={styles["hobby-title"]}>散歩</span><br />
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
