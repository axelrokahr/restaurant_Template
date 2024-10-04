// src/app/menu/page.tsx
'use client';

import React from 'react';

export default function Menu() {
  return (
    <div className="bg-white text-black min-h-screen px-4 py-8">
      {/* Menu Content with Black Border */}
      <div className="container mx-auto border-2 border-black p-6 md:p-16">
        <h1 className="text-4xl md:text-6xl text-center mb-6 md:mb-8 font-amatic font-bold">OUR MENU</h1>

        {/* Salads Section */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl mb-4 md:mb-6 font-amatic font-bold">Salads</h2>
          <div className="space-y-4">
            {/* Dish Item */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-amatic font-bold">Ensalada Fresca</h3>
                <p className="text-base md:text-lg">
                  Mixed greens, tomatoes, cucumbers, red onions, avocado slices, and a lime vinaigrette.
                </p>
              </div>
              <span className="text-xl md:text-2xl font-amatic font-bold mt-2 md:mt-0">$9.99</span>
            </div>
            {/* Dish Item */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-amatic font-bold">Mango Fiesta Salad</h3>
                <p className="text-base md:text-lg">
                  Romaine lettuce, fresh mango chunks, jicama, roasted corn, black beans, and a cilantro-lime dressing.
                </p>
              </div>
              <span className="text-xl md:text-2xl font-amatic font-bold mt-2 md:mt-0">$10.99</span>
            </div>
          </div>
        </section>

        {/* Main Courses Section */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl mb-4 md:mb-6 font-amatic font-bold">Main Courses</h2>
          <div className="space-y-4">
            {/* Dish Item */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-amatic font-bold">Carne Asada Tacos</h3>
                <p className="text-base md:text-lg">
                  Grilled marinated steak served on corn tortillas with pico de gallo and guacamole.
                </p>
              </div>
              <span className="text-xl md:text-2xl font-amatic font-bold mt-2 md:mt-0">$12.99</span>
            </div>
            {/* Dish Item */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-amatic font-bold">Chicken Enchiladas</h3>
                <p className="text-base md:text-lg">
                  Shredded chicken rolled in corn tortillas, topped with red sauce and melted cheese.
                </p>
              </div>
              <span className="text-xl md:text-2xl font-amatic font-bold mt-2 md:mt-0">$11.99</span>
            </div>
            {/* Dish Item */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-amatic font-bold">Vegetarian Quesadilla</h3>
                <p className="text-base md:text-lg">
                  Grilled flour tortilla stuffed with cheese, bell peppers, onions, mushrooms, and spinach.
                </p>
              </div>
              <span className="text-xl md:text-2xl font-amatic font-bold mt-2 md:mt-0">$10.49</span>
            </div>
            {/* Dish Item */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-amatic font-bold">Shrimp Fajitas</h3>
                <p className="text-base md:text-lg">
                  Sizzling shrimp with bell peppers and onions, served with rice, beans, and tortillas.
                </p>
              </div>
              <span className="text-xl md:text-2xl font-amatic font-bold mt-2 md:mt-0">$14.99</span>
            </div>
          </div>
        </section>

        {/* Sides Section */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl mb-4 md:mb-6 font-amatic font-bold">Sides</h2>
          <div className="space-y-4">
            {/* Side Item */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-amatic font-bold">Mexican Rice</h3>
                <p className="text-base md:text-lg">Flavorful rice cooked with tomatoes and spices.</p>
              </div>
              <span className="text-xl md:text-2xl font-amatic font-bold mt-2 md:mt-0">$3.49</span>
            </div>
            {/* Side Item */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-amatic font-bold">Refried Beans</h3>
                <p className="text-base md:text-lg">Creamy pinto beans mashed and seasoned.</p>
              </div>
              <span className="text-xl md:text-2xl font-amatic font-bold mt-2 md:mt-0">$3.49</span>
            </div>
            {/* Side Item */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-amatic font-bold">Elote (Grilled Corn)</h3>
                <p className="text-base md:text-lg">Grilled corn on the cob with mayo, cheese, and chili powder.</p>
              </div>
              <span className="text-xl md:text-2xl font-amatic font-bold mt-2 md:mt-0">$4.99</span>
            </div>
            {/* Side Item */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-amatic font-bold">Guacamole</h3>
                <p className="text-base md:text-lg">Freshly made avocado dip with lime and cilantro.</p>
              </div>
              <span className="text-xl md:text-2xl font-amatic font-bold mt-2 md:mt-0">$5.99</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
