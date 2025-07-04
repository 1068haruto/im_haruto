"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import styles from "@/styles/sections/timeline.module.scss";

const timelineData = [
  {
    status: "開星高校",
    years: "2012-2015",
    details: ""
  },
  {
    status: "関西外国語大学",
    years: "2015-2020",
    details: ""
  },
  {
    status: "専門商社",
    years: "2020-2024",
    details: ""
  },
  {
    status: "プログラミングスクール「RUNTEQ」",
    years: "2024-2025",
    details: ""
  }
];

const Timeline: React.FC = () => {
  const ref = useRef(null);                                          // DOM要素への参照を保持するためのrefを作成
  const isInView = useInView(ref, { once: true });                   // 要素がビューポートに入ったかを監視するカスタムフックを使用し、一度だけtrueとする

  const lineVariants = {                                             // アニメーションのバリアント（状態）を定義するオブジェクト
    hidden: { height: 0 },                                           // 非表示時：高さを0
    visible: {                                                       // 表示時：
      height: "100%",                                                // 高さを100%
      transition: { duration: 2.4, ease: "easeInOut" }               // アニメーションの時間とイージング関数を設定
    }
  };
  
  const itemVariants = {                                             // タイムラインの各アイテムのアニメーションバリアントを定義
    hidden: { opacity: 0, y: 50 },                                   // 非表示時：透明、Yに50px移動）
    visible: (i: number) => ({                                       // 表示時（インデックスを受け取る関数）：
      opacity: 1,                                                    // 不透明に
      y: 0,                                                          // Y0に移動
      transition: { delay: i * 0.7, duration: 0.6, ease: "easeOut" } // アニメの遅延時間（インデックスに依存）、時間、イージング関数を設定
    })
  };

  return (
    <section id="timeline" className={`section-anchor-offset ${styles.timeline}`}>
      <SectionHeading className={styles["timeline-heading"]}>経歴</SectionHeading>
      <div className={styles["timeline-container"]} ref={ref}>
        {/* 縦ライン */}
        <motion.div
          className={styles["timeline-line"]}
          variants={lineVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        />
        {/* 各経歴 */}
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            className={styles["timeline-item"]}
            custom={index}
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className={styles["timeline-content"]}>
              <h3>
                <span className={styles.status}>{item.status}</span><br />
                <span className={styles.year}>{item.years}</span>
              </h3>
              <p className={styles.details}>{item.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
