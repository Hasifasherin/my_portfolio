import React, { useState, useEffect, useRef } from "react";

const themeColors = {
  purple: { border: "rgba(168, 85, 247, 0.4)", bg: "#a855f7" },
  cyan: { border: "rgba(6, 182, 212, 0.4)", bg: "#06b6d4" },
  emerald: { border: "rgba(16, 185, 129, 0.4)", bg: "#10b981" },
  amber: { border: "rgba(245, 158, 11, 0.4)", bg: "#f59e0b" },
};

const CustomCursor = ({ theme }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const mouseRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check if device supports a fine pointer (mouse)
    const hasMouse = window.matchMedia("(pointer: fine)").matches;
    setIsMobile(!hasMouse);
    if (!hasMouse) return;

    setIsVisible(true);

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      
      // Instantly position the inner dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleMouseOver = (e) => {
      // Expand cursor on interactive targets
      const target = e.target;
      const isClickable =
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("select") ||
        target.closest(".cursor-pointer") ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsHovered(!!isClickable);
    };

    const handleMouseLeaveWindow = () => {
      setIsVisible(false);
    };

    const handleMouseEnterWindow = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeaveWindow);
    document.addEventListener("mouseenter", handleMouseEnterWindow);

    // Spring trailing animation loop for the outer ring
    let animationFrameId;
    const animateRing = () => {
      const ringPos = ringPosRef.current;
      const mouse = mouseRef.current;

      // Linear interpolation (lerp) for smooth trailing delay
      ringPos.x += (mouse.x - ringPos.x) * 0.15;
      ringPos.y += (mouse.y - ringPos.y) * 0.15;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(animateRing);
    };

    animateRing();

    // Inject styles to hide default cursor globally on desktop
    const styleNode = document.createElement("style");
    styleNode.id = "custom-cursor-hide-default";
    styleNode.innerHTML = `
      @media (pointer: fine) {
        body, html, a, button, select, input, textarea, [role="button"], .cursor-pointer {
          cursor: none !important;
        }
      }
    `;
    document.head.appendChild(styleNode);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
      document.removeEventListener("mouseenter", handleMouseEnterWindow);
      
      const injectedStyle = document.getElementById("custom-cursor-hide-default");
      if (injectedStyle) injectedStyle.remove();
    };
  }, []);

  if (isMobile || !isVisible) return null;

  const activeColor = themeColors[theme.id] || themeColors.purple;

  return (
    <>
      {/* 1. Precise Inner Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full pointer-events-none z-[9999] transition-transform duration-[40ms] ease-out"
        style={{
          backgroundColor: activeColor.bg,
          boxShadow: `0 0 10px ${activeColor.bg}, 0 0 20px ${activeColor.bg}`,
        }}
      />

      {/* 2. Trailing Outer Glow Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] transition-all duration-[60ms] ease-out transform"
        style={{
          width: isHovered ? "48px" : "32px",
          height: isHovered ? "48px" : "32px",
          marginLeft: isHovered ? "-24px" : "-16px",
          marginTop: isHovered ? "-24px" : "-16px",
          border: `1.5px solid ${isHovered ? activeColor.bg : "rgba(255, 255, 255, 0.2)"}`,
          backgroundColor: isHovered ? `${activeColor.bg}10` : "transparent",
          boxShadow: isHovered ? `0 0 15px ${activeColor.border}` : "none",
        }}
      />
    </>
  );
};

export default CustomCursor;
