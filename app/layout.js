
  import {  Orbitron,Manrope, Exo } from "next/font/google";
  import "./globals.css";



const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  display: "swap",
});
const exo = Exo({
  variable: "--font-exo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  display: "swap",
});

  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body
          className={`${orbitron.variable} ${manrope.variable} ${exo.variable}  antialiased`}
        >
          {children}
        </body>
      </html>
    );
  }
