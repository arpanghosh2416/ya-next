"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Dropdown from "../../shared/DropDown/DropDown";
import DropdownItem from "../../shared/DropDown/DropDownItem";

const Navbar = ({ toggleSidebar }) => {
  const [isOpen, setIsOpen] = useState(0);

  const handleOnClick = () => {
    toggleSidebar();
    setIsOpen(!isOpen);
  };

  const navItems = [
    {
      link: "#home",
      label: "Home",
      subItems: [
        { link: "#services", label: "Our Services" },
        { link: "#about", label: "About Us" },
        { link: "#work", label: "Our Works" },
        { link: "#course", label: "Upskill Courses" },
        { link: "#contact", label: "Contact Us" },
      ],
    },
    {
      link: "#packages",
      label: "Packages",
      subItems: [
        { link: "#grb", label: "Google Reputation Builder" },
        { link: "#llb", label: "Local Lead Booster" },
        { link: "#ai", label: "The Silent AI Closer" },
        { link: "#socialtrust", label: "Social Trust System" },
        { link: "#socialLead", label: "Social Lead Engine" },
      ],
    },
    {
      link: "#about",
      label: "About Us",
      subItems: [
        { link: "#team", label: "Our Team" },
        { link: "#mission", label: "Our Mission" },
        { link: "#vision", label: "Our Vision" },
      ],
    },
    {
      link: "#industry",
      label: "Industry",
      subItems: [
        { link: "#legal", label: "Legal" },
        { link: "#security", label: "Security" },
        { link: "#investigation", label: "Investigation" },
        { link: "#education", label: "Education" },
        { link: "#finance", label: "Finance" },
      ],
    },
    {
      link: "#insights",
      label: "Insights",
      subItems: [
        { link: "#blog", label: "Blog" },
        { link: "#case", label: "Case Studies" },
        { link: "#white", label: "White Papers" },
      ],
    },
    { link: "#contact", label: "Contact Us" },
  ];

  return (
    <nav className="fixed left-0 top-0 z-1000 flex w-full items-center justify-between bg-black px-6 shadow-md md:px-12">
      <Link href="#home">
        <Image
          className="my-2 h-12 cursor-pointer"
          src="https://youngarchitects.in/assets/logo/brandlogo.webp"
          alt="Young-Architects"
          width={48}
          height={48}
        />
      </Link>
      <section>
        <ul className="hidden gap-x-8 text-lg text-white md:flex">
          {navItems.map((item) => (
            <li key={item.link}>
              {item.subItems ? (
                <Dropdown
                  trigger={
                    <Link
                      href={item.link}
                      className="flex items-center gap-1 px-3 py-1 text-lg font-medium text-white transition-all duration-200 ease-in-out hover:scale-105 hover:text-blue-400"
                    >
                      {item.label}
                      <i className="fa-solid fa-chevron-down text-xs"></i>
                    </Link>
                  }
                >
                  {item.subItems.map((subItem) => (
                    <DropdownItem key={subItem.link}>
                      <Link href={subItem.link} className="w-full">
                        {subItem.label}
                      </Link>
                    </DropdownItem>
                  ))}
                </Dropdown>
              ) : (
                <Link
                  href={item.link}
                  className="block px-3 py-1 text-lg font-medium text-white transition-all duration-200 ease-in-out hover:scale-105 hover:text-blue-400 focus:rounded focus:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <button onClick={handleOnClick} className="block md:hidden">
          <i
            className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"} text-4xl text-white`}
          ></i>
        </button>
      </section>
    </nav>
  );
};

export default Navbar;
