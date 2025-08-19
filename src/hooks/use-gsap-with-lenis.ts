import { useGSAP } from "@gsap/react";
export const useGsapWithLenis = (
  animationFn: () => void,
  deps: unknown[] = [],
  scope?: React.RefObject<HTMLElement | null> // <-- accept null
) => {
  useGSAP(
    () => {
      const init = () => {
        animationFn();
        ScrollTrigger.refresh();
      };

      if (document.readyState === "complete") {
        setTimeout(init, 50);
      } else {
        window.addEventListener("load", () => setTimeout(init, 50), {
          once: true,
        });
      }
    },
    { dependencies: deps, scope }
  );
};
