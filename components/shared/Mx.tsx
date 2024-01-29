import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type MxProps = {
  className?: string;
  children: ReactNode;
};

export default function Mx({ children, className }: MxProps) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-4", className)}>
      {children}
    </div>
  );
}
