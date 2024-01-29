import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const def = console.log.bind("console");

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const navLinks: NavLinks[] = [
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
