import React from "react";

const colors = {
  cream: "#E8D6CB",
  softRose: "#D0ADA7",
  dustyRed: "#AD6A6C",
  deepPlum: "#5D2E46",
  lavender: "#B58DB6",
};

const AboutMe = () => {
  return (
    <section
      id="about"
      className="py-16"
      style={{ backgroundColor: colors.cream, color: colors.deepPlum }}
    >
      <div
        className="max-w-5xl mx-auto px-6"
        style={{ fontFamily: "'Urbanist', sans-serif" }}
      >
        <h2
          className="text-4xl font-bold mb-8 text-center"
          style={{
            color: colors.dustyRed,
            fontFamily: "'Mozilla Headline', sans-serif",
          }}
        >
          About Me
        </h2>
        <p
          className="mb-6 leading-relaxed text-lg"
          style={{ color: colors.deepPlum }}
        >
          Hi, I'm{" "}
          <span className="font-semibold" style={{ color: colors.dustyRed }}>
            Jamima Afroz Usha
          </span>
          , a passionate Full Stack Developer specializing in the MERN stack. My
          programming journey began during my Computer Science & Engineering
          studies, where I fell in love with building interactive,
          user-friendly, and scalable web applications.
        </p>
        <p
          className="mb-6 leading-relaxed text-lg"
          style={{ color: colors.deepPlum }}
        >
          I enjoy solving complex problems, crafting intuitive UI designs, and
          working on projects that make a real impact. Whether it's frontend
          creativity or backend logic, I love exploring every part of
          development.
        </p>
        <p
          className="mb-6 leading-relaxed text-lg"
          style={{ color: colors.deepPlum }}
        >
          Outside of coding, I’m a hardcore anime fan, K-pop enthusiast (ARMY
          💜), and an avid reader of novels and comics. These interests help me
          stay creative and inspired in my tech journey.
        </p>
        <p
          className="leading-relaxed text-lg"
          style={{ color: colors.deepPlum }}
        >
          My personality is a mix of curiosity, dedication, and adaptability —
          I’m always ready to learn, improve, and collaborate on meaningful
          projects.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
