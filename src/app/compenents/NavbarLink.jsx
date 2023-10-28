import React from "react";
import Link from "next/link";

const NavbarLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="text-[#F0F0F0] py-2 pl-3 pr-4 sm:text-xl md:p-0 font-semibold hover:text-[#FFCE63]"
    >
      {title}
    </Link>
  );
};

export default NavbarLink;
