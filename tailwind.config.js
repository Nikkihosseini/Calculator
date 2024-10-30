/** @type {import('tailwindcss').Config} */
export const content = [
  './Public/**/*.{html,js}',
  './components/**/*.{html,js}',
];
export const darkMode = "class";
export const theme = {
  extend: {
    fontFamily: {
      "RobotoBold": "Roboto Bold",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '0.625rem',
      },
    },
  screens: {
    'xs': '480px',
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
  },
}
};
export const plugins = [
  function ({ addVariant }) {
    addVariant('child', '& > *');
    addVariant('child-hover', '& > *:hover');
  }
];



