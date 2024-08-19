import { motion } from 'framer-motion'
import styled from '@emotion/styled'
import { mq, theme } from '@styles/theme'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 28px;
  display: grid;

  ${mq['md']} {
    width: 40%;
    margin-top: 0;
  }
`

export const LaptopFrame = styled(motion.div)`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  position: relative;

  ${mq['md']} {
    width: 200%;
    max-width: none;
  }

  .laptop-frame-desktop {
    display: none !important;

    ${mq['md']} {
      display: block !important;
    }
  }

  .laptop-frame-mobile {
    ${mq['md']} {
      display: none !important;
    }
  }
`

export const Video = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -55%);
  width: 71%;
`

export const IconAiBox = styled(motion.div)`
  position: absolute;
  z-index: 10;
  width: 11%;
  right: 10%;
  top: -20px;

  ${mq['sm']} {
    top: -25px;
  }

  ${mq['md']} {
    left: 5%;
    top: 50%;
  }
`

export const IconAiCircle = styled(motion.svg)`
  fill: none;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
`

export const IconAiCirclePath = styled(motion.path)`
  stroke-width: 2;
  stroke: #695ff6;
`

export const IconLayoutBox = styled(motion.div)`
  position: absolute;
  z-index: 10;
  width: 7%;
  right: 7%;
  top: 10%;

  ${mq['sm']} {
    top: 11%;
  }

  ${mq['md']} {
    left: 13.5%;
    top: 67%;
  }
`

export const StyledIconAIBox = styled(IconAiBox)`
  width: 32px;
  height: 32px;

  ${mq['xs']} {
    width: 38px;
    height: 38px;
  }

  ${mq['sm']} {
    width: 44px;
    height: 44px;
  }

  ${mq['md']} {
    width: 65px;
    height: 65px;
  }

  ${mq['lg']} {
    width: 88px;
    height: 88px;
  }

  ${mq['xl']} {
    width: 106px;
    height: 106px;
  }
`

export const StyledIconLayoutBox = styled(IconLayoutBox)`
  width: 20px;
  height: 20px;

  ${mq['sm']} {
    width: 28px;
    height: 28px;
  }

  ${mq['md']} {
    width: 41px;
    height: 41px;
  }

  ${mq['lg']} {
    width: 55px;
    height: 55px;
  }

  ${mq['xl']} {
    width: 66px;
    height: 66px;
  }
`

export const IconLayoutCircle = styled(motion.svg)`
  fill: none;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
`

export const IconLayoutCirclePath = styled(motion.path)`
  stroke-width: 2;
  stroke: #695ff6;
`

export const IconAIWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 50%;
  border: 1px solid ${theme.colors.surface.border};
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 20px;
    height: 20px;
  }

  ${mq['sm']} {
    svg {
      width: 25px;
      height: 25px;
    }
  }

  ${mq['md']} {
    svg {
      width: 30px;
      height: 30px;
    }
  }

  ${mq['lg']} {
    svg {
      width: 40px;
      height: 40px;
    }
  }

  ${mq['xl']} {
    svg {
      width: 45px;
      height: 45px;
    }
  }
`

export const IconLayoutWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 50%;
  border: 1px solid ${theme.colors.surface.border};
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 8px;
    height: 8px;
  }

  ${mq['sm']} {
    svg {
      width: 12px;
      height: 12px;
    }
  }

  ${mq['md']} {
    svg {
      width: 11px;
      height: 11px;
    }
  }

  ${mq['lg']} {
    svg {
      width: 14px;
      height: 14px;
    }
  }

  ${mq['xl']} {
    svg {
      width: 17px;
      height: 17px;
    }
  }
`
