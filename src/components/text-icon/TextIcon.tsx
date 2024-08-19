import React from 'react'
import styled from '@emotion/styled'
import { mq } from '@styles/theme'
import { motion } from 'framer-motion'

import Title from '@components/title/Title'
import Icon from '@components/icon/Icon'
import { Button } from '@components/button/Button'
import { CardLink, CardTitleLink } from '../post-preview/PostPreview'

// Types
type Props = {
  icon?: React.ReactNode
  iconAsIs?: boolean
  iconInlineWithTitle?: boolean
  iconSize?: 'sm' | 'md' | 'lg' | 'xl'
  iconLight?: boolean
  title: string | React.ReactNode
  text: string | React.ReactNode
  iconMotion?: object
  animationSettings?: {
    hidden?: object
    show?: object
  }
  vertical?: boolean
  align?: 'flex-start' | 'center' | 'flex-end'
  url?: string
  externalUrl?: boolean
  ctaText?: string
  ctaAsButton?: boolean
}

// Styles
const Wrapper = styled(motion.div, {
  shouldForwardProp: (prop) => prop !== 'vertical' && prop !== 'align',
})<{
  vertical: boolean
  align: 'flex-start' | 'center' | 'flex-end'
}>`
  display: flex;
  gap: 16px;
  flex-direction: ${(props) => (props.vertical ? 'column' : 'row')};
  align-items: ${(props) => (props.align ? props.align : 'flex-start')};

  ${mq['md']} {
    gap: ${(props) => (props.vertical ? '20px' : '24px')};
  }
`

const Content = styled.div<{ iconInlineWithTitle?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 8px;

  ${(props) =>
    props.iconInlineWithTitle &&
    `
    ${Title} {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  `}
`

const Text = styled.p`
  margin: 0;

  ${mq['md']} {
    font-size: 16px;
    line-height: 25px;
  }
`

export const CardTitleExternalLink = styled.a`
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

// To support iconInlineWithTitle for when title is a React component
const TitleElemetWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const TextIcon = ({
  icon = null,
  iconAsIs = false,
  iconInlineWithTitle = false,
  align = 'flex-start',
  iconLight = false,
  title = '',
  text = '',
  animationSettings = {},
  iconMotion = {},
  vertical = false,
  iconSize = 'sm',
  url,
  externalUrl = false,
  ctaText,
  ctaAsButton = false,
}: Props) => (
  <Wrapper vertical={vertical} align={align} variants={animationSettings}>
    {!iconInlineWithTitle && icon && (
      <>
        {iconAsIs ? (
          icon
        ) : (
          <Icon size={iconSize} light={iconLight} iconMotion={iconMotion}>
            {icon}
          </Icon>
        )}
      </>
    )}
    <Content iconInlineWithTitle={iconInlineWithTitle}>
      {title && React.isValidElement(title) && (
        <>
          <TitleElemetWrapper>
            {iconInlineWithTitle && icon && (
              <Icon size={iconSize} light={iconLight} iconMotion={iconMotion}>
                {icon}
              </Icon>
            )}
            {url && externalUrl ? (
              <CardTitleExternalLink href={url} target="_blank">
                {title}
              </CardTitleExternalLink>
            ) : url ? (
              <CardTitleLink to={url}>{title}</CardTitleLink>
            ) : (
              title
            )}
          </TitleElemetWrapper>
        </>
      )}
      {title && typeof title == 'string' && (
        <Title as="h3" textStyle="h4">
          {iconInlineWithTitle && icon && (
            <Icon size={iconSize} light={iconLight} iconMotion={iconMotion}>
              {icon}
            </Icon>
          )}
          {url && externalUrl ? (
            <CardTitleExternalLink href={url} target="_blank">
              {title}
            </CardTitleExternalLink>
          ) : url ? (
            <CardTitleLink to={url}>{title}</CardTitleLink>
          ) : (
            title
          )}
        </Title>
      )}
      {text && React.isValidElement(text) && <>{text}</>}
      {text && typeof text === 'string' && <Text>{text}</Text>}
    </Content>
    {url && ctaText && (
      <>
        {ctaAsButton ? (
          <Button as="anchor" to={url} label={ctaText} size="small" />
        ) : (
          <CardLink to={url}>{ctaText}</CardLink>
        )}
      </>
    )}
  </Wrapper>
)

export default TextIcon
