import { BreadCrumb } from "@/types/breadcrumb.type";
import Link from "next/link";
import { Fragment, ReactNode } from "react";
import { LuChevronRight } from "react-icons/lu";

type Props = {
  links: BreadCrumb[];
  seperator?: ReactNode;
  className?: string;
};

const BreadCrumbs = ({
  links = [],
  seperator = <LuChevronRight />,
  className = "",
}: Props) => {
  return (
    <section className={`flex items-center gap-1 text-sm py-4 ${className}`}>
      {links &&
        links.map((link) => (
          <Fragment key={link.path}>
            <Link className="font-medium hover:underline" href={link.path}>
              {link.title}
            </Link>
            <span className="opacity-60">{seperator}</span>
          </Fragment>
        ))}
    </section>
  );
};

export default BreadCrumbs;
