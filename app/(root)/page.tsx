import React from "react";

import Deposit from "@/components/shared/Deposit";
import Mx from "@/components/shared/Mx";

export default function Home() {
  return (
    <div className="w-full py-10">
      <Mx>
        <Deposit />
      </Mx>
    </div>
  );
}
