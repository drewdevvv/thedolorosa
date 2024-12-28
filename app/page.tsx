"use client";

import Image from 'next/image';
import Link from 'next/link';
import ArtistScroller from './components/Artists/ArtistScroller';
import FadeInSection from './components/Animations/FadeInSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - No animation needed as it's the first thing visible */}
      <section className="relative h-screen bg-black flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wider">
            THE DOLOROSA
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 tracking-wide">
            CUSTOM TATTOOS & FINE ART
          </p>
          <Link 
            href="/booking"
            className="inline-block border-2 border-white px-8 py-3 text-lg tracking-widest hover:bg-white hover:text-black transition-colors"
          >
            BOOK NOW
          </Link>
        </div>
      </section>

      {/* Artists Section */}
      <FadeInSection>
        <section className="w-full bg-black">
          <ArtistScroller />
        </section>
      </FadeInSection>

      {/* Gallery Preview */}
      <FadeInSection delay={0.2}>
        <section className="py-20 px-4 bg-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center tracking-wider">RECENT WORK</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Gallery images would go here */}
              <div className="aspect-square bg-neutral-800"></div>
              <div className="aspect-square bg-neutral-800"></div>
              <div className="aspect-square bg-neutral-800"></div>
              <div className="aspect-square bg-neutral-800"></div>
            </div>
            <div className="text-center mt-12">
              <Link 
                href="/gallery"
                className="inline-block border-2 border-white px-8 py-3 tracking-widest hover:bg-white hover:text-black transition-colors"
              >
                VIEW GALLERY
              </Link>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Booking Info */}
      <FadeInSection delay={0.4}>
        <section className="py-20 px-4 bg-neutral-900">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 tracking-wider">BOOKING INFORMATION</h2>
            <p className="text-gray-300 mb-8">
              We take pride in creating custom, one-of-a-kind pieces for each client.
              All appointments require a consultation and deposit.
            </p>
            <Link 
              href="/booking"
              className="inline-block border-2 border-white px-8 py-3 tracking-widest hover:bg-white hover:text-black transition-colors"
            >
              START YOUR PROJECT
            </Link>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
}