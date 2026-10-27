import type { Metadata } from "next";
import Script from "next/script";
import { Cormorant_Garamond, Gowun_Dodum } from "next/font/google";
import "./globals.css";
import ScrollReveal from "./ScrollReveal";

const cormorant = Cormorant_Garamond({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const gowunDodum = Gowun_Dodum({
  weight: "400",
  variable: "--font-gowun",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Dear By Pet",
  description: "Dear By Pet",
  other: {
    "naver-site-verification":
      "cfafdabd9d9cf00ecc4efa11b4cf854353e0cdeb",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${cormorant.variable} ${gowunDodum.variable}`}
    >
      <body>
        {children}
        <ScrollReveal />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7959GN0YBE"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7959GN0YBE');
          `}
        </Script>
      </body>
    </html>
  );
}