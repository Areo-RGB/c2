import React, { useEffect } from "react";

export const useOutsideClick = (
  ref: React.RefObject<HTMLElement | null>,
  callback: (event: MouseEvent | TouchEvent) => void,
  enabled: boolean = true
) => {
  useEffect(() => {
    if (!enabled) {
        return;
    }

    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      if (
          event.target instanceof HTMLElement &&
          (event.target.closest('[data-radix-popper-content]') ||
           event.target.closest('[data-radix-popover-content]') ||
           event.target.closest('[data-radix-dropdown-menu-content]') ||
           event.target.closest('[data-radix-select-content]') ||
           event.target.closest('[data-slot="alert-dialog-content"]') ||
           event.target.closest('[data-slot="sheet-content"]'))
      ) {
         return;
      }

      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback, enabled]);
}; 