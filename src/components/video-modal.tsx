"use client";
import Image from "next/image";
import { useEffect } from "react";

interface VideoModalProps {
  show: boolean;
  onClose: () => void;
  src: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ show, onClose, src }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [show]);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-2xl bg-opacity-90 z-[999999] flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute flex cursor-pointer justify-center items-center border-4 h-12 w-12 rounded-full top-6 left-6 text-white z-[10000] text-4xl focus:outline-none bg-black/40 hover:bg-black/70 transition"
      >
        <Image
          src="/close-check.png"
          className="h-9 w-9"
          width={40}
          height={40}
          alt="close button"
        />
      </button>

      {/* Video Container */}
      <div
        className="relative w-full max-w-[800px] !bg-transparent h-[450px] md:h-[500px] lg:h-[600px]"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <iframe
          src={src}
          //   title="Video"
          //   allow="autoplay; encrypted-media"
          allowFullScreen
          className="rounded-xl !bg-transparent absolute inset-0 w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoModal;
