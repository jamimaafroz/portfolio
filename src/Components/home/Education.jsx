import React from "react";

const colors = {
  bgPrimary: "#0F172A",   // Navbar dark / Background
  bgSecondary: "#1E293B", // Card background
  accent: "#10B981",      // Emerald accent
  textMain: "#F8FAFC",    // Main white text
  textMuted: "#94A3B8",   // Gray for dates/secondary text
};

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor's in Computer Science & Engineering",
      institution: "Your University Name",
      year: "2021 - Present",
      // Adding your impressive CGPA makes your portfolio stand out!
      gpa: "CGPA: 3.8+/4.0", 
      description:
        "Focused on full-stack development (MERN), algorithms, and modern web technologies. Actively involved in coding competitions and hackathons.",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Your College Name",
      year: "2019 - 2021",
      description:
        "Specialized in Science group with strong emphasis on Mathematics and Physics.",
    },
  ];

  return (
    <section
      id="education"
      className="py-16"
      style={{ backgroundColor: colors.bgPrimary }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2
          className="text-4xl font-bold mb-12 text-center tracking-wide"
          style={{ color: colors.textMain }}
        >
          Education<span style={{ color: colors.accent }}>.</span>
        </h2>

        {/* Timeline Container */}
        <div className="relative border-l-2 ml-3 md:ml-0" style={{ borderColor: colors.bgSecondary }}>
          {educationData.map((edu, index) => (
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
                    {edu.degree}
                  </h3>
                  <span 
                    className="inline-block px-3 py-1 text-sm font-medium rounded-full self-start"
                    style={{ backgroundColor: `${colors.accent}20`, color: colors.accent }}
                  >
                    {edu.year}
                  </span>
                </div>
                
                <h4 className="text-lg font-medium mb-3" style={{ color: colors.textMuted }}>
                  {edu.institution} {edu.gpa && <span style={{ color: colors.textMain }}> | {edu.gpa}</span>}
                </h4>
                
                <p className="leading-relaxed text-sm md:text-base" style={{ color: colors.textMuted }}>
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;