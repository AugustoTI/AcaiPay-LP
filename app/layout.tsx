import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "AçaíPay - Pagamentos rápidos, seguros e sem complicação",
  description:
    "A AçaíPay conecta sua empresa ao futuro dos pagamentos digitais. Pix, cartão e boleto em um só lugar.",
  generator: "NextJS",
  openGraph: {
    title: "AçaíPay - Pagamentos rápidos, seguros e sem complicação",
    description:
      "A AçaíPay conecta sua empresa ao futuro dos pagamentos digitais. Pix, cartão e boleto em um só lugar.",
    url: "https://acaipay.com",
    type: "website",
    images: [
      {
        url: "/acai-logo-bg.png",
        width: 1024,
        height: 1024,
        alt: "A AçaíPay conecta sua empresa ao futuro dos pagamentos digitais. Pix, cartão e boleto em um só lugar.",
      },
    ],
  },
};

const inter = Inter({
  display: "swap",
  style: "normal",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={cn("antialiased", inter.className)}>
      <body>{children}</body>
    </html>
  );
}
