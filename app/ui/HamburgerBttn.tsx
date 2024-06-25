import clsx from "clsx";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function HamburgerBttn({
  state,
  toggleState,
}: {
  state: boolean;
  toggleState: any;
}) {
  return (
    <button onClick={() => toggleState(!state)} className="md:collapse visible">
      <Bars3Icon className="size-[40px]" />
    </button>
  );
}
