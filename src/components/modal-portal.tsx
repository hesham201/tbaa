"use client";
import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

type ModalPortalProps = {
  children: ReactNode;
};

const ModalPortal = ({ children }: ModalPortalProps) => {
  const [mounted, setMounted] = useState(false);
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let el = document.getElementById("pinned-modal");

    // If the modal root doesn't exist, create it and append it to body
    if (!el) {
      el = document.createElement("div");
      el.id = "pinned-modal";
      el.style.position = "fixed";
      el.style.inset = "0";
      el.style.zIndex = "999999";
      el.style.width = "100vw";
      el.style.height = "100vh";
      el.style.pointerEvents = "auto";
      document.body.appendChild(el);
    }

    setModalRoot(el);
    setMounted(true);

    return () => {
      if (el) {
        el.remove();
      } // cleanup modal root
      setMounted(false);
    };
  }, []);

  if (!mounted || !modalRoot) return null;

  return createPortal(children, modalRoot);
};

export default ModalPortal;
