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

const IconSecureAnimated = ({ delayValue }: Props) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  })

  const [isHovered, setIsHovered] = useState(false)
  const lockShackleControls = useAnimation()
  const lockBodyControls = useAnimation()

  const inViewAnimations: { [key: string]: any } = {
    lockShackle: {
      y: [0, -2, 7, 1, 0],
      opacity: [0, 1, 1, 1, 1],
      transition: {
        ...defaultTransitionConfig,
        delay: delayValue,
      },
    },
    lockBody: {
      y: [0, 0, 5, -3, 0],
      opacity: [0, 1, 1, 1, 1],
      transition: {
        ...defaultTransitionConfig,
        delay: delayValue,
      },
    },
  }

  const hoverAnimations: { [key: string]: any } = {
    lockShackle: {
      y: [0, -2, 7, 1, 0],
      transition: {
        ...defaultTransitionConfig,
        delay: 0,
      },
    },
    lockBody: {
      y: [0, 0, 5, -3, 0],
      transition: {
        ...defaultTransitionConfig,
        delay: 0,
      },
    },
  }

  useEffect(() => {
    if (inView) {
      lockShackleControls.start(inViewAnimations.lockShackle)
      lockBodyControls.start(inViewAnimations.lockBody)
    }
  }, [inView])

  useEffect(() => {
    if (isHovered) {
      lockShackleControls.start(hoverAnimations.lockShackle)
      lockBodyControls.start(hoverAnimations.lockBody)
    }
  }, [isHovered])

  const handleMouseEnter = () => {
    setIsHovered(true)

    setTimeout(() => {
      setIsHovered(false)
    }, 1000)
  }

  return (
    <div style={{ width: '24px', height: '24px' }} ref={ref} onMouseEnter={handleMouseEnter}>
      <MotionConfig transition={defaultTransitionConfig}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 33 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M23.8574 12.5H20.4288V9C20.4288 8.07174 20.0676 7.1815 19.4246 6.52513C18.7816 5.86875 17.9095 5.5 17.0002 5.5C16.0909 5.5 15.2188 5.86875 14.5758 6.52513C13.9329 7.1815 13.5716 8.07174 13.5716 9V12.5H10.1431V9C10.1431 7.14348 10.8655 5.36301 12.1515 4.05025C13.4374 2.7375 15.1816 2 17.0002 2C18.8188 2 20.563 2.7375 21.8489 4.05025C23.1349 5.36301 23.8574 7.14348 23.8574 9V12.5Z"
            fill="#5048C7"
            animate={lockShackleControls}
          />
          <motion.path
            d="M27.2857 14.25H6.71429C6.25963 14.25 5.82359 14.4344 5.5021 14.7626C5.18061 15.0908 5 15.5359 5 16V28.25C5 28.7141 5.18061 29.1592 5.5021 29.4874C5.82359 29.8156 6.25963 30 6.71429 30H27.2857C27.7404 30 28.1764 29.8156 28.4979 29.4874C28.8194 29.1592 29 28.7141 29 28.25V16C29 15.5359 28.8194 15.0908 28.4979 14.7626C28.1764 14.4344 27.7404 14.25 27.2857 14.25ZM17 24.75C16.3219 24.75 15.659 24.5447 15.0952 24.1601C14.5314 23.7756 14.0919 23.2289 13.8324 22.5894C13.5729 21.9499 13.505 21.2461 13.6373 20.5672C13.7696 19.8883 14.0961 19.2646 14.5756 18.7751C15.0551 18.2856 15.666 17.9523 16.3311 17.8173C16.9962 17.6822 17.6856 17.7515 18.3121 18.0164C18.9385 18.2813 19.474 18.7299 19.8508 19.3055C20.2275 19.8811 20.4286 20.5578 20.4286 21.25C20.4286 22.1783 20.0673 23.0685 19.4244 23.7249C18.7814 24.3813 17.9093 24.75 17 24.75Z"
            fill="#5048C7"
            animate={lockBodyControls}
          />
        </svg>
      </MotionConfig>
    </div>
  )
}

export default IconSecureAnimated
