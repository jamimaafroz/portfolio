import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate, useParams } from "react-router";

const colors = {
  cream: "#E8D6CB",
  softRose: "#D0ADA7",
  dustyRed: "#AD6A6C",
  deepPlum: "#5D2E46",
  lavender: "#B58DB6",
};

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/Project.json")
      .then((res) => res.json())
      .then((data) => {
        const foundProject = data.find((p) => p.id === parseInt(id));
        setProject(foundProject || null);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load project details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <p
        className="text-center mt-10 font-mozilla"
        style={{
          color: colors.deepPlum,
          fontWeight: "600",
          fontSize: "1.2rem",
        }}
      >
        Loading project details...
      </p>
    );
  }

  const details = project.detailsPage;

  return (
    <motion.div
      className="max-w-4xl mx-auto p-8 rounded-xl shadow-2xl font-mozilla"
      style={{ backgroundColor: colors.cream, color: colors.deepPlum }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h1
        className="text-4xl font-extrabold mb-8 tracking-tight"
        style={{ color: colors.dustyRed }}
      >
        {project.projectName}
      </h1>
      <motion.img
        src={project.projectImage}
        alt={project.projectName}
        className="w-full h-72 md:h-96 object-cover rounded-xl mb-8 shadow-lg"
        style={{ border: `5px solid ${colors.lavender}` }}
        initial={{ scale: 0.97 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      <section className="mb-8">
        <h3
          className="text-2xl font-semibold mb-3 tracking-wide"
          style={{ color: colors.softRose }}
        >
          Main Technology Stack Used:
        </h3>
        <ul className="list-disc list-inside space-y-1 text-lg">
          {details.mainTechStack.map((tech, idx) => (
            <li key={idx}>{tech}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h3
          className="text-2xl font-semibold mb-3 tracking-wide"
          style={{ color: colors.softRose }}
        >
          Brief Description:
        </h3>
        <p className="text-lg leading-relaxed">{details.briefDescription}</p>
      </section>

      <section className="mb-8">
        <h3
          className="text-2xl font-semibold mb-3 tracking-wide"
          style={{ color: colors.softRose }}
        >
          Live Project Link:
        </h3>
        <a
          href={details.liveProjectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-xl font-medium block"
          style={{ color: colors.dustyRed }}
        >
          {details.liveProjectLink}
        </a>
      </section>

      <section className="mb-8">
        <h3
          className="text-2xl font-semibold mb-3 tracking-wide"
          style={{ color: colors.softRose }}
        >
          GitHub Repository Link (Client):
        </h3>
        <a
          href={details.githubRepoClient}
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-xl font-medium block"
          style={{ color: colors.dustyRed }}
        >
          {details.githubRepoClient}
        </a>
      </section>

      <section className="mb-8">
        <h3
          className="text-2xl font-semibold mb-3 tracking-wide"
          style={{ color: colors.softRose }}
        >
          Challenges Faced While Developing:
        </h3>
        <p className="text-lg leading-relaxed">{details.challengesFaced}</p>
      </section>

      <section className="mb-10">
        <h3
          className="text-2xl font-semibold mb-3 tracking-wide"
          style={{ color: colors.softRose }}
        >
          Potential Improvements and Future Plans:
        </h3>
        <p className="text-lg leading-relaxed">
          {details.potentialImprovements}
        </p>
      </section>

      <Link
        to="/projects"
        className="inline-block mt-4 px-6 py-3 rounded-lg font-semibold tracking-wide shadow-md transition-colors duration-300"
        style={{ backgroundColor: colors.dustyRed, color: colors.cream }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = colors.lavender;
          e.target.style.color = colors.deepPlum;
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = colors.dustyRed;
          e.target.style.color = colors.cream;
        }}
      >
        ← Back to Projects
      </Link>
    </motion.div>
  );
};

export default ProjectDetails;
