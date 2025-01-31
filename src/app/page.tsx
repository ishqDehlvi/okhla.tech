'use client'
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { useState } from 'react';


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Add Next SEO */}
      <NextSeo
        title="Okhla.tech - Your Gateway to Okhla"
        description="Explore Okhla's vibrant community, businesses, and history."
        canonical="https://okhla.tech"
        openGraph={{
          url: 'https://okhla.tech',
          title: 'Okhla.tech - Your Gateway to Okhla',
          description: "Explore Okhla's vibrant community, businesses, and history.",
          images: [
            {
              url: 'https://okhla.tech/images/okhla-banner.jpg', // Replace with your actual domain
              width: 800,
              height: 600,
              alt: 'Okhla Banner',
            },
          ],
          site_name: 'Okhla.tech',
        }}
        twitter={{
          handle: '@yourtwitterhandle', // Replace with your Twitter handle
          site: '@yourtwitterhandle',
          cardType: 'summary_large_image',
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Okhla.tech</h1>
          <p className="text-xl mb-8">Your one-stop platform for everything in Okhla.</p>
          <a href="#about" className="inline-block bg-white text-blue-600 px-6 py-3 rounded-md font-semibold transition hover:bg-gray-200">
            Learn More
          </a>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/images/okhla-banner.jpg" // Add an image of Okhla in the public/images folder
            alt="Okhla Banner"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About Okhla</h2>
          <p className="text-gray-600 mb-8">
            Okhla is a vibrant neighborhood in South Delhi, known for its rich cultural heritage, diverse community, and thriving local businesses.
            From bustling markets to serene residential areas, Okhla has something for everyone.
          </p>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">History of Okhla</h3>
          <p className="text-gray-600">
            Okhla has a long and storied history, dating back to the Mughal era. It was originally a small village that grew into a major industrial and residential hub over the years.
            Today, it is home to a mix of industries, educational institutions, and cultural landmarks.
          </p>
        </div>
      </section>

      {/* Subdomains Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Explore Our Subdomains</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="https://food.okhla.tech" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Food</h3>
              <p className="text-gray-600">Discover the best food spots in Okhla.</p>
            </a>
            <a href="https://furniture.okhla.tech" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Furniture</h3>
              <p className="text-gray-600">Find affordable and stylish furniture.</p>
            </a>
            <a href="https://business.okhla.tech" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Business Directory</h3>
              <p className="text-gray-600">Connect with local businesses and services.</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Okhla.tech. All rights reserved.</p>
          <p>
            Contact us at{' '}
            <a href="mailto:info@okhla.tech" className="text-blue-400 hover:text-blue-300">
              info@okhla.tech
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}