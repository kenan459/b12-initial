import navigationData from '../../data/navigation.yaml'

// Types
import { LegalLinkType } from './types'

// Styles
import { WrapperSimple, Logo, CopySimple, Legal, LegalLink } from './FooterCopyright.styles'

const FooterSimple = () => {
  const { legal } = navigationData

  return (
    <WrapperSimple>
      <Logo />
      <CopySimple>
        <Legal>
          {legal.map((item: LegalLinkType, index: number) => (
            <LegalLink
              href={item.slug}
              target="_blank"
              aria-label={item['aria-label']}
              key={`${item.label}-${index}`}
            >
              {item.label}
            </LegalLink>
          ))}
        </Legal>
      </CopySimple>
    </WrapperSimple>
  )
}

export default FooterSimple
