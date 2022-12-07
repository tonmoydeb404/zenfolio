import Link from "next/link";
import React from "react";

const FeaturedCard = ({ className = "", link, title }) => {
  return (
    <article className={`card featured_card ${className}`}>
      <div className="card-body">
        <h2>
          <Link href={link} className="card-title">
            {title}
          </Link>
        </h2>
        <Link href={link} className="featured_card_btn">
          read more
          <i className="bx bx-right-arrow-alt icon"></i>
        </Link>
      </div>
    </article>
  );
};

export default FeaturedCard;
