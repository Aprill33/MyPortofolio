import { useRef, useState } from "react";
import { motion } from "framer-motion";

export const MagnetButton = ({
  children,
  className = "",
  onClick,
  href,
  download,
  target,
  rel,
  ariaLabel,
}) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.25;
    const y = (clientY - (top + height / 2)) * 0.25;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.1 }}
      className={`inline-flex items-center justify-center cursor-pointer select-none ${className}`}
      onClick={onClick}
      href={href}
      download={download}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
    >
      {children}
    </Component>
  );
};

export default MagnetButton;
