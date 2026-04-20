import type { Metadata, Viewport } from "next";
import { Archivo, Instrument_Serif, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vatsa Joshi — Building agentic systems",
  description:
    "Full-stack engineer working on agentic systems, RAG, and LLM fine-tuning. Currently shipping legal AI at Promact.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const fontClasses = [
    archivo.variable,
    instrumentSerif.variable,
    jetbrainsMono.variable,
    spaceGrotesk.variable,
  ].join(" ");

  return (
    <html lang="en" className={fontClasses}>
      <body data-font="grotesk">{children}</body>
    </html>
  );
}
