"use client";

import { Separator } from "@/components/ui/separator";

export default function Tracker() {
  return (
    <div className="bg-background w-full p-9 rounded-lg flex items-center gap-10 shadow border">
      <div className="flex flex-col items-start">
        <p className="text-lg font-medium">Total Liquidity staked</p>
        <h1 className="font-bold text-5xl">$0.00</h1>
      </div>

      <Separator className="flex-1" />

      <div className="flex flex-col items-center">
        <p className="text-lg font-medium">Interactions</p>
        <h1 className="font-bold text-5xl">0</h1>
      </div>

      <Separator className="flex-1" />

      <div className="flex flex-col items-end">
        <p className="text-lg font-medium">Interest accrued</p>
        <h1 className="font-bold text-5xl">$0.00</h1>
      </div>
    </div>
  );
}
