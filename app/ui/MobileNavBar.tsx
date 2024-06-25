import { useState } from "react";
import HamburgerBttn from "./HamburgerBttn";
import NavLinks from "./NavLinks";
import clsx from "clsx";
import { useSpring, animated } from "react-spring";

export default function MobileNavBar() {
  const [visible, setVisibility] = useState(false);

  const props = useSpring({
    left: visible ? 0 : -300,
    position: "absolute",
    top: 0,
    backgroundColor: "#f472b6",
    height: "100vh",
    width: "300px",
  });
  return (
    <>
      <div
        className={clsx("p-4 md:hidden absolute", {
          visible: !visible,
          hidden: visible,
        })}
      >
        <HamburgerBttn state={visible} toggleState={setVisibility} />
      </div>
      <animated.div style={props} className="md:hidden z-20">
        <div className="drawer flex flex-col bg-pink-400 p-6 gap-4">
          <div className="self-end">
            <HamburgerBttn state={visible} toggleState={setVisibility} />
          </div>
          <NavLinks />
        </div>
      </animated.div>
    </>
  );
}
