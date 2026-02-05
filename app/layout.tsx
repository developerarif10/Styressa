import { AppointmentProvider } from "@/context/AppointmentContext";
import type { Metadata } from "next";
import { Bodoni_Moda, Inter } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Styressa | Beauty & Spa Salon",
  description: "Experience luxury and calm at Styressa Beauty & Spa Salon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bodoni.variable} ${inter.variable} antialiased bg-background text-primary`}
      >
        <AppointmentProvider>
          {children}
        </AppointmentProvider>
      </body>
    </html>
  );
}
