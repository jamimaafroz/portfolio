import React from "react";

// Using the same dark theme palette as the Education section
const colors = {
  bgPrimary: "#0F172A",   // Navbar dark / Background
  bgSecondary: "#1E293B", // Card background
  accent: "#10B981",      // Emerald accent
  textMain: "#F8FAFC",    // Main white text
  textMuted: "#94A3B8",   // Gray for dates/secondary text
};

const Experience = () => {
  const experienceData = [
    {
      role: "Freelance Web Developer",
      company: "Self-employed",
      year: "2022 - Present",
      description:
        "Built and deployed custom websites for clients using MERN stack. Worked on both frontend and backend functionalities to deliver scalable digital solutions.",
    },
    // You can easily add more experiences here in the future
  ];

  return (
    <section
      id="experience"
      className="py-16"
      style={{ backgroundColor: colors.bgPrimary }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2
          className="text-4xl font-bold mb-12 text-center tracking-wide"
          style={{ color: colors.textMain }}
        >
          Experience<span style={{ color: colors.accent }}>.</span>
        </h2>

        {/* Timeline Container */}
        <div className="relative border-l-2 ml-3 md:ml-0" style={{ borderColor: colors.bgSecondary }}>
          {experienceData.map((exp, index) => (
            <div key={index} className="mb-10 ml-8 md:ml-10 relative group">
              
              {/* Timeline Dot */}
              <span 
                className="absolute flex items-center justify-center w-4 h-4 rounded-full -left-[41px] md:-left-[49px] top-1.5 transition-all duration-300 group-hover:scale-125"
                style={{ backgroundColor: colors.accent, boxShadow: `0 0 10px ${colors.accent}` }}
              ></span>

              {/* Content Card */}
              <div
                className="rounded-xl p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  backgroundColor: colors.bgSecondary,
                  borderLeft: `4px solid ${colors.accent}`,
                }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                  <h3
                    className="text-2xl font-semibold"
                    style={{ color: colors.textMain }}
                  >
                    {exp.role}
                  </h3>
                  <span 
                    className="inline-block px-3 py-1 text-sm font-medium rounded-full self-start"
                    style={{ backgroundColor: `${colors.accent}20`, color: colors.accent }}
                  >
                    {exp.year}
                  </span>
                </div>
                
                <h4 className="text-lg font-medium mb-3" style={{ color: colors.textMuted }}>
                  {exp.company}
                </h4>
                
                <p className="leading-relaxed text-sm md:text-base" style={{ color: colors.textMuted }}>
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;