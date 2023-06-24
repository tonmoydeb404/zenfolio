import { Badge } from "../ui/badge";

type Props = {
  title: string;
  level: string;
};

const SkillCard = ({ title, level }: Props) => {
  return (
    <div className="skill-card">
      <h3 className="skill-card_title">{title}</h3>
      <Badge className="rounded-sm">{level}</Badge>
    </div>
  );
};

export default SkillCard;
