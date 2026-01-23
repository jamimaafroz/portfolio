import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const colors = {
  bgPrimary: "#0F172A",
  textMain: "#F8FAFC",
  textMuted: "#94A3B8",
  accent: "#10B981",
};

const Loader = () => (
  <div className="min-h-[50vh] flex flex-col items-center justify-center gap-4">
    <motion.div
      className="w-12 h-12 rounded-full border-4"
      style={{
        borderColor: colors.textMuted,
        borderTopColor: colors.accent,
      }}
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
    />
    <p className="text-sm" style={{ color: colors.textMuted }}>
      Loading projects…
    </p>
  </div>
);

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/Project.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;

  return (
    <section
      className="max-w-7xl mx-auto px-12 py-20"
      style={{ backgroundColor: colors.bgPrimary }}
    >
      {/* Section Title */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2
          className="text-4xl font-extrabold mb-3"
          style={{ color: colors.textMain }}
        >
          Check Out My{" "}
          <span style={{ color: colors.accent }}>Projects</span>
        </h2>
        <p className="text-lg max-w-2xl" style={{ color: colors.textMuted }}>
          A curated selection of projects where I focus on clean UI,
          performance, and real-world problem solving.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.12 },
          },
        }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectList;
