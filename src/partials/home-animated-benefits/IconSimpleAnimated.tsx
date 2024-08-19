import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, MotionConfig, Transition, useAnimation } from 'framer-motion'

type Props = {
  delayValue?: number
}

const defaultTransitionConfig: Transition = {
  duration: 1.8,
  ease: 'easeInOut',
}

const IconSimpleAnimated = ({ delayValue }: Props) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  })

  const [isHovered, setIsHovered] = useState(false)

  // Lamp beams controls numbered from left to right
  const beamOneControls = useAnimation()
  const beamTwoControls = useAnimation()
  const beamThreeControls = useAnimation()
  const beamFourControls = useAnimation()
  const beamFiveControls = useAnimation()

  // Light beam animations from left to right
  const inViewAnimations: { [key: string]: any } = {
    beamOne: {
      x: [0, 0, -5, 0, -5, 0],
      opacity: [0, 1, 1, 1, 1, 1],
      transition: {
        ...defaultTransitionConfig,
        delay: delayValue,
      },
    },
    beamTwo: {
      x: [0, 0, -5, 0, -5, 0],
      y: [0, 0, -5, 0, -5, 0],
      opacity: [0, 1, 1, 1, 1, 1],
      transition: {
        ...defaultTransitionConfig,
        delay: delayValue,
      },
    },
    beamThree: {
      y: [0, 0, -5, 0, -5, 0],
      opacity: [0, 1, 1, 1, 1, 1],
      transition: {
        ...defaultTransitionConfig,
        delay: delayValue,
      },
    },
    beamFour: {
      y: [0, 0, -5, 0, -5, 0],
      x: [0, 0, 5, 0, 5, 0],
      opacity: [0, 1, 1, 1, 1, 1],
      transition: {
        ...defaultTransitionConfig,
        delay: delayValue,
      },
    },
    beamFive: {
      x: [0, 0, 5, 0, 5, 0],
      opacity: [0, 1, 1, 1, 1, 1],
      transition: {
        ...defaultTransitionConfig,
        delay: delayValue,
      },
    },
  }

  const hoverAnimations: { [key: string]: any } = {
    beamOne: {
      x: [0, 0, -5, 0, -5, 0],
      transition: {
        ...defaultTransitionConfig,
        delay: 0,
      },
    },
    beamTwo: {
      x: [0, 0, -5, 0, -5, 0],
      y: [0, 0, -5, 0, -5, 0],
      transition: {
        ...defaultTransitionConfig,
        delay: 0,
      },
    },
    beamThree: {
      y: [0, 0, -5, 0, -5, 0],
      transition: {
        ...defaultTransitionConfig,
        delay: 0,
      },
    },
    beamFour: {
      y: [0, 0, -5, 0, -5, 0],
      x: [0, 0, 5, 0, 5, 0],
      transition: {
        ...defaultTransitionConfig,
        delay: 0,
      },
    },
    beamFive: {
      x: [0, 0, 5, 0, 5, 0],
      transition: {
        ...defaultTransitionConfig,
        delay: 0,
      },
    },
  }

  useEffect(() => {
    if (inView) {
      beamOneControls.start(inViewAnimations.beamOne)
      beamTwoControls.start(inViewAnimations.beamTwo)
      beamThreeControls.start(inViewAnimations.beamThree)
      beamFourControls.start(inViewAnimations.beamFour)
      beamFiveControls.start(inViewAnimations.beamFive)
    }
  }, [inView])

  useEffect(() => {
    if (isHovered) {
      beamOneControls.start(hoverAnimations.beamOne)
      beamTwoControls.start(hoverAnimations.beamTwo)
      beamThreeControls.start(hoverAnimations.beamThree)
      beamFourControls.start(hoverAnimations.beamFour)
      beamFiveControls.start(hoverAnimations.beamFive)
    }
  }, [isHovered])

  const handleMouseEnter = () => {
    setIsHovered(true)

    setTimeout(() => {
      setIsHovered(false)
    }, 1000)
  }

  return (
    <div style={{ width: '28px', height: '28px' }} ref={ref} onMouseEnter={handleMouseEnter}>
      <MotionConfig transition={defaultTransitionConfig}>
        <svg
          width="28"
          height="28"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.6047 35H21.3956C22.3531 35.0002 23.276 34.6426 23.9833 33.9972C24.6907 33.3516 25.1312 32.4652 25.2185 31.5117H14.7815C14.8688 32.4652 15.3094 33.3517 16.0167 33.9972C16.724 34.6425 17.6473 35.0001 18.6047 35Z"
            fill="#5048C7"
          />
          <path
            d="M25.2325 28.6934C25.2315 28.1655 25.4736 27.6664 25.8882 27.3398C28.1249 25.5613 29.4253 22.8576 29.4186 20.0004C29.4263 16.7626 27.771 13.7477 25.0348 12.0158C22.2985 10.2846 18.8651 10.0798 15.942 11.4732C13.0193 12.8668 11.0171 15.6634 10.6396 18.8795C10.2623 22.0952 11.5626 25.2795 14.0833 27.3121C14.5043 27.6489 14.7547 28.1548 14.7671 28.6937V29.4193H25.2323L25.2325 28.6934Z"
            fill="#5048C7"
          />
          <motion.path
            d="M21.0462 8.83707V6.04651C21.0462 5.67252 20.8467 5.32704 20.5229 5.14016C20.1992 4.95328 19.8003 4.95328 19.4765 5.14016C19.1527 5.32704 18.9532 5.67253 18.9532 6.04651V8.83707C18.9532 9.21107 19.1527 9.55654 19.4765 9.74342C19.8003 9.9303 20.1993 9.9303 20.5229 9.74342C20.8467 9.55654 21.0462 9.21106 21.0462 8.83707Z"
            fill="#5048C7"
            animate={beamThreeControls}
          />
          <motion.path
            d="M30.6044 9.39549C30.4082 9.19903 30.1419 9.08855 29.8642 9.08855C29.5867 9.08855 29.3203 9.19904 29.1241 9.39549L27.1538 11.3671C26.8894 11.6315 26.7861 12.0169 26.8827 12.3783C26.9797 12.7395 27.2619 13.0217 27.6231 13.1186C27.9845 13.2153 28.3699 13.1121 28.6343 12.8476L30.6044 10.873C30.8 10.677 30.91 10.4112 30.91 10.1343C30.91 9.85728 30.8 9.59145 30.6044 9.39549Z"
            fill="#5048C7"
            animate={beamFourControls}
          />
          <motion.path
            d="M31.1628 21.0466H33.9536C34.3276 21.0466 34.6728 20.8471 34.8597 20.5233C35.0466 20.1996 35.0466 19.8006 34.8597 19.4768C34.6728 19.153 34.3274 18.9535 33.9534 18.9535H31.1628C30.7888 18.9535 30.4434 19.153 30.2565 19.4768C30.0695 19.8006 30.0695 20.1996 30.2565 20.5233C30.4434 20.8471 30.7888 21.0466 31.1628 21.0466Z"
            fill="#5048C7"
            animate={beamFiveControls}
          />
          <motion.path
            d="M12.1064 13.1528C12.3839 13.1528 12.6502 13.0428 12.8464 12.8466C13.0429 12.6506 13.1531 12.3843 13.1533 12.1068C13.1536 11.8293 13.0433 11.5632 12.8473 11.3667L10.8727 9.39514C10.6045 9.15523 10.2314 9.06997 9.88573 9.16972C9.53976 9.26923 9.26924 9.53974 9.16973 9.88571C9.06998 10.2314 9.15525 10.6045 9.39515 10.8727L11.3667 12.8473C11.5627 13.0435 11.8291 13.1533 12.1064 13.1528Z"
            fill="#5048C7"
            animate={beamTwoControls}
          />
          <motion.path
            d="M6.04651 21.0466H8.83707C9.21107 21.0466 9.55654 20.8471 9.74342 20.5233C9.9303 20.1996 9.9303 19.8006 9.74342 19.4768C9.55654 19.153 9.21106 18.9535 8.83707 18.9535H6.04651C5.67252 18.9535 5.32704 19.153 5.14016 19.4768C4.95328 19.8006 4.95328 20.1996 5.14016 20.5233C5.32704 20.8471 5.67253 21.0466 6.04651 21.0466Z"
            fill="#5048C7"
            animate={beamOneControls}
          />
        </svg>
      </MotionConfig>
    </div>
  )
}

export default IconSimpleAnimated
