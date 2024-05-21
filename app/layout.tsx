import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LastBlockComponent from "./components/common/LastBlock";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gasless Carbonable",
  description: "Interact with Carbonable contracts without paying gas fees.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-800 text-neutral-100 min-h-screen`}>
        <nav className="px-4 py-4 grid grid-flow-col gap-4 place-content-center sticky top-0 border-b border-neutral-900 shadow-lg bg-neutral-800 z-10 text-xl uppercase">
          <Image src="/images/gas.svg" className="stroke-neutral-100" width={24} height={8} alt="Carbonable Gasless" />
          Carbonable gasless experience
        </nav>
        <main className="min-h-screen p-16">
          {children}
        </main>
        <footer className="fixed bottom-0 w-full p-4 text-right bg-neutral-800">
          <LastBlockComponent />
        </footer>
      </body>
    </html>
  );
}
