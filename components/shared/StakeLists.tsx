"use client";

import { Button } from "@/components/ui/button";
import Stake from "./Stake";

export default function StakeLists() {
  return (
    <div className="mt-10 space-y-3">
      <div className="flex items-center gap-3">
        <Button>Overview</Button>
        <Button variant="ghost">Transaction history</Button>
      </div>

      <div className="w-full lg:p-6 rounded-lg lg:bg-secondary/40 shadow space-y-4 lg:space-y-0 lg:border">
        {Array.from({ length: 10 }).map((_, _key) => (
          <Stake key={_key} />
        ))}
      </div>
    </div>
  );
}
