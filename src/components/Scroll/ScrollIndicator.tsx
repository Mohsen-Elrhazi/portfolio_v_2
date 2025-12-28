"use client";
import styles from "./ScrollIndicator.module.css";

export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-1 left-1/2 -translate-x-1/2">
      {/* souris */}
      <div className="relative w-[23px] h-[36px] rounded-[12px] border border-neutral-800 dark:border-white">
        {/* point */}
        <span
          className={`
            absolute
            left-1/2
            top-[6px]
            -translate-x-1/2
            w-[6px]
            h-[6px]
            rounded-full
            bg-neutral-800
            dark:bg-white
            ${styles.scrollDot}
          `}
        />
      </div>
    </div>
  );
}
