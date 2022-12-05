import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card } from "react-daisyui";
import {
  BiBookOpen,
  BiGitBranch,
  BiLinkExternal,
  BiRightArrowAlt,
} from "react-icons/bi";

export const ProjectCardSkeleton = () => {
  return (
    <div className="project_card  bg-secondary shadow-sm bordered  animate-pulse">
      <figure>
        <div className="h-52 bg-base-content/10 rounded mb-3"></div>
      </figure>
      <div className="card-body">
        <div className="h-3 bg-base-content/10 rounded mb-3"></div>
        <div className="grid grid-cols-3 gap-x-4 gap-y-2">
          <div className="h-2 bg-base-content/10 rounded col-span-2"></div>
          <div className="h-2 bg-base-content/10 rounded col-span-1"></div>
          <div className="h-2 bg-base-content/10 rounded col-span-3"></div>
          <div className="h-2 bg-base-content/10 rounded col-span-3"></div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({
  imgSrc = null,
  title = null,
  text = null,
  demo = null,
  srcCode = null,
  tags = [],
  slug = null,
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
            className="w-full h-auto min-h-[200px]"
            loading="lazy"
          />
        </figure>
      ) : (
        ""
      )}
      <Card.Body>
        {title ? (
          <Link
            href={`/portfolio/${slug}`}
            className="flex items-center justify-between gap-1"
          >
            <Card.Title className="line-clamp-1">{title}</Card.Title>

            <span className="text-2xl text-primary hover:text-primary-focus hover:translate-x-2 duration-300">
              <BiRightArrowAlt />
            </span>
          </Link>
        ) : (
          ""
        )}
        {text ? <p>{text}</p> : ""}

        <div className="card-actions">
          <Link
            href={`/portfolio/${slug}`}
            className="card-actions-icon mr-auto"
          >
            <BiBookOpen />
          </Link>

          {demo ? (
            <Link href={demo} className="card-actions-icon">
              <BiLinkExternal />
            </Link>
          ) : (
            ""
          )}

          {srcCode ? (
            <Link href={srcCode} className="card-actions-icon">
              <BiGitBranch />
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
