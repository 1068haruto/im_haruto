import "./globals.css";
import "@/styles/global.scss"; // SCSSのパス

export const metadata = {
  title: "im_haruto",
  description: "自己紹介ページ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="font-sans bg-white text-gray-800">
        <header className="bg-blue-600 text-white p-4 text-center text-xl font-bold">
          im_haruto
        </header>
        <main className="min-h-screen">{children}</main>
        <footer className="bg-gray-200 text-center p-2 text-sm">
          &copy; 2025 im_haruto
        </footer>
      </body>
    </html>
  );
}
