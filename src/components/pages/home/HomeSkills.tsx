import SkillCard from "@/components/cards/SkillCard";

const HomeSkills = () => {
  return (
    <section className="py-10">
      <h2 className="block_heading mb-1">My Skills</h2>
      <p className="block_desc mb-10">
        Here I mentioned those technologies that I love to work with.
      </p>

      <div className="grid sm:grid-cols-2 gap-3">
        <SkillCard title="HTML" level="expert" />
        <SkillCard title="CSS" level="expert" />
      </div>
    </section>
  );
};

export default HomeSkills;
