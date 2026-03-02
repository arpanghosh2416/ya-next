"use client";

import { useState } from "react";

import { useClickOutside } from "../hooks/useClickOutside";

const Dropdown = (props) => {
  const { children, trigger } = props;
  const [show, setShow] = useState(false);
  const dropRef = useClickOutside(() => setShow(false));

  return (
    <div
      ref={dropRef}
      className="relative w-fit"
      onClick={() => setShow((curr) => !curr)}
    >
      <div>{trigger}</div>
      {show && (
        <ul
          className="absolute right-0 mt-2 min-w-max overflow-hidden rounded-xl
             divide-y divide-white/10
             border border-white/10
             shadow-2xl backdrop-blur-md

             bg-linear-to-b from-zinc-800/95 via-zinc-900/95 to-black/95"
        >
          {children}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
