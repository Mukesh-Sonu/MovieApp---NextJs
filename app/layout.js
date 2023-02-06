import "./globals.css";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={`${montserrat.className} mx-32 my-12`}>
        <h2 className="text-5xl text-center pb-10 text-yellow-500">
          All About Movies
        </h2>
        {children}
      </body>
    </html>
  );
}
