import { useState } from "react";
import { ChevronDown, ChevronUp } from "react-feather";
import { useClickOutside } from "../hooks/useClickOutside";

const DropdownMenu = ({ children }) => {
  const [drop, setDrop] = useState(false);
  const dropdownRef = useClickOutside(() => setDrop(false));

  return (
    <div
      ref={dropdownRef}
      onClick={() => setDrop(!drop)}
      className="relative flex flex-row items-center justify-between gap-1 transition-all duration-200 ease-in-out hover:!text-black"
    >
      {children}
      <span className="mt-1">
        {drop ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </span>
    </div>
  );
};

export default DropdownMenu;