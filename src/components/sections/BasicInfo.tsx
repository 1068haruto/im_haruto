import React from "react";
import SectionHeading from "@/components/SectionHeading";
import styles from "@/styles/sections/basic_info.module.scss";

const BasicInfo: React.FC = () => {
  return (
    <section id="basicInfo" className={`section-anchor-offset ${styles.basicInfo}`}>
      <SectionHeading className={styles["basicInfo-heading"]}>Basic Info</SectionHeading>
      <div className={styles["basicInfo-container"]}>

        {/* 移住地のカード */}
        <div className={styles["basicInfo-card"]}>
          <h3 className={styles["main-title"]}>移住地</h3>
          <div className={styles["content-group"]}>
            <div className={styles["sub-item"]}>
              <p className={styles["sub-title"]}>島根 ▶︎ 大阪 ▶︎ 千葉 ▶︎ 愛知 ▶︎ 島根 ▶︎ 東京</p>
              <p>人が多いところが苦手なので、少ない時間帯と極秘ルートを常に探しています🥷</p>
            </div>
          </div>
        </div>

        {/* 趣味のカード */}
        <div className={styles["basicInfo-card"]}>
          <h3 className={styles["main-title"]}>趣味</h3>
          <div className={styles["content-group"]}>

            <div className={styles["sub-item"]}>
              <p className={styles["sub-title"]}>1. 映画をみる 👀</p>
              <p>ストーリー構成、撮り方、表情、言葉を深い考察が好きです。</p>
              <p>毎日何かしらの洋画を観ております。</p>
            </div>

            <div className={styles["sub-item"]}>
              <p className={styles["sub-title"]}>2. 散歩をする 👞</p>
              <p>季節の変化や街の様子を感じながらウォーキング、というおじいさんマインド保持者👴</p>
            </div>

            <div className={styles["sub-item"]}>
              <p className={styles["sub-title"]}>3. KPOPをみる、きく 🎧</p>
              <p>中学生時代から沼を抜け出せません。何歳までアイドルのLIVEに行くことが許されるのかという危機感から、許されるイケオジを目指します。</p>
            </div>

          </div>      
        </div>

      </div>
    </section>
  );
};

export default BasicInfo;
