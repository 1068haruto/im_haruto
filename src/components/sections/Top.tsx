"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "@/styles/top.module.scss";

const Top: React.FC = () => {
  return (
    <section id="top" className={styles.top}>
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        こんにちは！
      </motion.h1>

      <motion.p
        className={styles.paragraph}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        春日晴都と申します。<br />
        自己紹介ページをご覧いただき、ありがとうございます。<br />
        現在、Webエンジニアリングの学習をしながら、SE転職を目指しています。<br />
      </motion.p>

      <motion.p
        className={styles.paragraph}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.7 }}
      >
        「下へスクロール」or「ヘッダーのリンク」より各紹介をご確認ください。<br />
      </motion.p>
    </section>
  );
};

export default Top;
