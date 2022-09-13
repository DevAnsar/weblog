import type { PropsWithChildren } from "react";
import React from "react";
import FooterComponent from "../footer/Footer";
import HeaderComponent from "../header/Header";

const Layout = ({ children , headerChild }: PropsWithChildren<{headerChild? : React.ReactNode}>) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <HeaderComponent children={headerChild} />
        <main id="main">{children}</main>
      </div>
      <FooterComponent />
    </div>
  );
};
export default Layout;
