"use client";
import { LayoutTextFlip } from "./layout-text-flip";
import { motion } from "motion/react";

export function LayoutTextFlipDemo() {
  return (
    <div>
      <motion.div className="relative text-[white] my-4">
        <LayoutTextFlip
          text=" I am a "
          words={["AI Product Engineer","Full Stack developer", "Nextjs developer", "Freelancer"]}
        />
      </motion.div>
      <p className="mt-4 text-center text-base text-neutral-600 dark:text-neutral-400">
        
      </p>
    </div>
  );
}
