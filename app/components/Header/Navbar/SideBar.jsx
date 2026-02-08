import { useState, useImperativeHandle, forwardRef } from "react";
import { HashLink } from "react-router-hash-link";
import Image from "next/image";
import { useClickOutside } from "../shared/hooks/useClickOutside";
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

  useImperativeHandle(ref, () => ({
    toggle: () => setIsOpen((prev) => !prev),
    close: () => setIsOpen(false),
    open: () => setIsOpen(true),
  }));

  return (
    <aside
      ref={sidebarRef}
      className={`fixed right-4 top-20 w-56 rounded-xl bg-gray-900/95 shadow-2xl backdrop-blur-md transition-all duration-300 ease-out md:hidden ${
        isOpen
          ? "pointer-events-auto z-50 translate-y-0 scale-100 opacity-100"
          : "pointer-events-none -z-10 -translate-y-5 scale-95 opacity-0"
      }`}
      role="navigation"
      aria-label="Mobile navigation menu"
    >
      <nav className="p-4">
        <HashLink smooth to="#home" className="mb-4 block">
          <Image
            className="h-12 w-auto cursor-pointer"
            src="https://youngarchitects.in/assets/logo/brandlogo.webp"
            alt="YA-logo"
            width={48}
            height={48}
          />
        </HashLink>
        <ul className="flex flex-col gap-2">
          {navItems.map((item, index) => (
            <li key={item.link}>
              {item.subItems ? (
                <div>
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === index ? null : index)
                    }
                    className="flex w-full items-center justify-between rounded-lg px-4 py-2 text-base font-medium text-white transition-all duration-200 hover:bg-blue-500/20 hover:text-blue-400"
                  >
                    {item.label}
                    <i
                      className={`fa-solid fa-chevron-${openDropdown === index ? "up" : "down"} text-xs`}
                    ></i>
                  </button>
                  {openDropdown === index && (
                    <ul className="ml-4 mt-1 flex flex-col">
                      {item.subItems.map((subItem) => (
                        <DropdownItem key={subItem.link}>
                          <HashLink
                            smooth
                            to={subItem.link}
                            onClick={() => setIsOpen(false)}
                            className="w-full text-sm"
                          >
                            {subItem.label}
                          </HashLink>
                        </DropdownItem>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <HashLink
                  smooth
                  to={item.link}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-4 py-2 text-base font-medium text-white transition-all duration-200 hover:bg-blue-500/20 hover:text-blue-400 focus:bg-blue-500/20 focus:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  {item.label}
                </HashLink>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
});

export default MobileSidebar;
