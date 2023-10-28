import React from "react";
import { FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="flex justify-between flex-wrap py-8 px-4 gap-4 bg-[rgb(10,19,50)]">
      <div className="flex gap-2 justify-center">
        <FiMapPin />
        Merida, Mexico
      </div>
      <p>© All rights reserved.</p>
    </div>
  );
};

export default Footer;
