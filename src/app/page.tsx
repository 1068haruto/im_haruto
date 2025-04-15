// Imageコンポーネントを使って画像を表示するまでコメントアウトとする
// import Image from "next/image";

export default function Home() {
  return (
    <main className="p-8 text-center">
      <h1 className="text-4xl font-bold text-gray-600 mb-4">こんにちは、im_harutoです！</h1>
      <p className="text-lg text-gray-600 mb-4">
        Webエンジニアとして成長中のim_harutoです。<br />
        Next.jsやTypeScript、Dockerを使った開発に取り組んでいます。
      </p>
      <a href="https://github.com/1068haruto" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
        GitHubを見る →
      </a>
    </main>
  );
}
