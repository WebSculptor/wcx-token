"use client";

import { Separator } from "@/components/ui/separator";
import { MousePointerSquare } from "lucide-react";

export default function Tracker() {
  return (
    <div className="bg-secondary/40 w-full p-5 md:p-9 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-5 md:gap-10 shadow border">
      <div className="flex flex-col md:items-start">
        <p className="text-sm md:text-lg font-medium">Total Liquidity staked</p>
        <h1 className="font-bold text-3xl md:text-5xl">$0.00</h1>
      </div>

      <Separator className="flex-1 hidden md:flex" />

      <div className="flex flex-col md:items-center">
        <p className="text-sm md:text-lg font-medium">Interactions</p>
        <div className="flex items-center">
          <MousePointerSquare className="w-5 h-5 mr-2 md:hidden" />
          <h1 className="font-bold text-3xl md:text-5xl">0</h1>
        </div>
      </div>

      <Separator className="flex-1 hidden md:flex" />

      <div className="flex flex-col md:items-end">
        <p className="text-sm md:text-lg font-medium">Interest accrued</p>
        <h1 className="font-bold text-3xl md:text-5xl">$0.00</h1>
      </div>
    </div>
  );
}
