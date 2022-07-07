import type { PropsWithChildren } from "react";
import FooterComponent from "../footer/Footer";
import HeaderComponent from "../header/Header";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <HeaderComponent />
        <main>{children}</main>
      </div>
      <FooterComponent />
    </div>
  );
};
export default Layout;
