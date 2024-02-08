"use client";

import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["cyrillic"],
  display: "auto",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${montserrat.className} bg-background-light dark:bg-background-dark  min-h-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
