import React from "react";
import { Link } from "@nextui-org/link";
import {
  Navbar, NavbarBrand, NavbarContent, NavbarItem,
} from "@nextui-org/navbar";

import CalendarNavigator from "./calendar-navigator";
import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "@/components/icons";

const Header: React.FC = () => {
  return (
    <header>
      <Navbar maxWidth="xl">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
            aria-label="Homepage"
          >
            <Logo />
          </Link>
        </NavbarBrand>
        <NavbarContent className="sm:[&&]:justify-between [&&]:justify-end">
          <NavbarItem className="hidden sm:flex px-6 gap-2">
            <ThemeSwitch />
          </NavbarItem>
          <NavbarItem>
            <CalendarNavigator />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </header>
  );
};

export default Header;
