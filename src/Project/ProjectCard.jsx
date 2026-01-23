import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const colors = {
  bgPrimary: "#0F172A",
  bgSecondary: "#1E293B",
  accent: "#10B981",
  textMain: "#F8FAFC",
  textMuted: "#94A3B8",
};

const ProjectCard = ({ project }) => {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group h-full overflow-hidden rounded-xl border shadow-md"
      style={{
        backgroundColor: colors.bgSecondary,
        borderColor: `${colors.textMuted}20`,
      }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.projectImage}
          alt={project.projectName}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Content */}
      <div className="flex flex-col p-6 h-full">
        <h3
          className="text-xl font-semibold mb-2"
          style={{ color: colors.textMain }}
        >
          {project.projectName}
        </h3>

        <p
          className="text-sm leading-relaxed mb-4 line-clamp-3"
          style={{ color: colors.textMuted }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags?.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 rounded-full border font-medium"
              style={{
                color: colors.accent,
                borderColor: `${colors.accent}40`,
                backgroundColor: `${colors.accent}12`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link to={`/projects/${project.id}`} className="mt-auto">
          <button
            className="w-full py-2.5 rounded-lg font-semibold tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
            style={{
              backgroundColor: colors.accent,
              color: colors.bgPrimary,
            }}
          >
            View Details →
          </button>
        </Link>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
