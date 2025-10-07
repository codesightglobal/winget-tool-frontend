import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

import Script from "next/script";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Intune Packager | Sistena Ltd",
  description: "",
  icons: {
    icon: "/favicon.png", // path from public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased font-sans`}>
        {children}

        <Script id="global-send-height" strategy="afterInteractive">
          {`
          function sendHeight() {
            const height = Math.max(
              document.body.scrollHeight,
              document.documentElement.scrollHeight
            );
            window.parent.postMessage({ height: height }, '*');
          }

          window.addEventListener('load', sendHeight);
          window.addEventListener('resize', sendHeight);
          // Call periodically if content changes dynamically
          setInterval(sendHeight, 500);
          `}
        </Script>
      </body>
    </html>
  );
}
