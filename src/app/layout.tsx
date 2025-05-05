// src/app/layout.tsx

import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cave Creek Goldens",
  description: "Red Golden Retriever Stud Services in Arizona",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter?.className || ''} bg-gray-50 text-gray-800 antialiased flex flex-col min-h-screen`}>
        <header className="sticky top-0 z-50">
          <Navbar />
        </header>

        <main className="flex-grow max-w-5xl mx-auto w-full px-4 sm:px-6 py-10">
          {children}
        </main>

        <footer className="mt-auto">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
