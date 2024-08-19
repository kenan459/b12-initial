import React from 'react'
import { motion } from 'framer-motion'
import styled from '@emotion/styled'

// Styles
const motionIcon = {
  initial: {
    opacity: 0,
    scale: 0,
  },

  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
}

const createMotionIcon = ({ customStyles, icon, transition }) => {
  const IconWrapper = styled(motion.div)`
    position: absolute;
    z-index: 10;
    ${customStyles};
  `

  return (
    <IconWrapper {...motionIcon} transition={transition}>
      {icon}
    </IconWrapper>
  )
}

export default createMotionIcon
