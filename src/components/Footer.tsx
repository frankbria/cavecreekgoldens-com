// src/components/Footer.tsx
import Link from "next/link";

const Footer = () => (
  <footer className="bg-orange-100 py-8 text-center pb-12">
    <p className="text-2xl font-bold">
      <Link href="/contact">CONTACT US</Link>
    </p>
    <div className="mt-4 text-sm text-gray-600 text-center">
      &copy; {new Date().getFullYear()} Noatak Enterprises, LLC, dba Cave Creek Goldens. All rights reserved.
    </div>
  </footer>
);

export default Footer;
