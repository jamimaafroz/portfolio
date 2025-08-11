import React from "react";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>

      <main className="flex-grow space-y-16 pt-17">
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
