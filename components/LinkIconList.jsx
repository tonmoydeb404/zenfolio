import Link from "next/link";
import React from "react";
import { Menu } from "react-daisyui";
import icons from "../constants/icons";

const LinkIconList = ({ list = [] }) => {
  return list && list.length ? (
    <Menu>
      {list.map((item) =>
        icons[item.iconName] ? (
          <li key={item.id} role="menuitem">
            <Link
              href={item.path}
              target="_blank"
              rel="noreferrer"
              title={item.title}
            >
              {icons[item.iconName]}
            </Link>
          </li>
        ) : null
      )}
    </Menu>
  ) : (
    ""
  );
};

export default LinkIconList;
