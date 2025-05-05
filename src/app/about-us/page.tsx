import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="bg-orange-500 text-white">
      <section className="py-16 text-center">
        <h1 className="text-5xl font-bold">ABOUT US</h1>
      </section>

      <section className="bg-neutral-100 text-black py-16 px-4 md:px-12 lg:px-32 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
          <p className="text-lg leading-relaxed mb-4">
            Established in 2019, we are a family-friendly business passionate about providing quality red Golden Retrievers to the best homes. Our studs come from a long line of champion birding dogs and are exceptionally obedient.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            They are bred selectively to ensure all progeny are healthy, well-tempered, and obedient.
          </p>
          <p className="text-lg leading-relaxed">
            For any inquiries regarding future breeding possibilities, please{' '}
            <Link href="/contact" className="text-orange-600 font-semibold underline">
              contact us here
            </Link>
            .
          </p>
        </div>

        <div className="relative h-[500px] w-full">
          <Image
            src="/images/about-slider-1.jpg"
            alt="Golden Retrievers at Cave Creek"
            fill
            className="object-contain rounded-lg shadow-lg"
          />
        </div>
      </section>

      <div className="h-10 bg-orange-500" />
    </div>
  )
}
