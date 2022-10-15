import Image from "next/future/image";
import Link from "next/link";
import React from "react";
import { Card } from "react-daisyui";
import { BiGitBranch, BiLinkExternal } from "react-icons/bi";

export const ProjectCardSkeleton = () => {
  return (
    <div className="project_card  bg-white dark:bg-slate-800 shadow-sm bordered  animate-pulse">
      <figure>
        <div className="h-52 bg-slate-200 dark:bg-slate-700 rounded mb-3"></div>
      </figure>
      <div className="card-body">
        <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded mb-3"></div>
        <div className="grid grid-cols-3 gap-x-4 gap-y-2">
          <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded col-span-2"></div>
          <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded col-span-1"></div>
          <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded col-span-3"></div>
          <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded col-span-3"></div>
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
