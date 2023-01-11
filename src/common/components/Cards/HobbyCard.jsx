import React from "react";
import { Card } from "react-daisyui";
import icons from "../../../constants/icons";

const HobbyCard = ({ icon = null, title = null }) => {
  return (
    <Card className=" hobby_card">
      <Card.Body>
        <i className={`icon`}>{icons[icon]}</i>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default HobbyCard;
