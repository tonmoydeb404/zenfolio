import HobbyCard from "@/components/cards/HobbyCard";
import hobbyIcons from "@/config/icons/hobby-icons";
import { Hobby } from "@/types/profile.type";

type Props = {
  title: string;
  description: string;
  hobbies: Hobby[];
};

const HomeHobbies = ({ title, description, hobbies }: Props) => {
  return (
    <section className="py-16">
      <h2 className="block_heading mb-10">{title}</h2>
      <p className="block_desc mb-10">{description}</p>

      <div className="grid sm:grid-cols-3 gap-3">
        {hobbies?.map((hobby) => (
          <HobbyCard
            key={hobby.id}
            title={hobby.title}
            icon={hobbyIcons[hobby.icon]}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeHobbies;
