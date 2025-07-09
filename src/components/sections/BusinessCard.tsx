"use client";
import React, { useState } from "react";
import styles from "@/styles/sections/business_card.module.scss";
import Image from "next/image";
import BasicInfo from "@/components/sections/BasicInfo";
import Skill from "@/components/sections/Skill";
import Timeline from "@/components/sections/History";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";

const BusinessCard: React.FC = () => {

  // skill, history, blog, contact, or null(非表示状態)
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // 指定されたsectionが表示中 → 非表示にする
  // 指定されたsectionが非表示 → 表示する
  const handleSectionClick = (sectionName: string) => {
    setActiveSection(activeSection === sectionName ? null : sectionName);
  };

  const isSectionActive = (sectionName: string) => activeSection === sectionName;

  return (
    <section id="business_card" className={`${styles.top} ${activeSection ? styles.active : ''}`}>
      <div className={`${styles["business-card"]} ${activeSection ? styles['business-card-moved'] : ''}`}>
        <div className={styles.basic}>
          <div
            className={styles["icon-wrapper"]}
            onClick={() => handleSectionClick('BasicInfo')}
            style={{ cursor: 'pointer' }}
          >
            <Image
              src="/icons/me.jpg"
              alt="自分のアイコン"
              className={styles.icon}
              width={150}
              height={150}
              priority
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

        {/* activeSectionを指定したセクション(BasicInfo, skill, timeline, blog, contactのいずれか)に設定 */}
        <div className={styles.list}>
          <div onClick={() => handleSectionClick('skill')} style={{ cursor: 'pointer' }}>skill</div>
          <div onClick={() => handleSectionClick('timeline')} style={{ cursor: 'pointer' }}>history</div>
          <div onClick={() => handleSectionClick('blog')} style={{ cursor: 'pointer' }}>blog</div>
        </div>
        <div onClick={() => handleSectionClick('contact')} style={{ cursor: 'pointer' }}>contact</div>
      </div>

      {/* activeSectionに応じてコンポーネントを条件付きで表示 */}
      {isSectionActive('BasicInfo') && (
        <div className={`${styles["section-container"]} ${styles['section-container-active']}`}>
          <BasicInfo />
        </div>
      )}
      {isSectionActive('skill') && (
        <div className={`${styles["section-container"]} ${styles['section-container-active']}`}>
          <Skill />
        </div>
      )}
      {isSectionActive('timeline') && (
        <div className={`${styles["section-container"]} ${styles['section-container-active']}`}>
          <Timeline />
        </div>
      )}
      {isSectionActive('blog') && (
        <div className={`${styles["section-container"]} ${styles['section-container-active']}`}>
          <Blog />
        </div>
      )}
      {isSectionActive('contact') && (
        <div className={`${styles["section-container"]} ${styles['section-container-active']}`}>
          <Contact />
        </div>
      )}
    </section>
  );
};

export default BusinessCard;