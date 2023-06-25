import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="container">
        <div className="wrapper">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
