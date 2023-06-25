import HobbyCard from "@/components/cards/HobbyCard";
import { hobbyIcons } from "@/config/hobby-icons";

const HomeHobbies = () => {
  return (
    <section className="py-16">
      <h2 className="block_heading mb-10">Hobbies</h2>

      <div className="grid sm:grid-cols-3 gap-3">
        <HobbyCard title="Reading Books" icon={hobbyIcons.READING_BOOKS} />
        <HobbyCard title="UI Design" icon={hobbyIcons.DESIGN} />
        <HobbyCard title="Writing Codes" icon={hobbyIcons.CODE} />
      </div>
    </section>
  );
};

export default HomeHobbies;
