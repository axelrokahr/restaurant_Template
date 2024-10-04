import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PortfolioButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Delay before the animation starts

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`mt-16 transition-opacity transition-transform duration-[3000ms] ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <Link
        href="/projects"
        className="inline-block px-8 py-3 bg-black text-amber-50 font-normal rounded hover:bg-amber-50 hover:text-black transition duration-2000"
      >
        View My Portfolio
      </Link>
    </div>
  );
}
