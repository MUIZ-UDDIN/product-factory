import type { Metadata } from "next";
import {
  DM_Sans,
  Geist,
  Geist_Mono,
  Instrument_Serif,
  Inter,
  Playfair_Display,
  Work_Sans,
} from "next/font/google";
import "./globals.css";
import "./starbiz.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

/* Product 3 (Starbiz) — fonts are self-hosted in public/fonts and declared
   in starbiz.css ("SB Bebas Neue" / "SB Barlow"). next/font is deliberately
   NOT used here: its build-time download of Bebas Neue was persistently
   corrupted on this machine (wrong narrow glyphs → wrong headline wrap).
   See the note at the top of app/starbiz.css. */

export const metadata: Metadata = {
  title: "Muiz Product Factory",
  description: "One shell, ten products. Registry-driven MVPs with a theme engine.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} ${workSans.variable} ${playfair.variable} ${inter.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
