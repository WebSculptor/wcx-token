import Mx from "@/components/shared/Mx";
import StakeLists from "@/components/shared/StakeLists";
import Tracker from "@/components/shared/Tracker";

export default function Portfolio() {
  return (
    <div className="flex-1 py-10">
      <Mx>
        <h2 className="text-2xl mb-2 font-bold">Portfolio</h2>
        <Tracker />

        <StakeLists />
      </Mx>
    </div>
  );
}
