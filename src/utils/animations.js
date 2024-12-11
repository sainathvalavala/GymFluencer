export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

export const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { type: "spring", stiffness: 400, damping: 10 }
};

export const buttonVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    boxShadow: "0px 0px 8px rgb(255,76,44)",
    transition: {
      duration: 0.2,
      yoyo: Infinity
    }
  }
};