import Link from "next/link";
import React from "react";
import { Card } from "react-daisyui";

export const SnippetCardSkeleton = () => {
  return (
    <div className="card snippet_card bg-secondary shadow-sm bordered  animate-pulse">
      <figure>
        <div className="p-5 bg-base-content/10 rounded-full"></div>
      </figure>
      <div className="card-body">
        <div className="h-3 bg-base-content/10 rounded mb-3"></div>
        <div className="grid grid-cols-3 gap-x-4 gap-y-2 mb-5">
          <div className="h-2 bg-base-content/10 rounded col-span-2"></div>
          <div className="h-2 bg-base-content/10 rounded col-span-1"></div>
          <div className="h-2 bg-base-content/10 rounded col-span-3"></div>
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
    <article className="card snippet_card ">
      <figure>
        <i className={`bx ${icon || "bx-code-alt"}`}></i>
      </figure>

      <Card.Body>
        {title && (
          <h2>
            <Link href={link}>
              <a className="card-title">{title}</a>
            </Link>
          </h2>
        )}

        {subtitle && <p className="card-text line-clamp-3">{subtitle}</p>}
      </Card.Body>
    </article>
  );
};

export default SnippetCard;
