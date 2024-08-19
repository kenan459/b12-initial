import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { motion, useAnimation } from 'framer-motion'
import { mq } from '@styles/theme'

const StyledSVG = styled(motion.svg)`
  position: absolute;
  width: 100%;
  height: auto;
  bottom: 20px;
  right: 3%;

  ${mq['sm']} {
    bottom: -10%;
  }

  ${mq['md']} {
    top: 0;
    transform: translateX(100%);
    bottom: auto;
    right: -50%;
  }

  ${mq['lg']} {
    top: -20%;
  }
`

const HeroShapeAnimated = () => {
  const svgAnimation = useAnimation()

  useEffect(() => {
    svgAnimation.start('show')
  }, [svgAnimation])

  return (
    <StyledSVG
      initial="hidden"
      whileInView="show"
      variants={{
        hidden: { y: 30 },
        show: {
          y: [0, 20, 0],
          transition: {
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 3,
            type: 'spring',
          },
        },
      }}
      width="1275"
      height="711"
      viewBox="0 0 1275 711"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.16"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1238.58 584.702C1212 665.623 1153.86 735.128 1078.97 792.491C1014.87 841.58 858.761 697.729 789.288 741.684C624.323 846.056 473.256 831.803 355.002 679.669C274.699 556.138 63.3276 681.404 19.5903 573.442C-27.6737 456.774 13.0697 309.378 115.041 218.898C215.574 129.694 384.147 144.886 525.103 106.527C667.867 67.676 812.582 -22.9408 959.022 5.39618C1105.61 33.7616 1193.25 162.285 1248.4 276.569C1295.7 374.582 1271.99 482.962 1238.58 584.702Z"
        fill="url(#paint0_linear_397_4861)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_397_4861"
          x1="488.292"
          y1="-8.00205"
          x2="488.292"
          y2="827.205"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.53125" stopColor="#F7F5FF" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </StyledSVG>
  )
}

export default HeroShapeAnimated
