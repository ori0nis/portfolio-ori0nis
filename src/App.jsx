import { useRef } from "react";
import { Bio } from "./components/Bio";
import { ProjectList } from "./components/ProjectList";
import { ContactForm } from "./components/ContactForm";

function App() {
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="bg-zinc-900 text-zinc-100">
      {/* Bio */}
      <Bio
        onGoToProjects={() => {
          projectsRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }}
      />

      {/* Project List */}
      <section ref={projectsRef} className="px-4">
        <ProjectList
          onGoToContact={() => {
            contactRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }}
        />
      </section>

      {/* Contact form */}
      <section ref={contactRef}>
        <ContactForm />
      </section>
    </div>
  );
}

export default App;
