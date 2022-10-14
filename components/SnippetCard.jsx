import Link from "next/link";
import React from "react";
import { Card } from "react-daisyui";

const SnippetCard = ({
  icon = null,
  title = null,
  subtitle = null,
  link = null,
}) => {
  return (
    <Link href={link}>
      <a className="card snippet_card focus:outline-none focus-within:outline-none">
        <figure>
          <i className={`bx ${icon || "bx-code-alt"}`}></i>
        </figure>

        <Card.Body>
          {title && <h2 className="card-title">{title}</h2>}

          {subtitle && <p className="card-text">{subtitle}</p>}
        </Card.Body>
      </a>
    </Link>
  );
};

export default SnippetCard;
