import React from "react";

const colors = {
  cream: "#E8D6CB",
  softRose: "#D0ADA7",
  dustyRed: "#AD6A6C",
  deepPlum: "#5D2E46",
  lavender: "#B58DB6",
};

const Experience = () => {
  const experienceData = [
    {
      role: "Freelance Web Developer",
      company: "Self-employed",
      year: "2022 - Present",
      description:
        "Built and deployed custom websites for clients using MERN stack. Worked on both frontend and backend functionalities.",
    },
  ];

  return (
    <section
      id="experience"
      className="py-16"
      style={{ backgroundColor: colors.cream }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2
          className="text-3xl font-bold mb-8 text-center"
          style={{
            color: colors.deepPlum,
            fontFamily: "'Mozilla Headline', sans-serif",
          }}
        >
          Experience
        </h2>
        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="rounded-lg p-6 shadow-lg"
              style={{
                backgroundColor: colors.softRose,
                borderLeft: `6px solid ${colors.dustyRed}`,
              }}
            >
              <h3
                className="text-2xl font-semibold"
                style={{
                  color: colors.deepPlum,
                  fontFamily: "'Urbanist', sans-serif",
                }}
              >
                {exp.role}
              </h3>
              <p
                className="mt-1 font-medium"
                style={{ color: colors.dustyRed }}
              >
                {exp.company} | {exp.year}
              </p>
              <p
                className="mt-4 leading-relaxed"
                style={{ color: colors.deepPlum, opacity: 0.85 }}
              >
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
