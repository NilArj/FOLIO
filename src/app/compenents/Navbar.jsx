"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavbarLink from "./NavbarLink";
import MenuOverlay from "./MenuOverlay";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Skills",
    path: "#skills",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A133D] opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href={"/"}
          className="text-[#F0F0F0] text-2xl md:text-2xl font-semibold"
        >
          Nilvia
          <strong className="text-[#FFCE63] text-2xl md:text-3xl">
            .
          </strong>
        </Link>
        <div className="mobile menu relative block md:hidden pr-4 text-xl">
          <div className="absolute top-1/2 transform -translate-y-1/2">
            <button onClick={() => setNavOpen(!navOpen)}>
              {navOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            </button>
          </div>
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
            {navLinks.map((link, index) => (
              <li key={index} style={{ textDecoration: "none" }}>
                <NavbarLink title={link.title} href={link.path} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
