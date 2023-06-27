"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link as NavLink } from "@/types/hygraph.type";
import Link from "next/link";

type Props = {
  className?: string;
  navLinks: NavLink[];
};

const DesktopLinks = ({ className = "", navLinks = [] }: Props) => {
  return (
    <NavigationMenu className={className}>
      <NavigationMenuList>
        {navLinks
          ? navLinks.map((link) => (
              <NavigationMenuItem key={link.id}>
                <Link
                  href={link.path}
                  target={link.newTab ? "_blank" : undefined}
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {link.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))
          : null}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DesktopLinks;
