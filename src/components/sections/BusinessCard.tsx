"use client";
import React from "react";
import styles from "@/styles/sections/business_card.module.scss";
import Image from "next/image";

const Top: React.FC = () => {
  return (
    <section id="business_card" className={styles.top}>
      <div className={styles["business-card"]}>
        <div className={styles.basic}>
          <div className={styles["icon-wrapper"]}>
            <Image
              src="/icons/me.jpg"
              alt="自分のアイコン"
              className={styles.icon}
              width={150}
              height={150}
              priority  // 優先的にロード
            />
          </div>
          <div className={styles["text-group"]}>
            <div className={styles.occupation}>web engineer</div>
            <div className={styles.name}>春日 晴都</div>
            <div className={styles["name-en"]}>
              <span className={styles["last-name"]}>Kasuga</span>
              <span>Haruto</span>
            </div>
          </div>
        </div>
        <div className={styles.list}>
          <div>skill</div>
          <div>history</div>
          <div>blog</div>
        </div>
        <div>contact</div>
      </div>
    </section>
  );
};

export default Top;
