import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { motion, useAnimation } from 'framer-motion'
import { mq } from '@styles/theme'

const lineShapeInitial =
  'M123.213 28.3819C169.971 13.812 217.591 -11.8745 261.344 8.30494C313.969 32.5756 366.306 80.9245 359.778 137.487C353.535 191.581 278.23 201.491 234.955 236.959C192.672 271.613 170.242 343.561 115.838 337.416C61.0042 331.223 47.285 262.573 26.4622 213.41C8.98219 172.139 -11.4599 127.121 9.66094 86.7291C30.0007 47.8307 80.3929 41.7244 123.213 28.3819Z'

const lineShapeMorphed =
  'M145.47 34.5C192.228 19.9302 225.716 -12.6795 269.47 7.49993C322.094 31.7706 340.498 73.4372 333.97 130C327.726 184.094 248.775 174.033 205.5 209.5C163.217 244.154 166.873 326.645 112.469 320.5C57.6353 314.307 59.2923 249.663 38.4696 200.5C20.9895 159.229 -13.6514 113.892 7.46951 73.5C27.8093 34.6016 102.65 47.8426 145.47 34.5Z'

// Styled
const StyledSVG = styled.svg`
  position: absolute;
  top: 0;
  right: -10px;
  width: 80%;

  ${mq['sm']} {
    top: -20px;
  }

  ${mq['md']} {
    right: -10px;
  }
  ${mq['lg']} {
    top: -25px;
    right: -20px;
  }

  path {
    transition: d 0.4s ease;
  }
`

const StyledPath = styled(motion.path)`
  fill-rule: evenodd;
  clip-rule: evenodd;
  stroke: url(#paint0_linear_33_43);
`

const BubbleShape2Animated = () => {
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
      <StyledSVG width="361" height="339" viewBox="0 0 361 339" fill="none">
        <StyledPath d={lineShapeInitial} animate={controls} />
        <defs>
          <linearGradient
            id="paint0_linear_33_43"
            x1="0.671021"
            y1="337.786"
            x2="360.331"
            y2="337.786"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D6D4FF" />
            <stop offset="1" stopColor="#F3E6FF" />
          </linearGradient>
        </defs>
      </StyledSVG>

      <svg
        width="460"
        height="396"
        viewBox="0 0 460 396"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.1"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M268.425 390.591C204.715 393.154 136.176 409.387 87.9539 369.324C29.9548 321.137 -19.57 242.81 7.69849 173.976C33.7767 108.146 131.815 121.04 198.186 91.062C263.036 61.771 315.486 -21.0327 381.83 4.98991C448.699 31.2185 442.82 122.044 452.44 190.789C460.515 248.498 471.053 311.91 430.882 355.528C392.197 397.532 326.769 388.244 268.425 390.591Z"
          fill="#5048C7"
        />
      </svg>
    </>
  )
}

export default BubbleShape2Animated
