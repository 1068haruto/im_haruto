import React from "react";

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <a href="#" className="hover:underline">トップ</a>
        <a href="#selfintro" className="hover:underline">自己紹介</a>
        <a href="#timeline" className="hover:underline">経歴</a>
        <a href="#portfolio" className="hover:underline">ポートフォリオ</a>
        <a href="#contact" className="hover:underline">お問い合わせ</a>
      </nav>
    </header>
  );
};

export default Header;