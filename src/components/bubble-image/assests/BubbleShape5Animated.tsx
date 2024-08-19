import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { motion, useAnimation } from 'framer-motion'

const lineShapeInitial =
  'M300.804 133.717C314.359 178.789 348.613 228.713 322.372 267.806C295.649 307.615 235.545 308.719 188.069 301.661C146.626 295.499 119.807 260.941 88.582 233.046C54.198 202.327 -2.51002 179.71 0.0859826 133.717C2.68198 87.7339 61.506 71.5369 99.198 44.9869C127.246 25.2309 153.924 -2.20406 188.069 1.30694C220.525 4.64294 239.214 36.7349 260.346 61.5549C278.936 83.3889 292.55 106.271 300.804 133.717Z'

const lineShapeMorphed =
  'M258 143.5C271.555 188.572 340.613 213.713 314.372 252.806C287.649 292.615 227.545 282.558 180.069 275.5C138.626 269.338 117.725 227.395 86.4999 199.5C52.1159 168.781 -1.59599 166.493 1.00001 120.5C3.59601 74.517 61.3079 86.55 98.9999 60C127.048 40.244 164.855 -2.51095 199 1.00005C231.456 4.33605 228.868 10.68 250 35.5C268.59 57.334 249.746 116.054 258 143.5Z'

// Styles
const StyledSVG = styled.svg`
  position: absolute;
  top: 0;

  path {
    transition: d 0.4s ease;
  }
`

const StyledPath = styled(motion.path)`
  stroke: url(#paint0_linear_24_1344);
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
        width="333"
        height="308"
        viewBox="0 0 333 308"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <StyledPath d={lineShapeInitial} animate={controls} />
        <defs>
          <linearGradient
            id="paint0_linear_24_1344"
            x1="-1.33514e-05"
            y1="0.999944"
            x2="-1.33514e-05"
            y2="305"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D6D4FF" />
            <stop offset="1" stopColor="#F3E6FF" />
          </linearGradient>
        </defs>
      </StyledSVG>

      <svg
        width="383"
        height="418"
        viewBox="0 0 383 418"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.1"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M167.241 39.777C223.943 22.752 286.749 -20.272 335.928 12.688C386.009 46.252 387.399 121.745 378.519 181.375C370.767 233.429 327.293 267.115 292.199 306.333C253.555 349.52 225.102 420.748 167.241 417.487C109.393 414.226 89.018 340.343 55.617 292.999C30.763 257.771 -3.75199 224.262 0.665009 181.375C4.86201 140.61 45.235 117.136 76.459 90.594C103.927 67.244 132.713 50.144 167.241 39.777Z"
          fill="#695FF6"
        />
      </svg>
    </>
  )
}

export default BubbleShape5Animated
