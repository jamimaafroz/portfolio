import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router";

const colors = {
  bgPrimary: "#0F172A",
  bgSecondary: "#1E293B",
  accent: "#10B981",
  textMain: "#F8FAFC",
  textMuted: "#94A3B8",
};

const Loader = () => (
  <div className="min-h-screen flex flex-col items-center justify-center gap-4">
    <motion.div
      className="w-14 h-14 rounded-full border-4"
      style={{
        borderColor: colors.textMuted,
        borderTopColor: colors.accent,
      }}
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
    />
    <motion.p
      className="text-lg font-semibold"
      style={{ color: colors.textMuted }}
      animate={{ opacity: [0.4, 1, 0.4] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
    >
      Loading project details…
    </motion.p>
  </div>
);

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/Project.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id === parseInt(id));
        setProject(found || null);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <Loader />;

  const details = project.detailsPage;

  return (
    <motion.main
      className="min-h-screen px-6 md:px-16 py-12 font-mozilla"
      style={{ backgroundColor: colors.bgPrimary, color: colors.textMain }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Title */}
      <h1
        className="text-4xl md:text-5xl font-extrabold mb-6"
        style={{ color: colors.accent }}
      >
        {project.projectName}
      </h1>

      {/* Image */}
      <motion.img
        src={project.projectImage}
        alt={project.projectName}
        className="w-full max-h-[460px] object-cover rounded-lg mb-12"
        initial={{ scale: 0.97 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
      />

      {/* Content */}
      <div className="space-y-10 max-w-5xl">
        <section>
          <h3 className="text-2xl font-semibold mb-3 text-emerald-400">
            Tech Stack
          </h3>
          <p className="text-lg" style={{ color: colors.textMuted }}>
            {details.mainTechStack.join(", ")}
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-3 text-emerald-400">
            Description
          </h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.textMuted }}>
            {details.briefDescription}
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-3 text-emerald-400">
            Challenges
          </h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.textMuted }}>
            {details.challengesFaced}
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-3 text-emerald-400">
            Future Plans
          </h3>
          <p className="text-lg leading-relaxed" style={{ color: colors.textMuted }}>
            {details.potentialImprovements}
          </p>
        </section>

        {/* Links */}
        <div className="flex flex-wrap gap-6 pt-6">
          <a
            href={details.liveProjectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-4"
            style={{ color: colors.accent }}
          >
            🌐 Live Project
          </a>

          <a
            href={details.githubRepoClient}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-4"
            style={{ color: colors.textMain }}
          >
            💻 GitHub Repository
          </a>
        </div>

        {/* Back */}
        <Link
          to="/projects"
          className="inline-block pt-10 font-semibold"
          style={{ color: colors.textMuted }}
        >
          ← Back to Projects
        </Link>
      </div>
    </motion.main>
  );
};

export default ProjectDetails;
