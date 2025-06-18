import "../styles/scss/custom.scss";
import "../styles/styles.css";

import "bootstrap-icons/font/bootstrap-icons.css";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ImportBsJs from "../components/ImportBsJs";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "KariCar",
  description:
    "Portfolio project for a fictional car rental company. Built using Next.js and styled with customised bootstrap.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${poppins.className}`}>
        <NavBar />
        {children}
        <Footer />

        <ImportBsJs />
      </body>
    </html>
  );
}
