import { useState } from "react";

import { useClickOutside } from "../../../hooks/useClickOutside";

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
        <ul className="absolute right-0 mt-2 min-w-max divide-y divide-gray-100 overflow-hidden rounded-lg bg-white shadow">
          {children}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;