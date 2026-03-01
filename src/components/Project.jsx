import { SVG } from "./SVG";

export const Project = ({ project }) => {
  return (
    <li className="border rounded-lg p-2">
      {/* Info */}
      <h2 className="font-[Switzer] font-bold text-5xl flex items-center justify-between">
        {project.name}
        <span className="inline-flex">
          {project.tech_stack.map((tech) => (
            <div key={tech} className="p-1">
              <SVG iconName={tech.toLowerCase()} />
            </div>
          ))}
        </span>
      </h2>
      <p className="font-[Switzer] font-light text-lg">{project.description}</p>

      {/* Repo and deploy */}
      <div className="flex flex-row">
        {project.github_repo && (
          <a href={project.github_repo} target="_blank">
            <SVG iconName={"github"} />
          </a>
        )}
        {project.deployment_link && (
          <a href={project.deployment_link} target="_blank">
            <SVG iconName={"link"} />
          </a>
        )}
      </div>
    </li>
  );
};
