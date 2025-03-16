"use client";

import { useMotionValue, motion, useMotionTemplate } from "motion/react";
import React, { MouseEvent as ReactMouseEvent, useState } from "react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { cn } from "@/lib/utils";

// Predefined color themes
export const spotlightThemes = {
  blue: {
    name: "Blue",
    colors: [
      [59, 130, 246],   // blue-500
      [139, 92, 246]    // violet-500
    ],
    spotlightColor: "#3b82f680" // semi-transparent blue
  },
  purple: {
    name: "Purple",
    colors: [
      [139, 92, 246],   // violet-500
      [217, 70, 239]    // fuchsia-500
    ],
    spotlightColor: "#8b5cf680"
  },
  teal: {
    name: "Teal",
    colors: [
      [20, 184, 166],   // teal-500
      [6, 182, 212]     // cyan-500
    ],
    spotlightColor: "#14b8a680"
  },
  amber: {
    name: "Amber",
    colors: [
      [245, 158, 11],   // amber-500
      [234, 88, 12]     // orange-600
    ],
    spotlightColor: "#f59e0b80"
  },
  emerald: {
    name: "Emerald",
    colors: [
      [16, 185, 129],   // emerald-500
      [10, 126, 7]      // green-700
    ],
    spotlightColor: "#10b98180"
  },
  rose: {
    name: "Rose",
    colors: [
      [244, 63, 94],    // rose-500
      [225, 29, 72]     // rose-600
    ],
    spotlightColor: "#f43f5e80"
  },
  sky: {
    name: "Sky",
    colors: [
      [14, 165, 233],   // sky-500
      [2, 132, 199]     // sky-600
    ],
    spotlightColor: "#0ea5e980"
  },
  sunset: {
    name: "Sunset",
    colors: [
      [239, 68, 68],    // red-500
      [245, 158, 11]    // amber-500
    ],
    spotlightColor: "#ef444480"
  },
  forest: {
    name: "Forest",
    colors: [
      [34, 197, 94],    // green-500
      [5, 150, 105]     // emerald-600
    ],
    spotlightColor: "#22c55e80"
  },
  ocean: {
    name: "Ocean",
    colors: [
      [6, 182, 212],    // cyan-500
      [2, 132, 199]     // sky-600
    ],
    spotlightColor: "#06b6d480"
  }
};

type ThemeKey = keyof typeof spotlightThemes;

export const CardSpotlight = ({
  children,
  radius = 350,
  color,
  theme = "blue",
  className,
  ...props
}: {
  radius?: number;
  color?: string;
  theme?: ThemeKey;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLDivElement>) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);
  
  // Determine which theme to use
  const selectedTheme = spotlightThemes[theme as ThemeKey] || spotlightThemes.blue;
  const spotlightColor = color || selectedTheme.spotlightColor;
  
  return (
    <div
      className={cn(
        "group/spotlight p-10 rounded-md relative border border-neutral-800 bg-black dark:border-neutral-800",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute z-0 -inset-px rounded-md opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
        style={{
          backgroundColor: spotlightColor,
          maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `,
        }}
      >
        {isHovering && (
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-transparent absolute inset-0 pointer-events-none"
            colors={selectedTheme.colors}
            dotSize={3}
          />
        )}
      </motion.div>
      {children}
    </div>
  );
};