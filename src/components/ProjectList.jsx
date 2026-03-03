import { useEffect, useState } from "react";
import { getProjects } from "../service/projectService";
import { Project } from "./Project";

export const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  return (
    <div className="flex flex-col gap-5 max-w-xl m-auto">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};
