import Link from "next/link";
import React from "react";
import { Card } from "react-daisyui";

export const SnippetCardSkeleton = () => {
  return (
    <div className="card snippet_card  bg-white dark:bg-slate-800 shadow-sm bordered  animate-pulse">
      <figure>
        <div className="p-5 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
      </figure>
      <div className="card-body">
        <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded mb-3"></div>
        <div className="grid grid-cols-3 gap-x-4 gap-y-2 mb-5">
          <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded col-span-2"></div>
          <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded col-span-1"></div>
          <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded col-span-3"></div>
        </div>
      </div>
    </div>
  );
};

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
