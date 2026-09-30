import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "motion/react";
import type { ReactNode } from "react";

interface StaggerRevealProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
}

interface StaggerRevealHeadlineProps extends HTMLMotionProps<"h1"> {
  children: string;
}

interface StaggerRevealItemProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
}

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const reducedItemVariants: Variants = {
  hidden: { opacity: 1, y: 0, filter: "blur(0px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export function StaggerReveal({ children, ...props }: StaggerRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: shouldReduceMotion ? 0 : 0.08,
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerRevealHeadline({
  children,
  ...props
}: StaggerRevealHeadlineProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.h1
      variants={shouldReduceMotion ? reducedItemVariants : itemVariants}
      {...props}
    >
      {children}
    </motion.h1>
  );
}

export function StaggerRevealItem({
  children,
  ...props
}: StaggerRevealItemProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={shouldReduceMotion ? reducedItemVariants : itemVariants}
      {...props}
    >
      {children}
    </motion.div>
  );
}
