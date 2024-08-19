import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { motion, useAnimation } from 'framer-motion'
import { mq } from '@styles/theme'

const lineShapeInitial =
  'M269.92 848.84C340.579 888.402 769.924 770.593 806.809 805.965C843.695 841.337 961.977 661.103 943.433 538.477C926.973 429.63 1033.84 280.879 990.635 182.393C943.952 75.9653 823.234 1.18469 701.829 1.00022C582.136 0.818367 488.393 111.165 376.861 169.142C263.899 227.863 116.135 252.979 44.5268 359.005C-27.1536 465.138 2.40919 603.513 42.6985 713.025C77.2516 806.945 183.342 800.365 269.92 848.84Z'

const lineShapeMorphed =
  'M322.181 789.5C393.239 829.285 776.088 716.929 813.182 752.5C850.275 788.071 950.83 618.318 932.182 495C915.628 385.539 1013.42 248.042 969.981 149C923.035 41.9722 882.272 1.18551 760.182 0.999991C639.814 0.817091 552.661 123.196 440.5 181.5C326.9 240.552 134.513 171.876 62.5 278.5C-9.58487 385.231 -14.0167 514.37 26.5 624.5C61.2481 718.95 235.115 740.751 322.181 789.5Z'

// Styles
const StyledSVG = styled.svg`
  position: absolute;
  width: 100%;
  height: auto;
  left: 0;
  bottom: -10%;

  ${mq['sm']} {
    bottom: -30%;
  }

  ${mq['md']} {
    left: auto;
    top: -20%;
    right: 45%;
    bottom: auto;
    transform: translateX(105%);
  }

  ${mq['lg']} {
    top: -50%;
    right: 50%;
  }

  path {
    transition: d 0.4s ease;
  }
`

const StyledPath = styled(motion.path)`
  opacity: 0.5;
  fill-rule: evenodd;
  clip-rule: evenodd;
  stroke: url(#paint0_linear_20_203);
`

const HeroShapeAnimated = () => {
  const controls = useAnimation()

  useEffect(() => {
    const animateHeroShape = async () => {
      await controls.start({
        d: lineShapeMorphed,
        transition: { duration: 2 },
      })
      await controls.start({
        d: lineShapeInitial,
        transition: { duration: 2 },
      })
      animateHeroShape()
    }

    animateHeroShape()
  }, [controls])

  return (
    <StyledSVG
      width="1002"
      height="858"
      viewBox="0 0 1002 858"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <StyledPath d={lineShapeInitial} animate={controls} />
      <defs>
        <linearGradient
          id="paint0_linear_20_203"
          x1="1176.05"
          y1="-89.3466"
          x2="1576.26"
          y2="643.259"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.4375" stopColor="#F6F5FE" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
      </defs>
    </StyledSVG>
  )
}

export default HeroShapeAnimated
