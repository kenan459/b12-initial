import styled from '@emotion/styled'
import { theme, mq } from '@styles/theme'
import { motion } from 'framer-motion'

import SectionNext from '@components/section-next/SectionNext'

export const SectionStyled = styled(SectionNext)`
  overflow: hidden;
  background-color: ${theme.colors.brand.accentDarker};

  ${mq['lg']} {
    padding: 128px 0;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 10;
  padding: 60px 0;
  gap: 30px;
  text-align: center;

  p {
    color: ${theme.colors.text.white};

    a {
      color: ${theme.colors.text.light};

      &:hover {
        color: ${theme.colors.text.white};
      }
    }
  }

  ${mq['md']} {
    padding: 0;
    width: 60%;
    text-align: left;
  }

  ${mq['lg']} {
    width: 50%;
  }
`

export const Actions = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;

  ${mq['md']} {
    flex-direction: row;
    flex-wrap: no-wrap;
    justify-content: flex-start;
    gap: 20px;
  }
`

export const Image = styled(motion.div)`
  position: absolute;
  width: 100%;
  bottom: -10%;
  right: 0;
  opacity: 0.2;

  ${mq['md']} {
    width: 45%;
    right: -10%;
    top: 0;
    bottom: 0;

    opacity: 1;
  }

  ${mq['lg']} {
    top: auto;
    width: 50%;
    right: -50px;
  }

  ${mq['xl']} {
    bottom: -30%;
  }
`

export const StyledSpan = styled.span`
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  font-size: 16px;
  line-height: 20px;
  padding: 5px;
  color: #a19ead;
`
