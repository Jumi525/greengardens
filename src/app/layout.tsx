import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import FarmStateProvider from "@/lib/farmerProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Green garden",
  description:
    "Experience the purity of nature with our carefully selected organic foods. Grown without synthetic pesticides",
  openGraph: {
    title: "Green garden",
    description:
      "Experience the purity of nature with our carefully selected organic foods. Grown without synthetic pesticides",
    locale: "en_us",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FarmStateProvider>
          {children}
          <Toaster />
        </FarmStateProvider>
      </body>
    </html>
  );
}
