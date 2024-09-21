import React from "react";
import Footer from "./footer";

const FooterLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default FooterLayout;
