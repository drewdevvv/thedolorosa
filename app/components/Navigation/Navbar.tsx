import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold tracking-wider">THE DOLOROSA</span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link href="/artists" className="text-white hover:text-gray-300 px-3 py-2 text-sm tracking-widest">
              ARTISTS
            </Link>
            <Link href="/gallery" className="text-white hover:text-gray-300 px-3 py-2 text-sm tracking-widest">
              GALLERY
            </Link>
            <Link href="/booking" className="text-white hover:text-gray-300 px-3 py-2 text-sm tracking-widest">
              BOOKING
            </Link>
            <Link href="/aftercare" className="text-white hover:text-gray-300 px-3 py-2 text-sm tracking-widest">
              AFTERCARE
            </Link>
            <Link href="/contact" className="text-white hover:text-gray-300 px-3 py-2 text-sm tracking-widest">
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;