"use client";

import { buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import appIcons from "@/config/icons/app-icons";
import { Link as NavLink } from "@/types/common.type";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type Props = {
  className?: string;
  navLinks: NavLink[];
};

const MobileLinks = ({ className, navLinks = [] }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className={className}>
      <Sheet open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
        <SheetTrigger
          className={buttonVariants({ variant: "outline", size: "icon" })}
          aria-label="Toggle Menu"
        >
          <appIcons.MENU className="text-lg" />
        </SheetTrigger>
        <SheetContent
          className="w-full flex items-center justify-center flex-col"
          side={"left"}
        >
          <NavigationMenu className="w-full max-w-full">
            <NavigationMenuList
              className={"flex-col items-center w-full gap-4"}
            >
              {navLinks
                ? navLinks.map((link) => (
                    <NavigationMenuItem
                      onClick={() => setIsOpen(false)}
                      key={link.id}
                    >
                      <Link
                        href={link.path}
                        target={link.newTab ? "_blank" : undefined}
                        legacyBehavior
                        passHref
                      >
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle({
                            class: "text-xl",
                          })}
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
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileLinks;
