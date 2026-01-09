import React from "react";
import { motion } from "framer-motion";

const colors = {
  bgPrimary: "#0F172A",   // Navbar dark
  bgSecondary: "#1E293B", // For hover shadows
  accent: "#10B981",      // Emerald accent
  textMain: "#F8FAFC",    // Off-white text
};

const ResumeButton = () => {
  return (
    <section
      id="resume"
      className="py-20 text-center"
      style={{ backgroundColor: colors.bgPrimary, color: colors.textMain }}
    >
      <h3
        className="text-4xl font-bold mb-10"
        style={{
          fontFamily: "'Mozilla Headline', sans-serif",
          color: colors.textMain,
        }}
      >
        Download My Resume
      </h3>

      <motion.a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{
          scale: 1.1,
          boxShadow: `0 0 20px ${colors.accent}, 0 0 40px ${colors.accent}`,
        }}
        whileTap={{ scale: 0.95 }}
        className="inline-block px-12 py-4 rounded-full font-semibold shadow-md transition-all duration-300"
        style={{
          backgroundColor: colors.accent,
          color: colors.bgPrimary,
          fontFamily: "'Urbanist', sans-serif",
          textShadow: "0 1px 2px rgba(0,0,0,0.2)",
        }}
      >
        📄 Download Resume
      </motion.a>
    </section>
  );
};

export default ResumeButton;
