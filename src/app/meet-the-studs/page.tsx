'use client';


import Image from 'next/image';

export default function MeetTheStudsPage() {
  return (
    <main className="bg-[#f8efef] text-black">

      <section className="bg-gradient-to-b from-[#ff8e00] to-white py-16 text-center">
        <h1 className="text-5xl font-bold text-black tracking-wide">Meet The Studs</h1>
      </section>

      <section className="py-12 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Huck Finn</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Finn is a 2-year-old trained psychiatric service dog and excellent swimmer.
          He is incredibly obedient, a great listener, very affectionate, and family friendly.
          When not working he enjoys diving for objects at the bottom of the pool, going on hikes,
          and cuddling with family. (Finn is currently our only stud.)
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {[54, 52, 60, 55, 58, 47, 39, 41, 40].map((id) => (
            <Image
              key={id}
              src={`/images/studs/${id}.jpg`}
              alt={`Stud image ${id}`}
              width={400}
              height={600}
              className="rounded shadow-md object-cover"
            />
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#ff8e00] to-white py-16 text-center">
        <a
          href="/contact"
          className="text-3xl font-semibold text-black hover:underline tracking-wider"
        >
          Contact us
        </a>
      </section>

    </main>
  );
}
