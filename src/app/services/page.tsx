'use client'

import Image from 'next/image'


export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">

      <div className="bg-orange-500 text-center py-12 text-white">
        <h1 className="text-5xl font-bold tracking-widest">SERVICES</h1>
      </div>

      <div className="flex flex-col md:flex-row bg-orange-50 py-16 px-6 md:px-20 gap-12">
        <div className="md:w-1/2">
          <Image
            src="/stud-golden.jpg"
            alt="Golden Retriever Stud"
            width={600}
            height={430}
            className="rounded shadow-md object-cover h-[430px] w-full"
          />
        </div>

        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl font-semibold mb-6">Why choose us?</h2>
          <p className="text-gray-800 text-lg leading-7 mb-6">
            We provide high-quality red-American golden retriever males for
            studding services. Our males are all OFA certified (hips,
            elbows, eyes, and heart) and AKC registered.
          </p>
          <p className="text-gray-800 text-lg leading-7">
            For all inquiries regarding our males please reach out to us{' '}
            <a
              href="https://cavecreekgoldens.com/contact/"
              className="text-blue-600 underline"
            >
              here
            </a>
            .
          </p>
        </div>
      </div>

      <div className="bg-orange-500 text-white text-center py-10 text-3xl font-bold tracking-wide">
        <a href="https://cavecreekgoldens.com/contact/">
          Contact us
        </a>
      </div>

    </div>
  )
}
