import React from 'react'
import styled from '@emotion/styled'
import { useTranslation, Trans } from 'react-i18next'

// Components
import Grid from '@components/grid/Grid'
import Title from '@components/title/Title'

// Helpers
import { wrapInParagraphTags } from '@components/helpers'

// Types
import { FAQItemType } from '@components/accordion/Accordion'

type Props = {
  items: FAQItemType[]
  itemAsComponent?: boolean
}

// Styles

const FaqItem = styled.div``

const Question = styled(Title)`
  font-weight: 600;
  margin-bottom: 16px;
`

const Answer = styled.div``

const FaqSimple = ({ items, itemAsComponent }: Props) => {
  const { t } = useTranslation()

  return (
    <Grid colsMd={2} colsXl={2} colsLg={2}>
      {items.map((item, idx) => (
        <FaqItem key={`item-${idx}`}>
          <Question as="h3" textStyle="h4">
            {t(item.question)}
          </Question>
          {itemAsComponent && React.isValidElement(item.answer) ? (
            <Trans t={t}>{item.answer}</Trans>
          ) : (
            <Answer
              dangerouslySetInnerHTML={{
                __html: wrapInParagraphTags(`${item.answer}`),
              }}
            />
          )}
        </FaqItem>
      ))}
    </Grid>
  )
}

export default FaqSimple
