import React from "react";

const colors = {
  cream: "#E8D6CB",
  dustyRed: "#AD6A6C",
  deepPlum: "#5D2E46",
};

const ResumeButton = () => {
  return (
    <section
      id="resume"
      className="py-16 text-center"
      style={{ backgroundColor: colors.cream, color: colors.deepPlum }}
    >
      <h3
        className="text-3xl font-bold mb-8"
        style={{
          color: colors.dustyRed,
          fontFamily: "'Mozilla Headline', sans-serif",
        }}
      >
        Download My Resume
      </h3>
      <a
        href="/resume.pdf"
        // download
        className="inline-block px-10 py-4 rounded-lg font-semibold shadow-lg transition-colors duration-300"
        style={{
          backgroundColor: colors.dustyRed,
          color: colors.cream,
          fontFamily: "'Urbanist', sans-serif",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = colors.deepPlum)
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = colors.dustyRed)
        }
      >
        📄 Download Resume
      </a>
    </section>
  );
};

export default ResumeButton;
