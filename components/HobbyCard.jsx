import React from "react";
import { Card } from "react-daisyui";

const HobbyCard = ({ icon = null, title = null }) => {
  return (
    <Card className=" hobby_card">
      <Card.Body>
        <i className={`bx ${icon} icon`}></i>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default HobbyCard;
