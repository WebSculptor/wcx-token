"use client";

import Link from "next/link";
import Mx from "./Mx";

import { usePathname } from "next/navigation";

import { ConnectButton, WalletButton } from "@rainbow-me/rainbowkit";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const links = [
  {
    name: "Stake",
    path: "/",
  },
  {
    name: "Lend",
    path: "/lend",
  },
  {
    name: "Borrow",
    path: "/borrow",
  },
  {
    name: "Portfolio",
    path: "/portfolio",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="border-b w-full sticky top-0 bg-background">
      <Mx className="w-full py-5 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link href="/" className="font-bold text-lg">
            BWC
          </Link>

          <div className="flex items-center gap-x-8">
            {links.map((link) => (
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

        <ConnectButton
          accountStatus={{
            smallScreen: "avatar",
            largeScreen: "full",
          }}
          chainStatus={{
            smallScreen: "icon",
            largeScreen: "full",
          }}
          showBalance={{
            smallScreen: false,
            largeScreen: true,
          }}
        />
      </Mx>
    </div>
  );
}
