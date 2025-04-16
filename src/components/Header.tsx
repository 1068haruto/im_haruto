import "@/styles/global.scss";

export default function Header() {
  return (
    <header>
      <nav>
        <a href="#" className="hover:underline">トップ</a>
        <a href="#self_intro" className="hover:underline">自己紹介</a>
        <a href="#about" className="hover:underline">経歴</a>
        <a href="#portfolio" className="hover:underline">ポートフォリオ</a>
        <a href="#contact" className="hover:underline">お問い合わせ</a>
      </nav>
    </header>
  );
}
