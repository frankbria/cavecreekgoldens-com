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
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="180x180" href="/favicon-180x180.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Red Golden Retriever Stud Services in Arizona" />
        <meta name="keywords" content="Cave Creek Goldens, Red Golden Retrievers, Stud Services, Arizona, Golden Retriever" />
        <meta name="author" content="Noatak Enterprises, LLC, dba Cave Creek Goldens" />
      </head>
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
