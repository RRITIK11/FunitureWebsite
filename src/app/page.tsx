"use client"
import { useEffect, useState } from 'react';
import { AppleCardsCarouselDemo } from '@/components/AppleCardsCarouselDemo';
import Link from 'next/link';

export default function HomePage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (

    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-16 sm:py-24 md:py-32">
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: 'url(/path/to/your-image.jpg)' }}></div>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
              Timeless Creations
            </h1>
            <p className="text-lg sm:text-xl mb-6">
              Crafting furniture that blends beauty, function, and durability for your space.
            </p>
            <Link href="/projects">
              <div className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md text-lg transition duration-300">
                Explore Our Projects
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Us</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Timeless Creations, we believe that furniture is not just about function—it's about making a statement. 
              Our pieces are designed to bring elegance, comfort, and sustainability into your home, ensuring that each item is built to last a lifetime.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12 flex flex-col gap-5">
            <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
            <p className="text-lg text-gray-600">Explore our selection of handcrafted furniture projects that showcase the artistry and precision of our work.</p>
          </div>
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="/path/to/project-image1.jpg"
                alt="Project 1"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Modern Sofa Set</h3>
                <p className="text-gray-600">A sleek and stylish sofa set designed for modern living rooms.</p>
                <Link href="/projects">
                  <div className="mt-4 inline-block text-blue-600 hover:text-blue-700">View Details</div>
                </Link>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="/path/to/project-image2.jpg"
                alt="Project 2"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Rustic Dining Table</h3>
                <p className="text-gray-600">A handcrafted dining table made with reclaimed wood for a rustic charm.</p>
                <Link href="/projects">
                  <div className="mt-4 inline-block text-blue-600 hover:text-blue-700">View Details</div>
                </Link>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="/path/to/project-image3.jpg"
                alt="Project 3"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom Bookshelf</h3>
                <p className="text-gray-600">A unique and personalized bookshelf built to fit any space perfectly.</p>
                <Link href="/projects">
                  <div className="mt-4 inline-block text-blue-600 hover:text-blue-700">View Details</div>
                </Link>
              </div>
            </div>
          </div> */}
        {isClient && <AppleCardsCarouselDemo />}  
        </div>
      </section>

      {/* <AppleCardsCarouselDemo/> */}

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h2>
        <p className="text-lg mb-6">
          Let Timeless Creations bring your vision to life with our expertly crafted furniture.
        </p>
        <Link href="/contact">
          <div className="inline-block bg-white hover:bg-gray-100 text-blue-600 font-semibold py-3 px-8 rounded-md text-lg transition duration-300">
            Get in Touch
          </div>
        </Link>
      </section>

    </div>
  );
}
