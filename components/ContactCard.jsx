import Link from "next/link";
import React from "react";
import { Card } from "react-daisyui";

const ContactCard = ({
  icon = null,
  title = null,
  text = null,
  link = null,
}) => {
  return (
    <Card className="contact_card">
      {icon ? (
        <figure>
          <i className={`bx ${icon}`}></i>
        </figure>
      ) : (
        ""
      )}
      <Card.Body>
        {title ? <Card.Title>{title}</Card.Title> : ""}
        {text || link ? (
          <Link href={link || "#"}>
            <a className="contact_card_link">{text || link}</a>
          </Link>
        ) : (
          ""
        )}
      </Card.Body>
    </Card>
  );
};

export default ContactCard;
