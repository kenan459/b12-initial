import React from 'react'
import styled from '@emotion/styled'
import { mq } from '../../assets/theme'

import Title from '../title/Title'
import LinkWithIcon from '../link-with-icon/LinkWithIcon'

// Types
type Props = {
  image?: React.ReactNode
  title?: string
  text?: string | React.ReactNode
  linkText?: string
  linkUrl?: string
  reversed?: boolean
  small?: boolean
}

type WrapperProps = {
  reversed: boolean
}

// Styles
const mdGapSize = 40

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  gap: 24px;
  flex-direction: column;

  ${mq['md']} {
    gap: ${mdGapSize}px;
    flex-direction: ${(props) => (props.reversed ? 'row-reverse' : 'row')};
  }
`

const Image = styled.div<{ small?: boolean }>`
  flex-shrink: 0;
  width: 100%;
  position: relative;

  ${mq['md']} {
    width: calc(${(props) => (props.small ? '30%' : '50%')} - ${mdGapSize / 2}px);
  }
`

const Content = styled.div<{ small?: boolean }>`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 16px;

  ${mq['md']} {
    width: calc(${(props) => (props.small ? '65%' : '50%')} - ${mdGapSize / 2}px);
  }
`

const Text = styled.p`
  margin: 0;
`

const StyledLinkWithIcon = styled(LinkWithIcon)`
  margin-top: 10px;

  ${mq['md']} {
    font-size: 18px;
    line-height: 25px;
  }
`

const TextImage = ({
  image = null,
  title = '',
  text = '',
  linkUrl = '',
  linkText = '',
  reversed = false,
  small = false,
}: Props) => (
  <Wrapper reversed={reversed}>
    {image && <Image small={small}>{image}</Image>}
    <Content small={small}>
      {title && <Title as="h3">{title}</Title>}
      {text && React.isValidElement(text) && <>{text}</>}
      {text && typeof text === 'string' && <Text>{text}</Text>}
      {linkUrl && linkText && <StyledLinkWithIcon label={linkText} href={linkUrl} />}
    </Content>
  </Wrapper>
)

export default TextImage
