import { useState } from "react";
import sprite from "../../src/assets/spritesheet.svg";

export const SVG = ({ iconName, shadowColor, className, withShadow = true, isTechIcon = true, width = 28, height = 28 }) => {
  const [hovered, setHovered] = useState(false);

  const techIconStyle = "rounded-md p-1 bg-zinc-800 text-zinc-100 transition-all duration-200 hover:scale-110";

  const baseShadow = shadowColor ? "0 1px 0 rgba(255,255,255,0.05), 0 8px 16px rgba(0,0,0,0.35)" : undefined;
  const hoverShadow = shadowColor
    ? `
    0 0 8px rgba(${shadowColor}, 0.8),
    0 2px 6px rgba(${shadowColor}, 0.6),
    0 0 24px rgba(${shadowColor}, 0.4)`
    : undefined;

  return (
    <svg
      width={width}
      height={height}
      className={`${isTechIcon ? techIconStyle : ""} ${className}`}
      style={withShadow ? { boxShadow: hovered ? hoverShadow : baseShadow } : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <use href={`${sprite}#${iconName}`} />
    </svg>
  );
};
