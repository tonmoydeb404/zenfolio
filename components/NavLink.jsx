import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const NavLink = ({
  className = "",
  path = "",
  children,
  activeClassName = "active",
  ...props
}) => {
  const router = useRouter();

  return (
    <Link href={path}>
      <a
        className={`${className} ${
          router.asPath.includes(path) ? activeClassName : ""
        }`}
        {...props}
      >
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
