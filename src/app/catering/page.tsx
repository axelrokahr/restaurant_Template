// src/app/catering/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';

export default function Catering() {
  return (
    <div className="bg-white text-black font-amatic min-h-screen px-4 py-8">
      
      {/* Catering Section */}
      <section className="mb-12 text-center">
        <h1 className="text-5xl md:text-6xl font-bungee mb-4">Catering</h1>
        <p className="text-md md:text-2xl max-w-2xl font-open_Sans font-thin mx-auto">
          Let us cater your next event with delicious, authentic Mexican food. Choose from our carefully curated packages to serve small or large groups. Whether it's a family gathering or a corporate event, we’ve got you covered!
        </p>
      </section>

      {/* Catering Content */}
      <div className="container mx-auto px-4 md:px-16">
        {/* Catering Options */}
        <div className="space-y-12 text-white">
          
          {/* Option 1: Fiesta Package */}
          <div className="bg-lime-400 p-6 md:p-8 rounded-lg shadow-md">
            <h2 className="text-3xl md:text-6xl text-center mb-4 font-sigmar">Fiesta Package</h2>
            <p className="text-2xl md:text-4xl mb-4">
              Our Fiesta Package includes a selection of our most popular dishes:
            </p>
            <ul className="list-disc list-inside text-xl md:text-4xl font-bold mb-4">
              <li>Chicken and Beef Tacos</li>
              <li>Cheese Enchiladas</li>
              <li>Mexican Rice and Refried Beans</li>
              <li>Chips and Salsa</li>
            </ul>
            <p className="text-2xl md:text-4xl mb-4">
              Perfect for small to medium-sized events. Serves up to 25 guests.
            </p>
            <p className="text-3xl md:text-5xl font-bold">$499.99</p>
          </div>

          {/* Option 2: Grande Package */}
          <div className="bg-custom-blue-5 p-6 md:p-8 rounded-lg shadow-md">
            <h2 className="text-3xl md:text-6xl text-center mb-4 font-sigmar">Grande Package</h2>
            <p className="text-2xl md:text-4xl mb-4">
              The Grande Package offers an expanded menu:
            </p>
            <ul className="list-disc list-inside text-xl md:text-4xl font-bold mb-4">
              <li>Grilled Steak and Shrimp Fajitas</li>
              <li>Chicken Quesadillas</li>
              <li>Elote (Grilled Corn)</li>
              <li>Guacamole and Chips</li>
              <li>Mexican Rice and Black Beans</li>
            </ul>
            <p className="text-2xl md:text-4xl mb-4">
              Ideal for larger events. Serves up to 50 guests.
            </p>
            <p className="text-3xl md:text-5xl font-bold">$899.99</p>
          </div>

          {/* Option 3: Ultimate Fiesta Package */}
          <div className="bg-custom-pink-1 p-6 md:p-8 rounded-lg shadow-md">
            <h2 className="text-3xl md:text-6xl text-center mb-4 font-sigmar">Ultimate Fiesta Package</h2>
            <p className="text-2xl md:text-4xl mb-4">
              Our most comprehensive package includes:
            </p>
            <ul className="list-disc list-inside text-xl md:text-4xl font-bold mb-4">
              <li>Customized Taco Bar with Various Meats and Veggies</li>
              <li>Enchiladas Trio (Chicken, Beef, Vegetarian)</li>
              <li>Shrimp and Fish Tacos</li>
              <li>Fresh Salads and Sides</li>
              <li>Churros and Flan for Dessert</li>
              <li>Beverage Station with Agua Frescas</li>
            </ul>
            <p className="text-2xl md:text-4xl mb-4">
              The ultimate experience for events up to 100 guests.
            </p>
            <p className="text-3xl md:text-5xl font-bold">$1,799.99</p>
          </div>
        </div>

        {/* Catering Order Button */}
        <div className="text-center mt-12">
          <Link href="/catering-order" className="animate-bodyColorChange text-white py-3 px-6 md:px-8 font-bold text-3xl md:text-3xl hover:bg-red-600 transition duration-200 rounded-lg">
            Place a Catering Order!
          </Link>
        </div>
      </div>
    </div>
  );
}
