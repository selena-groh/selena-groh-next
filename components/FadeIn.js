import { motion } from "framer-motion";

function FadeIn({ duration = 0.6, delay = 0, children }) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        offscreen: {
          opacity: 0,
          scale: 1.02,
        },
        onscreen: {
          opacity: 1,
          scale: 1,
          transition: {
            type: "tween",
            delay,
            duration: duration * (2 / 3),
            opacity: { duration },
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;
