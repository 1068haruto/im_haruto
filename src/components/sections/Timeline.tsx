"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import styles from "@/styles/sections/timeline.module.scss";

const timelineData = [
  {
    status: "開星高校",
    years: "2012-2015",
    details: "硬式テニス部に所属し、全国大会に2度出場しました。"
  },
  {
    status: "関西外国語大学",
    years: "2015-2020",
    details: "語学を中心に学びました。4年生時には休学し、オーストラリア シドニーのホテルにて、コンシェルジュとして3ヶ月間勤務しました。"
  },
  {
    status: "株式会社ドッドウエル ビー・エム・エス",
    years: "2020-2024",
    details: "主にマンションへ導入する防犯カメラシステムの新規開拓及びルート営業に4年間従事しました。"
  },
  {
    status: "現在",
    years: "2024-",
    details: "プログラミングスクール「RUNTEQ」にて、Ruby on Railsを中心にプログラミング学習を行いながら、SE転職を目指しています。"
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
                <span className={styles.statusText}>{item.status}</span><br />
                <span>{item.years}</span>
              </h3>
              <p>{item.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
