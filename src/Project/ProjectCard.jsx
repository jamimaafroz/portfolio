import React from "react";
import { Link } from "react-router";

const colors = {
  dustyRed: "#AD6A6C",
  deepPlum: "#5D2E46",
  cream: "#E8D6CB",
};

const ProjectCard = ({ project }) => {
  // console.log can stay for debugging, remove in prod tho
  return (
    <div
      className="border rounded-lg shadow-lg p-5 max-w-sm bg-cream transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
      style={{ borderColor: colors.deepPlum }}
    >
      <img
        src={project.projectImage}
        alt={project.projectName}
        className="w-full h-48 object-cover rounded-md border-2 border-dustyRed"
        style={{ borderColor: colors.dustyRed }}
      />
      <h2
        className="text-2xl font-bold mt-4"
        style={{
          color: colors.deepPlum,
          fontFamily: "'Mozilla Headline', sans-serif",
        }}
      >
        {project.projectName}
      </h2>
      <Link to={`/projects/${project.id}`}>
        <button
          className="mt-5 px-5 py-2 rounded-md text-white font-semibold transition-colors duration-300"
          style={{ backgroundColor: colors.dustyRed }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = colors.deepPlum)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = colors.dustyRed)
          }
        >
          View More / Details
        </button>
      </Link>
    </div>
  );
};

export default ProjectCard;
