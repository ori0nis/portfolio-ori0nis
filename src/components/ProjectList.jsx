import { useEffect, useState } from "react";
import { getProjects } from "../service/projectService";
import { Project } from "./Project";

export const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  return (
    <section className="min-h-screen flex items-center">
      <div className="flex flex-col gap-5 max-w-md m-auto">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
