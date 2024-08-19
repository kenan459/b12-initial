import styled from '@emotion/styled'
import { theme, mq } from '@styles/theme'
import { motion } from 'framer-motion'

export const SectionStyled = styled.section`
  overflow: hidden;
  max-height: 300px;
  position: relative;
  background-color: ${theme.colors.brand.accentLightest};

  ${mq['md']} {
    max-height: 600px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(246, 245, 254, 0.4);
    z-index: 1;
  }
`

export const ButtonWrapper = styled(motion.div)`
  position: absolute;
  top: calc(50% - 32px);
  left: calc(50% - 82px);
  z-index: 10;

  ${mq['md']} {
    top: calc(50% - 33px);
    left: calc(50% - 110px);
  }
`

export const ImagesWrapper = styled(motion.div)`
  display: flex;
  margin-top: -150px;

  flex-direction: column;
  gap: 20px;
  width: 100%;

  overflow: hidden;
  justify-content: flex-end;

  ${mq['md']} {
    margin-top: -250px;
    gap: 36px;
  }

  ${mq['lg']} {
    margin-top: -450px;
  }

  .gatsby-image-wrapper {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }
`

export const ImageRowWrapper = styled(motion.div)`
  display: flex;
  gap: 14px;
  justify-content: center;
  transform: rotate(-15deg);

  ${mq['md']} {
    gap: 24px;
  }
`

export const ImageWrapper = styled(motion.div)`
  flex-shrink: 0;
  max-width: 280px;

  ${mq['md']} {
    max-width: 500px;
  }

  ${mq['lg']} {
    max-width: 100%;
  }
`
