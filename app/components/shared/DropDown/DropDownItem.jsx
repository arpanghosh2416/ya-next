const DropdownItem = ({ children }) => {
  return (
    <li className="flex cursor-pointer items-center gap-3 bg-[#2823239a] to-slate-500 px-4 py-2 text-[#ffffff] shadow-xl hover:text-[#3983C5] hover:font-semibold">
      {children}
    </li>
  );
};

export default DropdownItem;
