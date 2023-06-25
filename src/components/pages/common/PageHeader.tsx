import { ReactNode } from "react";

type Props = {
  title?: string;
  desc?: string;
  children?: ReactNode;
};

const PageHeader = ({ title, children, desc }: Props) => {
  return (
    <header className="page-header py-10">
      {title ? <h1 className="page-header_title">{title}</h1> : null}
      {desc ? <p className="page-header_desc">{desc}</p> : null}
      {children}
    </header>
  );
};

export default PageHeader;
