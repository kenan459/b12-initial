import { forwardRef } from 'react'
import styled from '@emotion/styled'
import { theme, mq } from '../../assets/theme'

import Container from '../container/Container'
import { Button } from '../button/Button'

// Types
type Props = {
  text?: string
  children?: React.ReactNode
  ctaText: string
  ctaUrl: string
  backgroundColor?: string
  onClose?: () => void
  className?: string
  secondaryCtaText?: string
  secondaryCtaUrl?: string
}

type Ref = HTMLDivElement

// Styles
const Wrapper = styled.div<{ backgroundColor: string }>`
  background-color: ${(props) => props.backgroundColor};
  padding: 10px;
  position: relative;
`

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 8px;

  a {
    font-size: inherit;
    line-height: inherit;
  }

  ${mq['xl']} {
    flex-direction: row;
    gap: 16px;
  }
`

const Text = styled.p`
  color: #110f33;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 0;
`
const CtaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
`

const StyledButton = styled(Button)`
  letter-spacing: normal;
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
  padding: 9px 19px;

  ${mq['md']} {
    font-size: 12px;
    padding: 9px 19px;
  }
`

const CloseButton = styled.button`
  border: 0;
  background: none;
  margin: 0;
  padding: 0;
  width: 40px;
  height: 100%;
  color: #110f33;
  font-size: 20px;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 100;
`

const AnnouncementBanner = forwardRef<Ref, Props>(
  (
    {
      text = '',
      ctaText = 'Learn more',
      ctaUrl = 'https://b12.io/signup/',
      backgroundColor = theme.colors.brand.accentDarkest,
      onClose,
      className = '',
      children,
      secondaryCtaText,
      secondaryCtaUrl,
    },
    ref
  ) => (
    <Wrapper className={className} backgroundColor={backgroundColor} ref={ref}>
      <StyledContainer>
        {text && <Text>{text}</Text>}
        {children}
        <CtaWrapper>
          {ctaText && ctaUrl && (
            <StyledButton label={ctaText} as="anchor" to={ctaUrl} variant="primary" />
          )}
          {secondaryCtaText && secondaryCtaUrl && (
            <a href={secondaryCtaUrl} target="_blank">
              {secondaryCtaText}
            </a>
          )}
        </CtaWrapper>
      </StyledContainer>
      <CloseButton onClick={onClose}>&times;</CloseButton>
    </Wrapper>
  )
)

export default AnnouncementBanner
