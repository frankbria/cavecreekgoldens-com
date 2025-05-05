// src/components/Navbar.tsx
import Link from "next/link";

const Navbar = () => (
  <nav className="flex justify-between items-center p-4 shadow-md bg-white">
    <h1 className="text-2xl font-bold">Cave Creek Goldens</h1>
    <ul className="flex gap-4 text-lg">
      <li><Link href="/">Home</Link></li>
      <li><Link href="/meet-the-studs">Meet The Studs</Link></li>
      <li><Link href="/services">Services</Link></li>
      <li><Link href="/about-us">About Us</Link></li>
      <li><Link href="/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default Navbar;