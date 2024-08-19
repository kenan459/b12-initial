import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, MotionConfig, Transition, useAnimation } from 'framer-motion'

type Props = {
  delayValue?: number
}

const defaultTransitionConfig: Transition = {
  duration: 1,
  ease: 'easeInOut',
}

const IconPeopleAnimated = ({ delayValue = 0 }: Props) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  })

  const [isHovered, setIsHovered] = useState(false)
  const userOneControls = useAnimation()
  const userTwoControls = useAnimation()

  const inViewAnimations: { [key: string]: any } = {
    userOne: {
      y: [0, 0, -3, 0, 0],
      opacity: [0, 1, 1, 1, 1],
      transition: {
        ...defaultTransitionConfig,
        delay: delayValue,
      },
    },
    userTwo: {
      y: [0, 0, 0, -3, 0],
      opacity: [0, 1, 1, 1, 1],
      transition: {
        ...defaultTransitionConfig,
        delay: delayValue,
      },
    },
  }

  const hoverAnimations: { [key: string]: any } = {
    userOne: {
      y: [0, -3, 0, 0],
      transition: {
        ...defaultTransitionConfig,
        delay: 0,
      },
    },
    userTwo: {
      y: [0, 0, -3, 0],
      transition: {
        ...defaultTransitionConfig,
        delay: 0,
      },
    },
  }

  useEffect(() => {
    if (inView) {
      userOneControls.start(inViewAnimations.userOne)
      userTwoControls.start(inViewAnimations.userTwo)
    }
  }, [inView])

  useEffect(() => {
    if (isHovered) {
      userOneControls.start(hoverAnimations.userOne)
      userTwoControls.start(hoverAnimations.userTwo)
    }
  }, [isHovered])

  const handleMouseEnter = () => {
    setIsHovered(true)

    setTimeout(() => {
      setIsHovered(false)
    }, 1000)
  }

  return (
    <div style={{ width: '21px', height: '20px' }} ref={ref} onMouseEnter={handleMouseEnter}>
      <MotionConfig transition={defaultTransitionConfig}>
        <motion.svg
          width="21"
          height="20"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1115_330)">
            <motion.path
              d="M14 18.0544C14 17.1479 13.6025 16.2854 12.8938 15.7229C11.8072 14.8622 9.92656 13.8 7.25 13.8C4.5725 13.8 2.69187 14.8622 1.60625 15.7229C0.8975 16.2854 0.5 17.1479 0.5 18.0544V19.8H14V18.0544Z"
              fill="#5048C7"
              animate={userOneControls}
            />
            <motion.path
              d="M7.25 12.3C9.32107 12.3 11 10.6211 11 8.55005C11 6.47898 9.32107 4.80005 7.25 4.80005C5.17893 4.80005 3.5 6.47898 3.5 8.55005C3.5 10.6211 5.17893 12.3 7.25 12.3Z"
              fill="#5048C7"
              animate={userOneControls}
            />
            <motion.path
              d="M17.75 12.3C19.8211 12.3 21.5 10.6211 21.5 8.55005C21.5 6.47898 19.8211 4.80005 17.75 4.80005C15.6789 4.80005 14 6.47898 14 8.55005C14 10.6211 15.6789 12.3 17.75 12.3Z"
              fill="#5048C7"
              animate={userTwoControls}
            />
            <motion.path
              d="M23.394 15.7229C22.3075 14.8622 20.4269 13.8 17.7503 13.8C16.9084 13.8 16.1565 13.9125 15.4722 14.0832C16.4552 15.1723 16.9997 16.5872 17.0003 18.0544V19.8H24.5003V18.0544C24.5003 17.1479 24.1028 16.2854 23.394 15.7229Z"
              fill="#5048C7"
              animate={userTwoControls}
            />
          </g>
          <defs>
            <clipPath id="clip0_1115_330">
              <rect width="24" height="24" fill="white" transform="translate(0.5)" />
            </clipPath>
          </defs>
        </motion.svg>
      </MotionConfig>
    </div>
  )
}

export default IconPeopleAnimated
