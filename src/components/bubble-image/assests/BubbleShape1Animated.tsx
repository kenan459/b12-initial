import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { motion, useAnimation } from 'framer-motion'
import { mq } from '@styles/theme'

const lineShapeInitial =
  'M224.062 341.937C140.313 348.275 31.3678 357.817 5.33792 277.729C-20.7178 197.562 76.3065 145.933 144.191 96.1927C212.995 45.779 292.074 -32.8257 361.439 16.8093C431.448 66.9053 393.897 171.444 360.341 250.862C336.793 306.592 284.241 337.382 224.062 341.937Z'

const lineShapeMorphed =
  'M221 342.499C137.251 348.837 32.0299 353.586 6.00001 273.499C-20.0557 193.332 56.6155 183.24 124.5 133.5C193.304 83.0863 243.135 -37.1362 312.5 12.4987C382.509 62.5948 373.557 126.081 340 205.499C316.452 261.229 281.179 337.944 221 342.499Z'

// Styles
const StyledSVG = styled.svg`
  position: absolute;
  top: 0;
  right: 0;

  ${mq['lg']} {
    top: -15px;
  }

  path {
    transition: d 0.4s ease;
  }
`

const StyledPath = styled(motion.path)`
  fill-rule: evenodd;
  clip-rule: evenodd;
  stroke: url(#paint0_linear_38_63);
`

const BubbleShape1Animated = () => {
  const controls = useAnimation()

  useEffect(() => {
    const animateBubbleShape = async () => {
      await controls.start({
        d: lineShapeMorphed,
        transition: { duration: 1 },
      })
      await controls.start({
        d: lineShapeInitial,
        transition: { duration: 1.5 },
      })
      animateBubbleShape()
    }

    animateBubbleShape()
  }, [controls])

  return (
    <>
      <StyledSVG
        width="402"
        height="347"
        viewBox="0 0 402 347"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <StyledPath d={lineShapeInitial} animate={controls} />
        <defs>
          <linearGradient
            id="paint0_linear_38_63"
            x1="401"
            y1="1.00008"
            x2="1"
            y2="1.00004"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D6D4FF" />
            <stop offset="1" stopColor="#F3E6FF" />
          </linearGradient>
        </defs>
      </StyledSVG>

      <svg
        width="474"
        height="409"
        viewBox="0 0 474 409"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.1"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M209.671 4.81692C308.914 -2.69722 438.014 -14.0088 468.86 80.9355C499.736 175.974 384.762 237.181 304.319 296.148C222.786 355.914 129.077 449.101 46.8797 390.258C-36.0811 330.869 8.4168 206.938 48.1814 112.787C76.0856 46.7183 138.359 10.2163 209.671 4.81692Z"
          fill="#5048C7"
        />
      </svg>
    </>
  )
}

export default BubbleShape1Animated
