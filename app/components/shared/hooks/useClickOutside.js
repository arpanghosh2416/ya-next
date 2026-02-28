"use client";

import { useEffect, useRef } from "react";

export const useClickOutside = (callbackFn) => {
  const domNodeRef = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!domNodeRef.current?.contains(event.target)) {
        callbackFn();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [callbackFn]);

  return domNodeRef;
};
