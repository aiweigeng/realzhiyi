import type { Metadata } from "next";

import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Real · 直一",
    template: "%s | Real · 直一"
  },
  description: "Aiwei 的个人网站，记录思考、写作、AI 实践与长期项目构建。",
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
