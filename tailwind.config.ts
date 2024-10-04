import { Amatic_SC } from "next/font/google";
import type { Config } from "tailwindcss";

const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-blue-1': '#b0bec5',
        'custom-blue-2': '#90a4ae',
        'custom-blue-3': '#78909c',
        'custom-blue-4': '#607d8b',
        'custom-blue-5': '#40b3cc',       // Blue
        'custom-pink-1': '#E91E63',       // Pink
        'custom-green-1': '#66ff00',      // Green
        'custom-red-1': '#F44336',        // Red
        'custom-orange-1': '#FA8128',        // Red
        'background-accent': '#FFE0B2',   // Background Accent
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
        raleway: ['Raleway Dots', 'cursive'], 
        typewriter: ['Special Elite', 'monospace'], 
        amatic: ['Amatic SC', 'cursive'],
        bungee: ['Bungee Shade', 'cursive'],
        open_Sans: ['Open Sans', 'cursive'],  
        sigmar: ['Sigmar One', 'cursive'],  
      },
      keyframes: {
        bodyColorChange: {
          '0%, 33%': { backgroundColor: '#E91E63' }, // custom-pink-1
          '34%, 66%': { backgroundColor: '#aeea00' }, // custom-blue-5
          '67%, 100%': { backgroundColor: '#40b3cc' }, // lime-400
        },
        borderColorChange: {
          '0%, 33%': { borderColor: '#E91E63' }, // custom-pink-1
          '34%, 66%': { borderColor: '#aeea00' }, // custom-blue-5
          '67%, 100%': { borderColor: '#40b3cc' }, // lime-400
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '50%': { transform: 'translateX(5px)' },
          '75%': { transform: 'translateX(-5px)' },
        },
      },
      animation: {
        bodyColorChange: 'bodyColorChange 6s steps(1, end) infinite',
        borderColorChange: 'borderColorChange 6s steps(1, end) infinite',
        marquee: 'marquee 30s linear infinite',
        shake: 'shake 0.5s ease-in-out',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
};
export default config;
