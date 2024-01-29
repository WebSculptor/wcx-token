"use client";

import Link from "next/link";
import Mx from "./Mx";

import { usePathname } from "next/navigation";

import { cn, navLinks } from "@/lib/utils";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import ConnectWallet from "./ConnectWallet";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="border-b w-full sticky top-0 bg-background">
      <Mx className="w-full py-5 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Logo />

          <div className="hidden lg:flex items-center gap-x-6">
            {navLinks.map((link: NavLinks) => (
              <Link
                key={link.path}
                href={link.path}
                className={cn("text-muted-foreground font-medium", {
                  "text-primary": pathname === link.path,
                  "hover:text-foreground": pathname !== link.path,
                })}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-x-4">
          <ConnectWallet />

          <div className="flex lg:hidden">
            <MobileMenu />
          </div>
        </div>
      </Mx>
    </div>
  );
}
