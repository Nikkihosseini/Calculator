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
    colors: {
        "lightBlue":{
          100 : "#daf0fe",
          150 : "#b9daf9",
          200 : '#edffff',
          250 : '#c5e2f4',
          300 : '#9cccf2', 
          350 : '#548dba',
          400 : '#1aacff',
          450 : '#98f6ff',
          500 : '#408dc5',
          550 : '#263842',
        },
        "darkBlue" : {
          100 : '#feffff',
          150 : '#0f1f2c',
          200 : '#192938',
          250 : '#4197ca',
          300 : '#273649',
          350 : '#005eb5',
          400 : '#44a8ff',
          450 : '#238ef8',
          500 : '#8dd4ff',
        },
        'blue': {
          150 : '#5982a0'
        },
        'gray': {
          150 : '#788895'
        }
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
    boxShadow: {
      "equalShadow": 'inset 0 0 11px 1px rgba(152,246,255,1)',
      "btnShadow": "inset 0 0 11px 1px rgba(250,254,255,1)",
    },
}
};
export const plugins = [
  function ({ addVariant }) {
    addVariant('child', '& > *');
    addVariant('child-hover', '& > *:hover');
  }
];



