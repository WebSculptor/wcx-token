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

      <div className="w-full py-5 lg:px-9 rounded-lg bg-background shadow">
        {Array.from({ length: 5 }).map((_, _key) => (
          <Stake key={_key} />
        ))}
      </div>
    </div>
  );
}
