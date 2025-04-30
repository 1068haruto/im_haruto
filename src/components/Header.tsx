'use client';
import React, { useEffect, useState } from "react";                           // useEffect：副作用、useStat：状態管理
import styles from "@/styles/header.module.scss";

const sections = ["top", "selfintro", "timeline", "portfolio", "contact"];

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("top");          // 初期状態は"top"に設定。activeSection：現在のセクションのIDの保持、setActiveSection：その状態を更新

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;         // 現在のスクロール位置に、画面高さの半分を加算し、画面中央の要素をアクティブと判定

      let current = "top";
      for (const id of sections) {
        const el = document.getElementById(id);                               // 対応するIDを持つDOM要素を取得
        if (el) {
          const offsetTop = el.offsetTop;                                     // 要素の先頭からのオフセット位置（上端までの距離）を取得
          if (scrollPosition >= offsetTop) {                                  // スクロール位置が要素のオフセット位置よりも下にある場合、その要素のIDをcurrentに設定。（一番最後に条件を満たす要素がアクティブ）
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);                         // スクロールイベントが発生するたびにhandleScroll関数を実行
    handleScroll();                                                          // 初回実行（ンポーネントがマウントされた直後にもhandleScrollを実行し、初期のアクティブなセクションを設定）

    return () => {
      window.removeEventListener("scroll", handleScroll);                    // コンポーネントがアンマウントされる際に、登録したスクロールイベントリスナーを解除（メモリリークを防ぐため）
    };
  }, []);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {sections.map((id) => (
          <a
            key={id}
            href={`#${id === "top" ? "" : id}`}
            className={`${styles.navItem} ${activeSection === id ? styles.active : ""}`}  // 常にnavItemスタイルを適用し、アクティブなセクションとリンクのIDが一致する場合は、追加でactiveスタイルを適用
          >
            {id === "top" && "トップ"}
            {id === "selfintro" && "自己紹介"}
            {id === "timeline" && "経歴"}
            {id === "portfolio" && "ポートフォリオ"}
            {id === "contact" && "お問い合わせ"}
            {activeSection === id && <span className={styles.dot}></span>}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;