import Image from "next/image";
import React from "react";

const Header = ({
  title = null,
  subtitle = null,
  text = null,
  imgSrc = null,
  className = "",
  children,
}) => {
  return (
    <header className={`header ${className}`}>
      <div className="header_body">
        {title ? <h1 className="header_title">{title}</h1> : ""}
        {subtitle ? <h2 className="header_subtitle">{subtitle}</h2> : ""}
        {text ? <p className="header_text">{text}</p> : ""}

        {children}
      </div>
      {imgSrc ? (
        <div className="header_media">
          <div className="avatar w-40 rounded overflow-hidden">
            <div className="w-full relative">
              <Image
                width={160}
                height={160}
                src={imgSrc}
                alt={title}
                priority
                className="brightness-90"
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
