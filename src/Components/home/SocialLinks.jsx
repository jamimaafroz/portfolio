import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const colors = {
  cream: "#E8D6CB",
  softRose: "#D0ADA7",
  dustyRed: "#AD6A6C",
  deepPlum: "#5D2E46",
  lavender: "#B58DB6",
};

const SocialLinks = () => {
  const socials = [
    { icon: <FaGithub />, url: "https://github.com/jamimaafroz" },
    { icon: <FaLinkedin />, url: "https://linkedin.com" },
    { icon: <FaTwitter />, url: "https://twitter.com" },
    { icon: <FaFacebook />, url: "https://www.facebook.com/rabaya.jessie" },
  ];

  return (
    <section
      id="social"
      className="py-10"
      style={{ backgroundColor: colors.cream, color: colors.deepPlum }}
    >
      <h3
        className="text-2xl font-bold mb-6 text-center"
        style={{
          color: colors.dustyRed,
          fontFamily: "'Mozilla Headline', sans-serif",
        }}
      >
        Connect with Me
      </h3>
      <div className="flex justify-center gap-8">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl transition-transform duration-300 hover:scale-110"
            style={{ color: colors.deepPlum }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = colors.dustyRed)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = colors.deepPlum)
            }
            aria-label={`Link to ${social.url}`}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default SocialLinks;
