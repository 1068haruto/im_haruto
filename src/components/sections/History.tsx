"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import styles from "@/styles/sections/history.module.scss";

const historyData = [
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
    details: "Sales"
  },
  {
    status: "プログラミングスクール RUNTEQ",
    years: "2024-2025",
    details: ""
  },
  {
    status: "自社開発企業",
    years: "2025-",
    details: "Engineer"
  }
];

const History: React.FC = () => {

  const ref = useRef(null);

  // 要素がviewportに入ったかを監視し、一度だけtrueに
  const isInView = useInView(ref, { once: true });

  // 縦ラインのバリアント
  // 非表示時：高さを0
  // 表示時　：高さを100%
  const lineVariants = {
    hidden: { height: 0 },
    visible: {                                                      
      height: "100%",
      transition: { duration: 2.5, ease: "easeInOut" }
    }
  };

  // 各経歴のバリアント
  // 非表示時：透明、yに50px移動
  // 表示時　：不透明に、y0に移動
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.5, duration: 0.5, ease: "easeOut" }  // 遅延時間(受け取ったindex * 0.5)、期間、イージング関数
    })
  };

  return (
    <section id="history" className={`section-anchor-offset ${styles.history}`}>
      <SectionHeading className={styles["history-heading"]}>history</SectionHeading>
      <div className={styles["history-container"]} ref={ref}>

        {/* 縦ライン */}
        <motion.div
          className={styles["history-line"]}
          variants={lineVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        />

        {/* 各経歴 */}
        {historyData.map((item, index) => (
          <motion.div
            key={index}
            className={styles["history-item"]}
            custom={index}
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className={styles["history-content"]}>
              <span className={styles.year}>{item.years}</span>
              <div className={styles["text-group"]}>
                <span className={styles.status}>{item.status}</span>
                <span className={styles.details}>{item.details}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default History;