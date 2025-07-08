import React from 'react';
import SectionHeading from "@/components/SectionHeading";
import styles from "@/styles/sections/skill.module.scss";

const Skill: React.FC = () => {
  return (
    <section id="skill" className={`section-anchor-offset ${styles.skill}`}>
      <SectionHeading className={styles['skill-heading']}>Skill</SectionHeading>
      <div>
        <p>スキルについて記述予定。</p>
      </div>
    </section>
  );
};

export default Skill;