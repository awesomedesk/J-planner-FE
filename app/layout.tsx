import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Main_layout from "@components/layouts/main/main_layout";
import ReduxProvider from "@utils/store/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "J's Planner",
  description: "Describe your specific world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <ReduxProvider>
          <Main_layout>
            {children}
          </Main_layout>
        </ReduxProvider>
      </body>
    </html>
  );
};
  
