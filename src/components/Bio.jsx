import { SVG } from "./SVG";

export const Bio = ({ onGoToProjects }) => {
  return (
    <section className="min-h-screen flex flex-col justify-center max-w-xl m-auto px-4">
      <div className="bg-black/40 rounded-lg p-4 flex flex-col gap-3">
        {/* Windows icons */}
        <div className="flex flex-row self-end">
          <SVG iconName={"icon-window-minimize"} withShadow={false} isTechIcon={false} width={24} height={24} />
          <SVG
            iconName={"icon-window-restore"}
            withShadow={false}
            isTechIcon={false}
            width={24}
            height={23}
            className={"rotate-180"}
          />
          <SVG iconName={"icon-window-close"} withShadow={false} isTechIcon={false} width={22} height={22} />
        </div>

        {/* Info */}
        <p className="text-green-400 font-mono text-sm">PS{">"} who-am-I</p>
        <h2 className="font-mono font-medium text-3xl">Oihane García de Cáceres López</h2>
        <p className="font-mono text-gray-400">Fullstack Web Developer</p>

        <p className="text-green-400 font-mono text-sm">PS{">"} skills</p>
        <p className="font-mono text-gray-400 font-light text-sm">
          I'm specialized in Express, React and Typescript, but I can also work with Java, Python, and frameworks like
          Angular or Next.js.
        </p>

        <p className="text-green-400 font-mono text-sm">PS{">"} profiles</p>
        <div className="flex flex-row gap-2">
          <a
            href="https://github.com/ori0nis"
            target="_blank"
            className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20 font-mono text-sm text-gray-200"
          >
            GitHub
          </a>
          <a
            href="http://linkedin.com/in/oihanegdcl/"
            target="_blank"
            className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20 font-mono text-sm text-gray-200"
          >
            LinkedIn
          </a>
        </div>

        {/* Jump to project list */}
        <button
          onClick={onGoToProjects}
          className="mt-3 text-sm w-fit m-auto font-mono text-green-400 hover:text-green-700 cursor-pointer transition"
        >
          PS{">"} view-projects
        </button>
      </div>
    </section>
  );
};
