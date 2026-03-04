import { useRef } from "react";
import { Bio } from "./components/Bio";
import { ProjectList } from "./components/ProjectList";

function App() {
  const projectsRef = useRef(null);

  return (
    <div className="bg-zinc-900 text-zinc-100">
      <Bio
        onGoToProjects={() => {
          projectsRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }}
      />

      <section ref={projectsRef}>
        <ProjectList />
      </section>
    </div>
  );
}

export default App;
