export const layoutTopShapeVariants = {
  show: {
    x: [0, 0, 0, 0, 0, 0, 0, 30, 30, 30, 30, 30, 23, 23, 23, -1.5, -1.5],
    y: [0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, -1.5, -1.5],
    width: [30, 30, 30, 30, 30, 30, 30, 30, 7, 7, 7, 7, 7, 7, 7, 7],
    height: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 17, 17, 17, 17, 20, 20],
    scale: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    rotate: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -90, -90],

    transition: {
      ease: 'easeInOut',
      duration: 4,
      repeat: Infinity,
    },
  },
  hidden: { scale: 0, transition: { duration: 0.1 } },
}

export const layoutVerticalShapeVariants = {
  show: {
    y: [0, 0, 0, 0, 0, 0, 0, -10, -10, -10, -10, -10, -10, -10, -10, -10],
    x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    height: [17, 17, 17, 17, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    width: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 30, 30, 30, 30, 30, 30],
    scale: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    transition: {
      ease: 'easeInOut',
      duration: 4,
      repeat: Infinity,
    },
  },
  hidden: { scale: 0, transition: { duration: 0.1 } },
}

export const layoutBottomShapeVariants = {
  show: {
    x: [0, 0, 0, 0, -9, -9, -9, -9, -9, 2, 5, -5, -5, -5, 0, 0],
    y: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -3.5, -3.5, -3.5, -3.5, 0, 0],
    width: [20, 20, 20, 20, 29, 29, 29, 29, 29, 17, 17, 17, 17, 17, 20, 20],
    scale: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    rotate: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 90, 90, 90, 180, 180],

    transition: {
      ease: 'easeInOut',
      duration: 4,
      repeat: Infinity,
    },
  },
  hidden: { scale: 0, transition: { duration: 0.1 } },
}

export const layoutCenterShapeVariants = {
  show: {
    x: [0, 0, 0, 0, 0, 0, 0, -10, -10, -10, -10, -10, -10, -10, -10, -10],
    y: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    width: [20, 20, 20, 20, 20, 20, 30, 30, 30, 7, 7, 7, 7, 7, 7],
    height: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 17, 17, 17, 17, 17, 17],
    scale: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    transition: {
      ease: 'easeInOut',
      duration: 4,
      repeat: Infinity,
    },
  },
  hidden: { scale: 0, transition: { duration: 0.1 } },
}

export const sparkleBigVariants = {
  hidden: { scale: 0, opacity: 0 },
  show: {
    scale: [
      0, 1.5, 1, 1.2, 1, 1.2, 1, 1.2, 1, 1.2, 1, 1.2, 1, 1.2, 1, 1.2, 1, 1.2, 1, 1.2, 1, 1.2, 1, 1,
      1.2, 1, 1.2, 1, 1.2, 1, 1.2, 1, 1.2, 1, 1.2, 1, 1.4, 1, 1.2, 1,
    ],
    opacity: [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1,
    ],

    transition: {
      ease: 'easeInOut',
      duration: 13,
    },
  },
  hide: { opacity: 0, scale: 0, transition: { duration: 0.01 } },
}

export const sparkleSmallVariants = {
  hidden: { scale: 0, opacity: 0 },
  show: {
    scale: [
      0, 1.5, 1, 1.2, 1, 1.2, 1, 1.2, 1, 1.2, 1, 1.2, 1, 1.2, 1, 1.2, 1, 1.2, 1, 1.2, 1, 1.2, 1, 1,
      1.2, 1, 1.2, 1, 1.2, 1, 1.2, 1, 1.2, 1, 1.2, 1, 1.2, 1, 1.4, 1,
    ],
    opacity: [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1,
    ],

    transition: {
      ease: 'easeInOut',
      duration: 13,
      delay: 0.25,
    },
  },
  hide: { opacity: 0, scale: 0, transition: { duration: 0.01 } },
}

export const iconAiPathVariants = {
  hidden: { pathLength: 0, opacity: 1 },
  show: {
    pathLength: 1,
    opacity: 1,
    rotate: 360,
    transition: {
      ease: 'linear',
      rotate: {
        repeat: 3,
        duration: 1.5,
      },
      pathLength: {
        duration: 3.2,
      },
    },
  },
  hide: { opacity: 0, rotate: 0, pathLength: 1, transition: { duration: 0.01 } },
}

export const iconAiVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.65 } },
  bounce: { y: [0, 10, 0], transition: { type: 'spring', bounce: 0.65 } },
}

export const iconLayoutVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { delay: 0.15, type: 'spring', bounce: 0.65 } },
  bounce: { y: [0, 10, 0], transition: { delay: 0.15, type: 'spring', bounce: 0.65 } },
}

export const iconLayoutPathVariants = {
  hidden: { pathLength: 0, opacity: 1 },
  show: {
    pathLength: 1,
    opacity: 1,
    rotate: 360,
    transition: {
      ease: 'linear',
      rotate: {
        repeat: 3,
        duration: 1.5,
      },
      pathLength: {
        duration: 3,
      },
    },
  },
  hide: { opacity: 0, rotate: 0, pathLength: 1, transition: { duration: 0.01 } },
}
