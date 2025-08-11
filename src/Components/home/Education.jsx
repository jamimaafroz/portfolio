import React from "react";

const colors = {
  cream: "#E8D6CB",
  softRose: "#D0ADA7",
  dustyRed: "#AD6A6C",
  deepPlum: "#5D2E46",
  lavender: "#B58DB6",
};

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor's in Computer Science & Engineering",
      institution: "Your University Name",
      year: "2021 - Present",
      description:
        "Focused on full-stack development, algorithms, and modern web technologies. Actively involved in coding competitions and hackathons.",
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
          Educational Qualification
        </h2>
        <div className="space-y-8">
          {educationData.map((edu, index) => (
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
                {edu.degree}
              </h3>
              <p
                className="mt-1 font-medium"
                style={{ color: colors.dustyRed }}
              >
                {edu.institution} | {edu.year}
              </p>
              <p
                className="mt-4 leading-relaxed"
                style={{ color: colors.deepPlum, opacity: 0.85 }}
              >
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
