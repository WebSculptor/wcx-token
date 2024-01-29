import React from "react";
import { Button } from "../ui/button";

export default function Stake() {
  return (
    <div className="flex justify-between flex-col lg:items-center lg:flex-row gap-5 lg:gap-10 border-b py-8 lg:py-4 first:pt-0 last:pb-0 last:border-b-0">
      <div className="flex items-start flex-col gap-1">
        <p className="text-base md:text-lg font-bold">Liquidity staked</p>
        <span className="text-base text-muted-foreground font-semibold">
          $567
        </span>
      </div>

      <div className="flex items-start lg:items-center flex-col gap-1">
        <p className="text-base md:text-lg font-bold">Asset</p>
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-6 bg-secondary rounded-full"></div>
          <p className="text-sm font-bold">BWC</p>
        </div>
      </div>

      <div className="flex items-start lg:items-center flex-col gap-1">
        <p className="text-base md:text-lg font-bold">Duration</p>
        <span className="text-base text-muted-foreground font-semibold">
          22 days
        </span>
      </div>

      <div className="flex items-start flex-col gap-1">
        <p className="text-base md:text-lg font-bold">Reward accrued</p>
        <span className="text-base text-muted-foreground font-semibold">
          $78 RBWC
        </span>
      </div>

      <Button className="rounded-lg md:rounded-full" size="lg">
        Unstake
      </Button>
    </div>
  );
}
