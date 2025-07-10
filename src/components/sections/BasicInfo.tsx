import React from "react";
import SectionHeading from "@/components/SectionHeading";
import styles from "@/styles/sections/basic_info.module.scss";

const BasicInfo: React.FC = () => {
  return (
    <section id="basicInfo" className={`section-anchor-offset ${styles.basicInfo}`}>
      <SectionHeading className={styles["basicInfo-heading"]}>Basic Info</SectionHeading>
      <div className={styles["basicInfo-container"]}>

        {/* 移住地 */}
        <div className={styles["basicInfo-card"]}>
          <h3 className={styles["main-title"]}>移住地</h3>
          <div className={styles["content-group"]}>
            <div className={styles["sub-item"]}>
              <p className={styles["sub-title"]}>島根 ▶︎ 大阪 ▶︎ 千葉 ▶︎ 愛知 ▶︎ 島根 ▶︎ 東京</p>
            </div>
          </div>
        </div>

        {/* 趣味 */}
        <div className={styles["basicInfo-card"]}>
          <h3 className={styles["main-title"]}>趣味</h3>
          <div className={styles["content-group"]}>

            {/* 趣味① */}
            <div className={styles["sub-item"]}>
              <p className={styles["sub-title"]}>1. 映画 👀</p>
              <p>ストーリー構成、撮り方、表情、言葉を考察することが好きで、毎日何かしらの洋画を観ています。</p>
            </div>
            {/* 趣味② */}
            <div className={styles["sub-item"]}>
              <p className={styles["sub-title"]}>2. 散歩 🌿</p>
              <p>近場でも旅先でも、季節や街の様子を感じながら散策することが好きです。</p>
            </div>

          </div>      
        </div>

      </div>
    </section>
  );
};

export default BasicInfo;
