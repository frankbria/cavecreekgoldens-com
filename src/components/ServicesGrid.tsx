// src/components/ServicesGrid.tsx
import Link from "next/link";
import Image from "next/image";

const ServicesGrid = () => (
  <section className="bg-[#f8efef] py-16 px-6 justify-content-center" style={{ marginTop: '25px' }}>
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      <Link href="/meet-the-studs">
        <div className="p-6 bg-white shadow hover:shadow-lg cursor-pointer">
          <Image src="/studs.jpg" alt="Meet The Studs" width={500} height={300} className="mb-4 w-full object-cover rounded" />
          <h3 className="text-xl font-semibold">Meet The Studs</h3>
        </div>
      </Link>
      <Link href="/services">
        <div className="p-6 bg-white shadow hover:shadow-lg cursor-pointer">
          <Image src="/services.jpg" alt="Services" width={500} height={300} className="mb-4 w-full object-cover rounded" />
          <h3 className="text-xl font-semibold">Services</h3>
        </div>
      </Link>
      <Link href="/about-us">
        <div className="p-6 bg-white shadow hover:shadow-lg cursor-pointer">
          <Image src="/about.jpg" alt="About Us" width={500} height={300} className="mb-4 w-full object-cover rounded" />
          <h3 className="text-xl font-semibold">About Us</h3>
        </div>
      </Link>
    </div>
  </section>
);

export default ServicesGrid;