import React from "react";
import Header from "./header";

const HeaderLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default HeaderLayout;
