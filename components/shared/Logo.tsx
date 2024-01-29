import Link from "next/link";
import { Gluten } from "next/font/google";
import { cn } from "@/lib/utils";

const gluten = Gluten({ subsets: ["latin"] });

interface LogoProps {
  path?: string;
}

export default function Logo({ path }: LogoProps) {
  return (
    <Link
      href={path ? path : "/"}
      className={cn("text-2xl md:text-3xl font-bold mt-1.5", gluten.className)}>
      BWC.
    </Link>
  );
}
