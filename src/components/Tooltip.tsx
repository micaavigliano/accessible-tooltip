import React, { useState, ReactNode } from "react";
import styles from "./tooltip.module.css";

interface TooltipProps {
  text: string;
  children: ReactNode;
  direction: "top" | "bottom" | "left" | "right";
  id: string;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children, direction, id }) => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  const tooltipOn = () => {
    setShowTooltip(true);
  };

  const tooltipOff = () => {
    setShowTooltip(false);
  };

  const getTooltipStyle = () => {
    const tooltipStyle = {
      [direction === "left" ? "right" : "left"]: "100%",
      [direction === "top" || direction === "bottom"
        ? "marginLeft"
        : "marginTop"]: "7%",
    };

    return tooltipStyle;
  };

  return (
    <div
      className="relative inline-block justify-center text-center"
      onMouseEnter={tooltipOn}
      onMouseLeave={tooltipOff}
      onFocus={tooltipOn}
      onBlur={tooltipOff}
    >
      {showTooltip && (
        <div
          className={`${styles.tooltip} ${
            direction === "top"
              ? "bottom-[calc(100%+1px)] left-10 transform translate-x-[-60%] mb-2"
              : ""
          }
          ${
            direction === "bottom"
              ? "top-[calc(100%+1px)] left-10 transform translate-x-[-60%] mt-2"
              : ""
          }
          ${
            direction === "left"
              ? "-left-[calc(100%+130px)] top-1/2 transform -translate-y-1/2"
              : ""
          }
          ${
            direction === "right"
              ? `-right-[calc(100%+130px)] top-1/2 transform -translate-y-1/2`
              : ""
          }`}
          data-placement={direction}
          role="tooltip"
          aria-hidden="true"
          id={id}
          style={getTooltipStyle()}
        >
          {text}
          {direction === "top" && (
            <div className="absolute w-3 h-3 bg-black transform rotate-45 -bottom-1 left-1/2 -translate-x-1/2"></div>
          )}
          {direction === "bottom" && (
            <div className="absolute w-3 h-3 bg-black transform rotate-45 -top-1 left-1/2 -translate-x-1/2"></div>
          )}
          {direction === "left" && (
            <div className="absolute w-3 h-3 bg-black transform rotate-45 -right-1 top-1/2 -translate-y-1/2"></div>
          )}
          {direction === "right" && (
            <div className="absolute w-3 h-3 bg-black transform rotate-45 -left-1 top-1/2 -translate-y-1/2"></div>
          )}
        </div>
      )}
      {children}
    </div>
  );
};

export default Tooltip;
