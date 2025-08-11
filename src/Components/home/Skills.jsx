import React from "react";

const colors = {
  cream: "#E8D6CB",
  softRose: "#D0ADA7",
  dustyRed: "#AD6A6C",
  deepPlum: "#5D2E46",
  lavender: "#B58DB6",
};

const Skills = () => {
  const skillCategories = {
    Frontend: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
    Backend: ["Node.js", "Express.js", "MongoDB", "Firebase", "REST API"],
    Tools: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Netlify"],
  };

  return (
    <section
      id="skills"
      className="py-16"
      style={{ backgroundColor: colors.cream, color: colors.deepPlum }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-3xl font-bold mb-10 text-center"
          style={{
            color: colors.dustyRed,
            fontFamily: "'Mozilla Headline', sans-serif",
          }}
        >
          My Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skillCategories).map(([category, skills], index) => (
            <div
              key={index}
              className="rounded-lg p-6 shadow-lg"
              style={{
                backgroundColor: colors.softRose,
                color: colors.deepPlum,
              }}
            >
              <h3
                className="text-xl font-semibold mb-4"
                style={{
                  color: colors.dustyRed,
                  fontFamily: "'Urbanist', sans-serif",
                  textShadow: "0 1px 3px rgba(0,0,0,0.2)",
                }}
              >
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                  <span
                    key={i}
                    className="rounded-full px-4 py-2 text-sm font-medium cursor-default transform transition-transform duration-300 hover:scale-110 select-none"
                    style={{
                      backgroundColor: colors.dustyRed,
                      color: colors.cream,
                      fontFamily: "'Urbanist', sans-serif",
                      userSelect: "none",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
