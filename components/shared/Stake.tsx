import React from "react";
import { Button } from "../ui/button";

export default function Stake() {
  return (
    <div className="flex flex-col items-start gap-5 p-5 bg-secondary/40 rounded-lg lg:justify-between lg:items-center lg:flex-row lg:bg-transparent lg:py-4 lg:px-0 lg:first:pt-0 lg:last:pb-0 lg:border-b lg:last:border-b-0">
      <div className="flex items-start flex-col gap-1">
        <p className="text-base md:text-lg font-bold">Liquidity staked</p>
        <span className="text-sm text-muted-foreground font-medium">$567</span>
      </div>

      <div className="flex items-start flex-col gap-1">
        <p className="text-base md:text-lg font-bold">Asset</p>
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 bg-background rounded-full"></div>
          <p className="text-sm font-semibold">BWC</p>
        </div>
      </div>

      <div className="flex items-start flex-col gap-1">
        <p className="text-base md:text-lg font-bold">Duration</p>
        <span className="text-sm text-muted-foreground font-medium">
          22 days
        </span>
      </div>

      <div className="flex items-start flex-col gap-1">
        <p className="text-base md:text-lg font-bold">Reward accrued</p>
        <span className="text-sm text-muted-foreground font-medium">
          $78 RBWC
        </span>
      </div>

      <Button className="rounded-lg lg:rounded-full w-full lg:w-max" size="lg">
        Unstake
      </Button>
    </div>
  );
}
