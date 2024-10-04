// src/app/locations/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';

export default function Locations() {
  return (
    <div className="bg-white text-black min-h-screen px-4 py-8 text-center">
      
      <div className="container mx-auto">
       
        {/* Locations Grid */}
        <div className="divide-y-2 divide-black md:flex md:divide-y-0 md:divide-x-2 md:divide-black">
          {/* Location 1: Chapel Hill */}
          <div className="p-6 flex-1 flex flex-col space-y-6 hover:animate-shake">
            <h2 className="text-4xl hover:text-custom-blue-5 font-bungee">Chapel Hill</h2>

            <div className="space-y-4">
              <p className="text-xl">
                <Link
                  href="https://www.google.com/maps/place/123+Fiesta+Ave,+Chapel+Hill,+NC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  123 Fiesta Ave, Chapel Hill, NC
                </Link>
              </p>

              <p className="text-xl">Mon-Sun: 11:00 AM - 10:00 PM</p>

              <p className="text-xl">
                <Link href="tel:919-123-4567" className="text-blue-600 hover:underline">
                  (919) 123-4567
                </Link>
              </p>

              <p className="text-xl">Dine-in, Takeout, Delivery</p>

              <p className="text-xl">Free on-site parking available</p>
            </div>

            {/* Buttons */}
            <div className="mt-auto mb-6 font-amatic text-3xl font-bold">
              <Link
                href="/reservations/chapel-hill"
                className="inline-block bg-custom-blue-5 text-white py-2 px-4 rounded mr-2 hover:bg-lime-400 transition duration-200"
              >
                Reserve a Table
              </Link>
              <Link
                href="/order-online/chapel-hill"
                className="inline-block bg-custom-blue-5 text-white py-2 px-4 rounded hover:bg-lime-400 transition duration-200 mt-2"
              >
                Order Online
              </Link>
            </div>

            {/* Customer Review */}
            <div className="mt-6">
              <p className="italic text-xl">&quot;Amazing atmosphere and delicious food!&quot; – Emily R.</p>
            </div>
          </div>

          {/* Location 2: Durham */}
          <div className="p-6 flex-1 flex flex-col">
            <div className="hover:animate-shake space-y-6">
              <h2 className="text-4xl hover:text-custom-pink-1 font-bungee">Durham</h2>

              <div className="space-y-4">
                <p className="text-xl">
                  <Link
                    href="https://www.google.com/maps/place/456+Salsa+St,+Durham,+NC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    456 Salsa St, Durham, NC
                  </Link>
                </p>

                <p className="text-xl">Mon-Sun: 11:00 AM - 11:00 PM</p>

                <p className="text-xl">
                  <Link href="tel:919-234-5678" className="text-blue-600 hover:underline">
                    (919) 234-5678
                  </Link>
                </p>

                <p className="text-xl">Dine-in, Takeout</p>

                <p className="text-xl">Street parking available</p>
              </div>

              {/* Buttons */}
              <div className="mt-auto font-amatic text-3xl font-bold mb-6">
                <Link
                  href="/reservations/durham"
                  className="inline-block bg-custom-blue-5 text-white py-2 px-4 rounded mr-2 hover:bg-lime-400 transition duration-200"
                >
                  Reserve a Table
                </Link>
                <Link
                  href="/order-online/durham"
                  className="inline-block bg-custom-blue-5 text-white py-2 px-4 rounded hover:bg-lime-400 transition duration-200 mt-2"
                >
                  Order Online
                </Link>
              </div>

              {/* Customer Review */}
              <div className="mt-6">
                <p className="italic text-xl">&quot;Best tacos I&apos;ve ever had!&quot; – Michael S.</p>
              </div>
            </div>
          </div>

          {/* Location 3: Raleigh */}
          <div className="p-6 flex-1 flex flex-col">
            <div className="hover:animate-shake  space-y-6">
              <h2 className="text-4xl hover:text-lime-500 font-bungee">Raleigh</h2>

              <div className="space-y-4">
                <p className="text-xl">
                  <Link
                    href="https://www.google.com/maps/place/789+Guacamole+Blvd,+Raleigh,+NC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    789 Guacamole Blvd, Raleigh, NC
                  </Link>
                </p>

                <p className="text-xl">Mon-Sun: 10:00 AM - 9:00 PM</p>

                <p className="text-xl">
                  <Link href="tel:919-345-6789" className="text-blue-600 hover:underline">
                    (919) 345-6789
                  </Link>
                </p>

                <p className="text-xl">Dine-in, Takeout, Catering</p>

                <p className="text-xl">Nearby parking garage with validation</p>
              </div>

              {/* Buttons */}
              <div className="mt-auto font-amatic text-3xl font-bold mb-6">
                <Link
                  href="/reservations/raleigh"
                  className="inline-block bg-custom-blue-5 text-white py-2 px-4 rounded mr-2 hover:bg-lime-400 transition duration-200"
                >
                  Reserve a Table
                </Link>
                <Link
                  href="/order-online/raleigh"
                  className="inline-block bg-custom-blue-5 text-white py-2 px-4 rounded hover:bg-lime-400 transition duration-200 mt-2"
                >
                  Order Online
                </Link>
              </div>

              {/* Customer Review */}
              <div className="mt-6">
                <p className="italic text-xl">
                  &quot;Fantastic service and the margaritas are top-notch!&quot; – Lisa K.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
