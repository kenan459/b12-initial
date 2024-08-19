import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { motion, useAnimation } from 'framer-motion'
import { mq } from '@styles/theme'

const lineShapeInitial =
  'M223.439 371.311C164.379 384.481 100.594 361.204 59.2863 320.324C14.2182 275.722 -7.85328 214.215 4.30458 154.445C17.0586 91.7446 58.0568 32.0742 122.709 8.5278C183.533 -13.6241 246.824 17.5287 305.059 44.9101C360.685 71.0648 434.464 98.5257 435.982 155.825C437.447 211.158 351.359 223.173 310.868 264.226C276.549 299.02 273.155 360.226 223.439 371.311Z'

const lineShapeMorphed =
  'M198 370C138.94 383.169 78.3081 354.88 37.0001 314C-8.06796 269.398 -3.15775 215.523 9.00011 155.753C21.7541 93.0525 28.8476 30.0465 93.5 6.5C154.323 -15.6519 215.765 34.0474 274 61.4289C329.626 87.5836 414.983 94.7008 416.5 152C417.966 207.333 330.492 219.447 290 260.5C255.682 295.294 247.716 358.914 198 370Z'

// Styles
const StyledSVG = styled.svg`
  position: absolute;
  top: -15px;
  right: -40px;

  ${mq['md']} {
    top: -25px;
  }

  path {
    transition: d 0.4s ease;
  }
`
const StyledPath = styled(motion.path)`
  fill-rule: evenodd;
  clip-rule: evenodd;
  stroke: url(#paint0_linear_37_55);
`

const BubbleShape3Animated = () => {
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
        width="437"
        height="376"
        viewBox="0 0 437 376"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <StyledPath d={lineShapeInitial} animate={controls} />
        <defs>
          <linearGradient
            id="paint0_linear_37_55"
            x1="436"
            y1="1.00008"
            x2="1"
            y2="1.00005"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D6D4FF" />
            <stop offset="1" stopColor="#F3E6FF" />
          </linearGradient>
        </defs>
      </StyledSVG>

      <svg
        width="432"
        height="372"
        viewBox="0 0 432 372"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.1"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M211.094 3.66883C269.747 -9.43006 333.092 13.7218 374.115 54.3836C418.872 98.7467 440.791 159.925 428.717 219.375C416.051 281.741 375.336 341.092 311.129 364.512C250.725 386.546 187.871 355.56 130.037 328.325C74.7947 302.31 1.52469 274.996 0.0176161 218.003C-1.43776 162.966 84.0561 151.015 124.269 110.181C158.35 75.5738 161.721 14.6952 211.094 3.66883Z"
          fill="#5048C7"
        />
      </svg>
    </>
  )
}

export default BubbleShape3Animated
