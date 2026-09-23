import { motion } from "framer-motion";

export const InfiniteMarquee = ({
  items = [],
  direction = "left",
  speed = 25,
  className = "",
}) => {
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className={`overflow-hidden whitespace-nowrap relative py-4 select-none ${className}`}>
      {/* Gradient fade overlay edges */}
      <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-cream dark:from-dark-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-cream dark:from-dark-bg to-transparent z-10 pointer-events-none" />

      <motion.div
        className="inline-flex gap-4 items-center"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          ease: "linear",
          duration: speed,
          repeat: Infinity,
        }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {duplicatedItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/80 dark:bg-dark-card/90 border border-peach/50 dark:border-white/10 text-neo-black dark:text-dark-text font-semibold text-sm soft-shadow hover:scale-105 hover:bg-gradient-to-r hover:from-dusty-rose hover:to-rose-accent hover:text-white transition-all duration-300 cursor-pointer group"
            >
              {Icon && (
                <Icon className="text-xl text-dusty-rose group-hover:text-white transition-colors" />
              )}
              <span>{item.name}</span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default InfiniteMarquee;
