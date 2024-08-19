import { renderComponentToHTMLString } from './helpers'
import { FAQItemType } from './accordion/Accordion'

const FaqSchemaTemplate = (items: FAQItemType[]) => {
  const schemaTemplate = {
    '@type': 'FAQPage',
    mainEntity: items.map((faqItem) => {
      const answerText = renderComponentToHTMLString(faqItem.answer)

      return {
        '@type': 'Question',
        name: faqItem.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: answerText,
        },
      }
    }),
  }

  return schemaTemplate
}

export default FaqSchemaTemplate
