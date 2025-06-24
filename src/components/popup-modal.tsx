"use client";
import Image from "next/image";
import ModalPortal from "./modal-portal";
import { useEffect } from "react";

type VideoModalProps = {
  show: boolean;
  onClose: () => void;
  src: string;
};

const VideoModal = ({ show, onClose, src }: VideoModalProps) => {
  useEffect(() => {
    if (show) {
      document.body.classList.add("overflow-hidden");
      window.LOCO_SCROLL?.stop();
    } else {
      document.body.classList.remove("overflow-hidden");
      window.LOCO_SCROLL?.start();
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
      window.LOCO_SCROLL?.start();
    };
  }, [show]);

  if (!show) return null;

  return (
    <ModalPortal>
      <div className="relative w-full h-[100vh] bg-black bg-opacity-90 z-[999999] flex items-center justify-center">
        <button
          onClick={onClose}
          className="absolute flex cursor-pointer justify-center items-center border-4 h-12 w-12 rounded-full top-3 left-3 text-white z-[10000] text-4xl focus:outline-none"
        >
          <Image
            src={"/close-check.png"}
            className="h-9 w-9"
            width={40}
            height={40}
            alt="close button"
          />
        </button>
        <div className="relative w-full max-w-5xl h-[80vh] px-4">
          <iframe
            width="100%"
            height="100%"
            src={src}
            title="Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="rounded-xl w-full h-full"
          ></iframe>
        </div>
      </div>
    </ModalPortal>
  );
};

export default VideoModal;
