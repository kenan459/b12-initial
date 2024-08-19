import styled from '@emotion/styled'
import { mq } from '@styles/theme'
import { motion } from 'framer-motion'

export const ToolsSliderSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  position: relative;
  overflow: hidden;
`

export const ImagesWrapper = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  overflow: hidden;
  justify-content: flex-end;

  .gatsby-image-wrapper {
    flex-shrink: 0;
    max-width: 300px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    ${mq['md']} {
      max-width: 100%;
    }
  }
`

export const ImageRowWrapper = styled(motion.div)`
  display: flex;
  gap: 30px;
  justify-content: center;

  &:nth-of-type(2) {
    margin-bottom: -100px;
  }
`
