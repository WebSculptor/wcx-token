"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import { AlignJustify } from "lucide-react";
import { cn, navLinks } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileMenu() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="secondary">
          <AlignJustify className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="pt-16">
          {navLinks.map((link: NavLinks) => (
            <Link
              key={link.path}
              href={link.path}
              className={cn(
                "text-muted-foreground font-medium py-3 first:pt-0 border-b last:border-b-0",
                {
                  "text-primary": pathname === link.path,
                  "hover:text-foreground": pathname !== link.path,
                }
              )}>
              {link.name}
            </Link>
          ))}
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
