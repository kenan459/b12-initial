import ArrowDown from '@images/icon-arrow-down.inline.svg'

import { ScrollToButton } from './SectionScrollTo.styles'

const SectionScrollTo = () => {
  const scrollToNextSection = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement
    const nextParentSibling = target.parentElement?.nextElementSibling

    if (nextParentSibling) {
      nextParentSibling.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <ScrollToButton onClick={(e) => scrollToNextSection(e)} aria-label="Scroll to next section">
      <ArrowDown width="18" height="10" />
    </ScrollToButton>
  )
}

export default SectionScrollTo
