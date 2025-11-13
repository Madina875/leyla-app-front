import React, { ReactNode } from "react";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <main className="min-h-[70vh]">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
