"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

interface SectionHeadingProps {                                                            // SectionHeadingコンポーネントのPropsの型定義
  children: React.ReactNode;                                                               // 子要素の型
  className?: string;                                                                      // クラス名の型（省略可能）
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ children, className = "" }) => {
  const controls = useAnimation();                                                         // アニメーション制御のためのインスタンスを作成
  const ref = useRef<HTMLHeadingElement | null>(null);                                     // h2要素への参照を作成

  useEffect(() => {                                                                        // 副作用を実行するReact Hook
    const observer = new IntersectionObserver(                                             // Intersection Observer APIのインスタンスを作成
      ([entry]) => {                                                                       // コールバック関数：監視要素の状態変化を受け取る
        if (entry.isIntersecting) {                                                        // 要素がviewportに入ったかどうかをチェック
          controls.start("visible");                                                       // アニメーション"visible"を開始
          observer.disconnect();                                                           // 監視を停止（一度だけのアニメーションのため）
        }
      },
      { threshold: 0.6 }                                                                   // 監視要素の60%がviewportに入ったら発火
    );
  
    if (ref.current) {                                                                     // refオブジェクトに要素が設定されていれば、その要素の監視を開始
      observer.observe(ref.current);
    }
  
    return () => observer.disconnect();                                                    // クリーンアップ関数：コンポーネントアンマウント時に監視を停止
  }, [controls]);                                                                          // controls変数が変更された場合にuseEffectを再実行

  return (
    <motion.h2                                                                             // framer-motionのmotionコンポーネントを適用したh2要素
      ref={ref}                                                                            // h2要素への参照を設定
      className={className}                                                                // propsで渡されたクラス名を適用
      initial="hidden"                                                                     // 初期アニメーションの状態を"hidden"に設定
      animate={controls}                                                                   // 現在のアニメーションの状態をcontrolsにバインド
      variants={{                                                                          // アニメーションのバリアント（状態定義）
        hidden: { opacity: 0, y: 30 },                                                     // hidden状態：透明度0、Y軸方向に20px下
        visible: {                                                                         // visible状態
          opacity: 1,                                                                      // 透明度1
          y: 0,                                                                            // Y軸方向0px
          transition: { duration: 2, ease: "easeOut" },                                    // アニメーションのdurationとeasingを設定
        },
      }}
    >
      {children}
    </motion.h2>
  );
};

export default SectionHeading;
