"use client";

import React from "react";
import classNames from "classnames";
const ButtonStyle = (props) => {
  const { children, className } = props;
  return (
    <button
      className={classNames(
        "relative mt-4 w-full max-w-50 rounded-lg bg-linear-to-r from-blue-500 to-purple-600 px-2 py-3 text-center font-semibold text-white shadow-lg transition-all duration-300 after:absolute after:inset-x-0 after:-bottom-1 after:h-2 after:rounded-full after:bg-linear-to-r after:from-blue-500 after:to-purple-600 after:opacity-100 after:blur-md after:transition-opacity after:duration-300 hover:from-purple-600 hover:to-blue-500 hover:after:opacity-0 md:px-6",
        className,
      )}
    >
      {children}
    </button>
  );
};

export default ButtonStyle;
