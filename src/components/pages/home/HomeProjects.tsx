import ProjectCard from "@/components/cards/ProjectCard";

const HomeProjects = () => {
  return (
    <section className="py-16">
      <h2 className="block_heading mb-1">Featured Projects</h2>
      <p className="block_desc mb-10">
        These are some examples of my projects and whenever I get some free-time
        I’d like to think about my next project
      </p>

      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <ProjectCard
            title="Track Taka"
            desc="Track Taka is an expense tracker application to help you in daily life money management. It allows you to track your regular expenses"
            techs={["firebase", "react js", "indexddb", "tailwindcss", "pwa"]}
            detailsLink="#"
            previewLink="#"
            sourceLink="#"
            thumbnail="https://tonmoydeb.com/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FgnOIOnr8QjarjIjbF1xt&w=1920&q=75"
          />
        </div>
        <div>
          <ProjectCard
            title="Track Taka"
            desc="Track Taka is an expense tracker application to help you in daily life money management. It allows you to track your regular expenses"
            techs={["firebase", "react js", "indexddb", "tailwindcss", "pwa"]}
            detailsLink="#"
            previewLink="#"
            sourceLink="#"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeProjects;
