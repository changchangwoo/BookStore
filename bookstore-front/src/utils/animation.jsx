export const modalAnimation = {
    initial: {
      y : 50,
      opacity: 0,
    },
    animate: {
      y : 0,
      opacity: 1,
    },
    transition: {
      duration: 0.3,
    }
}

export const messageAnimation = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  transition: {
    type: "spring",
    stiffness: 500,
    duration: 1,
    damping: 15,
  },
};