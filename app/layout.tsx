import type { Metadata } from "next";
import { inter } from "@/utils/fonts";
import Providers from "@/components/DarkLightMode/providers";
import { Navbar } from "@/components/Navbar";
import { ScrollToTop } from "@/components/ScrollToTop";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "DAV Tax — Professional Tax Preparation",
  description: "Affordable, professional tax preparation for individuals and small businesses. W-2, self-employed, and small business returns.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <Providers>
          <ScrollToTop />
          <div className="grid min-h-[100dvh] grid-rows-[auto_1fr_auto]">
            <Navbar />
            <main>{children}</main>
            <footer>Footer</footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
