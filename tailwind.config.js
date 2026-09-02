/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: '#FAFAFA',
        surface: '#FFFFFF',
        text: '#111827',
        'text-secondary': '#6B7280',
        border: '#E5E7EB',
        accent: '#2563EB',
        'accent-hover': '#1D4ED8',
        success: '#16A34A',
      },
    },
  },
  plugins: [],
};
