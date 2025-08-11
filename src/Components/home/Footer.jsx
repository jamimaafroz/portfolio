import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const colors = {
  cream: "#E8D6CB",
  softRose: "#D0ADA7",
  dustyRed: "#AD6A6C",
  deepPlum: "#5D2E46",
  lavender: "#B58DB6",
};

const Footer = () => {
  return (
    <footer
      className="py-6 mt-12"
      style={{ backgroundColor: colors.deepPlum, color: colors.cream }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <p
          className="text-sm mb-4 md:mb-0 font-semibold"
          style={{ fontFamily: "'Urbanist', sans-serif" }}
        >
          &copy; 2025 Jamima Afroz Usha. All rights reserved.
        </p>
        <div className="flex space-x-8">
          {[
            {
              href: "mailto:jamimaafroz123@gmail.com",
              icon: FaEnvelope,
              label: "Email",
            },
            {
              href: "https://www.linkedin.com",
              icon: FaLinkedin,
              label: "LinkedIn",
            },
            {
              href: "https://github.com/jamimaafroz",
              icon: FaGithub,
              label: "GitHub",
            },
            {
              href: "https://twitter.com",
              icon: FaTwitter,
              label: "Twitter",
            },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="transition-colors duration-300 hover:text-softRose"
              style={{ fontSize: 22 }}
            >
              {Icon && <Icon />}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
