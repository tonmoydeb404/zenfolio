import React from "react";
import { Menu } from "react-daisyui";

const LinkIconList = ({ list = [] }) => {
  return list && list.length ? (
    <Menu>
      {list.map((item) => (
        <li key={item.id}>
          <a href={item.link} target="_blank" rel="noreferrer">
            <i className={`bx ${item.icon}`}></i>
          </a>
        </li>
      ))}
    </Menu>
  ) : (
    ""
  );
};

export default LinkIconList;
