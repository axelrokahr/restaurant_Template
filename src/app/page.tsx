// src/app/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white text-black px-4 md:px-16">
      {/* Hero Section */}
      <section
        className="relative h-[35vh] md:h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/taco-vista-hero.jpg")' }}
      >
        <div className="text-center bg-white p-4 md:p-8 animate-borderColorChange border-4 md:border-8 border-custom-blue-5 rounded-lg shadow-lg mx-2">
          <h1 className="text-4xl md:text-8xl font-bungee mb-4 hover:animate-shake">Welcome!</h1>
          <p className="text-2xl md:text-3xl font-bold font-amatic mb-4">
            Discover authentic Mexican flavors, crafted with care
          </p>
          <Link
            href="/menu"
            className="animate-bodyColorChange text-2xl md:text-3xl inline-block text-white py-2 px-6 rounded-lg font-amatic font-bold transition animate-colorChange hover:bg-white"
          >
            Order Online!
          </Link>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-8 md:py-16 flex flex-col md:flex-row items-center justify-between">
        {/* Description on Left */}
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h2 className="text-4xl md:text-6xl font-bungee mb-4">About Us</h2>
          <p className="text-lg md:text-xl font-open_Sans font-light mb-6">
            Taco Vista is a family-owned Mexican restaurant where traditional recipes meet fresh, local ingredients.
            Our goal is to bring the rich flavors of Mexico to your plate with every bite. From our famous Carne Asada
            tacos to our refreshing Mango Fiesta Salad, we offer a taste of authentic Mexico, served with love.
            Whether you're stopping by for a quick bite or dining with family and friends, Taco Vista offers a
            warm, welcoming environment that feels like home.
          </p>
          <Link
            href="/contact"
            className="text-xl md:text-2xl inline-block bg-custom-pink-1 text-white py-2 px-6 rounded-lg font-amatic font-bold hover:bg-white hover:text-custom-pink-1"
          >
            Contact Us
          </Link>
        </div>

        {/* Image on Right */}
        <div className="md:w-1/2">
          <Image
            src="/images/restaurant.jpg"
            alt="Taco Vista restaurant interior"
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </div>
      </section>

      {/* Specials Section */}
      <section className="py-8 md:py-12">
        <h2 className="text-4xl md:text-6xl font-bungee text-center mb-8">Weekly Specials</h2>
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-8 space-y-8 md:space-y-0">
          {/* Thursday Special */}
          <div className="bg-custom-pink-1 text-white p-6 md:p-8 rounded-lg flex-1 flex flex-col items-center">
            <h3 className="text-3xl md:text-5xl font-bold font-sigmar text-center mb-4">Thursday</h3>
            <p className="text-lg md:text-xl text-center mb-4">
              Enjoy 3 tacos (choice of chicken, steak, or veggie) and a classic margarita for $14.99.
            </p>
          </div>

          {/* Friday Special */}
          <div className="bg-lime-400 text-white p-6 md:p-8 rounded-lg flex-1 flex flex-col items-center">
            <h3 className="text-3xl md:text-5xl font-bold font-sigmar mb-4">Friday</h3>
            <p className="text-lg md:text-xl text-center mb-4">
              Sizzling steak or chicken fajitas served with rice, beans, and all the fixings for $16.99.
            </p>
          </div>

          {/* Saturday Special */}
          <div className="bg-custom-blue-5 text-white p-6 md:p-8 rounded-lg flex-1 flex flex-col items-center">
            <h3 className="text-3xl md:text-5xl font-bold font-sigmar mb-4">Saturday</h3>
            <p className="text-lg md:text-xl text-center mb-4">
              A pitcher of our house-made sangria paired with loaded nachos (choice of toppings) for $19.99.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Dishes Section */}
      <section className="py-8 md:py-16">
        <h2 className="text-4xl md:text-6xl font-bungee mb-8 text-center">Our Popular Dishes</h2>
        <div className="flex flex-col md:flex-row md:justify-center md:space-x-6 space-y-6 md:space-y-0">
          {/* Dish 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3">
            <Image
              src="/images/carne_Asada.webp"
              alt="Carne Asada Tacos"
              width={400}
              height={400}
              className="rounded-lg mb-4 object-cover object-center h-[200px] md:h-[300px] w-full"
            />
            <h3 className="text-2xl md:text-3xl font-amatic font-bold mb-4">Carne Asada Tacos</h3>
            <p className="text-base md:text-lg">
              Grilled marinated steak served on corn tortillas with pico de gallo and guacamole.
            </p>
          </div>

          {/* Dish 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3">
            <Image
              src="/images/mango_Salad.jpg"
              alt="Mango Fiesta Salad"
              width={400}
              height={400}
              className="rounded-lg mb-4 object-cover object-center h-[200px] md:h-[300px] w-full"
            />
            <h3 className="text-2xl md:text-3xl font-amatic font-bold mb-4">Mango Fiesta Salad</h3>
            <p className="text-base md:text-lg">
              Romaine lettuce, fresh mango chunks, jicama, roasted corn, and a cilantro-lime dressing.
            </p>
          </div>
        </div>
      </section>

       {/* Testimonials Section */}
       <section className="py-8 md:py-16 text-black text-center">
        <h2 className="text-4xl md:text-6xl font-bungee mb-8">Our satisfied customers</h2>
        <div className="space-y-8 py-8 px-4 text-white">
          <blockquote className="text-xl md:text-3xl md:p-8 bg-custom-blue-5 font-open_Sans italic rounded-xl">
            &quot;Taco Vista has the best tacos in town. The carne asada is always cooked perfectly, and the service is top-notch!&quot;
            <br />– Jessica M.
          </blockquote>
          <blockquote className="text-xl md:text-3xl md:p-8 bg-custom-blue-5 font-open_Sans italic rounded-xl">
            &quot;The happy hour margaritas are amazing, and the atmosphere is perfect for a casual night out.&quot;
            <br />– Mark D.
          </blockquote>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-8 md:py-16 text-center">
        <h2 className="text-5xl md:text-7xl font-bungee mb-8">Join The Fiesta!</h2>
        <p className="text-2xl md:text-3xl font-bold font-amatic mb-8">
          Stop by Taco Vista today or place an order online
        </p>
        <Link
          href="/order-online"
          className="text-3xl md:text-5xl inline-block bg-custom-pink-1 text-white py-2 px-6 rounded-lg font-amatic font-bold hover:bg-white hover:text-custom-pink-1 hover:animate-shake"
        >
          Order Online Now!
        </Link>
      </section>
    </div>
  );
}
