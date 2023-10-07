"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link as NavLink } from "@/types/common.type";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  className?: string;
  navLinks: NavLink[];
};

const DesktopLinks = ({ className = "", navLinks = [] }: Props) => {
  const pathname = usePathname();

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
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    active={pathname === link.path}
                  >
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
