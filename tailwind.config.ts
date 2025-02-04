import type { Config } from "tailwindcss";


const config: Config = {
  
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ali: " #676767",
        card: "#F7F7F7",
        place: "#505050",

      },
      screens: {
  			"um": '428px',
  			"tablet": '700px', 		
        'mo': {
  				'max': '428px'
  			}	 
       
  			}     
    },
  },
  plugins: [],
} ;
export default config;
