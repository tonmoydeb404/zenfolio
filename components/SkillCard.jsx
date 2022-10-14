import React from "react";

const SkillCard = ({ progress = null, title = null }) => {
  return (
    <div className="skills_card" style={{ "--progress": `${progress}%` }}>
      <h3 className="skills_title">{title}</h3>
      <span className="skills_progress">{progress}%</span>
    </div>
  );
};

export default SkillCard;
