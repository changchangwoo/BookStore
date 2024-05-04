export const modalAnimation = {
    initial: {
      y: -500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 120,
    }
}