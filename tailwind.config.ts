import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#000000', 
        'secondary-color': '#979797', 
        'accent-color': '#D87D4A' 
      },
      fontSize: {
        'xs': ['13px', '25px'],
        'sm': ['14px', '19px'],
        'base': ['15px', '25px'],
        'xl': ['18px', '24px'],
        '2xl': ['24px', '33px'],
        '3xl': ['28px', '38px'],
        '4xl': ['36px', '36px'],
        '5xl': ['40px', '44px'],
        '6xl': ['56px', '58px'],
        'overline-size': [
          '14px',
          {
            lineHeight: '19px',
            letterSpacing: '10px',
          }
        ]
      },
      borderColor: {
        'input-default-color': '#CFCFCF', 
        'input-focus-color': '#D87D4A', 
        'input-alert-color': '#CD2C2C' 
      },
      backgroundColor: {
        'orange-color': '#D87D4A',
        'button-orange-color': '#D87D4A',
        'button-orange-hover-color': '#fbaf85',
        'content-color': '#f1f1f1',
        'footer-color': '#101010'
      },
      letterSpacing: {
        'overline-spacing': '10px'
      },
      maxWidth: {
        'desktop-width': '1110px'
      }
    },
  },
  plugins: [],
};
export default config;
