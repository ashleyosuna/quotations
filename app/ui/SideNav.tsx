"use client";
import NavLinks from "./NavLinks";
import MobileNavBar from "./MobileNavBar";

export default function SideNav() {
  return (
    <>
      <MobileNavBar />
      <div className="max-md:hidden w-[250px] h-screen bg-pink-400 flex flex-col p-6 gap-4 pt-16">
        <NavLinks />
      </div>
    </>
  );
}
