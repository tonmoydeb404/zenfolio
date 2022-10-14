import Link from "next/link";
import React from "react";
import { Button, Card } from "react-daisyui";

const BlogCard = ({ title = null, link = null, text = null, tags = [] }) => {
  return (
    <Card bordered={false} className="blog_card">
      <Card.Body>
        <h2>
          <Link href={link}>
            <a className="card-title">{title}</a>
          </Link>
        </h2>
        {text && <p className="card-text">{text}</p>}

        <div className="blog_card_footer">
          <div className="blog_card_tags">
            {tags && tags.length
              ? tags.map((tag) => (
                  <Link key={tag} href={`/blog?q=${tag.split(" ").join("-")}`}>
                    <a>{tag}</a>
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
