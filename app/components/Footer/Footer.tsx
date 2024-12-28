import React from 'react';
import Link from 'next/link';
import { Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 tracking-wider">THE DOLOROSA</h3>
            <p className="text-gray-400">
              Custom tattoos and fine art in a private studio setting.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 tracking-wider">HOURS</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Tuesday - Saturday</li>
              <li>11:00 AM - 7:00 PM</li>
              <li>By Appointment Only</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 tracking-wider">CONNECT</h3>
            <div className="space-y-4">
              <a href="https://instagram.com" className="flex items-center text-gray-400 hover:text-white">
                <Instagram className="w-5 h-5 mr-2" />
                @thedolorosa
              </a>
              <a href="mailto:info@thedolorosa.com" className="flex items-center text-gray-400 hover:text-white">
                <Mail className="w-5 h-5 mr-2" />
                info@thedolorosa.com
              </a>
              <a href="tel:+1234567890" className="flex items-center text-gray-400 hover:text-white">
                <Phone className="w-5 h-5 mr-2" />
                (123) 456-7890
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} The Dolorosa Tattoo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;