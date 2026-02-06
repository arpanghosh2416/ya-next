const DropdownItem = ({ children }) => {
  return (
    <li className="flex cursor-pointer items-center gap-3 bg-[#0000009a] to-slate-200 px-4 py-2 text-[#ffffff] shadow-xl hover:text-[#AD449A]">
      {children}
    </li>
  );
};

export default DropdownItem;
