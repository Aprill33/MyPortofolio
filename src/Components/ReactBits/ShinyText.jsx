import { motion } from "framer-motion";

export const ShinyText = ({
  text = "",
  className = "",
  speed = 3,
}) => {
  return (
    <span
      className={`relative inline-block overflow-hidden bg-gradient-to-r from-dusty-rose via-white to-rose-accent bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer ${className}`}
      style={{
        animationDuration: `${speed}s`,
      }}
    >
      {text}
    </span>
  );
};

export default ShinyText;
