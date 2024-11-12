import React from "react";
import { ReactComponent as LogoIcon } from "../../images/logo.svg";
import { NavItem } from "../nav-item";
import { NavMenu } from "../nav-menu";
import { Features } from "./constans";
import { Company } from "./constans";
import { Button } from "../Button/indexd";

export const Header = () => {
  return (
    <header className="flex items-center">
      <LogoIcon />
      <nav className="flex space-x-6 ml-8 items-center">
        <NavItem text="Feature">
          <NavMenu items={Features} />
        </NavItem>
        <NavItem text="Company">
          <NavMenu items={Company} />
        </NavItem>
        <NavItem text="Careers" />
        <NavItem text="About" />
      </nav>
      <div className="ml-auto flex space-x-5">
        <Button>Login</Button>
        <Button hasBorder={true}>Register</Button>
      </div>
    </header>
  );
};
