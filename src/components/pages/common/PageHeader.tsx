import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  title?: string;
  desc?: string;
  children?: ReactNode;
  className?: string;
};

const PageHeader = ({ title, children, desc, className }: Props) => {
  return (
    <header className={`"page-header ${cn("py-10", className)}`}>
      {title ? <h1 className="page-header_title">{title}</h1> : null}
      {desc ? <p className="page-header_desc">{desc}</p> : null}
      {children}
    </header>
  );
};

export default PageHeader;
