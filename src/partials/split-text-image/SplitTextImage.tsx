/** LEGACY */

import { Section, SectionTitle } from '../../components/section'

// Types
import { Props } from './types'

// Styles
import { Wrapper, Image, Content } from './SplitTextImage.styles'

const SplitTextImage = ({
  title = '',
  image = null,
  textStyle = 'h1',
  scrollToNextSection = false,
  gradientSvg,
  gradient = false,
  reverseOrder = false,
  reverseOrderMobile = false,
  tightPadding = false,
  children,
}: Props) => (
  <Section
    gradient={gradient}
    gradientSvg={gradientSvg}
    padding={tightPadding ? 'md' : 'default'}
    scrollToNextSection={scrollToNextSection}
  >
    <Wrapper reverseOrder={reverseOrder} reverseOrderMobile={reverseOrderMobile}>
      {image && <Image>{image}</Image>}
      <Content>
        {title && <SectionTitle textStyle={textStyle}>{title}</SectionTitle>}
        {children}
      </Content>
    </Wrapper>
  </Section>
)

export default SplitTextImage
