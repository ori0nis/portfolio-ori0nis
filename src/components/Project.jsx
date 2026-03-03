import { SVG } from "./SVG";
import { colorHelper } from "../utils/colorHelper";
import { useState } from "react";

export const Project = ({ project }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    /* Card wrapper */
    <div className="card-wrapper hover:scale-101 transition duration-150">
      <div className="border border-zinc-700 bg-zinc-800 rounded-xl p-3 flex flex-col gap-1 card-content">
        {/* Info */}
        <h2 className="text-zinc-50 font-[Switzer] font-bold text-3xl flex justify-between items-center gap-3">
          {project.name}
          <div className="inline-flex gap-1 self-start">
            {project.tech_stack.map((tech) => (
              <SVG key={tech} iconName={tech.toLowerCase()} shadowColor={colorHelper(tech)} />
            ))}
          </div>
        </h2>

        {/* Show description button */}
        <button onClick={() => setShowDescription((prev) => !prev)}>
          <SVG
            iconName={"icon-chevron-down"}
            isTechIcon={false}
            withShadow={false}
            className={`m-auto mt-4 cursor-pointer ${showDescription ? "rotate-180" : ""}`}
            width={18}
            height={18}
          />
        </button>

        {/* Description */}
        <div
          className={`overflow-hidden transition-all duration-700 ease-in-out ${showDescription ? "max-h-30 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-1"}`}
        >
          <div className="flex flex-col gap-2 mt-1">
            <p className="text-zinc-300 font-[Switzer] font-light text-md">{project.description}</p>

            <div className="flex flex-row gap-1">
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
          </div>
        </div>
      </div>
    </div>
  );
};
