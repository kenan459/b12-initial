import styled from '@emotion/styled'
import { theme } from '@styles/theme'

import AccordionItem from './AccordionItem'

export type FAQItemType = {
  question: string
  answer: string | React.ReactNode
}

// Types
type TAccordionVariant = 'default' | 'with-background'
type Props = {
  items: FAQItemType[]
  itemAsComponent?: boolean
  variant?: TAccordionVariant
}

// Styles
const StyledAccordion = styled.div<{ variant?: TAccordionVariant }>`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;

  ${(props) =>
    props.variant === 'with-background' &&
    `
      background: ${theme.colors.surface.background};
      padding: 0 20px;

      > *:first-of-type {
        border-top: 0;
      }

      > *:last-of-type {
        border-bottom: 0;
      }
    `}
`

const Accordion = ({ items, itemAsComponent, variant = 'default' }: Props) => (
  <StyledAccordion variant={variant}>
    {items.map((item, idx) => (
      <AccordionItem
        key={`faq-item-${idx}`}
        idx={idx}
        itemAsComponent={itemAsComponent}
        question={item.question}
        answer={item.answer}
      />
    ))}
  </StyledAccordion>
)

export default Accordion
