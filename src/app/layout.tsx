import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Baljinder Singh | AI Engineer & GenAI Developer",
  description: "Portfolio of Baljinder Singh, Data Science and Machine Learning Engineer specializing in Generative AI, Agentic workflows, and robust AI solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased bg-background text-foreground min-h-screen flex flex-col`}>
        <Preloader />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
