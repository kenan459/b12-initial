// Components
import Accordion, { FAQItemType } from '../../components/accordion/Accordion'
import SectionNextHeader from '../../components/section-next/SectionNextHeader'
import Title from '../../components/title/Title'

// Data
import SectionNext from '../../components/section-next/SectionNext'

type GeneratorFAQProps = { topic: string; data: FAQItemType[] }

const GeneratorFAQ = (props: GeneratorFAQProps) => {
  const { topic, data } = props
  return (
    <SectionNext container={{ maxWidth: '932px' }}>
      <SectionNextHeader align="center">
        <Title as="h3">Frequently asked questions about {topic}</Title>
      </SectionNextHeader>

      <Accordion items={data} />
    </SectionNext>
  )
}

export default GeneratorFAQ
