import React from 'react'
import styled from '@emotion/styled'
import rehypeReact from 'rehype-react'
import { theme } from '@styles/theme'

// Types
type TFaqListVariant = 'default' | 'with-background'

interface FAQItem {
  question: string
  answer: string | { htmlAst: unknown }
}

type Props = {
  faqs: {
    title?: string
    description?: string
    items: FAQItem[]
  }
  variant?: TFaqListVariant
  markdownAnswer?: boolean
}

const Wrapper = styled.div<{ variant?: TFaqListVariant }>`
  border-radius: 6px;

  ${(props) =>
    props.variant === 'with-background' &&
    `
    background: ${theme.colors.brand.accentLightest};
    padding: ${theme.spacing.section.smallest};
    `}
`

const Title = styled.h2`
  margin-top: 0 !important;
`

const Description = styled.div`
  color: ${theme.colors.text.regular};
  margin-bottom: ${theme.spacing.section.smallest};
`

const FaqsWrapper = styled.ul`
  margin: 0;
  padding: 0 0 0 24px;
`

const FaqItem = styled.li<{ variant?: TFaqListVariant }>`
  color: ${theme.colors.text.regular};
  margin-bottom: ${theme.spacing.section.smallest};
  list-style-type: decimal;

  &::marker {
    color: ${(props) =>
      props.variant === 'with-background' ? theme.colors.brand.accent : theme.colors.text.dark};
    font-size: inherit !important;
    font-weight: bold;
  }
`

const Question = styled.div<{ variant?: TFaqListVariant }>`
  color: ${(props) =>
    props.variant === 'with-background' ? theme.colors.brand.accent : theme.colors.text.dark};
  font-weight: 700;
  margin-bottom: ${theme.spacing.xsmall};
`

const Answer = styled.div``

const FaqsList = ({ faqs, variant = 'with-background', markdownAnswer = false }: Props) => {
  const { title, description, items } = faqs

  const renderAst = new rehypeReact({
    createElement: React.createElement,
  }).Compiler

  return (
    <Wrapper variant={variant}>
      {title && <Title>{title}</Title>}
      {description && <Description>{description}</Description>}
      <FaqsWrapper>
        {items.map((item, idx: number) => {
          return (
            <FaqItem variant={variant} key={`item-${idx}`}>
              <Question variant={variant}>{item.question}</Question>
              {markdownAnswer && item.answer.htmlAst ? (
                renderAst(item.answer.htmlAst)
              ) : (
                <Answer>{item.answer}</Answer>
              )}
            </FaqItem>
          )
        })}
      </FaqsWrapper>
    </Wrapper>
  )
}

export default FaqsList
