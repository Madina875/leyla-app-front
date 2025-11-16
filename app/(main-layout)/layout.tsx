import React, { ReactNode } from "react";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import SubHeader from "../../components/common/SubHeader";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <SubHeader />
      <Header />
      <main className="min-h-[70vh]">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
