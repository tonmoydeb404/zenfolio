import React from "react";
import skill from "../../../constants/skill.json";

const SkillCard = ({ level = null, title = null }) => {
  return (
    <div
      className="skills_card"
      style={{ "--progress": `${skill[level.toLowerCase()] || 0}%` }}
    >
      <h3 className="skills_title">{title}</h3>
      <span className="skills_level">{level.toLowerCase()}</span>
    </div>
  );
};

export default SkillCard;
