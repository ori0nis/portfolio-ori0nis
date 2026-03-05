import { useEffect, useState } from "react";
import { getProjects } from "../service/projectService";
import { Project } from "./Project";

export const ProjectList = ({ onGoToContact }) => {
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

        {/* Jump to contact form */}
        <button onClick={onGoToContact} className="mt-3 text-sm w-fit m-auto font-mono text-green-400 hover:text-green-700 cursor-pointer transition">
          PS{">"} contact-me --email
        </button>
      </div>
    </section>
  );
};
