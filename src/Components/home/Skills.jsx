import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaServer,
  FaCode,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiFirebase, SiPostman, SiVercel, SiNetlify, SiMongodb } from "react-icons/si";

const Skills = () => {
  const skillCategories = {
    Frontend: [
      { name: "HTML", icon: <FaHtml5 size={28} color="#E34F26" /> },
      { name: "CSS", icon: <FaCss3Alt size={28} color="#1572B6" /> },
      { name: "JavaScript", icon: <FaJsSquare size={28} color="#F7DF1E" /> },
      { name: "React.js", icon: <FaReact size={28} color="#61DAFB" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={28} color="#06B6D4" /> },
    ],
    Backend: [
      { name: "Node.js", icon: <FaNodeJs size={28} color="#339933" /> },
      { name: "Express.js", icon: <SiExpress size={28} color="#000000" /> },
      { name: "MongoDB", icon: <SiMongodb size={28} color="#47A248" /> },
      { name: "Firebase", icon: <SiFirebase size={28} color="#FFCA28" /> },
      { name: "REST API", icon: <FaServer size={28} color="#F97316" /> },
    ],
    Tools: [
      { name: "Git", icon: <FaGitAlt size={28} color="#F05032" /> },
      { name: "GitHub", icon: <FaGithub size={28} color="#181717" /> },
      { name: "VS Code", icon: <FaCode size={28} color="#007ACC" /> },
      { name: "Postman", icon: <SiPostman size={28} color="#FF6C37" /> },
      { name: "Vercel", icon: <SiVercel size={28} color="#000000" /> },
      { name: "Netlify", icon: <SiNetlify size={28} color="#00C7B7" /> },
    ],
  };

  return (
    <section
      id="skills"
      className="py-20 bg-slate-950 text-slate-100"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-emerald-400">
          My Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {Object.entries(skillCategories).map(([category, skills], idx) => (
            <div
              key={idx}
              className="bg-slate-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold mb-5 text-emerald-400">
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.25, rotate: [0, 10, -10, 0] }}
                    className="flex items-center gap-3 px-4 py-2 rounded-full bg-slate-800 text-sm font-medium cursor-default select-none transition-transform duration-300"
                  >
                    {skill.icon}
                    <span className="text-slate-100">{skill.name}</span>
                  </motion.span>
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
