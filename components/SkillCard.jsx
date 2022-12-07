import React from "react";

const progressLevel = {
  beginner: 25,
  junior: 50,
  intermediate: 75,
  expert: 100,
};

const SkillCard = ({ level = null, title = null }) => {
  return (
    <div
      className="skills_card"
      style={{ "--progress": `${progressLevel[level.toLowerCase()] || 0}%` }}
    >
      <h3 className="skills_title">{title}</h3>
      <span className="skills_level">{level.toLowerCase()}</span>
    </div>
  );
};

export default SkillCard;
