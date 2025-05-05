// src/components/Footer.tsx
import Link from "next/link";

const Footer = () => (
  <footer className="bg-orange-100 py-8 text-center">
    <p className="text-2xl font-bold">
      <Link href="/contact">CONTACT US</Link>
    </p>
    <div className="mt-4 text-sm text-gray-600">
      <p>Cave Creek Goldens</p>
      <p>A stud service for Golden Retrievers</p>
    </div>
  </footer>
);

export default Footer;
