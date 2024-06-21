"use client";
import NavLinks from "./NavLinks";

export default function SideNav() {
  return (
    <div className="flex flex-col h-screen bg-pink-400 p-6 gap-4 pt-16">
      <NavLinks />
    </div>
  );
}
