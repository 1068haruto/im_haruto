"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "@/styles/sections/top.module.scss";

const Top: React.FC = () => {
  return (
    <section id="top" className={styles.top}>
      <motion.p
        className={styles.paragraph}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        自己紹介ページをご覧いただき、ありがとうございます。
      </motion.p>

      <motion.p
        className={styles.paragraph}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.7 }}
      >
        「下へスクロール」or「ヘッダーのリンク」より各紹介をご確認いただけます。
      </motion.p>

      <motion.a
        href="#selfintro"
        className={styles["scroll-indicator"]}
        initial={{ opacity: 0, y: -30 }}                              // 初期位置
        animate={{
          opacity: [0, 1, 1, 0],                                      // 透明 -> 表示 -> 表示維持 -> 透明
          y: [0, 15, 15, 0],                                          // 最初の位置 -> 下 -> 下維持 -> 最初の位置に戻る (透明な状態で)
        }}
        transition={{
          delay: 1.7,
          duration: 2.2,
          ease: "easeInOut",                                          // 始まりと終わりを滑らかに表示
          repeat: Infinity,                                           // 無限に繰り返す
          times: [0, 0.4, 0.8, 1],                                    /* 各キーフレームの割合 (0%から100%まで)
                                                                      アニメーションの特定のポイント（キーフレーム）が、アニメーションの総時間に対してどの割合で発生するかを指定*/
        }}
      >
        <span className={styles["arrow-down"]}></span>
      </motion.a>        
    </section>
  );
};

export default Top;
