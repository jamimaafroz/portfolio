import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/Project.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load projects:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading projects...</p>;
  }
  console.log("Projects array:", projects);

  return (
    <div className="flex gap-6 justify-center flex-wrap my-10">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
