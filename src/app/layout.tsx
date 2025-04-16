import "./globals.css";
import "@/styles/global.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "im_haruto",
  description: "自己紹介ページ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
