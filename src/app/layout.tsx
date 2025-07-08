import "@/styles/global.scss";
import type { Metadata } from "next";
import { ReactNode } from "react"; // 追加


export const metadata: Metadata = {
  title: "im_haruto",
  description: "名刺",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ja">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
