"use client";
import { useRef, useImperativeHandle, forwardRef } from "react";
import { createPortal } from "react-dom";
import css from "./Modal.module.css";

const ModalComponent = forwardRef(function ModalComponent({ children }, ref) {
  const modalRef = useRef(null);

  useImperativeHandle(ref, () => ({
    toggle: () => {
      modalRef.current?.classList.toggle("opacity-0");
      modalRef.current?.classList.toggle("invisible");
    },
  }));

  return (
    <main
      ref={modalRef}
      className="invisible fixed inset-0 z-2000 flex h-screen w-full items-center justify-center bg-black/60 opacity-0 transition-all duration-200"
    >
      <article
        className={`${css.modalContainer} flex h-[95vh] items-center justify-center`}
      >
        <section className="flex max-h-full w-full flex-col rounded bg-white">
          <div className="flex justify-end border-b border-gray-300 p-4">
            <button
              onClick={() => ref.current.toggle()}
              className="group rounded bg-white px-1.5 hover:bg-primary"
            >
              <i className="fa-solid fa-xmark text-primary group-hover:text-white"></i>
            </button>
          </div>
          <div className="custom-scrollbar overflow-auto p-4">{children}</div>
        </section>
      </article>
    </main>
  );
});

const Modal = forwardRef(function Modal(props, ref) {
  if (typeof window === "undefined") return null;
  return createPortal(
    <ModalComponent ref={ref} {...props} />,
    document.getElementById("portal-modal-root"),
  );
});

export default Modal;
