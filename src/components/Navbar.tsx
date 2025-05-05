// src/components/Navbar.tsx
import Link from "next/link";

const Navbar = () => (
  <nav className="fixed inset-x-0 top-0 bg-orange-500 text-white shadow-md h-16 z-50">
    <div className="max-w-7xl mx-auto px-8 flex justify-between items-center h-full">
      <p className="text-2xl font-bold">Cave Creek Goldens</p>
      <ul className="flex flex-row gap-6 text-lg">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/meet-the-studs">Meet The Studs</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/about-us">About Us</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
