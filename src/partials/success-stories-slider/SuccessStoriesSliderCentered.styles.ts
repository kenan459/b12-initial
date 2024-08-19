import styled from '@emotion/styled'
import { mq, theme } from '@styles/theme'
import { motion } from 'framer-motion'
import Title from '@components/title/Title'

export const StyledTitle = styled(Title)<{ light?: boolean }>`
  margin-bottom: 24px;
  z-index: 20;
  color: ${(props) => (props.light ? theme.colors.text.dark : theme.colors.text.white)};

  ${mq['md']} {
    margin-bottom: 40px;
  }
`

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr 40px;
  align-items: center;
  justify-content: center;
  z-index: 20;
  padding: 0 12px;
`

export const SlideContentQuote = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 0 24px;
  opacity: 0;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
`

export const SlideContent = styled.div`
  padding: 48px 32px;
  transition: ${theme.transition[1]};

  ${mq['md']} {
    padding: 64px;
  }
`

export const SlideContentQuoteText = styled.p<{ light?: boolean }>`
  color: ${(props) => (props.light ? theme.colors.text.dark : theme.colors.text.white)};
  margin: 0;
  text-align: center;
`

export const SlideContentAuthor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  .slide-author-avatar {
    border-radius: 50%;
    background-color: ${theme.colors.text.white};
  }

  ${mq['md']} {
    flex-direction: row;
  }
`

export const SlideContentAuthorDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;

  ${mq['md']} {
    justify-content: flex-start;
  }
`

export const SlideContentAuthorName = styled.p<{ light?: boolean }>`
  font-weight: 600;
  margin: 8px 0 0;
  color: ${(props) => (props.light ? theme.colors.text.dark : theme.colors.text.white)};
  text-align: center;

  ${mq['sm']} {
    font-size: 16px;
    line-height: 16px;
    text-align: left;
    margin: 0;
  }

  ${mq['xl']} {
    margin-right: 20px;
  }
`
export const SlideContentAuthorPosition = styled.p<{ light?: boolean }>`
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: ${(props) => (props.light ? theme.colors.text.dark : theme.colors.text.white)};

  margin: 0;

  ${mq['md']} {
    text-align: left;
  }
`

export const StyledSlidesButton = styled.button<{ direction: 'next' | 'prev'; light?: boolean }>`
  all: unset;
  transition: all 0.15s ease-in;
  cursor: pointer;

  ${mq['md']} {
    align-self: flex-start;
    margin-top: 12px;
  }

  &:hover {
    transform: translateX(${({ direction }) => (direction === 'next' ? '8px' : '-8px')});
  }

  svg {
    path {
      ${(props) => !props.light && `stroke: ${theme.colors.text.white};`}
    }
  }
`
