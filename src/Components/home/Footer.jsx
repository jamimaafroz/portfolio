import React from "react";
import SocialLinks from "./SocialLinks";


const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-[#94A3B8] py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-xl font-semibold text-[#F8FAFC] mb-2">
          Check out my projects
        </h3>

        <p className="text-sm mb-4">
          Building cool things with code & creativity 🚀
        </p>

        <div className="flex justify-center">
          <SocialLinks />
        </div>

        <p className="text-xs mt-6 opacity-70">
          © {new Date().getFullYear()} Jamima. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
