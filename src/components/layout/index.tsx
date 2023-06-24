import { ReactNode } from "react";
import Navbar from "./Navbar";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="container">
        <div className="wrapper">{children}</div>
      </main>
    </>
  );
};

export default AppLayout;
