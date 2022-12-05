import Link from "next/link";
import React from "react";
import { Button, Card } from "react-daisyui";

export const BlogCardSkeleton = () => {
  return (
    <div className="card bg-secondary shadow-sm bordered">
      <div className="card-body animate-pulse">
        <div className="h-3 bg-base-content/10 rounded mb-3"></div>
        <div className="grid grid-cols-3 gap-x-4 gap-y-2 mb-5">
          <div className="h-2 bg-base-content/10 rounded col-span-2"></div>
          <div className="h-2 bg-base-content/10 rounded col-span-1"></div>
          <div className="h-2 bg-base-content/10 rounded col-span-3"></div>
          <div className="h-2 bg-base-content/10 rounded col-span-1"></div>
          <div className="h-2 bg-base-content/10 rounded col-span-2"></div>
        </div>
        <div className="items-center hidden sm:flex">
          <div className="inline-flex gap-1">
            <div className="btn-xs btn border-0 bg-base-content/10 rounded-sm">
              <div className="invisible">tag</div>
            </div>
            <div className="btn-xs btn border-0 bg-base-content/10 rounded-sm">
              <div className="invisible">tag</div>
            </div>
            <div className="btn-xs btn border-0 bg-base-content/10 rounded-sm">
              <div className="invisible">tag</div>
            </div>
          </div>

          <div className="btn btn-sm border-0 bg-base-content/10 rounded-sm ml-auto">
            <div className=" invisible">read more</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogCard = ({ title = null, link = null, text = null, tags = [] }) => {
  return (
    <Card bordered={false} className="blog_card">
      <Card.Body>
        <h2>
          <Link href={link} className="card-title">
            {title}
          </Link>
        </h2>
        {text && <p className="card-text">{text}</p>}

        <div className="blog_card_footer">
          <div className="blog_card_tags">
            {tags && tags.length
              ? tags.map((tag) => (
                  <Link key={tag} href={`/blog?q=${tag.split(" ").join("-")}`}>
                    {tag}
                  </Link>
                ))
              : ""}
          </div>

          <Link href={link} passHref>
            <Button color="ghost" className="blog_card_btn">
              Read more
              <i className="bx bx-right-arrow-alt icon"></i>
            </Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
