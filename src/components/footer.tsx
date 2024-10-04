'use client';

// src/components/Footer.tsx

import Link from 'next/link';
import RotateVideo from '../components/rotateVideo';

export default function Footer() {
    return (
      <footer className="bg-black py-8 mt-8">
        <div className="container mx-auto">
          {/* Footer Links Section */}
          <div className="flex flex-col items-center justify-center text-center">
            <ul className="flex flex-wrap justify-center space-x-6 mb-6">
              <li>
                <Link href="/menu" className="text-white font-amatic text-2xl hover:text-custom-pink-1">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-white font-amatic text-2xl hover:text-custom-pink-1">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/catering" className="text-white font-amatic text-2xl hover:text-custom-pink-1">
                  Catering
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white font-amatic text-2xl hover:text-custom-pink-1">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/order-online" className="text-white font-amatic text-2xl hover:text-custom-pink-1">
                  Online Ordering
                </Link>
              </li>
            </ul>
          </div>

          {/* Rokahr Design and ScrollVideo */}
          <div className="flex items-center justify-center h-16 overflow-hidden">
            {/* Rokahr Design Text */}
            <p className="text-white font-raleway text-3xl font-bold text-center">
              &copy; {new Date().getFullYear()} Rokahr Design
            </p>
            {/* Small ScrollVideo Component */}
            <div className="ml-5"> {/* Add some margin to space it from the text */}
              <RotateVideo 
                src="/videos/paint_Video_1.mp4" 
                width="35px" 
                height="35px" 
                borderRadius="20%"  // Keeps the video circular
                rotationDirection="clockwise" 
              />
            </div>
          </div>
        </div>
      </footer>
    );
}

  