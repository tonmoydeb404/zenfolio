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
import appIcons from "@/config/app-icons";
import Link from "next/link";
import { useState } from "react";

type Props = {
  className?: string;
};

const MobileLinks = ({ className }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={className}>
      <Sheet open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
        <SheetTrigger
          className={buttonVariants({ variant: "secondary", size: "icon" })}
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
              <NavigationMenuItem onClick={() => setIsOpen(false)}>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle({ class: "text-xl" })}
                  >
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem onClick={() => setIsOpen(false)}>
                <Link href="/about-me" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle({ class: "text-xl" })}
                  >
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem onClick={() => setIsOpen(false)}>
                <Link href="/portfolio" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle({ class: "text-xl" })}
                  >
                    Portfolio
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem onClick={() => setIsOpen(false)}>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle({ class: "text-xl" })}
                  >
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileLinks;
