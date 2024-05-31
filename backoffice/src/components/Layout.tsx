import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Navbar />
      <main className="flex-fill container">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
