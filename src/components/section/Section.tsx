import Container from '../container/Container'
import { SectionScrollTo } from '.'

// Types
import { SectionProps } from './types'

// Styles
import { SectionWrapper } from './Section.styles'

const Section = ({
  gradient = false,
  gradientSvg,
  backgroundColor,
  borderBottom = false,
  scrollToNextSection = false,
  padding = 'default',
  className,
  children,
  id,
}: SectionProps) => (
  <SectionWrapper
    gradient={gradient}
    gradientSvg={gradientSvg}
    backgroundColor={backgroundColor}
    borderBottom={borderBottom}
    padding={padding}
    className={className}
    id={id}
  >
    <Container>{children}</Container>
    {scrollToNextSection && <SectionScrollTo />}
  </SectionWrapper>
)

export default Section
