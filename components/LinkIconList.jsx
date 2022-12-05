import Link from "next/link";
import React from "react";
import { Menu } from "react-daisyui";

const LinkIconList = ({ list = [] }) => {
  return list && list.length ? (
    <Menu>
      {list.map((item) => (
        <li key={item.id}>
          <Link href={item.link} target="_blank" rel="noreferrer">
            <i className={`bx ${item.icon}`}></i>
          </Link>
        </li>
      ))}
    </Menu>
  ) : (
    ""
  );
};

export default LinkIconList;
