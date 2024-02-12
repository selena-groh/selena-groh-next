import { motion } from "framer-motion";

function FadeIn({ delay, children }) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        offscreen: {
          opacity: 0,
          y: 50,
        },
        onscreen: {
          opacity: 1,
          y: 0,
          transition: {
            type: "tween",
            // bounce: 0.4,
            delay,
            duration: 0.4,
            opacity: { duration: 0.6 },
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;
