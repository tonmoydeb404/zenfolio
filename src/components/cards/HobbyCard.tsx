import { HobbyIconType } from "@/config/icons/hobby-icons";

type Props = {
  title: string;
  icon: HobbyIconType;
};

const HobbyCard = ({ title, icon: Icon }: Props) => {
  return (
    <article className="hobby-card">
      <span className="hobby-card_icon">
        <Icon />
      </span>
      <h2 className="hobby-card_title">{title}</h2>
    </article>
  );
};

export default HobbyCard;
