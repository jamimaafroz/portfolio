import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const colors = {
  bgPrimary: "#0F172A",
  accent: "#10B981",
  textMain: "#F8FAFC",
  textMuted: "#94A3B8",
};

const SocialLinks = () => {
  const socials = [
    { icon: <FaGithub />, url: "https://github.com/jamimaafroz" },
    { icon: <FaLinkedin />, url: "https://linkedin.com" },
    { icon: <FaTwitter />, url: "https://twitter.com" },
    { icon: <FaFacebook />, url: "https://www.facebook.com/rabaya.jessie" },
  ];

  return (
    <div className="flex gap-6 mt-4">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl transition-all duration-300 hover:scale-110"
          style={{ color: colors.textMuted }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = colors.accent)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = colors.textMuted)
          }
          aria-label={`Social link ${index}`}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
