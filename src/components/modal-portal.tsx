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
    const el = document.createElement("div");
    el.id = "pinned-modal";
    el.style.position = "fixed";
    el.style.inset = "0";
    el.style.zIndex = "999999";
    el.style.width = "100vw";
    el.style.height = "100vh";
    el.style.pointerEvents = "auto";

    document.body.appendChild(el);
    setModalRoot(el);
    setMounted(true);

    return () => {
      el.remove(); // clean up on unmount
      setMounted(false);
    };
  }, []);

  if (!mounted || !modalRoot) return null;
  return createPortal(children, modalRoot);
};

export default ModalPortal;
