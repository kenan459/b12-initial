import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { motion, useAnimation } from 'framer-motion'
import { mq } from '@styles/theme'

const lineShapeInitial =
  'M133.952 344.431C65.357 337.938 32.696 274.634 6.95205 222.878C-9.73395 189.329 12.96 155.869 22.6 120.562C32.405 84.652 25.326 42.312 62.158 20.692C105.077 -4.50101 161.484 -2.09501 212.75 8.94499C284.247 24.342 374.802 35.562 396.502 92.693C418.771 151.319 353.633 204.16 304.716 251.063C258.126 295.734 205.782 351.23 133.952 344.431Z'

const lineShapeMorphed =
  'M131 326C62.4051 319.507 31.744 274.256 6 222.5C-10.686 188.951 19.86 149.807 29.5 114.5C39.305 78.59 31.668 44.12 68.5 22.5C111.419 -2.69295 149.576 -2.49405 200.842 8.54595C272.339 23.943 352.8 42.369 374.5 99.5C396.769 158.126 315.917 175.597 267 222.5C220.41 267.171 202.83 332.799 131 326Z'

// Styles
const StyledSVG = styled.svg`
  position: absolute;
  top: 0;
  right: -10px;

  ${mq['lg']} {
    top: -15px;
  }

  path {
    transition: d 0.4s ease;
  }
`

const StyledPath = styled(motion.path)`
  stroke: url(#paint0_linear_42_95);
`

const BubbleShape5Animated = () => {
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
        height="346"
        viewBox="0 0 402 346"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <StyledPath d={lineShapeInitial} animate={controls} />
        <linearGradient
          id="paint0_linear_42_95"
          x1="401"
          y1="0.999988"
          x2="1.00007"
          y2="0.999988"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D6D4FF" />
          <stop offset="1" stopColor="#F3E6FF" />
        </linearGradient>
      </StyledSVG>

      <svg
        width="446"
        height="384"
        viewBox="0 0 446 384"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.1"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M297.758 0.634997C374.242 7.883 410.659 78.548 439.363 136.322C457.969 173.772 432.665 211.123 421.916 250.535C410.983 290.621 418.877 337.884 377.808 362.019C329.954 390.141 267.061 387.455 209.898 375.131C130.179 357.943 29.211 345.419 5.015 281.646C-19.815 216.202 52.815 157.217 107.357 104.86C159.305 54.994 217.669 -6.954 297.758 0.634997Z"
          fill="#5048C7"
        />
      </svg>
    </>
  )
}

export default BubbleShape5Animated
