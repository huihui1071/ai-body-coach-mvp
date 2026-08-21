import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI体测教练端 MVP 原型",
  description: "普通会员跟进、AI专业分析与私教训练方案低保真原型",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
