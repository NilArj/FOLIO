import React from "react";
import NavbarLink from "./NavbarLink";

const MenuOverlay = ({ links }) => {
  return (
    <div
      className="fixed top-[64px] left-0 right-0 bottom-0 bg-[#0A133D] text-[#F0F0F0] overflow-y-auto"
      style={{ zIndex: 1000 }}
    >
      <ul className="flex flex-col text-2xl text-[#F0F0F0] py-4 gap-6 items-center justify-center h-full">
        {links.map((link, i) => (
          <li key={i}>
            <NavbarLink href={link.path} title={link.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;
