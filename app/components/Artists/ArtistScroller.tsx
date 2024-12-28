"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Calendar } from 'lucide-react';

// Artist type definition
type Artist = {
  id: number;
  name: string;
  styles: string[];
  instagramHandle: string;
  bookingUrl: string;
  imageUrl: string;
};

// Sample artist data - replace with your actual artists
const artists: Artist[] = [
  {
    id: 1,
    name: "JANE DOE",
    styles: ["Traditional", "Neo-Traditional"],
    instagramHandle: "@janedoetattoos",
    bookingUrl: "https://booking.com/janedoe",
    imageUrl: "/artists/jane-doe.jpg"
  },
  {
    id: 2,
    name: "JOHN SMITH",
    styles: ["Black Work", "Fine Line"],
    instagramHandle: "@johnsmithtattoo",
    bookingUrl: "https://booking.com/johnsmith",
    imageUrl: "/artists/john-smith.jpg"
  },
];

const ArtistScroller = () => {
  return (
    <div className="w-full overflow-hidden bg-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center tracking-wider">ARTISTS</h2>
        
        <div className="flex overflow-x-auto space-x-8 pb-8 scrollbar-hide">
          {artists.map((artist) => (
            <div 
              key={artist.id}
              className="flex-none w-72 bg-neutral-900 group"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={artist.imageUrl}
                  alt={`${artist.name} - Tattoo Artist at The Dolorosa`}
                  width={400}    // This will be the maximum width
                  height={400}   // This will be the maximum height
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  priority={artist.id === 1} // Load first artist image immediately
                  quality={90}   // Adjust quality (default is 75)
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold tracking-wider">{artist.name}</h3>
                  <div className="flex space-x-3">
                    <a
                      href={`https://instagram.com/${artist.instagramHandle.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href={artist.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Calendar className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {artist.styles.map((style) => (
                    <span
                      key={style}
                      className="text-sm text-gray-400 tracking-wider"
                    >
                      {style}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtistScroller;