import { useState, useImperativeHandle, forwardRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useClickOutside, Button } from "../../shared";
import DropdownItem from "../../shared/DropDown/DropDownItem";

const MobileSidebar = forwardRef(function MobileSidebar(props, ref) {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const sidebarRef = useClickOutside(() => setIsOpen(false));

  const navItems = [
    {
      link: "#home",
      label: "Home",
      subItems: [
        { link: "#services", label: "Our Services" },
        { link: "#work", label: "Our Works" },
        { link: "#course", label: "Upskill Courses" },
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

  const contactItem = { link: "#contact", label: "Contact Us" };

  useImperativeHandle(ref, () => ({
    toggle: () => setIsOpen((prev) => !prev),
    close: () => setIsOpen(false),
    open: () => setIsOpen(true),
  }));

  return (
    <aside
      ref={sidebarRef}
      className={`fixed right-4 top-24 z-[9999] w-64 rounded-xl bg-gray-900/95 p-2 shadow-2xl backdrop-blur-md transition-all duration-300 ease-out md:hidden ${
        isOpen
          ? "pointer-events-auto z-50 translate-y-0 scale-100 opacity-100"
          : "pointer-events-none -z-10 -translate-y-5 scale-95 opacity-0"
      }`}
      role="navigation"
      aria-label="Mobile navigation menu"
    >
      <nav className="p-5">
        <div className="mb-4 flex items-center justify-between">
          <Link href="#home">
            <Image
              className="h-12 w-auto cursor-pointer"
              src="https://youngarchitects.in/assets/logo/brandlogo.webp"
              alt="YA-logo"
              width={48}
              height={48}
            />
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-blue-400"
            aria-label="Close menu"
          >
            <i className="fa-solid fa-xmark text-2xl"></i>
          </button>
        </div>
        <ul className="flex flex-col gap-3">
          {navItems.map((item, index) => (
            <li key={item.link}>
              {item.subItems ? (
                <div>
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === index ? null : index)
                    }
                    className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-white transition-all duration-200 hover:bg-blue-500/20 hover:text-blue-400"
                  >
                    {item.label}
                    <i
                      className={`fa-solid fa-chevron-${openDropdown === index ? "up" : "down"} text-xs`}
                    ></i>
                  </button>
                  {openDropdown === index && (
                    <ul className="ml-4 mt-2 flex flex-col gap-1">
                      {item.subItems.map((subItem) => (
                        <DropdownItem key={subItem.link}>
                          <Link
                            href={subItem.link}
                            onClick={() => setIsOpen(false)}
                            className="w-full text-sm"
                          >
                            {subItem.label}
                          </Link>
                        </DropdownItem>
                      ))}
                    </ul>
                  )}
                </div>
              ) : null}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex justify-center">
          <Link href={contactItem.link} onClick={() => setIsOpen(false)}>
            <Button className="w-full">{contactItem.label}</Button>
          </Link>
        </div>
      </nav>
    </aside>
  );
});

export default MobileSidebar;
