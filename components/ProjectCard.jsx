import Image from "next/future/image";
import Link from "next/link";
import React from "react";
import { Card } from "react-daisyui";
import { BiGitBranch, BiLinkExternal } from "react-icons/bi";

const ProjectCard = ({
  imgSrc = null,
  title = null,
  text = null,
  demo = null,
  srcCode = null,
  tags = [],
}) => {
  return (
    <Card className=" project_card">
      {imgSrc ? (
        <figure>
          <Image
            src={imgSrc}
            sizes="100vw"
            width={0}
            height={0}
            alt={title}
            className="w-full h-auto"
          />
        </figure>
      ) : (
        ""
      )}
      <Card.Body>
        {title ? <Card.Title>{title}</Card.Title> : ""}
        {text ? <p>{text}</p> : ""}

        <div className="card-actions">
          {demo ? (
            <Link href={demo}>
              <a>
                <BiLinkExternal />
              </a>
            </Link>
          ) : (
            ""
          )}

          {srcCode ? (
            <Link href={srcCode}>
              <a>
                <BiGitBranch />
              </a>
            </Link>
          ) : (
            ""
          )}
        </div>

        {tags && tags.length ? (
          <div className="project_card_tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        ) : (
          ""
        )}
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
