/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff4ff',
          100: '#dce9ff',
          600: '#4b41e1',
          700: '#3d35c0',
        },
        danger: {
          50: '#fef2f2',
          100: '#fee2e2',
          600: '#dc2626',
          700: '#ba1a1a',
        },
        success: {
          50: '#f0fdf4',
          600: '#16a34a',
        },
      },
      borderRadius: {
        lg: '12px',
        xl: '16px',
      },
      boxShadow: {
        sm: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
        md: '0px 1px 8px 0px rgba(0, 0, 0, 0.04)',
      },
      backdropBlur: {
        md: '12px',
      },
    },
  },
  plugins: [],
};
