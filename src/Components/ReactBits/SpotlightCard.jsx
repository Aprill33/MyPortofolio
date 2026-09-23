import { useState, useRef } from "react";
import { motion } from "framer-motion";

export const SpotlightCard = ({
  children,
  className = "",
  spotlightColor = "rgba(232, 122, 138, 0.35)",
  borderColor = "hover:border-dusty-rose dark:hover:border-dusty-rose",
}) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`relative rounded-3xl overflow-hidden border border-peach/50 dark:border-dusty-rose/30 bg-white/80 dark:bg-gradient-to-br dark:from-[#241721]/90 dark:via-[#1B1218]/90 dark:to-[#170E14]/90 soft-shadow dark:shadow-[0_8px_30px_rgba(232,122,138,0.15)] backdrop-blur-md transition-all duration-300 ${borderColor} ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 rounded-3xl z-10"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />
      <div className="relative z-20 h-full w-full">{children}</div>
    </motion.div>
  );
};

export default SpotlightCard;

