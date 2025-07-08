import React from 'react';
import SectionHeading from "@/components/SectionHeading";
import styles from "@/styles/sections/blog.module.scss";

const Blog: React.FC = () => {
  return (
    <section id="blog" className={`section-anchor-offset ${styles.blog}`}>
      <SectionHeading className={styles['blog-heading']}>Blog</SectionHeading>
      <div>
        <p>現在、記事はありません。</p>
        {/* 今後、ここにブログ記事の一覧や詳細を表示するロジックを追加 */}
      </div>
    </section>
  );
};

export default Blog;