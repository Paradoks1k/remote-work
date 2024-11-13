import React, { useState } from "react";
import { ReactComponent as LogoIcon } from "../../images/logo.svg";
import { ReactComponent as MenuIcon } from "../../images/icon-menu.svg";
import { ReactComponent as MCloseMenu } from "../../images/icon-close-menu.svg";
import { NavItem } from "../nav-item";
import { NavMenu } from "../nav-menu";
import { Features } from "./constans";
import { Company } from "./constans";
import { Button } from "../Button/indexd";
import { MobileMenu } from "../mobile-menu";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="flex items-center">
      <LogoIcon />
      <nav className="hidden xl:flex space-x-6 ml-8 items-center">
        <NavItem text="Feature">
          <NavMenu items={Features} />
        </NavItem>
        <NavItem text="Company">
          <NavMenu items={Company} />
        </NavItem>
        <NavItem text="Careers" />
        <NavItem text="About" />
      </nav>
      <div className="hidden  ml-auto xl:flex space-x-5">
        <Button>Login</Button>
        <Button hasBorder={true}>Register</Button>
      </div>
      <div
        className="flex ml-auto cursor-pointer z-30 xl:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <MCloseMenu /> : <MenuIcon />}
      </div>
      <MobileMenu isOpen={isMobileMenuOpen} />
    </header>
  );
};
